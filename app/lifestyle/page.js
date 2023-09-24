import NewsCard from "@/components/NewsCard";
import { getLifestyles } from "@/libs/utils";
import Link from "next/link";
import React, { Suspense } from "react";
import LifestyleSkeleton from "./LifestyleSkeleton";

const Lifestyle = async ({ searchParams }) => {
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 8;
  const lifestyles = await getLifestyles(page, limit);

  return (
    <section className="w-full h-full flex flex-col items-center py-4 md:py-8 px-4 md:px-[4rem] lg:px-[8rem]">
      <h2 className="text-xl md:text-3xl font-bold">Lifestyles</h2>

      {lifestyles.length === 0 ? (
        <div className="w-full h-screen flex items-center justify-center">
          <p className="text-base md:text-lg font-semibold text-gray-500">
            No news found
          </p>
        </div>
      ) : (
        <Suspense fallback={<LifestyleSkeleton/>}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 mt-3 md:mt-6">
            {lifestyles.map((lifestyle, index) => {
              return (
                <NewsCard key={index}>
                  <NewsCard.Container style="w-full aspect-[2/2.1] h-full sm:aspect-[2/0.8] sm:flex sm:odd:flex-row-reverse sm:gap-x-2">
                    <NewsCard.Photo
                      image={lifestyle.image}
                      style="w-full h-[70%] sm:w-1/2 sm:h-full  "
                    />
                    <NewsCard.Info style="w-full h-[30%] sm:h-full">
                      <NewsCard.Title
                        title={lifestyle.title}
                        link={lifestyle.link}
                      />
                      <NewsCard.Details />
                    </NewsCard.Info>
                  </NewsCard.Container>
                </NewsCard>
              );
            })}
          </div>
        </Suspense>
      )}
      <div className="w-full  flex items-center justify-center gap-x-3 md:gap-x-6 mt-4 md:mt-8 ">
        <Link
          href={{
            pathname: "/lifestyle",
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
            pathname: "/lifestyle",
            query: {
              page: page + 1,
            },
          }}
          className={`py-2 px-6 bg-black text-white text-sm rounded border hover:border-black hover:bg-white hover:text-black font-semibold ${
            lifestyles.length === 0 ? "pointer-events-none opacity-50" : ""
          }`}
        >
          Next
        </Link>
      </div>
    </section>
  );
};

export default Lifestyle;
