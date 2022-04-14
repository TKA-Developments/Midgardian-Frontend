import { classNames } from "../../util/string";
import ReactMarkdown from "react-markdown";

export type ShowcaseImageProps = {
  title?: string | (() => JSX.Element);
  description?: string;
  afterDescriptionComponent?: () => JSX.Element;
  imageSource?: string | Array<string> | Function;
};

export const ShowcaseImage = ({
  title: Title,
  description,
  imageSource: ImageSource,
  afterDescriptionComponent: AfterDescriptionComponent,
}: ShowcaseImageProps) => {
  let showcase;
  if (ImageSource instanceof Array) {
    showcase = (
      <>
        {ImageSource.map((imageSourceSingle, idx) => (
          <img key={idx} src={imageSourceSingle} className="w-full" />
        ))}
      </>
    );
  } else if (ImageSource instanceof Function) {
    showcase = (
      <>
        <ImageSource />
      </>
    );
  } else {
    showcase = (
      <div className="bg-[url('/img/wood3.jpg')] p-1 rounded-xl">
        <img src={ImageSource} className="w-full object-cover" />
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-14 font-special-elite">
      <div className="flex-1">
        {Title &&
          (typeof Title === "string" ? (
            <h2 className="text-[60px] font-bold mt-4 mb-8 text-typography-primary">
              {Title}
            </h2>
          ) : (
            <Title />
          ))}
        <h3 className="text-[18px] mt-2 text-typography-primary">
          <ReactMarkdown>{description ?? ""}</ReactMarkdown>
        </h3>
        {AfterDescriptionComponent && <AfterDescriptionComponent />}
      </div>
      <div
        className={classNames(
          "flex-1 flex justify-center items-center",
          ImageSource instanceof Array ? "grid grid-cols-2 gap-4" : ""
        )}
      >
        {showcase}
      </div>
    </div>
  );
};
