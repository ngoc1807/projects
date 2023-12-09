import { FC } from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { StellaIcon } from "../icons/stella-icon";
import Link from "next/link";

interface Props {
  errorMessage?: string;
  authError?: boolean;
}

export const ErrorSplash: FC<Props> = ({ errorMessage, authError = false }) => {
  const theme = useTheme();
  const breakpointSmallAndUp = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Box
        sx={{
          marginTop: "10%",
        }}
      >
        <Box
          sx={{
            marginLeft: "-8px",
          }}
        >
          <StellaIcon
            variant="long"
            size={24}
            color1={theme.palette.secondary.main}
            color2={theme.palette.common.white}
          />
        </Box>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            color: "common.white",
            marginTop: 5,
            marginBottom: 7,
            maxWidth: "50%",
            minWidth: 400,
          }}
        >
          Ohh, No!
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          color="common.white"
          sx={{
            marginBottom: 2,
          }}
        >
          There has been an error.
        </Typography>
        {errorMessage !== undefined && (
          <Typography color="common.white" variant="subtitle1">
            {errorMessage}
          </Typography>
        )}
      </Box>
      {authError ? (
        <>
          <Box
            sx={{
              marginTop: 8,
              marginBottom: 2,
            }}
          >
            <Button variant="outlined" href="/">
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                ml: breakpointSmallAndUp ? 1 : 0,
                mt: breakpointSmallAndUp ? 0 : 1,
              }}
              href="/logout"
            >
              Logout
            </Button>
          </Box>
          <Box
            sx={{
              a: { color: "inherit", textDecoration: "none" },
            }}
          >
            <Link href="/">Home &#62;</Link>
          </Box>
        </>
      ) : (
        <Button
          variant="outlined"
          href="/"
          sx={{
            marginTop: 8,
            marginBottom: 2,
          }}
        >
          Home
        </Button>
      )}
    </>
  );
};
