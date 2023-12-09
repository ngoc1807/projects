import { FC } from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Box,
  useMediaQuery,
  alpha,
  useTheme,
} from "@mui/material";
import { StellaIcon } from "src/components/icons/stella-icon";
import { UserDropdown } from "./user-dropdown";
import { useSession } from "next-auth/react";
import { CustomSkeleton } from "src/components/custom-skeleton/custom-skeleton";

export const AppBar: FC = () => {
  const theme = useTheme();
  const { data: session } = useSession();
  const user = session?.user ?? undefined;

  // SKELETON: uncomment this to show skeleton load
  // user = undefined;

  const breakpointMediumAndUp = useMediaQuery(theme.breakpoints.up("md"));

  return user ? (
    <MuiAppBar position="sticky" color="secondary" variant="elevation">
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            marginLeft: breakpointMediumAndUp ? "-13px" : "-14px",
          }}
        >
          <StellaIcon variant={breakpointMediumAndUp ? "long" : "short"} />
        </Box>
        {/* <Links /> */}
        <UserDropdown user={user} />
      </Toolbar>
    </MuiAppBar>
  ) : (
    <CustomSkeleton
      height={64}
      width="100%"
      sx={{ backgroundColor: alpha(theme.palette.primary.main, 0.35) }}
    />
  );
};
