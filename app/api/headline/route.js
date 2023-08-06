
import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import connectMongo from "../../../libs/mongodb/connect";
import Headline from "@/libs/mongodb/model/headlineSchema";
const baseUrl = process.env.URL;
const url = process.env.URL;
export async function POST(request) {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url);

    const newsData = await page.evaluate((baseUrl) => {
      const title = document.querySelector(".pane-home-top-v5 .pane-content .row .columns .card .card-content .title a").innerText;
      const link = baseUrl + document.querySelector(".pane-home-top-v5 .pane-content .row .columns .card .card-content .title a").getAttribute("href");
      const image = (document.querySelector(".pane-home-top-v5 .pane-content .row .columns .card .card-image img")?.getAttribute("data-srcset") || "")
        .replace(/\.jpg\s.*$/, ".jpg") // Remove text after .jpg like 470w
        .replace(/\/big_201\//, "/very_big_1/");

      return { title, link, image };
    }, baseUrl);

    await browser.close();

    //connect mongodb
    await connectMongo().catch((error) =>
      NextResponse.json({ message: "Connection Failed...!" })
    );

    //delete previous data in mongodb
    await Headline.deleteMany({});

    //insert new data in mongodb
    await Headline.create(newsData);
    console.log("Headline Database Updated Successfully");
  } catch (error) {
    console.log(error);
  }
}

//get News
export async function GET() {
  //connect mongodb
   connectMongo().catch((error) =>
    NextResponse.json({ message: "Connection Failed...!" })
  );
  const resData = await Headline.find();
  return NextResponse.json({resData});
}
