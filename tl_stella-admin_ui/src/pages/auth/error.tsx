import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { ErrorSplash } from "src/components/errors/error-splash";
import { ReactElement } from "react";
import { Footer } from "src/components/layout/footer";
import { PageWrapper } from "src/components/layout/page-wrapper";

const AuthError = () => {
  const { error = "error" } = useRouter().query;
  const errorMessage = `Authentication Error${error ? ` - ${error}` : ""}`;

  // eslint-disable-next-line no-console
  console.error(errorMessage);

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item sx={{ mx: "auto", width: "100%", maxWidth: 1500 }}>
        <ErrorSplash errorMessage={errorMessage} authError={true} />
      </Grid>
    </Grid>
  );
};

// every page should either have getServerSideProps setting the session or authenticationDisabled
AuthError.authenticationDisabled = true;

// custom layout on error pages
AuthError.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <PageWrapper
        backgroundImageUrl="/images/background-red.jpg"
        hasAppBar={false}
        hasSubAppBar={false}
      >
        {page}
      </PageWrapper>
      <Footer />
    </>
  );
};

export default AuthError;
