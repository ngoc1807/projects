import { FC, CSSProperties, ReactElement } from "react";
import { Box, useTheme } from "@mui/material";

type Props = {
  backgroundImageUrl?: string;
  hasAppBar?: boolean;
  hasSubAppBar?: boolean;
  hasFooter?: boolean;
  disablePagePadding?: boolean;
  children: ReactElement;
  hasMainNav?: boolean;
};

interface CSSPropertiesTypeFix extends CSSProperties {
  "@media (min-width:0px) and (orientation: landscape)": CSSProperties;
  "@media (min-width:600px)": CSSProperties;
}

export const PageWrapper: FC<Props> = ({
  backgroundImageUrl,
  hasAppBar = true,
  hasSubAppBar = true,
  hasFooter = true,
  disablePagePadding = false,
  children,
  hasMainNav = true,
}) => {
  const theme = useTheme();
  // there is a weird bug where MUI isn't recognizing the types properly
  // when pulling these media values with strings inside theme.mixins.toolbar
  // the type above fixes it and should keep all the typing correct
  // TODO: is there a github issue for this or a better way to fix?
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const themeToolbarObject: CSSPropertiesTypeFix = theme.mixins.toolbar as any;

  const normalAppBarCount =
    hasAppBar && hasFooter ? 2 : hasAppBar || hasFooter ? 1 : 0;
  const subAppBarCount = hasSubAppBar ? 1 : 0;

  const subAppBarHeight =
    theme.customVariables.dealerInfoAndDropdownHeight +
    (hasMainNav ? theme.customVariables.mainNavHeight : 0);

  return (
    <Box
      sx={{
        /*
          START ---------- set height on content div with minHeight

        - there are two normal toolbars (appBar and footer) that have
          different minHeight settings based on breakpoints
        - there is one modified toolbar (subAppBar) with a custom height
          which we import the size, it is the same size in every breakpoint
        */
        minHeight: `calc(100% - ((${themeToolbarObject.minHeight}px * ${normalAppBarCount}) + (${subAppBarHeight}px * ${subAppBarCount})))`,
        [theme.breakpoints.up("xs")]: {
          "@media (orientation: landscape)": {
            minHeight: `calc(100% - ((${themeToolbarObject["@media (min-width:0px) and (orientation: landscape)"].minHeight}px * ${normalAppBarCount}) + (${subAppBarHeight}px * ${subAppBarCount})))`,
          },
        },
        [theme.breakpoints.up("sm")]: {
          minHeight: `calc(100% - ((${themeToolbarObject["@media (min-width:600px)"].minHeight}px * ${normalAppBarCount}) + (${subAppBarHeight}px * ${subAppBarCount})))`,
        },
        /*
          END ----------
        */
        background:
          hasSubAppBar || !backgroundImageUrl
            ? "none"
            : `url(${
                backgroundImageUrl || "/images/background.jpg"
              }) no-repeat center center fixed`,
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <Box sx={{ p: disablePagePadding ? 0 : 3 }}>{children}</Box>
    </Box>
  );
};
