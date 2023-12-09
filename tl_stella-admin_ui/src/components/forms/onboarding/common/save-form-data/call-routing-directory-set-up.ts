import { FieldValues } from "react-hook-form";
import { updateCallRoutingSetUp } from "src/features/onboarding/onboarding.slice";
import {
  CallRoutingSetUp,
  OnboardingState,
} from "src/features/onboarding/onboarding.types";
import { AppDispatch } from "src/store/store";
import { getGeneralConfig } from "src/utils/config";
import { ConfigSet } from "src/utils/config/config.types";
import { generateCallRoutingSetUpProperties } from "src/utils/config/dealer-info/general";
import { getKeyIdMapping, persistConfigSet } from ".";

export const saveCallRoutingSetUpFormData = async (
  value: FieldValues,
  tenantId: string,
  rootConfigSets: ConfigSet[],
  dispatch: AppDispatch,
  onboardingState: OnboardingState
) => {
  dispatch(updateCallRoutingSetUp(value as CallRoutingSetUp));

  const generalConfigSet = await getGeneralConfig(
    tenantId,
    rootConfigSets,
    dispatch
  );

  if (generalConfigSet) {
    const propertyIdMap = getKeyIdMapping(generalConfigSet);

    generalConfigSet.properties = generateCallRoutingSetUpProperties(
      value as CallRoutingSetUp,
      propertyIdMap,
      onboardingState
    );

    persistConfigSet(dispatch, generalConfigSet);
  }
};
