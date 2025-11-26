# Contributing to Imposter Game Word Generator

Thank you for considering contributing to the Imposter Game Word Generator! We welcome contributions from everyone.

## 🌟 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue on our [Issues page](https://github.com/yourusername/imposter-game-generator/issues) with the following information:

- **Bug Description**: A clear and concise description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce the issue
- **Expected Behavior**: What you expected to happen
- **Actual Behavior**: What actually happened
- **Environment**:
  - Browser and version
  - Operating system
  - Device type (desktop/mobile/tablet)
- **Screenshots**: If applicable, add screenshots to help explain the problem

### Suggesting Features

We love to hear new ideas! To suggest a feature:

1. Check if the feature has already been requested in [Discussions](https://github.com/yourusername/imposter-game-generator/discussions)
2. If not, create a new discussion with:
   - Clear description of the feature
   - Use case: Why this feature would be useful
   - Possible implementation approach (if you have ideas)

### Submitting Code

1. **Fork the Repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/imposter-game-generator.git
   cd imposter-game-generator
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Make Your Changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments where necessary
   - Test your changes thoroughly

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Add: Brief description of your changes"
   ```

   Commit message format:
   - `Add:` for new features
   - `Fix:` for bug fixes
   - `Update:` for updates to existing features
   - `Refactor:` for code refactoring
   - `Docs:` for documentation changes

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill in the PR template with details
   - Submit the PR

## 📝 Code Style Guidelines

### JavaScript
- Use ES6+ syntax
- Use meaningful variable and function names
- Add JSDoc comments for functions
- Keep functions small and focused
- Avoid global variables

Example:
```javascript
/**
 * Generate random words from a theme
 * @param {string} theme - Theme name
 * @param {number} count - Number of words
 * @param {string} locale - Language code
 * @returns {string[]} Array of words
 */
function generateWords(theme, count, locale) {
  // Implementation
}
```

### HTML
- Use semantic HTML5 tags
- Keep indentation consistent (2 spaces)
- Add `data-i18n` attributes for translatable text
- Use meaningful class names

### CSS
- Follow existing naming conventions
- Use TailwindCSS classes where possible
- Add comments for complex styles
- Keep selectors simple

## 🌍 Adding New Languages

To add a new language:

1. **Add Word Packs** (`js/wordPacks.js`)
   ```javascript
   export const wordPacks = {
     // ... existing languages
     fr: {  // French
       animals: ['chat', 'chien', 'oiseau', ...],
       sports: ['football', 'tennis', 'natation', ...],
       // ... all 8 themes
     }
   };
   ```

2. **Add UI Translations** (`data/translations.json`)
   ```json
   {
     "fr": {
       "generator": {
         "title": "Générateur de mots",
         "subtitle": "Générez des mots aléatoires..."
       }
     }
   }
   ```

3. **Register Language** (`js/i18n.js`)
   ```javascript
   const supportedLocales = ['en', 'zh', 'ja', 'ko', 'es', 'fr'];
   ```

4. **Add Language Option** (`index.html`)
   ```html
   <a href="/fr" class="language-option" data-lang="fr">
     <span>🇫🇷</span>
     <span>Français</span>
   </a>
   ```

5. **Test All Features**
   - Language switching
   - Word generation
   - All themes
   - Export functions

## 🎨 Adding New Themes

To add a new theme:

1. **Add 20 words for EACH language** in `js/wordPacks.js`
   ```javascript
   export const wordPacks = {
     en: {
       // ... existing themes
       professions: ['doctor', 'teacher', 'engineer', ...]  // 20 words
     },
     zh: {
       // ... existing themes
       professions: ['医生', '教师', '工程师', ...]  // 20 words
     },
     // ... repeat for ja, ko, es
   };
   ```

2. **Add Theme Translations** (`data/translations.json`)
   ```json
   {
     "en": {
       "generator": {
         "themes": {
           "professions": "Professions"
         }
       }
     }
   }
   ```

3. **Add Theme Selector Option** (`index.html`)
   ```html
   <option value="professions" data-i18n="generator.themes.professions">
     Professions
   </option>
   ```

4. **Update Documentation**
   - Update README.md with new theme count
   - Update TESTING.md testing checklist

## ✅ Testing Guidelines

Before submitting a PR, please test:

### Functionality
- [ ] Word generation works for all themes
- [ ] All difficulty levels work
- [ ] Copy to clipboard works
- [ ] Download works
- [ ] Language switching works
- [ ] All UI elements are translated

### Responsiveness
- [ ] Desktop (1920x1080, 1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667, 414x896)

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Performance
- [ ] Page loads in < 3 seconds
- [ ] No console errors
- [ ] Smooth animations

## 📋 Pull Request Checklist

Before submitting your PR, ensure:

- [ ] Code follows the style guidelines
- [ ] All tests pass (manual testing)
- [ ] No console errors or warnings
- [ ] Documentation is updated (if needed)
- [ ] Commit messages are clear and descriptive
- [ ] PR description explains what and why
- [ ] Screenshots included (for UI changes)

## 🚫 What NOT to Do

- Don't submit PRs with unrelated changes
- Don't include large files or dependencies
- Don't remove existing features without discussion
- Don't submit incomplete work
- Don't ignore code style guidelines

## 🤝 Code of Conduct

### Our Standards

- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards others
- Use welcoming and inclusive language

### Unacceptable Behavior

- Harassment or discriminatory comments
- Trolling or insulting comments
- Personal or political attacks
- Publishing others' private information
- Unprofessional conduct

## 📞 Questions?

If you have questions about contributing:

- Check existing [Discussions](https://github.com/yourusername/imposter-game-generator/discussions)
- Open a new discussion in the Q&A category
- Read the [documentation](README.md)

## 🎉 Recognition

All contributors will be recognized in:
- GitHub contributors page
- Project documentation
- Release notes (for significant contributions)

Thank you for making Imposter Game Word Generator better! 🙏

---

## Quick Links

- [README](README.md)
- [Code of Conduct](#-code-of-conduct)
- [Issues](https://github.com/yourusername/imposter-game-generator/issues)
- [Pull Requests](https://github.com/yourusername/imposter-game-generator/pulls)
- [Discussions](https://github.com/yourusername/imposter-game-generator/discussions)
