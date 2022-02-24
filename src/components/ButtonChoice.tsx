import { useState } from "react";
import { classNames } from "../util/string";

export type ButtonChoiceProps<T> = {
  choice: T;
  value: any; //keyof T;
  onChange?: (value: any) => void;
};

export const ButtonChoice = <T,>({
  choice: choice_,
  value,
  onChange,
}: ButtonChoiceProps<T>) => {
  const [choosen, setChoosen] = useState(value);
  const choice = Object.keys(choice_) as Array<keyof T>;
  return (
    <div className="flex flex-row gap-2">
      {choice.slice(choice.length / 2).map((item, idx) => {
        const choice = choice_[item];
        return (
          <button
            className={classNames(
              "rounded-lg px-4 py-1 font-bold",
              choice === choosen ? "bg-primary" : "bg-background-root"
            )}
            onClick={() => {
              setChoosen(choice);
              onChange?.(choice);
            }}
            key={idx}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
