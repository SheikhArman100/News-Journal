import Image from "next/image";
import { BsShare } from "react-icons/bs";
import React from "react";
import Link from "next/link";
import { getRandomNumber } from "@/libs/utils";

const NewsCard = ({ children }) => {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child);
  });
};

const Container = ({ children, style }) => {
  return (
    <div
      className={` p-2 sm:p-3 border border-transparent  transition duration-300 ease-in shadow-lg hover:border-black rounded hover:shadow-[5px_5px_0px_0px_rgba(37,40,39)]  ${style}`}
    >
      {children}
    </div>
  );
};

const Photo = ({ style, image }) => {
  return (
    <Image
      height={335}
      width={700}
      src={image}
      alt="cardImage"
      className={`flex-1 object-fit rounded-md shadow-md ${style}`}
    />
  );
};

const Info = ({ children }) => {
  return (
    <div className="flex-1 flex flex-col items-start  py-2  ">
      {children}
    </div>
  );
};
const Title = ({ title, link, style }) => {
  return (
    <Link href={link}>
      <h5
        className={`text-sm lg:text-base font-semibold line-clamp-3 hover:text-blue-800 ${style}`}
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
