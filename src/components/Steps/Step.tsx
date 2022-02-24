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
        <h3 className="text-typography-primary font-bold text-xl">{title}</h3>
        <p className="text-typography-primary">{description}</p>
      </div>
    </div>
  );
};
