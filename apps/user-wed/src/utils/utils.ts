export const isEmail = (value: any): boolean =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(value).toLowerCase(),
  );

export const isString = (value: any): boolean => typeof value === "string";

export const isUndefined = (value: any): boolean =>
  [
    "undefined",
    "NaN",
    undefined,
    "",
    null,
    "null",
    false,
    "false",
    "Invalid date",
    Infinity,
  ].includes(value);

export const isNumber = (value: any): boolean =>
  typeof value === "number" ||
  (typeof value === "string" && !isNaN(Number(value)));

export const isBoolean = (value: any): boolean => typeof value === "boolean";

export const isFile = (file: any): boolean => `${file}` === "[object File]";

export const toArray = (value: any): any[] =>
  Array.isArray(value) ? value : [];

export const isArray = (value: any, minLength?: number | boolean): boolean =>
  Array.isArray(value) &&
  (minLength
    ? value.length >= (typeof minLength === "number" ? minLength : 1)
    : true);

export const isEmpty = (value: unknown): boolean => {
  if (value == null) return true; // null hoặc undefined
  if (typeof value === "string" || Array.isArray(value))
    return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
};

export const isObject = (value: any, isNotEmpty?: boolean): boolean => {
  const isObj = !!value && typeof value === "object" && !isUndefined(value);
  return isObj && isNotEmpty ? !isEmpty(value) : isObj;
};

export const isJSON = (data: any): boolean => {
  try {
    if (isObject(data) || isArray(data)) return true;
    if (!data) return false;
    if (isString(data)) {
      JSON.parse(data);
    } else {
      JSON.parse(JSON.stringify(data));
    }
  } catch {
    return false;
  }
  return true;
};

export const preventDefaultClickEvent = (e) => {
  e.stopPropagation();
  e.preventDefault();
};