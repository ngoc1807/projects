import { alpha, createTheme, darken } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    customVariables: {
      dealerInfoAndDropdownHeight: number;
      mainNavHeight: number;
      columnSpacing: number;
      rowSpacing: number;
      sectionSpacing: number;
    };
  }
  interface ThemeOptions {
    customVariables?: {
      dealerInfoAndDropdownHeight?: number;
      mainNavHeight?: number;
      columnSpacing?: number;
      rowSpacing?: number;
      sectionSpacing?: number;
    };
  }
}

// these should be the only hex codes used in this theme file
const colorScheme = {
  neutrals: {
    white: "#fff",
    lightGrey: "#FAFAFF",
  },
  primary: {
    light: "#122B81",
    main: "#122766",
    dark: "#120052",
  },
  secondary: {
    light: "#e2bcd0",
    main: "#C22127",
    dark: "#891924",
  },
  divider: alpha("#000", 0.18),
};

const font: {
  primaryFontFamily: string;
  secondaryFontFamily: string;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
} = {
  primaryFontFamily: "'Oxanium', 'Helvetica', 'Arial', sans-serif",
  secondaryFontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
};

const typography = {
  fontFamily: font.secondaryFontFamily,
  fontWeightLight: font.fontWeightLight,
  fontWeightRegular: font.fontWeightRegular,
  fontWeightMedium: font.fontWeightMedium,
  fontWeightBold: font.fontWeightBold,
  h1: {
    fontFamily: font.primaryFontFamily,
    fontWeight: font.fontWeightLight,
    fontSize: "4rem",
  },
  h2: {
    fontFamily: font.primaryFontFamily,
    fontWeight: font.fontWeightLight,
    fontSize: "3rem",
  },
  h3: {
    fontFamily: font.primaryFontFamily,
    fontWeight: font.fontWeightLight,
    fontSize: "2.5rem",
  },
  h4: {
    fontFamily: font.secondaryFontFamily,
    fontWeight: font.fontWeightRegular,
    fontSize: "2.125rem",
  },
  h5: {
    fontFamily: font.primaryFontFamily,
    fontWeight: font.fontWeightRegular,
    fontSize: "1.75rem",
  },
  h6: {
    fontFamily: font.primaryFontFamily,
    fontWeight: font.fontWeightRegular,
    fontSize: "1.25rem",
  },
  subtitle1: {
    fontFamily: font.primaryFontFamily,
    fontWeight: font.fontWeightRegular,
    fontSize: "0.875rem",
  },
  subtitle2: {
    fontFamily: font.primaryFontFamily,
    fontWeight: font.fontWeightRegular,
    fontSize: "0.688rem",
    lineHeight: "11px",
  },
  body1: {
    fontFamily: font.secondaryFontFamily,
    fontWeight: font.fontWeightRegular,
    fontSize: "1rem",
  },
  body2: {
    fontFamily: font.primaryFontFamily,
    fontWeight: font.fontWeightRegular,
    fontSize: "1rem",
  },
  button: {
    fontFamily: font.primaryFontFamily,
    fontWeight: font.fontWeightRegular,
  },
  caption: {
    fontFamily: font.primaryFontFamily,
    fontSize: "0.875rem",
  },
  overline: {},
};

export const theme = createTheme({
  // theme modifications
  palette: {
    background: {
      paper: colorScheme.neutrals.white,
      default: colorScheme.neutrals.lightGrey,
    },
    primary: {
      light: colorScheme.primary.light,
      main: colorScheme.primary.main,
      dark: colorScheme.primary.dark,
    },
    secondary: {
      light: colorScheme.secondary.light,
      main: colorScheme.secondary.main,
      dark: colorScheme.secondary.dark,
    },
    text: {
      primary: colorScheme.primary.dark,
    },
    error: {
      light: colorScheme.secondary.light,
      main: colorScheme.secondary.main,
      dark: colorScheme.secondary.dark,
    },
  },
  typography,
  customVariables: {
    dealerInfoAndDropdownHeight: 64,
    mainNavHeight: 48,
    columnSpacing: 1.5,
    rowSpacing: 1,
    sectionSpacing: 2,
  },

  // component style overrides
  components: {
    MuiPaper: {
      styleOverrides: {
        outlined: {
          borderRadius: 10,
        },
        root: {
          "&.MuiCard-root": {
            marginTop: 0,
          },
          "& .MuiOutlinedInput-root": {
            backgroundColor: colorScheme.neutrals.lightGrey,
            "&.Mui-disabled": {
              backgroundColor: darken(colorScheme.neutrals.lightGrey, 0.04),
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: colorScheme.neutrals.white,
          color: colorScheme.primary.dark,
        },
        colorSecondary: {
          color: colorScheme.primary.dark,
          backgroundColor: colorScheme.neutrals.white,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: colorScheme.secondary.main,
        },
        light: {
          borderColor: colorScheme.secondary.light,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          fontFamily: font.primaryFontFamily,
          fontWeight: font.fontWeightRegular,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          opacity: 0.85,
          "&:hover": {
            opacity: 1,
          },
          "&. .MuiSvgIcon-root": {
            color: colorScheme.neutrals.white,
          },
          "&.Mui-selected .MuiSvgIcon-root": {
            color: colorScheme.secondary.main,
          },
        },
        labelIcon: {
          minHeight: 48,
          flexDirection: "row",
          // minHeight: 0,
          "& .MuiSvgIcon-root": {
            marginRight: 8,
            marginBottom: 0,
            fontSize: 18,
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontFamily: font.primaryFontFamily,
          fontWeight: font.fontWeightRegular,
          fontSize: "0.875rem",
          ".Mui-disabled &": {
            fontWeight: font.fontWeightLight,
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 16,
          paddingBottom: 8,
          "&:last-child": {
            paddingBottom: 16,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontSize: "0.875rem",
          minHeight: 50,
          minWidth: 200,
          paddingLeft: 20,
          paddingRight: 20,
          letterSpacing: "0.175rem",
          fontWeight: font.fontWeightMedium,
        },
        outlinedPrimary: {
          color: colorScheme.neutrals.white,
          borderColor: alpha(colorScheme.neutrals.white, 0.75),
          "&:hover": {
            color: colorScheme.neutrals.white,
            borderColor: colorScheme.neutrals.white,
          },
        },
        outlinedSecondary: {
          color: colorScheme.secondary.main,
          borderColor: colorScheme.secondary.main,
        },
        containedPrimary: {
          background: colorScheme.secondary.main,
          color: colorScheme.neutrals.white,
          "&:hover": {
            background: darken(colorScheme.secondary.main, 0.07),
            color: colorScheme.neutrals.white,
          },
        },
        containedSecondary: {
          background: colorScheme.neutrals.white,
          color: colorScheme.secondary.main,
          "&:hover": {
            background: darken(colorScheme.neutrals.white, 0.09),
            color: colorScheme.secondary.main,
          },
        },
        text: {
          minWidth: 150,
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        sizeSmall: {
          textTransform: "none",
          borderWidth: 0,
          borderRightWidth: 1,
          padding: 8,
          paddingTop: 0,
          paddingBottom: 0,
          lineHeight: 1,
          "&:first-of-type": {
            paddingLeft: 0,
          },
          "&:last-of-type": {
            borderRightWidth: 0,
            paddingRight: 0,
          },
          "&:hover": {
            background: "none",
            color: colorScheme.primary.dark,
          },
          "&.Mui-selected": {
            background: "none",
            color: colorScheme.primary.dark,
            "&:hover": {
              background: "none",
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          whiteSpace: "nowrap",
          fontWeight: font.fontWeightRegular,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "& td, & th": {
            borderWidth: 0,
          },
          "&:first-of-type td, &:first-of-type th": {
            paddingTop: 20,
          },
        },
        head: {
          "&:last-of-type": {
            marginBottom: 10,
          },
          "&:last-of-type td, &:last-of-type th": {
            borderColor: colorScheme.divider,
            borderWidth: 1,
          },
          "&:first-of-type td, &:first-of-type th": {
            paddingTop: 6,
          },
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(colorScheme.primary.main, 0.125),
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          fontFamily: font.primaryFontFamily,
          minWidth: 100,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          fontFamily: font.primaryFontFamily,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: colorScheme.neutrals.white,
          "&.Mui-disabled": {
            backgroundColor: colorScheme.neutrals.lightGrey,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          minWidth: 110,
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        vertical: {
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 8,
          marginBottom: 8,
          flexGrow: 0,
          flexShrink: 1,
          flexBasis: "auto",
        },
        lineVertical: {
          minHeight: 30,
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        vertical: {
          flexDirection: "column",
          "& .MuiStepLabel-label": {
            textAlign: "center",
          },
          "& .MuiStepLabel-iconContainer": {
            paddingBottom: 16,
            paddingRight: 0,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          borderWidth: 1,
          borderBottomColor: colorScheme.secondary.light,
          borderBottomStyle: "solid",
          fontFamily: font.primaryFontFamily,
          fontWeight: font.fontWeightLight,
          fontSize: "4rem",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          ".MuiDialogTitle-root + &": {
            paddingTop: 20,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: typography.subtitle2.fontFamily,
          fontSize: typography.subtitle2.fontSize,
          fontWeight: typography.subtitle2.fontWeight,
          lineHeight: typography.subtitle2.lineHeight,
          marginLeft: 0,
          marginRight: 0,
          marginTop: "2px",
          marginBottom: "3px",
        },
      },
    },
  },
});
