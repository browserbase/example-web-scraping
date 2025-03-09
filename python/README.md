# Python Web Scraping Demo

This demo shows how to automate web scraping using Playwright and Browserbase.

## Setup

1. Create and activate a virtual environment:

   **Windows:**
   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```

   **macOS/Linux:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your API keys:
     - `BROWSERBASE_API_KEY`: Your Browserbase API key
     - `BROWSERBASE_PROJECT_ID`: Your Browserbase project ID

## Running the Demo

The `web_scraping.py` script demonstrates automated web scraping. It will:
- Create a new Browserbase session
- Navigate to a website
- Extract data from the website
- Print the data

Run the script:
```bash
python web_scraping.py
```

The script will print a URL where you can view the session replay on Browserbase.
