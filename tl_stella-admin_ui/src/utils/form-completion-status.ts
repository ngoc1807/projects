import { onboardingPages } from "src/components/forms/onboarding/common/steps";

export const getIncompleteFormsOld = (formCompleteStatuses: boolean[]) => {
  const incompleteForms: string[] = [];
  (formCompleteStatuses || []).map((formComplete, index) => {
    if (!formComplete) {
      incompleteForms.push(String(index + 1));
    }
  });

  return incompleteForms;
};

export const getIncompleteForms = (formCompleteStatuses: boolean[]) => {
  const incompleteForms: string[] = [];
  (formCompleteStatuses || []).map((formComplete, index) => {
    if (!formComplete) {
      incompleteForms.push(String(index + 1));
    }
  });

  return incompleteForms;
};

export const getUnsavedCompletedFormsStatus = (
  savedForms: string[], // array of labels
  incompleteForms: string[] // array of numbers
) => {
  const unsavedPageNumbers = Object.keys(onboardingPages).filter(
    (x) =>
      !savedForms.includes(onboardingPages[x as keyof typeof onboardingPages])
  );
  const completedPageNumbers = new Set(
    Object.keys(onboardingPages).filter((x) => !incompleteForms.includes(x))
  );

  const unsavedCompletedNumbers = unsavedPageNumbers.filter((value) =>
    completedPageNumbers.has(value)
  );
  return unsavedCompletedNumbers;
};

export const arrayToCommaSeparatedEnglishString = (text: string[]) => {
  if (text.length > 2) {
    return text.join(", ").replace(/, ((?:.(?!, ))+)$/, ", and $1");
  } else if (text.length === 2) {
    return text.join(" and ");
  } else if (text.length === 1) {
    return text[0];
  }
  return "";
};

export const getInfoTextToDisplay = (
  requiredPages: string[],
  verifyPages: string[]
): string => {
  const hasRequiredPages = requiredPages.length > 0;
  const hasVerifyPages = verifyPages.length > 0;

  if (!hasRequiredPages && !hasVerifyPages) return "";

  const requiredPagesTextList =
    arrayToCommaSeparatedEnglishString(requiredPages);
  const verifiedPagesTextList = arrayToCommaSeparatedEnglishString(verifyPages);

  const requiredText = `Fill in required fields on pg. ${requiredPagesTextList}`;
  const verifyText = `Verify pg. ${verifiedPagesTextList}`;
  const verifyLowerCaseText =
    verifyText.charAt(0).toLowerCase() + verifyText.slice(1);

  return hasRequiredPages && hasVerifyPages
    ? `* ${requiredText} and ${verifyLowerCaseText} to finish`
    : hasRequiredPages
    ? `* ${requiredText} to finish`
    : hasVerifyPages
    ? `* ${verifyText} to finish`
    : "";
};
