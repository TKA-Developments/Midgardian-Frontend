import { HTMLAttributes } from "react";
import { classNames } from "../../../../util/string";

export type AttributeProps = {
  title: string;
  value: string;
  imgUrl: string;
} & HTMLAttributes<HTMLDivElement>;

export const AttributeCard = ({
  title,
  value,
  imgUrl,
  className,
  ...props
}: AttributeProps) => {
  return (
    <div
      className={classNames(
        "rounded-lg border-2 border-on-background items-center flex flex-col py-4",
        className
      )}
      {...props}
    >
      <h4 className="text-lg font-special-elite">{title}</h4>
      <img src={imgUrl} className="w-[36px] h-[36px]" />
      <h4 className="text-2xl">{value}</h4>
    </div>
  );
};
