import { getCultures } from "@/libs/utils";
import React from "react";
import NewsCard from "../NewsCard";

const CultureContainer = async () => {
  const cultures = await getCultures();
  const culturesWithImage = cultures.filter((culture) => culture.image !== "");

  return (
    <section className="h-full  py-2 md:grid md:grid-cols-10 gap-x-2 ">
      <div className="grid grid-cols-2  gap-x-2 gap-y-2 md:col-span-4">
        {[0, 1].map((number, index) => (
          <NewsCard key={index}>
            <NewsCard.Container style="col-span-1 flex flex-col  md:gap-x-3  md:gap-y-0 gap-y-1  ">
              <NewsCard.Photo
                image={culturesWithImage[number].image}
                style="w-full  aspect-[16/10] md:aspect-[16/14]"
              />
              <NewsCard.Info>
                <NewsCard.Title
                  title={culturesWithImage[number].title}
                  link={culturesWithImage[number].link}
                />
                <NewsCard.Details />
              </NewsCard.Info>
            </NewsCard.Container>
          </NewsCard>
        ))}
        <NewsCard >
          <NewsCard.Container style="col-span-2   flex flex-row  gap-x-3  md:gap-y-0 gap-y-1  ">
            <NewsCard.Photo
              image={culturesWithImage[2].image}
              style="w-[40%]  aspect-video  md:aspect-[16/14] "
            />
            <NewsCard.Info>
              <NewsCard.Title
                title={culturesWithImage[2].title}
                link={culturesWithImage[2].link}
              />
              <NewsCard.Details />
            </NewsCard.Info>
          </NewsCard.Container>
        </NewsCard>
      </div>

      <div className="w-full py-2 flex items-center justify-center md:items-center md:py-4 md:col-span-2">
        <div className="w-32 md:w-44 xl:w-52 aspect-square rounded-full p-1 md:p-3 bg-black  flex flex-col items-center justify-center ">
          <span className="text-lg text-white">C</span>
          <p className="text-[0.6rem]  text-gray-300 text-center">share your culture stories confidently with us</p>
        </div>
      </div>
      <div className="grid grid-cols-2  gap-x-2 gap-y-2 md:col-span-4">
        {[3,4].map((number, index) => (
          <NewsCard key={index}>
            <NewsCard.Container style="col-span-1  flex flex-col  md:gap-x-3  md:gap-y-0 gap-y-1  ">
              <NewsCard.Photo
                image={culturesWithImage[number].image}
                style="w-full  aspect-[16/10]  md:aspect-[16/14] "
              />
              <NewsCard.Info>
                <NewsCard.Title
                  title={culturesWithImage[number].title}
                  link={culturesWithImage[number].link}
                />
                <NewsCard.Details />
              </NewsCard.Info>
            </NewsCard.Container>
          </NewsCard>
        ))}
        <NewsCard >
          <NewsCard.Container style="col-span-2   flex flex-row   gap-x-3  md:gap-y-0 gap-y-1  ">
            <NewsCard.Photo
              image={culturesWithImage[5].image}
              style="w-[40%]  aspect-video  md:aspect-[16/14] "
            />
            <NewsCard.Info>
              <NewsCard.Title
                title={culturesWithImage[5].title}
                link={culturesWithImage[5].link}
              />
              <NewsCard.Details />
            </NewsCard.Info>
          </NewsCard.Container>
        </NewsCard>
      </div>
    </section>
  );
};

export default CultureContainer;
