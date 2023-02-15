import { startCase, camelCase } from "lodash-es";

export const key = (...args) => {
  return args.join("-");
};

export const toPascalCase = (str) => {
  return startCase(camelCase(str));
};
