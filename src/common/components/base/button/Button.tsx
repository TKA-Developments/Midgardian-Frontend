import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { classNames } from "../../../../util/string";

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({ className, disabled, ...props }: ButtonProps) => (
  <button
    className={classNames(
      "text-white font-bold w-full rounded-xl py-3",
      disabled ? "bg-disabled" : "bg-primary",
      className
    )}
    disabled={disabled}
    {...props}
  />
);
