const toBase64 = (string: string) => Buffer.from(string).toString("base64");
const decodeBase64 = (string: string) =>
  Buffer.from(string, "base64").toString("ascii");
export { toBase64, decodeBase64 };
