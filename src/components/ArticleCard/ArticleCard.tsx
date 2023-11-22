import React from "react";
import Image from "next/image";

import Pill from "../Pills/Pill";
import Typo from "../Typography/Typo";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import Icon from "../Icon/Icon";
import "./ArticleCard.module.css";

export interface ArticleCardProps {
  title?: string;
  description?: string;
  time?: string;
  author?: string;
  authorImage?: string;
  cardImage?: string;
  date?: string;
  pillTitle?: string;
  pillVariant?: "blue" | "yellow" | "purple" | "pink";
  avatars: Array<string>;
  completed?: boolean;
  horizontal?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Card: React.FC<ArticleCardProps> = ({
  title,
  description,
  time,
  author,
  authorImage,
  cardImage,
  date,
  horizontal,
  completed,
  pillTitle,
  pillVariant,
  avatars,
  onClick,
}) => {
  return (
    <div
      data-testid="Card"
      className={`relative w-full rounded-xl bg-white px-[22px] py-8 ${horizontal ? "max-w-44 flex flex-row-reverse gap-20" : "max-w-21"
        } `}
    >
      <div>
        <div
          className={`${horizontal ? "w-[228px]" : "w-[304px]"} ${horizontal ? "h-[151px]" : "h-[204px]"
            } rounded-lg overflow-hidden`}
        >
          <Image
            src={cardImage ? cardImage : ''}
            alt="card image"
            width={horizontal ? 228 : 304}
            height={horizontal ? 151 : 204}
            objectFit="cover"
          />
        </div>
        {horizontal && (
          <>
            <div className="flex items-center justify-end space-x-7 mt-7 mb-3.5 mr-1">
              <div className="flex items-center space-x-2">
                <Avatar
                  variant="small-avatar"
                  radius="full"
                  src={authorImage}
                />
                <Typo
                  className="text-[#475467]"
                  fontWeight="bold"
                  title={`${author} - ${date}`}
                  variant="p2"
                />
              </div>
              <Icon type="Bookmark" handleClick={() => { }} />
            </div>
            {!completed && (
              <div className="flex items-center justify-end space-x-2 mr-1">
                <div className="w-3.5 h-3.5 bg-yellow-700 rounded-full"></div>
                <Typo
                  className="!font-inter !text-gray-300 align-middle tracking-widest"
                  fontWeight="medium"
                  title="65% completed"
                  variant="p3"
                />
              </div>
            )}
            {completed && (
              <Typo
                className="!font-inter !text-[#818181] text-right"
                fontWeight="medium"
                title="3 points"
                variant="p3"
              />
            )}
          </>
        )}
      </div>

      <div className="">
        <div className="flex items-center justify-between py-4">
          <Pill variant={pillVariant} title={pillTitle} />
          <Typo
            className="uppercase underline"
            fontWeight="normal"
            title="TL;DR"
            variant="p1"
          />
        </div>
        <div className="flex justify-between">
          <Typo
            title={title}
            variant="H5"
            className="!font-mukta"
            fontWeight="semibold"
          />
          {!horizontal && <Icon type="Bookmark" handleClick={() => { }} />}
        </div>
        {!horizontal && (
          <Typo
            className="text-[#334155] my-2"
            fontWeight="normal"
            title={`${time} min read`}
            variant="p2"
          />
        )}
        <Typo
          className={`text-gray-200 ${horizontal ? "max-w-[358px] my-3" : "my-2"
            }`}
          title={description}
          variant="p1"
          fontWeight="normal"
        />
        {!horizontal && (
          <div className="flex items-center my-2 p-2 space-x-2">
            <Avatar variant="small-avatar" radius="full" src={authorImage} />
            <Typo
              className="text-[#475467]"
              fontWeight="bold"
              title={`${author} - ${date}`}
              variant="p2"
            />
          </div>
        )}
        <div className={`${horizontal ? "flex space-x-6" : ""}`}>
          {!completed && (
            <Button
              size="small"
              round="half"
              variant="green"
              title="Deep reading"
              arrow={true}
              onClick={() => { }}
            />
          )}
          {horizontal && (
            <div className="flex flex-row">
              {avatars.map((imageUrl, index) => (
                <div
                  key={index}
                  className="h-max -mr-[10px] border-[1.5px] border-white-900 rounded-full avatar"
                >
                  <Avatar
                    radius="full"
                    src={imageUrl}
                    variant="small-medium-avatar"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
