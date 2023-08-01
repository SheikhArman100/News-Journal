import Image from "next/image";
import { BsShare } from "react-icons/bs";
import React from "react";
import Link from "next/link";
import { getRandomNumber } from "@/libs/utils";

const NewsCard = ({ title, link, image, cardStyle, imageStyle,textStyle }) => {
  const minutes = getRandomNumber();
  return (
    <div className={` ${cardStyle} shadow-md p-2 rounded bg-white   `}>
      <Image
        height={335}
        width={700}
        src={image}
        alt=""
        className={`md:aspect-[16/8] lg:aspect-[16/2] object-fit rounded-md  ${imageStyle}`}
      />
      <div className="col-span-1 flex flex-col p-1 items-start gap-y-1 lg:gap-y-3 ">
        <Link href={link}>
          <h5 className={`text-sm md:text-base font-semibold line-clamp-3 hover:text-blue-800  ${textStyle}`}>
            {title}
          </h5>
        </Link>
        <div className="flex items-end  justify-between w-full h-full ">
          <p className="text-gray-500 text-xs md:text-sm">{minutes} min ago</p>
          <BsShare className="mr-2" />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
