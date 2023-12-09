import { FC, useState } from "react";
import { Card, List, ListItemButton, ListItemText } from "@mui/material";
import { ComingSoonTooltip } from "src/components/layout/sub-app-bar/coming-soon-tooltip";

export const ReportingSubNav: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <Card
      sx={{
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "secondary.light",
        borderBottomStyle: "solid",
      }}
      square
      raised={false}
      elevation={0}
    >
      <List
        component="nav"
        aria-label="secondary mailbox folder"
        sx={{ paddingTop: 0, paddingBottom: 0 }}
      >
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={() => handleListItemClick(0)}
        >
          <ListItemText primary="Service Booking Agent" />
        </ListItemButton>

        <ComingSoonTooltip>
          <div>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={() => handleListItemClick(1)}
              disabled
              sx={{ cursor: "default" }}
            >
              <ListItemText primary="Receptionist" />
            </ListItemButton>
          </div>
        </ComingSoonTooltip>
      </List>
    </Card>
  );
};
