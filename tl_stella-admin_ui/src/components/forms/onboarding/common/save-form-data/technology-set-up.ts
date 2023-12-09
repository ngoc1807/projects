import { FieldValues } from "react-hook-form";
import { updateTechnologySetUp } from "src/features/onboarding/onboarding.slice";
import { TechnologySetUp } from "src/features/onboarding/onboarding.types";
import { AppDispatch } from "src/store/store";
import { getServiceSchedulingConfig } from "src/utils/config";
import { ConfigSet } from "src/utils/config/config.types";
import { generateTechnologySetUpProperties } from "src/utils/config/dealer-info/service-scheduling";
import { getKeyIdMapping, persistConfigSet } from ".";

export const saveTechnologySetUpFormData = async (
  value: FieldValues,
  tenantId: string,
  rootConfigSets: ConfigSet[],
  dispatch: AppDispatch
) => {
  dispatch(updateTechnologySetUp(value as TechnologySetUp));

  const serviceSchedulingConfigSet = await getServiceSchedulingConfig(
    tenantId,
    rootConfigSets,
    dispatch
  );

  if (serviceSchedulingConfigSet) {
    const propertyIdMap = getKeyIdMapping(serviceSchedulingConfigSet);

    serviceSchedulingConfigSet.properties = generateTechnologySetUpProperties(
      value as TechnologySetUp,
      propertyIdMap
    );

    persistConfigSet(dispatch, serviceSchedulingConfigSet);
  }
};
