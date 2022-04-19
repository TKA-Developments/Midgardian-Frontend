import { HTMLAttributes } from "react";

export type CardProps = {
  title: string;
  icon?: () => JSX.Element;
  containerStyle?: HTMLAttributes<HTMLDivElement>["style"];
};

export const Card = ({ title, icon: Icon, containerStyle }: CardProps) => {
  return (
    <div style={containerStyle} className="py-2">
      <div className="rounded-xl flex flex-col gap-7 mx-[15%] mt-[20%] mb-[20%]">
        <h3 className="text-black font-bold text-[20px] font-dragonwick">
          {title}
        </h3>
        {Icon && <Icon />}
      </div>
    </div>
  );
};
