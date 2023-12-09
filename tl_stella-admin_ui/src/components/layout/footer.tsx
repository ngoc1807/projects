import { FC } from "react";
import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TelepathyIcon } from "src/components/icons/telepathy-icon";
import Link from "next/link";

export const Footer: FC = () => {
  const theme = useTheme();
  const breakpointMediumAndUp = useMediaQuery(theme.breakpoints.only("md"));
  return (
    <>
      <AppBar
        position="relative"
        elevation={0}
        sx={{
          borderTopWidth: 1,
          borderTopColor: theme.palette.divider,
          borderTopStyle: "solid",
        }}
      >
        <Toolbar>
          <Grid
            container
            spacing={1}
            sx={{
              [theme.breakpoints.down("md")]: {
                py: 2,
              },
            }}
          >
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                justifyContent: "flex-start",
                alignItems: "center",
                display: "flex",
                [theme.breakpoints.down("md")]: {
                  justifyContent: "center",
                },
              }}
            >
              <Box sx={{ textAlign: "left" }}>
                <TelepathyIcon color="inherit" />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "center",
                  a: {
                    color: "primary.main",
                  },
                }}
                component="div"
              >
                <Box
                  display="inline"
                  sx={{ fontWeight: theme.typography.fontWeightMedium }}
                >
                  {"Need Help? "}
                </Box>
                {/* <Box sx={{ display: "inline" }}> */}
                <Link
                  href="mailto:support@stellaautomotive.com"
                  passHref={true}
                >
                  support@stellaautomotive.com
                </Link>
                {/* </Box> */}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                justifyContent: "flex-end",
                alignItems: "center",
                display: "flex",
                [theme.breakpoints.down("md")]: {
                  justifyContent: "center",
                },
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "right",
                }}
                component="div"
              >
                Copyright 2021 &copy; STELLA&trade; Automotive.
                {breakpointMediumAndUp ? <br /> : " "}All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
