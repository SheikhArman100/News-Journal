import Opinion from "@/libs/mongodb/model/opinionSchema";
import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import connectMongo from "../../../libs/mongodb/connect";
const baseUrl = process.env.URL;
const url = process.env.URL2;

export async function POST(request) {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);

    const newsData = await page.evaluate((baseUrl) => {
      const headlinesColumns = document.querySelectorAll(
        ".pane-category-news .pane-content .row .columns"
      );
      const headlineCards = Array.from(headlinesColumns).map(
        (headlinesColumn) => {
          const headlines = headlinesColumn.querySelectorAll(".card");
          const headlinesData = Array.from(headlines).map((headline) => ({
            title: headline.querySelector(".card-content .title a").innerText,
            link:
              baseUrl +
              headline
                .querySelector(".card-content .title a")
                .getAttribute("href"),
            image:(headline.querySelector(".card-image img")?.getAttribute("data-srcset") || "")
          .replace(/\.jpg\s.*$/, ".jpg") //remove text after .jpg like 470w
          .replace(/\.png\s.*$/, ".png") //remove text after .png like 470w
          .replace(/\/medium_203\//, "/very_big_1/")//this will give me big image
          .replace(/\/medium_201\//, "/very_big_1/")//this will give me big image
          .replace(/\/small_202\//, "/very_big_1/")//this will give me big image
          }));
          return headlinesData;
        }
      );

      return headlineCards.flat();
      // Flatten the array of headlinesData arrays
    }, baseUrl);
    await browser.close();

    //connect mongodb
    await connectMongo().catch((error) =>
      NextResponse.json({ message: "Connection Failed...!" })
    );

    //delete previous data in mongodb
    await Opinion.deleteMany({});

    //insert new data in mongodb
    await Opinion.create(newsData);
    console.log("Opinions Database Updated Successfully");
  } catch (error) {
    console.log(error);
  }
}

//get Opinions
export async function GET() {
  //connect mongodb
  connectMongo().catch((error) =>
    NextResponse.json({ message: "Connection Failed...!" })
  );
  const resData = await Opinion.find();
  const opinion=resData.json()
  return NextResponse.json(opinion);
}
