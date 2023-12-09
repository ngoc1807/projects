import {
  Dashboard as DashboardIcon,
  Timeline as TimelineIcon,
  Tune as TuneIcon,
} from "@mui/icons-material";
import { Link, Tab, Tabs, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { FC } from "react";

const pages = {
  dashboard: {
    label: "Dashboard",
    link: "/dashboard",
    icon: <DashboardIcon />,
  },
  reporting: {
    label: "Reporting",
    link: "/reporting",
    icon: <TimelineIcon />,
  },
  settings: {
    label: "Settings",
    link: "/settings",
    icon: <TuneIcon />,
  },
};

export const MainNav: FC = () => {
  const theme = useTheme();
  const router = useRouter();

  const currentPathname = () => {
    const pathnameWithoutSlash = router.pathname.replace(/^\//, "");
    if (pathnameWithoutSlash in pages) {
      return pages[pathnameWithoutSlash as keyof typeof pages].label;
    }
    return;
  };

  return (
    <Tabs
      value={currentPathname() ?? false}
      indicatorColor="secondary"
      textColor="inherit"
      sx={{
        minHeight: 0,
        [theme.breakpoints.up("sm")]: {
          minHeight: 0,
        },
      }}
    >
      {Object.keys(pages).map((key) => {
        const { link, label, icon } = pages[key as keyof typeof pages];
        return (
          <Tab
            sx={{
              pointerEvents: "auto",
              lineHeight: 1,
            }}
            key={key}
            icon={icon}
            label={label}
            value={label}
            component={Link}
            onClick={() => router.push(link)}
          />
        );
      })}
    </Tabs>
  );
};
