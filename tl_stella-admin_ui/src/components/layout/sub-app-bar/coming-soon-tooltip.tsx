import { FC, ReactElement } from "react";
import { Tooltip } from "@mui/material";

interface Props {
  children: ReactElement;
  key?: string;
}

export const ComingSoonTooltip: FC<Props> = ({ children, key }) => {
  return (
    <Tooltip title="Coming Soon!" placement="top" key={key} arrow>
      {children}
    </Tooltip>
  );
};
