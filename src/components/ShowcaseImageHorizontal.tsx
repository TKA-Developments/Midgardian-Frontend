import { classNames } from "../util/string";
import ReactMarkdown from "react-markdown";

export type ShowcaseImageHorizontalImage = {
  imageSource?: string;
  caption?: string;
};

export type ShowcaseImageHorizontalProps = {
  title?: string;
  description?: string;
  images: Array<ShowcaseImageHorizontalImage>;
};

export const ShowcaseImageHorizontal = ({
  title,
  description,
  images,
}: ShowcaseImageHorizontalProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex-1">
        <h2 className="text-2xl font-bold my-2 text-white">{title}</h2>
        <h3 className="text-lg mt-2 text-white">
          <ReactMarkdown>{description ?? ""}</ReactMarkdown>
        </h3>
      </div>
      <div className="flex flex-col sm:flex-row gap-5">
        {images.map((image) => (
          <div className="flex flex-row sm:flex-col flex-1 items-center gap-10">
            <img
              src={image.imageSource}
              className="object-cover max-w-[100px] h-[175px]"
            />
            <p className="text-white text-left sm:text-center">
              {image.caption}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
