# Poder

Advanced Facebook data extraction tool with a modern PyQt5 interface.  
Built with Python, powered by Selenium.

## 🚀 Features

- **Facebook Search** — Search by name or hashtag with enhanced precision
- **Multi-threaded Scraping** — Faster data collection with parallel processing
- **Progress Tracking** — Detailed logs and real-time progress indicators
- **Modern UI** — Sleek PyQt5 interface designed for optimal UX
- **Auto-Scraping Mode** — Continuous data extraction without manual intervention
- **Data Storage** — Save scraped data in structured format

## 📦 Download

| Package | Description |
|---|---|
| [`setup.exe`](https://lordpaoloo.github.io/Poder/resources/setup.exe) | Windows installer (64-bit) |
| [`cookies_maker.py`](https://lordpaoloo.github.io/Poder/cookies_maker.py) | Generate Facebook session cookies |

### Cookie Setup

Poder needs Facebook session cookies to work. Use the `cookies_maker.py` script:

1. Install Python 3
2. `pip install selenium`
3. Download ChromeDriver matching your Chrome version
4. Run `python cookies_maker.py`
5. Log into Facebook in the browser that opens
6. Press Enter — cookies saved to `cookies.pkl`

## 🛠️ Development

```bash
# Clone the repo
git clone https://github.com/lordpaoloo/Poder.git
cd Poder

# Website (React + Vite)
npm install
npm run dev       # local dev server
npm run build     # production build in dist/

# Python app
cd sourcecode
pip install -r requirements.txt
python Ui.py
```

## 🏗️ Project Structure

```
Poder/
├── src/                  # React website source
│   ├── components/       # UI components
│   ├── App.jsx           # Main app layout
│   └── App.css           # Styles
├── public/               # Static assets
│   ├── resources/        # setup.exe, icons
│   └── cookies_maker.py  # Cookie generator
├── sourcecode/           # Python desktop app
│   ├── Ui.py             # PyQt5 interface
│   ├── modules/          # Scraping modules
│   └── cookies_maker.py  # Cookie generator script
├── index.html            # Vite entry point
├── netlify.toml          # Netlify deploy config
└── package.json
```

## 🌐 Website

The landing page is a React app built with Vite and deployed on Netlify.  
Visit: [lordpaoloo.github.io/Poder](https://lordpaoloo.github.io/Poder)

To deploy your own:
1. Fork this repo
2. Connect to [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## 🤝 Contributing

Contributions are welcome! Open issues, suggest features, or submit pull requests.

- Open an [issue](https://github.com/lordpaoloo/Poder/issues)
- Reach out on Discord: **lordpaolo**

## 📄 License

This project is licensed under the MIT License — see [LICENSE](sourcecode/LICENSE).
