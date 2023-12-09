import { Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  required?: boolean;
}

export const RequiredAsterisk: FC<Props> = ({ required }) =>
  required === true ? (
    <Typography variant="caption" color="secondary" display="inline">
      {" *"}
    </Typography>
  ) : null;
