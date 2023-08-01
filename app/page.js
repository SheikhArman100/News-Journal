import { getHeadline, getNews, getRandomNumber } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsShare } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import NewsCard from "@/components/NewsCard";
import SportsAcc from "@/components/SportsAcc";
import OpinionAcc from "@/components/OpinionAcc/OpinionAcc";
import CultureAcc from "@/components/CultureAcc";
import LifestyleAcc from "@/components/LifestyleAcc";
import OpinionContainer from "@/components/OpinionAcc/OpinionContainer";

const minutes = getRandomNumber();

const News = () => {
  return (
    <div>
      <Headline />
      <NewsContainer />
      <Accorden/>

    </div>
  );
};

//headlines

const Headline = async () => {
  const headline = await getHeadline();

  //console.log(headline);

  return (
    <div className="mt-4 flex flex-col">
      <h2 className="text-center text-3xl lg:text-4xl  italic font-bold ml-[5rem]">
        Headline News
      </h2>
      <div className="flex items-center gap-x-2 text-xs lg:text-sm font-medium py-1 border-b -mt-2 border-gray-400">
        <p className="text-accentColor">Trending</p>
        <div className="w-[0.05rem] h-4 bg-gray-500" />
        <p>Latest</p>
      </div>
      <div className="w-full grid grid-cols-1 ">
        <Image
          alt="Headline cover"
          height={773}
          width={1400}
          src={headline[0].image}
          className="w-full aspect-[16/12] sm:aspect-[16/10] md:aspect-[16/8] lg:aspect-[16/7] object-fit mt-4"
          sizes="(min-width: 1520px) 1376px, 91vw"
          priority
        />
        <div className="mt-2 flex items-center justify-between px-1">
          <span className="text-xs md:text-sm px-2 py-1 bg-accentColor text-white rounded-full">
            Top News
          </span>
          <BsShare size={20} />
        </div>
        <div className="flex items-start justify-between gap-x-8 mt-2 ">
          <div className="flex flex-col items-start gap-y-1">
            <Link href={headline[0].link}>
              <h4 className="line-clamp-3 text-base md:text-lg font-semibold hover:text-blue-800">
                {headline[0].title}
              </h4>
            </Link>
            <p className="text-gray-500 text-xs md:text-sm">
              {minutes} min ago
            </p>
          </div>
          <Link
            href={headline[0].link}
            className="py-1.5 px-4 bg-black text-white rounded-full"
          >
            <AiOutlineArrowRight size={20} className="transform -rotate-45 " />{" "}
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
};

const NewsContainer = async () => {
  const news = await getNews();
  const newsWithImage = news.filter((newsItem) => newsItem.image !== "");

  return (
    <div className="relative w-full">
    <div className="  flex flex-col-reverse gap-y-2 md:flex-row md:gap-x-4 ">
      <div className="flex flex-col gap-y-2 md:w-[50%] py-2 md:py-4 ">
        <NewsCard
          title={newsWithImage[0].title}
          link={newsWithImage[0].link}
          image={newsWithImage[0].image}
          cardStyle="w-full h-full flex"
          imageStyle="w-[50%] "
          
        />
        <NewsCard
          title={newsWithImage[1].title}
          link={newsWithImage[1].link}
          image={newsWithImage[1].image}
          cardStyle="w-full h-full flex"
          imageStyle="w-[50%]"
        />
      </div>
      <div className="grid grid-cols-2 grid-rows-4 gap-2 md:w-[50%] md:flex md:flex-col py-2 md:py-4  ">
        <NewsCard
          title={newsWithImage[2].title}
          link={newsWithImage[2].link}
          image={newsWithImage[2].image}
          cardStyle="col-span-1 row-span-2 md:h-[25%] w-full md:flex md:gap-x-1 md:gap-x-3"
          imageStyle="md:w-[50%]"
        />
        <NewsCard
          title={newsWithImage[3].title}
          link={newsWithImage[3].link}
          image={newsWithImage[3].image}
          cardStyle="col-span-1 row-span-2 md:h-[25%] w-full md:flex md:gap-x-1 md:gap-x-3"
          imageStyle="md:w-[50%]"
        />
        <NewsCard
          title={newsWithImage[4].title}
          link={newsWithImage[4].link}
          image={newsWithImage[4].image}
          cardStyle="col-span-1 row-span-2 md:h-[25%] w-full md:flex md:gap-x-1 md:gap-x-3"
          imageStyle="md:w-[50%]"
        />
        <NewsCard
          title={newsWithImage[5].title}
          link={newsWithImage[5].link}
          image={newsWithImage[5].image}
          cardStyle="col-span-1 row-span-2 md:h-[25%] w-full md:flex md:gap-x-1 md:gap-x-3"
          imageStyle="md:w-[50%]"
        />
      </div>
      </div>
      <div className="col-span-2 mt-4 flex items-center justify-center ">
        <Link href="" className="py-2 px-4 border border-black hover:text-white hover:bg-black rounded-full">More News</Link>
      </div>
    </div>
  );
};

const Accorden=()=>{
  return (
    <div className="flex flex-col mt-6">
      <OpinionAcc><OpinionContainer/></OpinionAcc>
      <SportsAcc/>
      <CultureAcc/>
      <LifestyleAcc/>

    </div>
  )
}

export default News;
