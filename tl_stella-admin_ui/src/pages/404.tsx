import { Grid } from "@mui/material";
import { ReactElement } from "react";
import { ErrorSplash } from "src/components/errors/error-splash";
import { Footer } from "src/components/layout/footer";
import { PageWrapper } from "src/components/layout/page-wrapper";

const Error404 = () => {
  const errorMessage = "404 Error: Page Not Found";
  // eslint-disable-next-line no-console
  console.error(errorMessage);
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item sx={{ mx: "auto", width: "100%", maxWidth: 1500 }}>
        <ErrorSplash errorMessage={errorMessage} />
      </Grid>
    </Grid>
  );
};

// every page should either have getServerSideProps setting the session or authenticationDisabled
Error404.authenticationDisabled = true;

// custom layout on error pages
Error404.getLayout = function getLayout(page: ReactElement) {
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

export default Error404;
