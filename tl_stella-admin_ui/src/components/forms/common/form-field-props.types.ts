import { ReactNode } from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

interface _FormFieldProps {
  control: Control<FieldValues>;
  errors: FieldErrors;
  label: string;
  name: string;
  direction?: "row" | "column";
  size?: "small" | "large";
  rules?: RegisterOptions;
  rightAlign?: boolean;
}

export interface TextFormFieldProps extends _FormFieldProps {
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  onBlur?: (event: object) => void;
  onChange?: (event: object) => void;
}

export interface SelectFormFieldProps extends _FormFieldProps {
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  options: { value: string; name: string }[];
  multiple?: boolean;
  onBlur?: ((event: object) => void) | undefined;
  onChange?: ((event: object, child: ReactNode) => void) | undefined;
}

export interface FormSwitchProps extends _FormFieldProps {
  onBlur?: ((event: object) => void) | undefined;
  onChange?: ((event: object, checked: boolean) => void) | undefined;
}
