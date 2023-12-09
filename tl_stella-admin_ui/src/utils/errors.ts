import { FieldError, FieldErrors } from "react-hook-form";

export enum ErrorTypes {
  PATTERN = "pattern",
  REQUIRED = "required",
  VALIDATE = "validate",
}

export const createError = (error: unknown) => {
  if (error instanceof Error) {
    return error;
  }
  if (typeof error === "string") {
    return new Error(error);
  }
  return new Error("error");
};

export const parseErrorsForType = (errors: FieldErrors | undefined) => {
  let hasPatternErrors = false;
  let hasRequiredErrors = false;
  let hasValidateErrors = false;

  if (!errors)
    return { hasPatternErrors, hasRequiredErrors, hasValidateErrors };

  const errorFields = Object.values(errors);

  for (const error of errorFields) {
    const errorArray = Array.isArray(error) ? error : [error];

    for (const error of errorArray) {
      const errorArray: FieldError[] =
        typeof error?.[Object.keys(error ?? {})?.[0]] === "object"
          ? Object.values(error)
          : [error];

      for (const error of errorArray) {
        switch (error?.type) {
          case ErrorTypes.PATTERN: {
            hasPatternErrors = true;

            break;
          }
          case ErrorTypes.REQUIRED: {
            hasRequiredErrors = true;

            break;
          }
          case ErrorTypes.VALIDATE: {
            hasValidateErrors = true;

            break;
          }
          // No default
        }
      }
    }
  }

  return { hasPatternErrors, hasRequiredErrors, hasValidateErrors };
};

export const getErrorMessageByFieldName = (
  errors: FieldErrors = {},
  fieldName: string
): string | undefined => {
  let error: FieldErrors | null = null;
  for (const key of fieldName.split(".")) {
    error = error ? error[key] : errors[key]; // TODO: check if we can clean this up
  }
  if (typeof error?.message === "string") {
    return error.message;
  }
  return undefined;
};
