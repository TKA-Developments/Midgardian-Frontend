import { Step, StepProps } from "./Step";

export type StepsRowProps = {
  steps: Array<StepProps>;
};

export const StepsRow = ({ steps }: StepsRowProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mx-5 md:flex-row gap-5">
      {steps.map((step) => (
        <Step {...step} />
      ))}
    </div>
  );
};
