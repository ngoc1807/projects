import { FC } from "react";
import { Skeleton, SxProps, Theme } from "@mui/material";

interface Props {
  isInTable?: boolean;
  sx?: SxProps<Theme>;
  [x: string]: unknown;
}

export const CustomSkeleton: FC<Props> = ({
  isInTable = false,
  sx,
  ...rest
}) => {
  return (
    <Skeleton
      variant="rectangular"
      sx={{
        marginLeft: isInTable ? "auto" : undefined,
        ...sx,
      }}
      {...rest}
    />
  );
};
