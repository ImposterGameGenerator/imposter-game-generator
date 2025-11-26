# 🎮 Imposter Game Word Generator

![GitHub Stars](https://img.shields.io/github/stars/ImposterGameGenerator/imposter-game-generator?style=social)
![License](https://img.shields.io/github/license/ImposterGameGenerator/imposter-game-generator)
![Languages](https://img.shields.io/badge/languages-5-brightgreen)

> A free, multilingual word generator for imposter games. Generate random words instantly in 5 languages with 8 themed categories.

[🎮 Live Demo](https://impostergame.net/imposter-game-generator) | [📖 Documentation](#documentation) | [🤝 Contributing](#contributing)

---

## ✨ Features

### 🌍 Multi-Language Support
- **English** - For international players
- **中文 (Chinese)** - 为中文用户提供
- **日本語 (Japanese)** - 日本のプレイヤー向け
- **한국어 (Korean)** - 한국 플레이어를 위한
- **Español (Spanish)** - Para jugadores hispanohablantes

### 🎨 Rich Theme Categories
| Theme | Words | Difficulty Levels |
|-------|-------|-------------------|
| 🦁 Animals | 20 words/lang | Easy, Medium, Hard |
| ⚽ Sports & Athletics | 20 words/lang | Easy, Medium, Hard |
| 🎬 Movies & Entertainment | 20 words/lang | Easy, Medium, Hard |
| 🍕 Food & Cuisine | 20 words/lang | Easy, Medium, Hard |
| 💻 Technology | 20 words/lang | Easy, Medium, Hard |
| 🎵 Music & Instruments | 20 words/lang | Easy, Medium, Hard |
| 🌍 Countries & Places | 20 words/lang | Easy, Medium, Hard |
| 🎨 Colors & Shades | 20 words/lang | Easy, Medium, Hard |

**Total: 800 words** (20 words × 8 themes × 5 languages)

### 🎯 Core Features
- ✅ **Adjustable Count**: 5-20 words per generation
- ✅ **Export Options**: Copy to clipboard & Download as .txt file
- ✅ **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- ✅ **No Registration**: Start using immediately
- ✅ **Offline Ready**: All data stored locally
- ✅ **Keyboard Shortcuts**: Ctrl/Cmd + G to generate, Ctrl/Cmd + C to copy
- ✅ **True Randomness**: Fisher-Yates shuffle algorithm

---

## 🚀 Quick Start

### Option 1: Use Online (Recommended)
Visit **[https://impostergame.net/imposter-game-generator](https://impostergame.net/imposter-game-generator)** to start generating words immediately!

### Option 2: Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/ImposterGameGenerator/imposter-game-generator.git
   cd imposter-game-generator
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your web browser
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

3. **Or use a local server**
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (http-server)
   npx http-server

   # Using PHP
   php -S localhost:8000
   ```

   Then visit `http://localhost:8000`

---

## 🎯 Use Cases

Perfect for:
- 🎲 **Party Games** - Generate words for imposter/chameleon games
- 👥 **Team Building** - Icebreaker activities
- 🏫 **Language Learning** - Practice vocabulary in 5 languages
- 🧠 **Creative Inspiration** - Random word prompts
- 🎓 **Educational Activities** - Classroom games

---

## 📦 Project Structure

```
imposter-game-generator/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css         # Main styles
│   ├── animations.css     # Animation effects
│   └── responsive.css     # Responsive design
├── js/
│   ├── app.js            # Main application logic
│   ├── generator.js      # Word generation logic
│   ├── i18n.js           # Internationalization system
│   ├── wordPacks.js      # Word data (800 words)
│   ├── seo-content.js    # SEO content builder
│   └── utils.js          # Utility functions
├── data/
│   └── translations.json # UI translations
├── assets/
│   └── icons/           # Favicon and icons
├── README.md            # This file
├── LICENSE              # MIT License
└── CONTRIBUTING.md      # Contribution guidelines
```

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with TailwindCSS CDN
- **Vanilla JavaScript (ES6+)** - No frameworks, zero dependencies
- **Fisher-Yates Algorithm** - True random shuffling
- **LocalStorage API** - State persistence
- **Clipboard API** - Copy functionality
- **Blob API** - File download

---

## 📖 Documentation

- [Quick Start Guide](START.md) - Get started in 3 steps
- [Testing Guide](TESTING.md) - Comprehensive testing instructions
- [Deployment Guide](DEPLOYMENT.md) - Deploy to Netlify, Vercel, GitHub Pages
- [Project Summary](PROJECT-SUMMARY.md) - Technical overview
- [Changelog](CHANGELOG.md) - Version history

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Adding New Languages
1. Add word packs to `js/wordPacks.js`
2. Add UI translations to `data/translations.json`
3. Register language in `js/i18n.js`
4. Add language option in `index.html`

### Adding New Themes
1. Add 20 words per language in `js/wordPacks.js`
2. Add theme name translations in `data/translations.json`
3. Add theme option in `index.html`

### Reporting Issues
Found a bug? [Open an issue](https://github.com/ImposterGameGenerator/imposter-game-generator/issues)

### Submitting Pull Requests
Read our [Contributing Guide](CONTRIBUTING.md) for detailed instructions.

---

## 🌟 Why This Generator?

| Feature | This Generator | Others |
|---------|---------------|--------|
| Languages | 5 (EN, ZH, JA, KO, ES) | Usually 1-2 |
| Themes | 8 categories | Limited |
| Words | 800 total | Often < 200 |
| Cost | 100% Free | May have premium |
| Registration | Not required | Often required |
| Offline | Works offline | Requires internet |
| Open Source | Yes (MIT) | Often proprietary |

---

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome)

---

## 📄 License

MIT License - Feel free to use and modify

Copyright (c) 2025 Imposter Game Generator

See [LICENSE](LICENSE) for details.

---

## 🔗 Related Projects

- **[ImposterGame.net](https://impostergame.net)** - Play the full online imposter game with friends
- Create private game rooms
- Real-time multiplayer
- Track stats and achievements

---

## 💡 Acknowledgments

- Inspired by classic imposter/chameleon party games
- Built with ❤️ for game enthusiasts worldwide
- Special thanks to all contributors

---

## 📞 Support

- 🐛 [Report Issues](https://github.com/ImposterGameGenerator/imposter-game-generator/issues)
- 💬 [Discussions](https://github.com/ImposterGameGenerator/imposter-game-generator/discussions)
- 📧 Contact: [Your Email]

---

## ⭐ Star History

If you find this project helpful, please consider giving it a star!

[![Star History Chart](https://api.star-history.com/svg?repos=ImposterGameGenerator/imposter-game-generator&type=Date)](https://star-history.com/#ImposterGameGenerator/imposter-game-generator&Date)

---

<div align="center">

**Made with ❤️ for game enthusiasts worldwide**

[⬆ Back to Top](#-imposter-game-word-generator)

</div>
