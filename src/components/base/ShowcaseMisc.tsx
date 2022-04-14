import { classNames } from "../util/string";
import ReactMarkdown from "react-markdown";

export type ShowcaseMiscProps = {
  title?: string;
  description?: string;
  miscComponent?: () => JSX.Element;
};

export const ShowcaseMisc = ({
  title,
  description,
  miscComponent: MiscComponent,
}: ShowcaseMiscProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="flex-1">
        <h2 className="text-2xl font-bold my-2 text-white">{title}</h2>
        <h3 className="text-lg mt-2 text-white">
          <ReactMarkdown>{description ?? ""}</ReactMarkdown>
        </h3>
      </div>
      <div className="flex-1 flex justify-center items-center">
        {MiscComponent && <MiscComponent />}
      </div>
    </div>
  );
};
