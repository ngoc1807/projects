import { platformConfigApi } from "src/services/platform/config";
import { AppDispatch } from "src/store/store";
import { getGeneralConfig } from "src/utils/config";
import { ConfigKey, ConfigSet } from "src/utils/config/config.types";
import { toBase64 } from "src/utils/string";

export const getKeyIdMapping = (
  configSet: ConfigSet
): Map<ConfigKey, string> => {
  return new Map<ConfigKey, string>(
    (configSet.properties || []).map((property) => [
      property.key,
      property.id || "",
    ])
  );
};

export const persistConfigSet = async (
  dispatch: AppDispatch,
  configSet: ConfigSet
) => {
  if (configSet) {
    // if the properties list is empty, we need to remove the configSet
    if (configSet.properties?.length === 0) {
      await dispatch(
        platformConfigApi.endpoints.removeConfig.initiate({
          tenant_id: configSet.tenant_id || "",
          canonical_name: configSet.canonical_name,
        })
      );
      return;
    }

    await dispatch(
      configSet.config_set_id
        ? platformConfigApi.endpoints.updateConfig.initiate(configSet)
        : platformConfigApi.endpoints.addConfig.initiate(configSet)
    );
  }
};

export const updateOnboardingCompletedFlag = async (
  tenantId: string,
  rootConfigSets: ConfigSet[],
  dispatch: AppDispatch
) => {
  const generalConfigSet = await getGeneralConfig(
    tenantId,
    rootConfigSets,
    dispatch
  );

  if (generalConfigSet) {
    generalConfigSet.properties = [
      ...generalConfigSet.properties,
      {
        key: "DealerAppOnboardingCompleted",
        type: "Str",
        value: toBase64("true"),
      },
    ];
    persistConfigSet(dispatch, generalConfigSet);
  }
};
