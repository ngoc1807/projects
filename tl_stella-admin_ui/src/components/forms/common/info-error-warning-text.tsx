import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";

export interface InfoErrorWarningTextProps {
  text: string | undefined;
}

export const InfoErrorWarningText: FC<InfoErrorWarningTextProps> = ({
  text,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        flexBasis: "100%",
        marginTop: 2,
        flexShrink: 0,
        minHeight: theme.typography.subtitle2.lineHeight,
      }}
    >
      <Typography
        sx={{
          fontFamily: theme.typography.subtitle2.fontFamily,
          fontWeight: theme.typography.subtitle2.fontWeight,
          fontSize: theme.typography.subtitle2.fontSize,
          lineHeight: theme.typography.subtitle2.lineHeight,
          textAlign: "right",
        }}
      >
        {text ?? " "}
      </Typography>
    </Box>
  );
};
