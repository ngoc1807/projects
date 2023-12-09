import {
  getIncompleteForms,
  getInfoTextToDisplay,
  getUnsavedCompletedFormsStatus,
  arrayToCommaSeparatedEnglishString,
} from "../form-completion-status";
import { StepLabels } from "../../components/forms/onboarding/common/steps";

describe("form-completion-status utils", () => {
  describe("getIncompleteForms", () => {
    it("should return an empty array if all forms have been completed", () => {
      const formCompleteStatuses = [true, true, true, true, true];
      expect(getIncompleteForms(formCompleteStatuses)).toEqual([]);
    });
    it("should return an array of strings representing the forms that have not yet been completed when at least one form has not been completed", () => {
      const formCompleteStatuses = [true, false, false, false, true];
      expect(getIncompleteForms(formCompleteStatuses)).toEqual(["2", "3", "4"]);
    });
  });
  describe("getUnSavedForms", () => {
    it("should return an empty array if all forms have been saved", () => {
      const savedForms = [
        StepLabels.DEALERSHIP_INFO,
        StepLabels.WORKING_HOURS,
        StepLabels.TECH_SET_UP,
        StepLabels.CALL_ROUTING,
        StepLabels.CALL_CONFIGURATION,
      ];
      const incompleteForms: string[] = [];

      expect(
        getUnsavedCompletedFormsStatus(savedForms, incompleteForms)
      ).toEqual([]);
    });
    it("should return an empty array if all unSavedForms are also the incomplete forms", () => {
      const savedForms = [
        StepLabels.DEALERSHIP_INFO,
        StepLabels.CALL_CONFIGURATION,
      ];
      const incompleteForms = ["2", "3", "4"];

      expect(
        getUnsavedCompletedFormsStatus(savedForms, incompleteForms)
      ).toEqual([]);
    });
    it("should return an array of unSavedForms if any unSavedForms are not showing as incomplete", () => {
      const savedForms = [StepLabels.DEALERSHIP_INFO, StepLabels.CALL_ROUTING];
      const incompleteForms = ["2", "3", "4"];

      expect(
        getUnsavedCompletedFormsStatus(savedForms, incompleteForms)
      ).toEqual(["5"]);
    });
  });
  describe("getInfoTextToDisplay", () => {
    it("should return an empty string if all forms are completed and saved", () => {
      const incompleteForms: string[] = [];
      const unSavedForms: string[] = [];

      expect(getInfoTextToDisplay(incompleteForms, unSavedForms)).toEqual("");
    });
    it("should return text for incomplete forms when there are no unsaved forms", () => {
      const incompleteForms: string[] = ["2", "3"];
      const unSavedForms: string[] = [];

      expect(getInfoTextToDisplay(incompleteForms, unSavedForms)).toEqual(
        "* Fill in required fields on pg. 2 and 3 to finish"
      );
    });
    it("should return text for unsaved forms when there are no incomplete forms", () => {
      const incompleteForms: string[] = [];
      const unSavedForms: string[] = ["5"];

      expect(getInfoTextToDisplay(incompleteForms, unSavedForms)).toEqual(
        "* Verify pg. 5 to finish"
      );
    });
    it("should return text when there are incomplete and unsaved forms", () => {
      const incompleteForms: string[] = ["1", "3", "4"];
      const unSavedForms: string[] = ["5"];

      expect(getInfoTextToDisplay(incompleteForms, unSavedForms)).toEqual(
        "* Fill in required fields on pg. 1, 3, and 4 and verify pg. 5 to finish"
      );
    });
  });
  describe("arrayToCommaSeparatedEnglishString", () => {
    it("test empty array", () => {
      expect(arrayToCommaSeparatedEnglishString([])).toEqual("");
    });
    it("test array with 1", () => {
      expect(arrayToCommaSeparatedEnglishString(["test"])).toEqual("test");
    });
    it("test array with 2", () => {
      expect(arrayToCommaSeparatedEnglishString(["test", "testing"])).toEqual(
        "test and testing"
      );
    });
    it("test array with 3", () => {
      expect(arrayToCommaSeparatedEnglishString(["1", "2", "3"])).toEqual(
        "1, 2, and 3"
      );
    });
    it("test array with 5", () => {
      expect(
        arrayToCommaSeparatedEnglishString(["1", "2", "3", "4", "5"])
      ).toEqual("1, 2, 3, 4, and 5");
    });
  });
});
