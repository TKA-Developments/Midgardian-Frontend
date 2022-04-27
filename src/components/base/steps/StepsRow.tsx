import { Step, StepProps } from "./Step";

export type StepsRowProps = {
  steps: Array<StepProps>;
};

export const StepsRow = ({ steps }: StepsRowProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mx-5 md:flex-row gap-[36px]">
      {steps.map((step, idx) => (
        <Step key={idx} {...step} />
      ))}
    </div>
  );
};
