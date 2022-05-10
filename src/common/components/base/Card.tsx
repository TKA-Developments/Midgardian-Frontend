import { HTMLAttributes } from "react";
import { classNames } from "../../../util/string";

export type CardProps = {
  title: string;
  children?: HTMLAttributes<HTMLDivElement>["children"];
} & HTMLAttributes<HTMLDivElement>;

export const Card = ({ title, className, children }: CardProps) => {
  return (
    <div
      className={classNames(
        "bg-background text-white border-2 border-on-background rounded-lg",
        className
      )}
    >
      <div className="bg-secondary rounded-t-lg">
        <h3 className="font-special-elite py-2 px-4">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};
