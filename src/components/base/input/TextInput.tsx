import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { classNames } from "../../../util/string";

export type TextInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const TextInput = ({ className, ...props }: TextInputProps) => (
  <input
    className={classNames(
      "rounded-md bg-background-secondary px-4 py-3",
      className
    )}
    {...props}
  />
);
