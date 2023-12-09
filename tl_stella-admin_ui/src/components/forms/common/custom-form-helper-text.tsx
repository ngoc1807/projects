import { FormHelperText, useTheme } from "@mui/material";
import { FC, useEffect, useState } from "react";

export type FormHelperTextVariants = "error" | "success" | "info";

interface Props {
  text?: string;
  variant?: FormHelperTextVariants;
  persist?: boolean;
}

export const CustomFormHelperText: FC<Props> = ({
  text = " ",
  variant = "info",
  persist = true,
}) => {
  const theme = useTheme();
  const successStyle = { color: theme.palette.success.dark };

  const [formHelperText, setFormHelperText] = useState(" " as string);

  useEffect(() => {
    setFormHelperText(text);
    if (!persist) {
      setTimeout(() => {
        setFormHelperText(" ");
      }, 3500);
    }
  }, [text, persist]);

  return (
    <FormHelperText
      error={variant === "error"}
      sx={
        variant === "success"
          ? { minHeight: "11px", ...successStyle }
          : { minHeight: "11px" }
      }
    >
      {formHelperText}
    </FormHelperText>
  );
};
