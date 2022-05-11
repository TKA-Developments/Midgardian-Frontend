import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { classNames } from "../../../../util/string";

export type ButtonProps = {
  iconUrl?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({
  className,
  disabled,
  iconUrl,
  ...props
}: ButtonProps) => (
  <button
    className={classNames(
      "text-background font-bold w-full rounded-xl flex flex-row items-center justify-center gap-2",
      disabled ? "bg-disabled" : "bg-primary",
      iconUrl ? "py-2" : "py-3",
      className
    )}
    disabled={disabled}
    {...props}
  >
    {iconUrl && <img src={iconUrl} className="w-8 h-8" />}
    {props.children}
  </button>
);
