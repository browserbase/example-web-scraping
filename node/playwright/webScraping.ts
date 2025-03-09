import { chromium } from "playwright-core";
import { Browserbase } from "@browserbasehq/sdk";
import * as dotenv from "dotenv";
dotenv.config();

async function createSession() {
    const bb = new Browserbase({ apiKey: process.env.BROWSERBASE_API_KEY });
    const session = await bb.sessions.create({
        projectId: process.env.BROWSERBASE_PROJECT_ID!,
    });

    return session;
}

async function scrapeBooks() {  
    const session = await createSession();
    const browser = await chromium.connectOverCDP(session.connectUrl);
    const defaultContext = browser.contexts()[0];
    const page = defaultContext.pages()[0];
    
    // Navigate to site
    await page.goto("https://books.toscrape.com/");

    // Extract the books from the page
    const books = await page.evaluate(() => {
        const items = document.querySelectorAll("article.product_pod");
        return Array.from(items).map(item => {
        const titleElement = item.querySelector("h3 > a");
        const priceElement = item.querySelector("p.price_color");
        const imageElement = item.querySelector("img");
        const inStockElement = item.querySelector("p.instock.availability");
        const linkElement = item.querySelector("h3 > a");

        return {
            title: titleElement?.getAttribute("title"),
            price: priceElement?.textContent,
            image: imageElement?.src,
            inStock: inStockElement?.textContent?.trim(),
            link: linkElement?.getAttribute("href")
        };
        });
    });

    await browser.close();
    return books;
}

const books = scrapeBooks().catch(console.error);
console.log(books);