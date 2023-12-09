import { Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import router from "next/router";
import { ReactElement, useCallback, useEffect, useState } from "react";
import { AppBar } from "src/components/layout/app-bar/app-bar";
import { Footer } from "src/components/layout/footer";
import { MainHeading } from "src/components/layout/main-heading";
import { PageLoading } from "src/components/layout/page-loading";
import { PageWrapper } from "src/components/layout/page-wrapper";
import { SubAppBar } from "src/components/layout/sub-app-bar/sub-app-bar";
import { OnBoardingFormContainer } from "src/components/onboarding/onboarding-form-container";
import { isOnBoardingCompletedSelector } from "src/features/onboarding/onboarding.slice";
import { selectedTenantSelector } from "src/features/organization/organization.slice";
import {
  platformConfigApi,
  useGetRootConfigSetsQuery,
} from "src/services/platform/config";
import { useAppDispatch, useAppSelector, wrapper } from "src/store/store";
import { setOnboardingInitialState } from "src/utils/config";
import {
  AUTOMOTIVE_CONFIG_SETS,
  ConfigSet,
} from "src/utils/config/config.types";

const OnboardingPage = () => {
  const selectedTenant = useAppSelector(selectedTenantSelector);
  const [onboardingConfigDataLoaded, setOnboardingConfigDataLoaded] =
    useState<boolean>(false);

  const isOnBoardingCompleted = useAppSelector(isOnBoardingCompletedSelector);

  const { data: rootConfigSets = [] } = useGetRootConfigSetsQuery();
  const dispatch = useAppDispatch();

  const getConfigSets = useCallback(
    async (tenantId: string): Promise<void> => {
      let configSets: ConfigSet[] = [];
      for (const [
        parentConfigSetName,
        configSetName,
      ] of AUTOMOTIVE_CONFIG_SETS) {
        const configResponse = await dispatch(
          platformConfigApi.endpoints.getConfigSetsForTenant.initiate({
            canonical_name: `automotive:${parentConfigSetName}:${configSetName}`,
            tenant_id: tenantId,
          })
        );

        if (configResponse.data) {
          configSets = [...configSets, ...configResponse.data];
        }
      }
      setOnboardingInitialState(configSets, dispatch);
      setOnboardingConfigDataLoaded(true);
    },
    [dispatch]
  );

  useEffect(() => {
    if (isOnBoardingCompleted) {
      router.push("/dashboard");
    }
  }, [isOnBoardingCompleted]);

  useEffect(() => {
    if (!selectedTenant) {
      return;
    }

    setOnboardingConfigDataLoaded(false);
    // setTimeout for 0 seconds so that it calls getConfigSets at the end of the current event loop
    setTimeout(() => {
      void getConfigSets(selectedTenant.id);
    }, 0);
  }, [selectedTenant, getConfigSets]);

  if (!onboardingConfigDataLoaded) {
    return <PageLoading />;
  }

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item sx={{ mx: "auto", width: "100%", maxWidth: 1500 }}>
        <MainHeading sx={{ marginBottom: 8 }} disableUnderline>
          STELLA Set Up Information
        </MainHeading>
        {onboardingConfigDataLoaded && (
          <OnBoardingFormContainer rootConfigSets={rootConfigSets} />
        )}
      </Grid>
    </Grid>
  );
};

// every page should either have getServerSideProps setting the session or authenticationDisabled
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => {
    return async (context) => {
      return {
        props: {
          session: await getSession(context),
        },
      };
    };
  });

OnboardingPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <AppBar />
      <SubAppBar showMainNav={false} />
      <PageWrapper
        backgroundImageUrl="/images/background-onboarding.png"
        hasSubAppBar={true}
        hasMainNav={false}
      >
        {page}
      </PageWrapper>
      <Footer />
    </>
  );
};

export default OnboardingPage;
