import { FC, useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { KeyboardArrowDown as KeyboardArrowDownIcon } from "@mui/icons-material";
import { ComingSoonTooltip } from "../sub-app-bar/coming-soon-tooltip";

export const Links: FC = () => {
  const [accountMenuElement, setAccountMenuElement] = useState<
    undefined | HTMLElement
  >();
  const openAccountMenu = Boolean(accountMenuElement);
  // const handleAccountMenuClick = (
  //   event: MouseEvent<HTMLButtonElement>
  // ) => {
  //   setAccountMenuElement(event.currentTarget);
  // };
  const handleAccountMenuClose = () => {
    setAccountMenuElement(undefined);
  };

  const [billingMenuElement, setBillingMenuElement] = useState<
    undefined | HTMLElement
  >();
  const openBillingMenu = Boolean(billingMenuElement);
  // const handleBillingMenuClick = (
  //   event: MouseEvent<HTMLButtonElement>
  // ) => {
  //   setBillingMenuElement(event.currentTarget);
  // };
  const handleBillingMenuClose = () => {
    setBillingMenuElement(undefined);
  };
  // aboveSmallBreakpoint &&
  return (
    <>
      <ComingSoonTooltip>
        <Button
          color="inherit"
          // onClick={handleAccountMenuClick}
          sx={{ cursor: "default" }}
          disableRipple
        >
          Account <KeyboardArrowDownIcon fontSize="small" />
        </Button>
      </ComingSoonTooltip>
      <Menu
        anchorEl={accountMenuElement}
        open={openAccountMenu}
        onClose={handleAccountMenuClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleAccountMenuClose}>Option 1</MenuItem>
        <MenuItem onClick={handleAccountMenuClose}>Option 2</MenuItem>
        <MenuItem onClick={handleAccountMenuClose}>Option 3</MenuItem>
      </Menu>
      <ComingSoonTooltip>
        <Button
          color="inherit"
          // onClick={handleBillingMenuClick}
          sx={{ cursor: "default" }}
          disableRipple
        >
          Billing <KeyboardArrowDownIcon fontSize="small" />
        </Button>
      </ComingSoonTooltip>
      <Menu
        anchorEl={billingMenuElement}
        open={openBillingMenu}
        onClose={handleBillingMenuClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleBillingMenuClose}>Option 1</MenuItem>
        <MenuItem onClick={handleBillingMenuClose}>Option 2</MenuItem>
        <MenuItem onClick={handleBillingMenuClose}>Option 3</MenuItem>
      </Menu>
    </>
  );
  // : null;
};
