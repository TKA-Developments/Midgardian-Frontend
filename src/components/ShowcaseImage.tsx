import { classNames } from "../util/string";
import ReactMarkdown from "react-markdown";

export type ShowcaseImageProps = {
  title?: string;
  description?: string;
  imageSource?: string | Array<string>;
};

export const ShowcaseImage = ({
  title,
  description,
  imageSource,
}: ShowcaseImageProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="flex-1">
        <h2 className="text-2xl font-bold my-2 text-white">{title}</h2>
        <h3 className="text-lg mt-2 text-white">
          <ReactMarkdown>{description ?? ""}</ReactMarkdown>
        </h3>
      </div>
      <div
        className={classNames(
          "flex-1 flex justify-center items-center",
          imageSource instanceof Array ? "grid grid-cols-2 gap-4" : ""
        )}
      >
        {imageSource instanceof Array ? (
          <>
            {imageSource.map((imageSourceSingle) => (
              <img src={imageSourceSingle} className="w-full" />
            ))}
          </>
        ) : (
          <img src={imageSource as string} className="w-full" />
        )}
      </div>
    </div>
  );
};
