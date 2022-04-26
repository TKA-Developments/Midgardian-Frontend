export type StepProps = {
  icon?: () => JSX.Element;
  title: string;
  description: string;
};

export const Step = ({ icon: Icon, title, description }: StepProps) => {
  return (
    <div className="flex flex-row gap-3">
      {Icon && (
        <div>
          <Icon />
        </div>
      )}
      <div className="flex flex-col">
        <h3 className="text-typography-primary font-bold text-[36px]">
          {title}
        </h3>
        <p className="text-typography-primary text-[16px]">{description}</p>
      </div>
    </div>
  );
};
