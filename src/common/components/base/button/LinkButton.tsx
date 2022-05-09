import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from "react";
import { classNames } from "../../../../util/string";

export type LinkButtonProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

export const LinkButton = ({ className, ...props }: LinkButtonProps) => (
  <a
    className={classNames("rounded-xl bg-primary px-4 py-3", className)}
    {...props}
  />
);
