import { FC, ReactElement } from "react";
import { Card, CardContent, useTheme } from "@mui/material";

interface Props {
  children: ReactElement;
}

export const WidgetCard: FC<Props> = ({ children }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        borderTopRightRadius: 55,
        marginTop: 2,
        padding: 0,
        paddingRight: 0,
        paddingBottom: 0,
        position: "relative",
        minHeight: "100%",
        borderBottomWidth: 1,
        borderBottomColor: theme.palette.divider,
        borderBottomStyle: "solid",
        "&::before": {
          content: '""',
          position: "absolute",
          backgroundColor: "secondary.main",
          width: "110px",
          height: 2,
          top: 0,
          left: 0,
        },
      }}
      raised={false}
      elevation={0}
      square
    >
      <CardContent
        sx={{
          paddingRight: "32px",
          "&:last-child": {
            paddingBottom: "32px",
          },
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
};
