import News from "@/libs/mongodb/model/newsSchema";
import connectMongo from "../../../libs/mongodb/connect"
import puppeteer from "puppeteer";
const baseUrl = process.env.URL1
const url = process.env.URL1

export async function POST(request) {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);

    const newsData = await page.evaluate((baseUrl) => {
      const headlinesColumns = document.querySelectorAll(
        ".pane-home-top-v5 .pane-content .row .columns"
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
            image:
              headline
                .querySelector(".card-image img")
                ?.getAttribute("data-srcset") ?? "",
          }));
          return headlinesData;
        }
      );

      return headlineCards.flat();
      // Flatten the array of headlinesData arrays
    }, baseUrl);
    await browser.close();


    //connect mongodb
    await  connectMongo().catch(error => NextResponse.json({ message: "Connection Failed...!"}))
   
    //delete previous data in mongodb
    await News.deleteMany({});

    //insert new data in mongodb
     await News.create(newsData);
     console.log("News Database Updated Successfully")
   
  } catch (error) {
    console.log(error);
  }
}
