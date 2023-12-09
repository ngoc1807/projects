import LuxonAdapter from "@date-io/luxon";
import "@fontsource/oxanium/300.css";
import "@fontsource/oxanium/400.css";
import "@fontsource/oxanium/500.css";
import "@fontsource/oxanium/700.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import router from "next/router";
import { FC, ReactElement, useEffect, useState } from "react";
import { AppBar } from "src/components/layout/app-bar/app-bar";
import { Footer } from "src/components/layout/footer";
import { Head } from "src/components/layout/head";
import { PageLoading } from "src/components/layout/page-loading";
import { PageWrapper } from "src/components/layout/page-wrapper";
import { SubAppBar } from "src/components/layout/sub-app-bar/sub-app-bar";
import {
  isOnBoardingCompletedSelector,
  setOnboardingCompleted,
} from "src/features/onboarding/onboarding.slice";
import { SessionStorageKeys } from "src/services/platform";
import { useGetOnboardingStatusQuery } from "src/services/platform/config";
import { updateClient } from "src/services/platform/reporting";
import { useAppDispatch, useAppSelector, wrapper } from "src/store/store";
import { ProtectedAppProps } from "src/store/store.types";
import "src/styles/globals.css";
import { LicenseInfo } from "@mui/x-license-pro";
import { theme } from "src/styles/theme";
import { useGetAutomotiveOnboardingStatusQuery } from "src/services/platform/automotive-config";
import { selectedTenantSelector } from "src/features/organization/organization.slice";

LicenseInfo.setLicenseKey(process.env.MUI_LICENSE_KEY || "");

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: ProtectedAppProps) {
  const getLayout = Component.getLayout ?? MyApp.getLayout ?? ((page) => page);
  const componentWithLayout = getLayout(<Component {...pageProps} />);
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <LocalizationProvider dateAdapter={LuxonAdapter}>
          <CssBaseline />
          <Head />
          {Component.authenticationDisabled ? (
            componentWithLayout
          ) : (
            <Auth>{componentWithLayout}</Auth>
          )}
        </LocalizationProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}

const Auth: FC<{ children: ReactElement }> = ({ children }) => {
  const [initialized, setInitialized] = useState<boolean>(false);
  const { data: session, status } = useSession();
  const hasUser = !!session?.user;
  const selectedTenant = useAppSelector(selectedTenantSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (session && session.platformStackName && session.platformApiToken) {
      // set the stack name and api token
      sessionStorage.setItem(
        SessionStorageKeys.STACK_NAME,
        session.platformStackName
      );

      sessionStorage.setItem(
        SessionStorageKeys.API_TOKEN,
        session.platformApiToken
      );

      // update GraphQL client
      updateClient(session.platformApiToken);

      setInitialized(true);
    }
  }, [session]);

  // TODO: do this check in the backend for better user experience
  const {
    data: platformOnboardingCompleted,
    refetch: refetchPlatformOnboardingCompleted,
  } = useGetOnboardingStatusQuery(selectedTenant?.id || "", {
    skip: !selectedTenant || !initialized,
  });

  const {
    data: automotiveConfigCompleted,
    refetch: refetchAutomotiveConfigCompleted,
  } = useGetAutomotiveOnboardingStatusQuery(selectedTenant?.id || "", {
    skip: !selectedTenant || !initialized,
  });

  useEffect(() => {
    refetchPlatformOnboardingCompleted();
    refetchAutomotiveConfigCompleted();
  }, [
    selectedTenant,
    refetchAutomotiveConfigCompleted,
    refetchPlatformOnboardingCompleted,
  ]);

  const isOnBoardingCompleted = useAppSelector(isOnBoardingCompletedSelector);

  useEffect(() => {
    if (
      platformOnboardingCompleted === undefined ||
      automotiveConfigCompleted === undefined
    ) {
      return;
    }

    dispatch(
      setOnboardingCompleted(
        platformOnboardingCompleted === true &&
          automotiveConfigCompleted === true
          ? true
          : false
      )
    );
  }, [platformOnboardingCompleted, automotiveConfigCompleted, dispatch]);

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!hasUser) signIn("azure-ad-b2c"); // If not authenticated, force log in
  }, [status, hasUser]);

  if (
    typeof window !== "undefined" &&
    isOnBoardingCompleted === false &&
    router.pathname !== "/onboarding"
  ) {
    router.push("/onboarding");
    return <PageLoading />;
  }

  if (session?.user && status === "authenticated" && initialized) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <PageLoading />;
};

// this is the default page layout that all pages will use unless they have a custom layout via getLayout
MyApp.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <AppBar />
      <SubAppBar />
      <PageWrapper>{page}</PageWrapper>
      <Footer />
    </>
  );
};

export default wrapper.withRedux(MyApp);
