import os
from playwright.sync_api import sync_playwright
from browserbase import Browserbase
from dotenv import load_dotenv

load_dotenv()

def create_session():
    """Creates a Browserbase session."""
    bb = Browserbase(api_key=os.environ["BROWSERBASE_API_KEY"])
    session = bb.sessions.create(
        project_id=os.environ["BROWSERBASE_PROJECT_ID"],
        # Add configuration options here if needed
    )
    return session

def web_scrape():
    """Automates form filling using Playwright with Browserbase."""
    session = create_session()
    print(f"View session replay at https://browserbase.com/sessions/{session.id}")

    with sync_playwright() as p:
        browser = p.chromium.connect_over_cdp(session.connect_url)

        # Get the default browser context and page
        context = browser.contexts[0]
        page = context.pages[0]

        # Navigate to the form page
        page.goto("https://books.toscrape.com/")

        # Extract the books from the page
        items = page.locator('article.product_pod')
        books = items.all()

        book_data_list = []
        for book in books:

            book_data = {
                "title": book.locator('h3 a').get_attribute('title'),
                "price": book.locator('p.price_color').text_content(),
                "image": book.locator('div.image_container img').get_attribute('src'),
                "inStock": book.locator('p.instock.availability').text_content().strip(),
                "link": book.locator('h3 a').get_attribute('href')
            }
            
            book_data_list.append(book_data)

        print("Shutting down...")
        page.close()
        browser.close()

        return book_data_list

if __name__ == "__main__":
    books = web_scrape()
    print(books)