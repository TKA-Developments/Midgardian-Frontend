import { useCallback, useMemo, useState } from "react";
import { Switcher, SwitcherItemProps } from "./base/switcher/Switcher";

export type ClassInfo = {
  title: string;
  description: string;
  imageUrl: string;
  statsImageUrl: string;
};

export const classes: Array<ClassInfo> = [
  {
    title: "Warrior",
    description:
      "Role 1 is a mutan who has a power too .... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    imageUrl: "/img/classes/warrior.png",
    statsImageUrl: "/img/stats/Warrior - radar plot.png",
  },
  {
    title: "Mage",
    description:
      "Role 1 is a mutan who has a power too .... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    imageUrl: "/img/classes/mage.png",
    statsImageUrl: "/img/stats/Mage - radar plot.png",
  },
  {
    title: "Archer",
    description:
      "Role 1 is a mutan who has a power too .... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    imageUrl: "/img/classes/archer.png",
    statsImageUrl: "/img/stats/Archer - radar plot.png",
  },
  {
    title: "Cleric",
    description:
      "Role 1 is a mutan who has a power too .... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    imageUrl: "/img/classes/cleric.png",
    statsImageUrl: "/img/stats/Cleric - radar plot.png",
  },
  {
    title: "Thief",
    description:
      "Role 1 is a mutan who has a power too .... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    imageUrl: "/img/classes/thief.png",
    statsImageUrl: "/img/stats/Thief - radar plot.png",
  },
];

export type ClassInfoDisplayProps = {
  classInfo: ClassInfo;
};

export const ClassInfoDisplay = ({ classInfo }: ClassInfoDisplayProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-[32px] mt-8">
      <div className="flex-1 text-white flex flex-col gap-2">
        <h3 className="text-3xl font-bold">{classInfo.title}</h3>
        <p>{classInfo.description}</p>
      </div>
      <div className="flex-1">
        <img src={classInfo.imageUrl} className="object-cover" />
      </div>
      <div className="flex-1">
        <img src={classInfo.statsImageUrl} />
      </div>
    </div>
  );
};

export type ClassSwitchItem = {
  title: string;
  icon: string;
};

export const ClassSwitchItemComponent = ({
  action,
  data,
}: SwitcherItemProps<ClassSwitchItem>) => {
  return (
    <div
      onClick={action}
      className="rounded-md bg-white py-2 px-4 flex flex-row gap-2 items-center justify-center cursor-pointer"
    >
      <img src={data.icon} className="w-5 h-5" />
      <h3>{data.title}</h3>
    </div>
  );
};

export const Classes = () => {
  const selectedClassState = useState(0);

  return (
    <div className="font-special-elite flex flex-col items-center gap-[32px] py-16 max-w-5xl mx-10 my-20">
      <h2 className="text-primary text-4xl font-bold text-center">Classes</h2>
      <Switcher
        items={[
          {
            title: "Warrior",
            icon: "/img/icon/warrior.png",
          },
          {
            title: "Mage",
            icon: "/img/icon/mage.png",
          },
          {
            title: "Archer",
            icon: "/img/icon/archer.png",
          },
          {
            title: "Cleric",
            icon: "/img/icon/cleric.png",
          },
          {
            title: "Thief",
            icon: "/img/icon/thief.png",
          },
        ]}
        selectedIndexState={selectedClassState}
        containerProps={{
          className:
            "w-full md:w-auto flex-col gap-[8px] md:gap-[8px] md:flex-row",
        }}
        ItemComponent={ClassSwitchItemComponent}
      />
      <ClassInfoDisplay classInfo={classes[selectedClassState[0]]} />
    </div>
  );
};
