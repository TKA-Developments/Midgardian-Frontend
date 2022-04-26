import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { classNames } from "../../../util/string";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({ className, ...props }: ButtonProps) => (
  <button
    className={classNames("rounded-md bg-primary px-4 py-3", className)}
    {...props}
  />
);
