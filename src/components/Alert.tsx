import { HTMLAttributes } from "react";
import { classNames } from "../util/string";

export type AlertProps = {
  title: string;
  message: string;
  componentBelow?: () => JSX.Element;
  containerProps: HTMLAttributes<HTMLDivElement>;
};

export const Alert = ({
  title,
  message,
  componentBelow: ComponentBelow,
  containerProps,
}: AlertProps) => {
  return (
    <div
      {...containerProps}
      className={classNames(
        "flex flex-col items-center py-5",
        containerProps.className
      )}
    >
      <h2 className="self-center text-xl font-bold mb-2">{title}</h2>
      <p className="mx-9">{message}</p>
      {ComponentBelow && <ComponentBelow />}
    </div>
  );
};
