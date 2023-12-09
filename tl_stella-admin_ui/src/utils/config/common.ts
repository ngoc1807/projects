import { ConfigProperty } from "src/utils/config/config.types";
import { toBase64 } from "../string";

const getEncodedProperties = (properties: ConfigProperty[]) => {
  return properties
    .map((property) => ({
      ...property,
      value: property?.value?.toString(),
    }))
    .filter((property) => property.value)
    .map((property) => ({
      ...property,
      /**
       * Depending on the field-mapping, multiple forms may be required to send data to db
       * under the same namespace. In this use case we don't want to encode the value.
       */
      value: property?.value ? toBase64(property.value) : "",
    }));
};

export { getEncodedProperties };
