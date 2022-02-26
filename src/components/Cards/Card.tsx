export type CardProps = {
  title: string;
  icon?: () => JSX.Element;
};

export const Card = ({ title, icon: Icon }: CardProps) => {
  return (
    <div className="bg-[url('/img/wood2.png')] rounded-xl shadow min-h-[10rem] flex flex-col justify-between px-4 py-4">
      <h3 className="text-typography-primary font-bold text-2xl">{title}</h3>
      {Icon && <Icon />}
    </div>
  );
};
