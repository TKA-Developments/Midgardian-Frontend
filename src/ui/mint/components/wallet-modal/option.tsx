import Image from "next/image";
import Link from "next/link";

type OptionProps = {
  header: string;
  subheader?: string;
  link?: string;
  icon?: string;
  active?: boolean;
  onClick?: () => void;
};

export const Option = ({
  header,
  subheader,
  link,
  icon,
  active = true,
  onClick,
}: OptionProps) => {
  const content = (
    <button
      className={`focus:outline-none flex items-center gap-4 justify-between border-2
      border-on-background w-full px-4 py-3 rounded-xl text-on-background`}
      onClick={onClick}
    >
      <div className="flex flex-row items-center">
        {icon && <Image src={icon} alt="Icon" width="32px" height="32px" />}
        <h3 className="text-sm font-bold ml-4">{header}</h3>
      </div>
      {subheader && <h4 className="text-xs">{subheader}</h4>}
    </button>
  );

  if (link) {
    return <a href={link}>{content}</a>;
  }

  return content;
};
