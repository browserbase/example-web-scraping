import { Stagehand } from "@browserbasehq/stagehand";
import { z } from "zod";
import dotenv from "dotenv";
dotenv.config();

const stagehand = new Stagehand({
	env: "BROWSERBASE",
	verbose: 0,
});

async function scrapeBooks() {
	await stagehand.init();
	const page = stagehand.page;

	await page.goto("https://books.toscrape.com/");

    const scrape = await page.extract({
        instruction: "Extract the books from the page",
        schema: z.object({
            books: z.array(z.object({
                title: z.string(),
                price: z.string(),
                image: z.string(),
                inStock: z.string(),
                link: z.string(),
            }))
        }),
    });

    console.log(scrape.books);

    await stagehand.close();
    return books;
}

const books = scrapeBooks().catch(console.error);