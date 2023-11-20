import Typo from "../Typography/Typo";
import Button from "../Button/Button";
import Pill from "../Pills/Pill";

export interface ArticleProps {
  id: number;
  title: string;
  text: string;
  image: string;
  author: string;
  date: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Icons = {
  DeepReadingArrow: "/icons/arrowRight.svg",
  ChevronArrow: "/icons/chevronArrow.svg",
};

export default function ArticleCard({
  id,
  title,
  text,
  image,
  author,
  date,
  onClick,
}: ArticleProps) {
  return (
    <div data-testid="ArticleCard" className="flex flex-col mt-14 gap-y-4">
      <div className="flex flex-row gap-x-14">
        <div className="relative">
          <div className="absolute top-6 left-8">
            <Typo variant="H5" title={`0${id + 1}.`} className="text-[48px]" />
          </div>
          <div className="w-[410px] h-[330px] flex-shrink-0">
            <img src={image} alt="article image" />
          </div>
          <div className="absolute bottom-6 left-8">
            <Pill title="Bookworm Valley" variant="yellow" />
          </div>
        </div>
        <div className="flex flex-col gap-y-10">
          <Typo variant="H2" title={title} className="text-[48px]" />
          <Typo
            variant="p1"
            title={text}
            fontWeight="normal"
            className="!text-black-900"
          />

          <Button
            arrow
            onClick={() => {}}
            round="half"
            size="small"
            title="Default Button"
            variant="green"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-x-4">
          <Typo variant="p5" title={author} />
          <Typo variant="p5" title={date} />
        </div>
        <div className="flex flex-row gap-x-3">
          <button
            type="button"
            className="flex items-center px-4 py-3 bg-gray-100 rounded-full"
            onClick={() => {}}
          >
            <img src={Icons.ChevronArrow} alt="arrow left icon" />
          </button>
          <button
            type="button"
            className="flex items-center justify-center px-4 py-3 bg-gray-100 rounded-full"
            onClick={() => {}}
          >
            <img
              src={Icons.ChevronArrow}
              alt="arrow left icon"
              className="rotate-180 "
            />
          </button>
        </div>
      </div>
    </div>
  );
}
