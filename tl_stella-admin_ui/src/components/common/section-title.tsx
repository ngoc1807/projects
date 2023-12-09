import {
  Divider,
  Typography,
  useTheme,
  Box,
  Theme,
  SxProps,
} from "@mui/material";

interface SectionTitleProps {
  title: string;
  sx?: SxProps<Theme>;
}

export const SectionTitle = ({ title, sx }: SectionTitleProps) => {
  const theme = useTheme();

  return (
    <Box sx={sx}>
      <Typography mb={theme.customVariables.rowSpacing} variant="h6">
        {title}
      </Typography>
      <Divider light sx={{ mb: theme.customVariables.sectionSpacing }} />
    </Box>
  );
};
