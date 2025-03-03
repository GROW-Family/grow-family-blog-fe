export const getHTMLAttributes = (attrs: any, valueWrapper = '"') =>
  Object.entries(attrs)
    .map(([key, value]) => `${key}=${valueWrapper}${value}${valueWrapper}`)
    .join(" ");
