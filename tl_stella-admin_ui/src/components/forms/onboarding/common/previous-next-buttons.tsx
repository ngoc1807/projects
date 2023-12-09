import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FC, SetStateAction } from "react";
import { Box, Button, Tooltip } from "@mui/material";

export interface PreviousNextButtonsProps {
  activeStep: number;
  setNewStep: (value: SetStateAction<number | null>) => void;
  totalSteps: number;
}

export const PreviousNextButtons: FC<PreviousNextButtonsProps> = ({
  activeStep,
  totalSteps,
  setNewStep,
}) => {
  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === totalSteps - 1;

  return (
    <Box
      sx={{
        flexBasis: "100%",
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: 2,
      }}
    >
      <Tooltip title="Previous" placement="top">
        <Button
          component={isFirstStep ? "span" : "button"}
          variant="text"
          disabled={isFirstStep}
          sx={{
            minWidth: 0,
          }}
          onClick={() => setNewStep(activeStep - 1)}
        >
          <ArrowBackIosIcon />
        </Button>
      </Tooltip>
      <Tooltip title="Next" placement="top">
        <Button
          component={isLastStep ? "span" : "button"}
          variant="text"
          disabled={isLastStep}
          sx={{
            minWidth: 0,
          }}
          onClick={() => setNewStep(activeStep + 1)}
        >
          <ArrowForwardIosIcon />
        </Button>
      </Tooltip>
    </Box>
  );
};
