import { classNames } from "../util/string";
import ReactMarkdown from "react-markdown";

export type ShowcaseImageProps = {
  title?: string | (() => JSX.Element);
  description?: string;
  afterDescriptionComponent?: () => JSX.Element;
  imageSource?: string | Array<string>;
};

export const ShowcaseImage = ({
  title: Title,
  description,
  imageSource,
  afterDescriptionComponent: AfterDescriptionComponent,
}: ShowcaseImageProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 font-special-elite">
      <div className="flex-1">
        {Title &&
          (typeof Title === "string" ? (
            <h2 className="text-4xl font-bold mt-4 mb-8 text-typography-primary">
              {Title}
            </h2>
          ) : (
            <Title />
          ))}
        <h3 className="text-lg mt-2 text-typography-primary">
          <ReactMarkdown>{description ?? ""}</ReactMarkdown>
        </h3>
        {AfterDescriptionComponent && <AfterDescriptionComponent />}
      </div>
      <div
        className={classNames(
          "flex justify-center items-center",
          imageSource instanceof Array ? "grid grid-cols-2 gap-4" : ""
        )}
      >
        {imageSource instanceof Array ? (
          <>
            {imageSource.map((imageSourceSingle, idx) => (
              <img key={idx} src={imageSourceSingle} className="w-full" />
            ))}
          </>
        ) : (
          <img src={imageSource as string} className="w-full object-cover" />
        )}
      </div>
    </div>
  );
};
