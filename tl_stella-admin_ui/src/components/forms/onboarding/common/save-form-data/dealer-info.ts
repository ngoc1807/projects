import { FieldValues } from "react-hook-form";
import { updateDealershipInfo } from "src/features/onboarding/onboarding.slice";
import {
  DealershipInfo,
  OnboardingState,
} from "src/features/onboarding/onboarding.types";
import { AppDispatch } from "src/store/store";
import { getGeneralConfig } from "src/utils/config";
import { ConfigSet } from "src/utils/config/config.types";
import { generateDealerInfo } from "src/utils/config/dealer-info/general";
import { getKeyIdMapping, persistConfigSet } from ".";

export const saveDealershipInfoFormData = async (
  value: FieldValues,
  tenantId: string,
  rootConfigSets: ConfigSet[],
  dispatch: AppDispatch,
  onboardingState: OnboardingState
) => {
  dispatch(updateDealershipInfo(value as DealershipInfo));

  const generalConfigSet = await getGeneralConfig(
    tenantId,
    rootConfigSets,
    dispatch
  );

  if (generalConfigSet) {
    const propertyIdMap = getKeyIdMapping(generalConfigSet);

    generalConfigSet.properties = generateDealerInfo(
      value as DealershipInfo,
      propertyIdMap,
      onboardingState
    );

    persistConfigSet(dispatch, generalConfigSet);
  }
};
