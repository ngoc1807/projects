import { FC } from "react";
import { AppBar as MuiAppBar, Toolbar, Box, useTheme } from "@mui/material";
import { DealerInfoAndDropdown } from "./dealer-info-and-dropdown";
import { MainNav } from "./main-nav";

export const SubAppBar: FC<{ showMainNav?: boolean }> = ({
  showMainNav = true,
}) => {
  const theme = useTheme();
  return (
    <MuiAppBar
      position="relative"
      sx={{
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.dark,
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          flexDirection: "column",
          justifyContent: "flex-end",
          minHeight: 0,
          [theme.breakpoints.up("xs")]: {
            minHeight: 0,
          },
          [theme.breakpoints.up("sm")]: {
            minHeight: 0,
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            py: 2,
            minHeight: theme.customVariables.dealerInfoAndDropdownHeight,
          }}
        >
          <DealerInfoAndDropdown />
        </Box>

        {showMainNav && (
          <Box
            sx={{
              width: "100%",
              color: "palette.primary.dark",
              minHeight: theme.customVariables.mainNavHeight,
            }}
          >
            <MainNav />
          </Box>
        )}
      </Toolbar>
    </MuiAppBar>
  );
};
