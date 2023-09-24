import NewsCard from "@/components/NewsCard";
import { getOpinions } from "@/libs/utils";
import Link from "next/link";
import React from "react";

const Opinion = async ({ searchParams }) => {
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 6;
  const opinions = await getOpinions(page, limit);

  return (
    <section className="w-full h-full flex flex-col items-center py-4 md:py-8 px-4 md:px-[4rem] lg:px-[8rem]">
      <h2 className="text-xl md:text-3xl font-bold">Opinions</h2>

      {opinions.length===0?<div className="w-full h-screen flex items-center justify-center">
          <p className="text-base md:text-lg font-semibold text-gray-500">No news found</p>
        </div>:<div className=" grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 mt-3 md:mt-6">
        {opinions.map((opinion, index) => {
          return (
            <NewsCard key={index}>
              <NewsCard.Container style="flex flex-col odd:flex-col-reverse flex-shrink-0 gap-y-1 col-span-1 aspect-square h-full w-full ">
                <NewsCard.Photo
                  image={opinion.image}
                  style="w-full h-[50%] md:h-[60%] "
                />
                <NewsCard.Info style="w-full h-[50%] md:h-[40%]">
                  <NewsCard.Title
                    title={opinion.title}
                    link={opinion.link}
                    style="text-2xl lg:text-3xl line-clamp-3"
                  />
                  <NewsCard.Details />
                </NewsCard.Info>
              </NewsCard.Container>
            </NewsCard>
          );
        })}
      </div>}
      <div className="w-full  flex items-center justify-center gap-x-3 md:gap-x-6 mt-4 md:mt-8 ">
        <Link
          href={{
            pathname: "/opinion",
            query: {
              page: page > 1 ? page - 1 : 1,
            },
          }}
          className={`py-2 px-6 bg-black text-white text-sm rounded border hover:border-black hover:bg-white hover:text-black font-semibold ${
            page <= 1 ? "pointer-events-none opacity-50" : ""
          }`}
        >
          Prev
        </Link>
        <Link
          href={{
            pathname: "/opinion",
            query: {
              page: page + 1,
            },
          }}
          className={`py-2 px-6 bg-black text-white text-sm rounded border hover:border-black hover:bg-white hover:text-black font-semibold ${opinions.length===0?"pointer-events-none opacity-50":""}`}
        >
          Next
        </Link>
      </div>
    </section>
  );
};

export default Opinion;
