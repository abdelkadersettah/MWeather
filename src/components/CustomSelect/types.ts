export type Options<Option> = readonly Option[];

export type Option = {
  value: string;
  label: string;
  [key: string]: any;
};
