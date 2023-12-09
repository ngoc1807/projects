import { FieldValues } from "react-hook-form";
import { updateCallConfiguration } from "src/features/onboarding/onboarding.slice";
import { CallConfiguration } from "src/features/onboarding/onboarding.types";
import { AppDispatch } from "src/store/store";
import { getServiceSchedulingConfig } from "src/utils/config";
import { ConfigSet } from "src/utils/config/config.types";
import { generateCallConfigurationProperties } from "src/utils/config/dealer-info/service-scheduling";
import { getKeyIdMapping, persistConfigSet } from ".";

export const saveCallConfigurationFormData = async (
  value: FieldValues,
  tenantId: string,
  rootConfigSets: ConfigSet[],
  dispatch: AppDispatch
) => {
  dispatch(updateCallConfiguration(value as CallConfiguration));

  const serviceSchedulingConfigSet = await getServiceSchedulingConfig(
    tenantId,
    rootConfigSets,
    dispatch
  );

  if (serviceSchedulingConfigSet) {
    const propertyIdMap = getKeyIdMapping(serviceSchedulingConfigSet);

    serviceSchedulingConfigSet.properties = generateCallConfigurationProperties(
      value as CallConfiguration,
      propertyIdMap
    );

    persistConfigSet(dispatch, serviceSchedulingConfigSet);
  }
};
