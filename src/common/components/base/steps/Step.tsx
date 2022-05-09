export type StepProps = {
  icon?: () => JSX.Element;
  title: string;
  description: string;
};

export const Step = ({ icon: Icon, title, description }: StepProps) => {
  return (
    <div className="flex flex-row gap-[16px]">
      {Icon && (
        <div>
          <Icon />
        </div>
      )}
      <div className="flex flex-col">
        <h3 className="text-on-background font-bold text-[36px]">{title}</h3>
        <p className="text-on-background text-[16px]">{description}</p>
      </div>
    </div>
  );
};
