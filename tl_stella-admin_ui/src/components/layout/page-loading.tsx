import { FC } from "react";
import { Box, CircularProgress } from "@mui/material";

export const PageLoading: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 500,
      }}
    >
      <CircularProgress size={60} color="secondary" />
    </Box>
  );
};
