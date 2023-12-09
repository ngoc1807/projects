import { FC, MouseEvent, useState } from "react";
import {
  Avatar,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
  ListItemIcon,
  useTheme,
} from "@mui/material";
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { User } from "next-auth";

interface UserDropdownProps {
  user: User | undefined;
}

export const UserDropdown: FC<UserDropdownProps> = ({ user }) => {
  const theme = useTheme();
  const breakpointMediumAndUp = useMediaQuery(theme.breakpoints.up("md"));

  const [userMenuElement, setUserMenuElement] = useState<
    undefined | HTMLElement
  >();
  const openUserMenu = Boolean(userMenuElement);
  const handleUserMenuClick = (event: MouseEvent<HTMLElement>) => {
    setUserMenuElement(event.currentTarget);
  };
  const handleUserMenuClose = () => {
    setUserMenuElement(undefined);
  };

  const name = typeof user?.name === "string" ? user.name : undefined;
  const firstName =
    typeof user?.firstName === "string" ? user.firstName : undefined;
  const lastName =
    typeof user?.lastName === "string" ? user.lastName : undefined;

  const displayName =
    firstName && lastName ? `${firstName} ${lastName}` : name || "User";
  const initials =
    firstName && lastName
      ? `${firstName.charAt(0)}${lastName.charAt(0)}`
      : name?.charAt(0) ?? "U";

  return (
    <>
      <Button
        color="inherit"
        onClick={handleUserMenuClick}
        sx={{
          ml: 2,
          whiteSpace: "pre-wrap",
          textTransform: "none",
          letterSpacing: "normal",
          minWidth: 0,
        }}
      >
        <Avatar
          sx={{
            color: "white",
            backgroundColor: "primary.main",
            width: 30,
            height: 30,
            fontSize: 12,
            mr: 1,
          }}
        >
          {initials}
        </Avatar>
        {breakpointMediumAndUp ? `${displayName} ` : ` `}
        <KeyboardArrowDownIcon fontSize="small" />
      </Button>
      <Menu
        anchorEl={userMenuElement}
        open={openUserMenu}
        onClose={handleUserMenuClose}
        onClick={handleUserMenuClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem> */}
        <li>
          <MenuItem component="a" href="/logout">
            <ListItemIcon>
              <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </li>
      </Menu>
    </>
  );
};
