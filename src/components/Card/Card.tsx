import React from "react";
import { Badge, Text, Avatar } from "../";
import image from "../../assets/images/avatar.png";

type Props = {};

function Card({}: Props) {
  return (
    <div className="w-full flex-grow bg-white rounded overflow-hidden aspect-320/440 flex flex-col relative z-0">
      <div className="absolute top-3 left-3 z-10 flex items-center">
        <Badge>
          <Text type="label" className="text-white badge__copy">
            $49/MO
          </Text>
        </Badge>
      </div>
      <div className="max-h-50 card__image-crop overflow-hidden relative pb-70%">
        <img
          src="https://s3-alpha-sig.figma.com/img/7b33/9903/fb0c699ae2b9218dae2ae9b3254478a9?Expires=1644796800&Signature=QzDjgOTl~Zhp6j0hBE27MDFC2YvsNlal6yMGgWXn8m6GOXx9sbfdlrw4q0PdJ3JgRihBhshfykk8Sd618b4unXCGm7yFzB0WceNRmBGG0oUL0onSfyvplaTT~BW3WJGL7HbvemLudOB4ihgLkCeS-wqYv6M8Ot90iNHBmZkDdCPfDywwzhd16U40H50JWwaOt3L7JCk4BoryzRmWn6FHK1OXzTBz2szdH~1YITjksDFQ1BWB2QzFcF8TZF30ntaryaeU2zjn21NyDtE-vrkdU7m0-8kIKtnUu3zNipljEix~5OzgTEASJbYV9LPIIIExE4dY~5RZnLEgs1fOvV2fNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt="work with us"
          className="max-w-100 w-full h-full absolute object-cover"
        />
      </div>
      <div className="flex-grow flex flex-col px-5 pt-2 max-h-50">
        <div className="h-1/3 flex-grow-0">
          <Text
            type="title"
            className="card__title-copy text-ellipsis max-h-100 w-full overflow-hidden card__title-line-clamp"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing
          </Text>
        </div>
        <div className="h-1/3 flex-grow-0">
          <Text className="card__copy text-graycopy text-ellipsis max-h-100 w-full overflow-hidden card__copy-line-clamp">
            Lorem, ipsum dolor sit amet consectetur adipisicing Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Accusamus sit rem vero
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
              MAY 17
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card };
