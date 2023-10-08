import { getHeadline, getNews, getRandomNumber } from "@/libs/utils";
import Link from "next/link";
import React from "react";
import { BsShare } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import NewsCard from "@/components/NewsCard";
import SportsAcc from "@/components/SportsAcc/SportsAcc";
import OpinionAcc from "@/components/OpinionAcc/OpinionAcc";
import CultureAcc from "@/components/CultureAcc/CultureAcc";

import OpinionContainer from "@/components/OpinionAcc/OpinionContainer";
import CultureContainer from "@/components/CultureAcc/CultureContainer";
import LifestyleAcc from "@/components/LifestyleAcc/LifestyleAcc";
import LifestyleContainer from "@/components/LifestyleAcc/LifestyleContainer";
import SportsContainer from "@/components/SportsAcc/SportsContainer";
import RemoteImage from "@/components/RemoteImage";

const News = () => {
  return (
    <div>
      <Headline />
      <NewsContainer />
      <Accordion />
    </div>
  );
};

//headlines

const Headline = async () => {
  const headline = await getHeadline();
  const minutes = getRandomNumber();

//  console.log(headline[0]);

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
        <div className="relative w-full aspect-[16/12] sm:aspect-[16/10] md:aspect-[16/8] lg:aspect-[16/7]  mt-4 p-2 border-2 md:border-4 border-black">
          <RemoteImage
            alt="Headline cover"
            src={headline[0].image}
            sizes="(min-width: 1520px) 1376px, 91vw"
        
          />
        </div>
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
  const newsWithImage = news.filter((newsItem) => newsItem.image !== "" );

  return (
    <div className="mt-4 w-full flex flex-col md:flex-row md:gap-x-2 xl:gap-x-5">
      <div className="md:flex-1 md:mt-2 flex flex-col gap-y-2">
        {[0, 1].map((number, index) => 
          <NewsCard key={index}>
            <NewsCard.Container style="flex justify-between md:flex-col gap-x-3">
              <NewsCard.Photo
                image={newsWithImage[number].image}
                style="w-[40%] md:w-full aspect-[16/10] sm:aspect-[16/7] md:aspect-[16/8] xl:aspect-[16/7]"
              />
              <NewsCard.Info>
                <NewsCard.Title
                  title={newsWithImage[number].title}
                  link={newsWithImage[number].link}
                />
                <NewsCard.Details />
              </NewsCard.Info>
            </NewsCard.Container>
          </NewsCard>
        )}
      </div>
      <div className="md:flex-1 mt-2 w-full grid grid-cols-2  gap-2">
        {[2, 3, 4, 5].map((number, index) => (
          <NewsCard key={index}>
            <NewsCard.Container style="col-span-1 md:col-span-2 flex flex-col md:flex-row md:gap-x-3  md:gap-y-0 gap-y-1  ">
              <NewsCard.Photo
                image={newsWithImage[number].image}
                style="w-full md:w-[40%] aspect-[16/10]  md:aspect-[16/6] "
              />
              <NewsCard.Info>
                <NewsCard.Title
                  title={newsWithImage[number].title}
                  link={newsWithImage[number].link}
                />
                <NewsCard.Details />
              </NewsCard.Info>
            </NewsCard.Container>
          </NewsCard>
        ))}
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="flex flex-col mt-6">
      <OpinionAcc>
        <OpinionContainer />
      </OpinionAcc>
      <SportsAcc>
        <SportsContainer />
      </SportsAcc>
      <CultureAcc>
        <CultureContainer />
      </CultureAcc>
      <LifestyleAcc>
        <LifestyleContainer />
      </LifestyleAcc>
    </div>
  );
};

export default News;
