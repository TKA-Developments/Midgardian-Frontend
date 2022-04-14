import { HTMLAttributes } from "react";

export type CardProps = {
  title: string;
  icon?: () => JSX.Element;
  containerStyle?: HTMLAttributes<HTMLDivElement>["style"];
};

export const Card = ({ title, icon: Icon, containerStyle }: CardProps) => {
  return (
    <div
      className="bg-[url('/img/wood3.jpg')] p-1 rounded-xl rotate-6"
      style={containerStyle}
    >
      <div
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/img/paper.jpg')",
          backgroundSize: "cover",
        }}
        className="rounded-xl shadow min-h-[10rem] flex flex-col justify-between px-4 py-4"
      >
        <h3 className="text-typography-primary font-bold text-[24px] font-dragonwick">
          {title}
        </h3>
        {Icon && <Icon />}
      </div>
    </div>
  );
};
