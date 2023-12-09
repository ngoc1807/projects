import { signOut } from "next-auth/react";
import { PageLoading } from "src/components/layout/page-loading";
import { ReactElement } from "react";
import { reset } from "src/features/organization/organization.slice";
import { useAppDispatch } from "src/store/store";

export default function Logout() {
  const dispatch = useAppDispatch();

  if (typeof window !== "undefined") {
    signOut({ callbackUrl: process.env.APP_URL });

    dispatch(reset());
    sessionStorage.clear();
  }

  return <PageLoading />;
}

// every page should either have getServerSideProps setting the session or authenticationDisabled
Logout.authenticationDisabled = true;

// hide the layout since we are only redirecting
Logout.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
