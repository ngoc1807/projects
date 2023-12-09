import {
  getErrorMessageByFieldName,
  createError,
  ErrorTypes,
  parseErrorsForType,
} from "../errors";

describe("error utils", () => {
  describe("createError", () => {
    it("string", () => {
      expect(createError("test")).toEqual(new Error("test"));
    });
    it("error", () => {
      expect(createError(new Error("testing"))).toEqual(new Error("testing"));
    });
    it("fallback (not string/error)", () => {
      expect(createError(2)).toEqual(new Error("error"));
    });
  });

  describe("parseErrorsForType", () => {
    it("should return false for both pattern and required errors if errors object is empty", () => {
      const errors = {};
      expect(parseErrorsForType(errors)).toEqual({
        hasPatternErrors: false,
        hasRequiredErrors: false,
        hasValidateErrors: false,
      });
    });
    it("should return true for pattern errors if errors object has pattern errors", () => {
      const errors = {
        fieldA: { type: ErrorTypes.PATTERN },
        fieldB: { type: ErrorTypes.PATTERN },
      };
      expect(parseErrorsForType(errors)).toEqual({
        hasPatternErrors: true,
        hasRequiredErrors: false,
        hasValidateErrors: false,
      });
    });
    it("should return true for required errors if errors object has required errors", () => {
      const errors = {
        fieldA: { type: ErrorTypes.REQUIRED },
        fieldB: { type: ErrorTypes.REQUIRED },
      };
      expect(parseErrorsForType(errors)).toEqual({
        hasPatternErrors: false,
        hasRequiredErrors: true,
        hasValidateErrors: false,
      });
    });
    it("should return true for validate errors if errors object has validate errors", () => {
      const errors = {
        fieldA: { type: ErrorTypes.VALIDATE },
        fieldB: { type: ErrorTypes.VALIDATE },
      };
      expect(parseErrorsForType(errors)).toEqual({
        hasPatternErrors: false,
        hasRequiredErrors: false,
        hasValidateErrors: true,
      });
    });
    it("should return true for pattern and required errors if errors object has pattern and required errors", () => {
      const errors = {
        fieldA: { type: ErrorTypes.PATTERN },
        fieldB: { type: ErrorTypes.PATTERN },
        fieldC: { type: ErrorTypes.REQUIRED },
      };
      expect(parseErrorsForType(errors)).toEqual({
        hasPatternErrors: true,
        hasRequiredErrors: true,
        hasValidateErrors: false,
      });
    });
    it("should return true for all", () => {
      const errors = {
        fieldA: { type: ErrorTypes.PATTERN },
        fieldB: { type: ErrorTypes.VALIDATE },
        fieldC: { type: ErrorTypes.REQUIRED },
      };
      expect(parseErrorsForType(errors)).toEqual({
        hasPatternErrors: true,
        hasRequiredErrors: true,
        hasValidateErrors: true,
      });
    });
    it("should return true for required errors if errors object is NESTED and has required errors", () => {
      const errors = {
        fieldA: {
          cell: { type: ErrorTypes.REQUIRED },
          email: { type: ErrorTypes.REQUIRED },
        },
        fieldB: {},
      };
      expect(parseErrorsForType(errors)).toEqual({
        hasPatternErrors: false,
        hasRequiredErrors: true,
        hasValidateErrors: false,
      });
    });
    it("should return true for required errors if errors object is NESTED and has required errors", () => {
      const errors = {
        fieldA: {
          cell: { type: ErrorTypes.REQUIRED },
          email: { type: ErrorTypes.REQUIRED },
        },
        fieldB: { type: ErrorTypes.REQUIRED },
      };
      expect(parseErrorsForType(errors)).toEqual({
        hasPatternErrors: false,
        hasRequiredErrors: true,
        hasValidateErrors: false,
      });
    });
    it("should return true for required errors if errors object is NESTED and has required errors", () => {
      const errors = {
        fieldA: {
          cell: {},
          email: {},
        },
        fieldB: { type: ErrorTypes.REQUIRED },
      };
      expect(parseErrorsForType(errors)).toEqual({
        hasPatternErrors: false,
        hasRequiredErrors: true,
        hasValidateErrors: false,
      });
    });
    it("should return false for undefined - not nested", () => {
      expect(parseErrorsForType(undefined)).toEqual({
        hasPatternErrors: false,
        hasRequiredErrors: false,
        hasValidateErrors: false,
      });
    });
    it("should return false for undefined - nested once", () => {
      const errors = {
        fieldA: undefined,
      };
      expect(parseErrorsForType(errors)).toEqual({
        hasPatternErrors: false,
        hasRequiredErrors: false,
        hasValidateErrors: false,
      });
    });
    it("should return false for undefined - nested twice", () => {
      const errors = {
        fieldA: {
          cell: undefined,
          email: {},
        },
      };
      expect(parseErrorsForType(errors)).toEqual({
        hasPatternErrors: false,
        hasRequiredErrors: false,
        hasValidateErrors: false,
      });
    });
  });

  describe("getErrorMessageByFieldName", () => {
    const errors = {
      test1: {
        type: "required",
        message: "This field is required",
        ref: {},
      },
      test2: {
        type: "required",
        message: "Invalid format",
        ref: {},
      },
    };
    it("should pull message", () => {
      expect(getErrorMessageByFieldName(errors, "test1")).toEqual(
        "This field is required"
      );
      expect(getErrorMessageByFieldName(errors, "test2")).toEqual(
        "Invalid format"
      );
    });
    it("should pull nothing", () => {
      expect(getErrorMessageByFieldName(errors, "blah")).toEqual(undefined);
      expect(getErrorMessageByFieldName({}, "test2")).toEqual(undefined);
    });
  });
});
