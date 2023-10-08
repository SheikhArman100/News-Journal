import Image from "next/image";
import { BsShare } from "react-icons/bs";
import React from "react";
import Link from "next/link";
import { getRandomNumber } from "@/libs/utils";
import { twMerge } from "tailwind-merge";
import RemoteImage from "./RemoteImage";

const NewsCard = ({ children }) => {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child);
  });
};

const Container = ({ children, style }) => {
  return (
    <div
      className={twMerge(
        "p-2 sm:p-3 border border-transparent  transition duration-300 ease-in shadow-lg hover:border-black rounded hover:shadow-[5px_5px_0px_0px_rgba(37,40,39)]",
        style
      )}
    >
      {children}
    </div>
  );
};

const Photo = ({ style, image,className }) => {
  return (
    <div className={twMerge("relative rounded-md shadow-md ", style)}>
      <Image
        alt="cardImage"
        src={image}
        sizes="(min-width: 1520px) 652px, (min-width: 780px) 42.78vw, calc(39.35vw - 18px)"
        fill
        className={twMerge("object-fit w-full h-full rounded", className)}
        placeholder="blur"
      />
    </div>
  );
};

const Info = ({ children, style }) => {
  return (
    <div className={twMerge("flex-1 flex flex-col items-start  py-2 ", style)}>
      {children}
    </div>
  );
};
const Title = ({ title, link, style }) => {
  return (
    <Link href={link}>
      <h5
        className={twMerge(
          "text-sm lg:text-base font-semibold line-clamp-3 hover:text-blue-800",
          style
        )}
      >
        {title}
      </h5>
    </Link>
  );
};

const Details = () => {
  const minutes = getRandomNumber();
  return (
    <div className="w-full h-full flex items-center justify-between">
      <p className="text-gray-500 font-medium text-xs md:text-sm">
        {minutes} min ago
      </p>
      <BsShare className="mr-2" />
    </div>
  );
};

NewsCard.Container = Container;
NewsCard.Photo = Photo;
NewsCard.Info = Info;
NewsCard.Title = Title;
NewsCard.Details = Details;

export default NewsCard;
