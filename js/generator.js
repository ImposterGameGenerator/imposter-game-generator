// Generator Core Logic
// 生成器核心逻辑

class WordGenerator {
  constructor() {
    this.currentLocale = 'en';
    this.currentTheme = 'animals';
    this.currentDifficulty = 'medium';
    this.wordCount = 10;
    this.generatedWords = [];
  }

  /**
   * 设置当前语言
   * @param {string} locale - 语言代码
   */
  setLocale(locale) {
    if (WORD_PACKS[locale]) {
      this.currentLocale = locale;
    }
  }

  /**
   * 设置主题
   * @param {string} theme - 主题名称
   */
  setTheme(theme) {
    this.currentTheme = theme;
  }

  /**
   * 设置难度
   * @param {string} difficulty - 难度等级
   */
  setDifficulty(difficulty) {
    this.currentDifficulty = difficulty;
  }

  /**
   * 设置词汇数量
   * @param {number} count - 词汇数量
   */
  setWordCount(count) {
    this.wordCount = Math.max(5, Math.min(20, count));
  }

  /**
   * 生成词汇列表
   * @returns {Array} - 生成的词汇数组
   */
  generate() {
    const wordPack = WORD_PACKS[this.currentLocale]?.[this.currentTheme];

    if (!wordPack || wordPack.length === 0) {
      console.error('Word pack not found:', this.currentLocale, this.currentTheme);
      return [];
    }

    // 使用 Fisher-Yates 洗牌算法打乱词汇
    const shuffled = shuffleArray(wordPack);

    // 根据难度调整选择策略
    let selectedWords;
    switch (this.currentDifficulty) {
      case 'easy':
        // 简单模式：选择前面的词汇（通常更常见）
        selectedWords = shuffled.slice(0, Math.min(this.wordCount, shuffled.length));
        break;

      case 'hard':
        // 困难模式：选择后面的词汇（通常更具挑战性）
        selectedWords = shuffled.slice(-Math.min(this.wordCount, shuffled.length));
        break;

      case 'medium':
      default:
        // 中等模式：随机选择
        selectedWords = shuffled.slice(0, Math.min(this.wordCount, shuffled.length));
        break;
    }

    this.generatedWords = selectedWords;
    return this.generatedWords;
  }

  /**
   * 获取当前生成的词汇
   * @returns {Array}
   */
  getGeneratedWords() {
    return this.generatedWords;
  }

  /**
   * 获取词汇的文本格式（用于复制）
   * @returns {string}
   */
  getWordsAsText() {
    return this.generatedWords.join(', ');
  }

  /**
   * 获取词汇的下载格式（每行一个）
   * @returns {string}
   */
  getWordsForDownload() {
    return this.generatedWords.join('\n');
  }

  /**
   * 生成文件名
   * @returns {string}
   */
  getFileName() {
    const date = formatDate(new Date());
    return `imposter-game-words-${this.currentTheme}-${date}.txt`;
  }

  /**
   * 获取可用的主题列表
   * @returns {Array}
   */
  getAvailableThemes() {
    return Object.keys(WORD_PACKS[this.currentLocale] || WORD_PACKS.en);
  }

  /**
   * 获取主题的词汇数量
   * @param {string} theme - 主题名称
   * @returns {number}
   */
  getThemeWordCount(theme) {
    const wordPack = WORD_PACKS[this.currentLocale]?.[theme];
    return wordPack ? wordPack.length : 0;
  }

  /**
   * 重置生成器
   */
  reset() {
    this.generatedWords = [];
  }

  /**
   * 获取统计信息
   * @returns {Object}
   */
  getStats() {
    return {
      locale: this.currentLocale,
      theme: this.currentTheme,
      difficulty: this.currentDifficulty,
      wordCount: this.wordCount,
      generatedCount: this.generatedWords.length,
      availableThemes: this.getAvailableThemes().length,
      totalWordsInTheme: this.getThemeWordCount(this.currentTheme)
    };
  }
}

// 创建全局生成器实例
const generator = new WordGenerator();
