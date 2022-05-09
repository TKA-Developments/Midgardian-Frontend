import { Dispatch, HTMLAttributes, SetStateAction, useState } from "react";
import { classNames } from "../../../../util/string";

export type SwitcherItemProps<T> = {
  action: () => void;
  data: T;
  active: boolean;
};

export type SwitcherProps<T> = {
  selectedIndexState: [number, Dispatch<SetStateAction<number>>];
  items: Array<T>;
  containerProps?: HTMLAttributes<HTMLDivElement>;
  ItemComponent: (props: SwitcherItemProps<T>) => JSX.Element;
};

export const Switcher = <T,>({
  selectedIndexState: [selectedIndex, setSelectedIndexState],
  containerProps: { className: containerClassName, ...restContainerProps } = {},
  items,
  ItemComponent,
}: SwitcherProps<T>) => {
  return (
    <div
      className={classNames("flex flex-row", containerClassName)}
      {...restContainerProps}
    >
      {items.map((item, index) => (
        <ItemComponent
          key={index}
          active={index == selectedIndex}
          action={() => setSelectedIndexState(index)}
          data={item}
        />
      ))}
    </div>
  );
};
