import { getAddress } from "@ethersproject/address";

export const classNames = (...classes: Array<any>) =>
  classes.filter(Boolean).join(" ");

export const numberFormatter = new Intl.NumberFormat("en-US", {
  maximumSignificantDigits: 3,
});

export function shortenAddress(address: string, chars = 4): string {
  try {
    const parsed = getAddress(address);
    return `${parsed.substring(0, chars + 2)}...${parsed.substring(
      42 - chars
    )}`;
  } catch (error) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
}
