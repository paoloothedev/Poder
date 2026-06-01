## Architecture Overview

Poder is a desktop application that automates the discovery and extraction of publicly available Facebook data. It uses a two-phase pipeline: first searching for profiles or hashtag content via Selenium browser automation, then scraping detailed information (follower counts, contact details, profile links) from each discovered URL. The application provides a PyQt5 graphical interface with real-time logging, history tracking, and optional auto-scraping that chains search results directly into the data extraction phase without manual intervention.

## Tech Stack & Why

- **Python 3** — Core language chosen for its ecosystem of web automation and data processing libraries.
- **PyQt5** — Provides the desktop GUI with styled widgets, threaded workers via `QThread`, and real-time UI updates through PyQt signals. Chosen over alternatives like Tkinter for its modern widget set and styling flexibility.
- **Selenium** — Drives a headless Chromium browser to navigate Facebook, scroll through search results, and render JavaScript-heavy pages. Required because Facebook's content is dynamically loaded and not accessible via simple HTTP requests.
- **BeautifulSoup 4** — Parses rendered HTML to extract structured data (follower counts, page names) that would be fragile to extract via Selenium locators alone.
- **pandas & openpyxl** — Exports scraped data to Excel (.xlsx) files with deduplication, Unicode normalization, and append-mode merging for ongoing data collection sessions.
- **cx_Freeze** — Packages the application into a standalone Windows executable for distribution.

## Key Implementation Details

The application is organized into three core modules plus the main UI entry point:

- **`Ui.py`** — Defines the main window class (`ModernGUI`) with a sidebar, search bar with filter dropdown, dual logging panels (search + scraping), and a scrollable history sidebar. Background work is delegated to `QThread` subclasses (`SearchWorker`, `ScraperWorker`, `HashtagSearchWorker`) to keep the interface responsive.

- **`Search_by_name.py` / `Search_by_hashtag.py`** — Both implement a `FacebookPageSearcher` class that loads session cookies, navigates to Facebook search URLs (pages/posts/people or hashtag pages), and collects profile links by scrolling through infinite-feed content. Results are saved to timestamped text files.

- **`DataScraper_core.py`** — The `FacebookScraper` class visits each collected profile URL, extracts follower counts, email addresses, phone numbers, and profile links, then saves the structured data to Excel via pandas.

Thread management is a central architectural concern. Each worker emits `progress` and `finished` signals that the UI connects to log displays, loading overlays, and completion handlers. The `stop_scraping()` method sets an `is_running` flag checked between iterations, allowing graceful cancellation mid-pipeline.

## Data Flow

```
User enters query + selects filter (Pages/Posts/People/Hashtag)
  → SearchWorker opens headless Chrome, loads cookies from local session store
  → Navigates to Facebook search URL, scrolls infinite feed, collects profile links
  → Saves URLs to timestamped .txt file in `results/`
  → If auto-scraping enabled: passes URLs directly to ScraperWorker
    → ScraperWorker visits each profile, extracts structured data via Selenium + BeautifulSoup
    → Saves to .xlsx with deduplication against existing results
  → UI updates history panel with new search card
```

Search result filenames encode query, result count, date, and time (e.g., `query&pages&10&2025-01-15&14-30-00.txt`), enabling the history panel to parse and display metadata without a database.

## Challenges & Solutions

**Facebook's dynamic infinite-scroll content.** Standard HTTP requests return no useful data. Solved by using Selenium with headless Chrome, scroll-position tracking, and stale-element reference handling to reliably collect content across page loads.

**Session persistence.** Facebook requires authentication to show search results. Solved with a cookie-based session system: `cookies_maker.py` opens a browser for manual login once, serializes the session cookies to a pickle file, and all subsequent runs load these cookies before navigating.

**Maintaining UI responsiveness during blocking I/O.** Selenium operations can take minutes. Solved with the `QThread` + signal pattern — all browser automation runs in worker threads, and UI updates are dispatched via PyQt signals to the main thread.

**Robust data export.** Profile data may be collected across multiple sessions. The Excel exporter merges new data with existing files, deduplicates by URL (keeping the latest scrape), and normalizes Unicode to handle Arabic and other non-Latin text common on Facebook.

**Cross-platform distribution.** Dependency-heavy Python applications are difficult to distribute. cx_Freeze bundles the interpreter, all dependencies, and assets into a single Windows installer, though the development workflow remains cross-platform.
