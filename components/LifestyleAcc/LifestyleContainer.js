import { getCultures, getLifestyles } from "@/libs/utils";
import React from "react";
import NewsCard from "../NewsCard";
import Link from "next/link";

const LifestyleContainer = async () => {
  const lifestylesWithImage = await getLifestyles();
  

  return (
    <section className="h-full py-2  ">
      <div className="flex flex-col md:grid md:grid-cols-7 md:gap-x-2 gap-y-2">
        <div className="grid grid-cols-2 md:col-span-5 md:grid-cols-7 md:grid-rows-10 gap-2 md:gap-3 md:mt-4">
          {/* ----------------------0----------------------- */}
          <NewsCard>
            <NewsCard.Container style="col-span-1 md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-5 flex flex-col   gap-y-1  ">
              <NewsCard.Photo
                image={lifestylesWithImage[0].image}
                style="w-full  aspect-[16/12] md:aspect-[16/8] lg:aspect-[16/5.5] "
              />
              <NewsCard.Info>
                <NewsCard.Title
                  title={lifestylesWithImage[0].title}
                  link={lifestylesWithImage[0].link}
                />
                <NewsCard.Details />
              </NewsCard.Info>
            </NewsCard.Container>
          </NewsCard>
          {/* ----------------------1----------------------- */}
          <NewsCard>
            <NewsCard.Container style="col-span-1 md:col-start-5 md:col-end-8 md:row-start-3 md:row-end-[7]  flex flex-col   gap-y-1  ">
              <NewsCard.Photo
                image={lifestylesWithImage[1].image}
                style="w-full  aspect-[16/12] lg:aspect-[16/8] "
              />
              <NewsCard.Info>
                <NewsCard.Title
                  title={lifestylesWithImage[1].title}
                  link={lifestylesWithImage[1].link}
                />
                <NewsCard.Details />
              </NewsCard.Info>
            </NewsCard.Container>
          </NewsCard>
          {/* ----------------------2----------------------- */}
          <NewsCard>
            <NewsCard.Container style="col-span-1 md:col-start-1 md:col-end-4 md:row-start-6 md:row-end-[10]  flex flex-col   gap-y-1  ">
              <NewsCard.Photo
                image={lifestylesWithImage[2].image}
                style="w-full  aspect-[16/12] md:aspect-[16/10.5] xl:aspect-[16/7] "
              />
              <NewsCard.Info>
                <NewsCard.Title
                  title={lifestylesWithImage[2].title}
                  link={lifestylesWithImage[2].link}
                />
                <NewsCard.Details />
              </NewsCard.Info>
            </NewsCard.Container>
          </NewsCard>
          {/* ----------------------3----------------------- */}
          <NewsCard>
            <NewsCard.Container style="col-span-1  flex flex-col md:col-start-4 md:col-end-8 md:row-start-[7] md:row-end-[11]   gap-y-1  ">
              <NewsCard.Photo
                image={lifestylesWithImage[3].image}
                style="w-full  aspect-[16/12] md:aspect-[16/8.5] lg:aspect-[16/5.5] "
              />
              <NewsCard.Info>
                <NewsCard.Title
                  title={lifestylesWithImage[3].title}
                  link={lifestylesWithImage[3].link}
                />
                <NewsCard.Details />
              </NewsCard.Info>
            </NewsCard.Container>
          </NewsCard>
        </div>
        <div className="flex flex-col gap-y-2 md:col-span-2 md:grid md:grid-rows-10">
          {/* --------------------------4------------------------------- */}
          <NewsCard>
            <NewsCard.Container style="col-span-1 flex md:flex-col md:row-start-1 md:row-end-6 gap-x-2  ">
              <NewsCard.Photo
                image={lifestylesWithImage[4].image}
                style="w-[40%] md:w-full  aspect-[16/12] md:aspect-[16/14] lg:aspect-[15/10.5]"
              />
              <NewsCard.Info>
                <NewsCard.Title
                  title={lifestylesWithImage[4].title}
                  link={lifestylesWithImage[4].link}
                />
                <NewsCard.Details />
              </NewsCard.Info>
            </NewsCard.Container>
          </NewsCard>
          {/* --------------------------5------------------------------- */}
          <NewsCard>
            <NewsCard.Container style="col-span-1 flex md:flex-col gap-x-2 md:row-start-7 md:row-end-[11] ">
              <NewsCard.Photo
                image={lifestylesWithImage[5].image}
                style="w-[40%] md:w-full  aspect-[16/12] md:aspect-[16/11] lg:aspect-[16/7] "
              />
              <NewsCard.Info>
                <NewsCard.Title
                  title={lifestylesWithImage[5].title}
                  link={lifestylesWithImage[5].link}
                />
                <NewsCard.Details />
              </NewsCard.Info>
            </NewsCard.Container>
          </NewsCard>
        </div>
      </div>
      <div className='w-full flex items-center justify-center mt-4 '><Link href="/lifestyle" className='py-2 px-4 text-sm rounded md:text-base bg-black text-white border hover:border-black hover:text-black hover:bg-white'>See more</Link></div>
    </section>
  );
};

export default LifestyleContainer;
