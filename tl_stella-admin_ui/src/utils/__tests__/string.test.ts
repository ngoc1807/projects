import { decodeBase64, toBase64 } from "../string";

const testCases = [
  ["Telepathy", "VGVsZXBhdGh5"],
  ["Labs", "TGFicw=="],
  ["San Francisco", "U2FuIEZyYW5jaXNjbw=="],
  ["Tampa", "VGFtcGE="],
];

describe("string utils", () => {
  test.each(testCases)("encodes %p to %s", (original, encoded) => {
    expect(toBase64(original)).toEqual(encoded);
  });
  test.each(testCases)("decodes %s to %p", (original, encoded) => {
    expect(decodeBase64(encoded)).toEqual(original);
  });
});
