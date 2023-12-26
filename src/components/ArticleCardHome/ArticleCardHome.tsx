'use client';
import Typo from "../Typography/Typo";
import Button from "../Button/Button";
import Pill from "../Pills/Pill";
import Image from "next/image";

export interface ArticleProps {
  id: number;
  title?: string;
  text?: string;
  articleImage?: string;
  author?: string;
  date?: string;
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
  articleImage,
  author,
  date,
  onClick,
}: ArticleProps) {
  return (
    <div data-testid="ArticleCard" className="flex flex-col gap-y-4 shadow-lg rounded-md p-4 w-full max-w-4xl">
      <div className="flex flex-row gap-x-14">
        <div className="relative">
          <div className="absolute top-6 left-8">
            <Typo variant="H5" title={`0${id + 1}.`} className="text-[48px]" />
          </div>
          <div className="w-[370px] rounded-lg overflow-hidden">
            <Image src={articleImage ? articleImage : ''} alt="article image"
              width={370}
              height={330}
              objectFit="cover"
            />
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
            arrow={true}
            // handleClick={() => { }}
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
            onClick={() => { }}
          >
            <img src={Icons.ChevronArrow} alt="arrow left icon" />
          </button>
          <button
            type="button"
            className="flex items-center justify-center px-4 py-3 bg-gray-100 rounded-full"
            onClick={() => { }}
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
