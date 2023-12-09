import { PageLoading } from "src/components/layout/page-loading";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import router from "next/router";
import { ReactElement } from "react";
import { connect } from "react-redux";

const Index = () => {
  if (typeof window !== "undefined") {
    router.push("/dashboard");
  }
  return <PageLoading />;
};

// every page should either have getServerSideProps setting the session or authenticationDisabled
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      session: await getSession(context),
    },
  };
};

// hide the layout since we are only redirecting
Index.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default connect((state) => state)(Index);
