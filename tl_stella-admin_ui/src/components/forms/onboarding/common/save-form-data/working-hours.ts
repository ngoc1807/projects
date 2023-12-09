import { FieldValues } from "react-hook-form";
import { updateWorkingHours } from "src/features/onboarding/onboarding.slice";
import { WorkingHours } from "src/features/onboarding/onboarding.types";
import { AppDispatch } from "src/store/store";
import {
  getReceptionistConfig,
  getServiceSchedulingConfig,
} from "src/utils/config";
import { ConfigSet } from "src/utils/config/config.types";
import { generateWorkingHoursProperties as generateWorkingHoursReceptionistProperties } from "src/utils/config/dealer-info/receptionist";
import { generateWorkingHoursProperties } from "src/utils/config/dealer-info/service-scheduling";
import { getKeyIdMapping, persistConfigSet } from ".";

export const saveWorkingHoursFormData = async (
  value: FieldValues,
  tenantId: string,
  rootConfigSets: ConfigSet[],
  dispatch: AppDispatch
) => {
  dispatch(updateWorkingHours(value as WorkingHours));

  // service scheduling config
  const serviceSchedulingConfigSet = await getServiceSchedulingConfig(
    tenantId,
    rootConfigSets,
    dispatch
  );

  if (serviceSchedulingConfigSet) {
    const propertyIdMap = getKeyIdMapping(serviceSchedulingConfigSet);

    serviceSchedulingConfigSet.properties = generateWorkingHoursProperties(
      value as WorkingHours,
      propertyIdMap
    );

    persistConfigSet(dispatch, serviceSchedulingConfigSet);
  }

  // receptionist config
  const receptionistConfigSet = await getReceptionistConfig(
    tenantId,
    rootConfigSets,
    dispatch
  );
  if (receptionistConfigSet) {
    const propertyIdMap = getKeyIdMapping(receptionistConfigSet);

    receptionistConfigSet.properties =
      generateWorkingHoursReceptionistProperties(
        value as WorkingHours,
        propertyIdMap
      );

    persistConfigSet(dispatch, receptionistConfigSet);
  }
};
