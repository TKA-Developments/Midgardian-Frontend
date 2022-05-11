import { HTMLAttributes } from "react";
import { classNames } from "../../../util/string";

export type CardProps = {
  title: string;
  children?: HTMLAttributes<HTMLDivElement>["children"];
  outerContainerProps?: HTMLAttributes<HTMLDivElement>;
} & HTMLAttributes<HTMLDivElement>;

export const Card = ({
  title,
  children,
  outerContainerProps: { className: outerClassName, ...propsOuter } = {},
  ...props
}: CardProps) => {
  return (
    <div
      className={classNames(
        "bg-background text-white border-2 border-on-background rounded-xl",
        outerClassName
      )}
      {...propsOuter}
    >
      <div className="bg-secondary rounded-t-lg">
        <h3 className="font-special-elite text-2xl py-2 px-3">{title}</h3>
      </div>
      <div {...props}>{children}</div>
    </div>
  );
};
