export const classNames = (...classes: Array<any>) =>
  classes.filter(Boolean).join(" ");

export const numberFormatter = new Intl.NumberFormat("en-US", {
  maximumSignificantDigits: 3,
});
