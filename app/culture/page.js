import NewsCard from "@/components/NewsCard";
import { getCultures } from "@/libs/utils";
import React from "react";

const Culture = async () => {
  const cultures = await getCultures();
  const culturesWithImage = cultures.filter((culture) => culture.image !== "");
  return (
    <section className="w-full h-full flex flex-col items-center py-4 md:py-8 px-4 md:px-[4rem] lg:px-[8rem]">
      <h2 className="text-xl md:text-3xl font-bold">Cultures</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6 mt-3 md:mt-6">
        {culturesWithImage.map((culture, index) => {
          return (
            <NewsCard key={index} >
              <NewsCard.Container style="flex flex-col flex-shrink-0 gap-y-1 col-span-1 aspect-[1.5/2] md:aspect-square h-full">
                <NewsCard.Photo
                  image={culture.image}
                  style="w-full h-[50%] lg:h-[60%]"
                />
                <NewsCard.Info style="w-full h-[50%] md:h-[40%]">
                  <NewsCard.Title title={culture.title} link={culture.link} />
                  <NewsCard.Details />
                </NewsCard.Info>
              </NewsCard.Container>
            </NewsCard>
          );
        })}
      </div>
    </section>
  );
};

export default Culture;
