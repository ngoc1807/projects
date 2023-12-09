import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { FC } from "react";

export interface UnsavedChangesDialogProps {
  open: boolean;
  clearUnsavedChanges?: () => void;
  saveUnsavedChanges?: () => void;
  cancelStepChange?: () => void;
}

const UnsavedChangesDialog: FC<UnsavedChangesDialogProps> = ({
  open,
  clearUnsavedChanges,
  saveUnsavedChanges,
  cancelStepChange,
}) => {
  return (
    <Dialog
      open={open}
      onClose={clearUnsavedChanges}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      // fullWidth
      // maxWidth="md"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          You have unsaved changes on this section. What would you like to do
          with them?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ flexWrap: "wrap" }}>
        <Button variant="text" onClick={cancelStepChange}>
          Back
        </Button>
        <Button variant="text" onClick={clearUnsavedChanges}>
          Clear
        </Button>
        <Button
          variant="contained"
          onClick={saveUnsavedChanges}
          autoFocus
          focusRipple={false}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UnsavedChangesDialog;
