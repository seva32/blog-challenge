import React from "react";
import { Badge, Text, Avatar } from "../";
import image from "../../assets/images/avatar.png";
import { BlogProps } from "../../context";

type Props = {
  blog: BlogProps;
};

function Card({ blog }: Props) {
  const { id, userId, body, title, imageUrl, price, date } = blog;

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="w-full flex-grow bg-white rounded overflow-hidden aspect-320/440 flex flex-col relative z-0">
      <div className="absolute top-3 left-3 z-10 flex items-center">
        <Badge>
          <Text type="label" className="text-white badge__copy">
            {`$${price}/MO`}
          </Text>
        </Badge>
      </div>
      <div className="max-h-50 card__image-crop overflow-hidden relative pb-70%">
        <img
          src={imageUrl}
          alt="work with us"
          className="max-w-100 w-full h-full absolute object-cover"
        />
      </div>
      <div className="flex-grow flex flex-col px-5 pt-2 max-h-50">
        <div className="h-1/3 flex-grow-0 flex items-center">
          <Text
            type="title"
            className="card__title-copy text-ellipsis max-h-100 w-full overflow-hidden card__title-line-clamp"
          >
            {capitalizeFirstLetter(title)}
          </Text>
        </div>
        <div className="h-1/3 flex-grow-0">
          <Text className="card__copy text-graycopy text-ellipsis max-h-100 w-full overflow-hidden card__copy-line-clamp">
            {capitalizeFirstLetter(body)}
          </Text>
        </div>
        <div className="h-1/3 flex-grow-1 card__footer-border flex items-center relative">
          <div className="w-6">
            <Avatar src={image} />
          </div>
          <Text
            type="label"
            className="text-gray-300 tracking-widest px-4 pl-2 truncate badge__copy"
          >
            ALICE COOPER
          </Text>
          <div className="absolute right-0 min-h-full flex items-center justify-end">
            <Text
              type="label"
              className="text-gray-300 tracking-widest truncate badge__copy"
            >
              {date}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card };
