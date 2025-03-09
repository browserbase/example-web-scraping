# Browserbase Form Fill Examples

This repository contains examples of automating form submissions using Browserbase with different languages and frameworks. These examples accompany the [Browserbase documentation on automating form submissions](/automating-form-submissions).

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/browserbase/example-web-scraping.git
   cd example-web-scraping
   ```

2. Choose your preferred language/framework:

   ### Python (Playwright)
   Navigate to the Python implementation:
   ```bash
   cd python
   ```
   Follow the setup instructions in [python/README.md](python/README.md)

   ### Node.js
   Navigate to the Node.js implementation:
   ```bash
   cd node
   ```
   
   Choose between two approaches:
   - **Playwright**: Traditional Playwright implementation with Browserbase
   - **Stagehand**: AI-powered automation using Browserbase's Stagehand

   Both examples are in TypeScript and demonstrate form automation with different approaches.

## Environment Setup

Each implementation requires Browserbase credentials. Copy the appropriate `.env.example` file:

```bash
cp .env.example .env
```

Then fill in your credentials:
- `BROWSERBASE_API_KEY`: Your Browserbase API key
- `BROWSERBASE_PROJECT_ID`: Your Browserbase project ID
