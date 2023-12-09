import { Typography, useTheme } from "@mui/material";
import { Box } from "@mui/material";

export const Summary = (): JSX.Element => {
  const theme = useTheme();
  return (
    <>
      <Typography variant="h1" sx={{ marginBottom: 2 }}>
        Thank You!
      </Typography>
      <Box ml={1}>
        <Typography variant="h2" sx={{ marginBottom: 2 }}>
          What to expect next?
        </Typography>
        <Box
          component="ol"
          sx={{
            counterReset: "li",
            listStyle: "none",
            paddingInlineStart: 0,
            marginTop: 4,
            marginBottom: 6.5,

            "& li": {
              position: "relative",
              paddingLeft: "2.5rem",
              minHeight: "2.5rem",
            },
            "& li:before": {
              content: "counter(li)",
              counterIncrement: "li",
              color: theme.palette.primary.main,
              background: theme.palette.background.paper,
              borderRadius: "50%",
              fontSize: "1.125rem",
              fontWeight: theme.typography.fontWeightMedium,
              width: "1.5rem",
              height: "1.5rem",
              lineHeight: "1.5rem",
              textAlign: "center",
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
            },
          }}
        >
          <li>We will begin setting up STELLA</li>
          <li>We will set up integration with your service scheduler</li>
          <li>We will turn on STELLA for testing</li>
          <li>
            We will provide your dealership a phone number for STELLA to be
            added into your phone tree
          </li>
          <li>STELLA will begin setting appointments</li>
        </Box>
        <Typography>
          We will be in touch shortly! Please reach out if you have any
          questions.
        </Typography>
      </Box>
    </>
  );
};
