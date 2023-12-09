import { FC } from "react";
import { Typography, Divider, Box, SxProps, Theme } from "@mui/material";
import { CustomSkeleton } from "src/components/custom-skeleton/custom-skeleton";

interface Props {
  disableUnderline?: boolean;
  children: string | undefined;
  sx?: SxProps<Theme>;
}

export const MainHeading: FC<Props> = ({
  disableUnderline = false,
  children,
  sx,
}) => {
  // SKELETON: uncomment this to show skeleton load
  // children = undefined;

  return (
    <Box sx={sx}>
      {children !== undefined ? (
        <Typography
          variant="h5"
          component="h1"
          sx={{
            display: "inline",
          }}
        >
          {children}
        </Typography>
      ) : (
        <CustomSkeleton width={400} height={43} />
      )}
      {disableUnderline === false && <Divider sx={{ mt: 2, mb: 5 }} />}
    </Box>
  );
};
