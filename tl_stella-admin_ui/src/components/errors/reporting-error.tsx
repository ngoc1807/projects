import { FC } from "react";
import { Typography, Box } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

export const ReportingError: FC = () => {
  return (
    <>
      <Box display="flex" alignItems="center">
        <ErrorIcon fontSize="large" sx={{ marginRight: 3 }} />
        <Box>
          <Typography variant="h6">
            There was an error loading the reporting numbers.
          </Typography>
          <Typography>
            Please refresh the page and try again. If the issue persists, please
            contact support.
          </Typography>
        </Box>
      </Box>
    </>
  );
};
