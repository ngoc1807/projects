import { Button } from "@mui/material";
import { FC } from "react";

export interface OnboardingSaveFinishButtonsProps {
  disableSave: boolean;
  disableFinish: boolean;
  finishOnboarding: () => void;
}

export const OnboardingSaveFinishButtons: FC<
  OnboardingSaveFinishButtonsProps
> = ({ disableSave, disableFinish, finishOnboarding }) => {
  return (
    <>
      <Button
        type="submit"
        variant="contained"
        sx={{
          borderRadius: 0,
        }}
        disabled={disableSave}
      >
        Save
      </Button>
      <Button
        disabled={disableFinish}
        variant="contained"
        onClick={finishOnboarding}
        sx={{
          borderRadius: 0,
          fontSize: "0.875rem",
          marginLeft: "15px",
          minHeight: 50,
          minWidth: 230,
          letterSpacing: "0.175rem",
        }}
      >
        Finish
      </Button>
    </>
  );
};
