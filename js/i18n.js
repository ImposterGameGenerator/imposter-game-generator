// Internationalization Manager
// 国际化管理器

class I18nManager {
  constructor() {
    this.currentLocale = 'en';
    this.translations = {};
    this.fallbackLocale = 'en';
    this.supportedLocales = ['en', 'zh', 'ja', 'ko', 'es'];
  }

  /**
   * 初始化国际化系统
   */
  async init() {
    try {
      console.log('=== i18n.init called ===');

      // 从路径获取语言设置（优先级最高）
      const pathLang = getLanguageFromPath();
      console.log('Language from path:', pathLang);

      // 从 localStorage 获取保存的语言
      const savedLang = storage.get('locale');
      console.log('Saved language:', savedLang);

      // 获取浏览器语言
      const browserLang = this.getBrowserLanguage();
      console.log('Browser language:', browserLang);

      // 确定使用哪个语言
      // 如果路径语言存在且不是默认，使用路径语言（优先级最高）
      // 否则使用 localStorage > 浏览器 > 默认
      let locale;
      if (pathLang) {
        locale = pathLang;
        console.log('Using path language:', locale);
      } else {
        locale = savedLang || browserLang || this.fallbackLocale;
        console.log('Using saved/browser/fallback language:', locale);
      }

      console.log('Initial locale decision:', locale);

      // 验证语言是否支持
      if (!this.supportedLocales.includes(locale)) {
        console.warn('Locale not supported:', locale);
        locale = this.fallbackLocale;
      }

      console.log('Final locale:', locale);

      // 加载翻译文件
      await this.loadTranslations();

      // 设置语言
      this.setLocale(locale);

      console.log('i18n initialized with locale:', locale);
    } catch (error) {
      console.error('Failed to initialize i18n:', error);
      this.currentLocale = this.fallbackLocale;
    }
  }

  /**
   * 加载翻译文件
   */
  async loadTranslations() {
    try {
      const response = await fetch('./data/translations.json');
      if (!response.ok) {
        throw new Error('Failed to load translations');
      }
      this.translations = await response.json();
    } catch (error) {
      console.error('Error loading translations:', error);
      // 如果加载失败，使用内嵌的备用翻译
      this.translations = this.getFallbackTranslations();
    }
  }

  /**
   * 获取浏览器语言
   */
  getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage;
    // 提取主要语言代码 (例如: 'zh-CN' -> 'zh')
    const primaryLang = lang.split('-')[0];
    return this.supportedLocales.includes(primaryLang) ? primaryLang : null;
  }

  /**
   * 设置当前语言
   * @param {string} locale - 语言代码
   */
  setLocale(locale) {
    console.log('=== i18n.setLocale called ===');
    console.log('Requested locale:', locale);
    console.log('Current locale:', this.currentLocale);
    console.log('Supported locales:', this.supportedLocales);

    if (!this.supportedLocales.includes(locale)) {
      console.warn(`Unsupported locale: ${locale}, falling back to ${this.fallbackLocale}`);
      locale = this.fallbackLocale;
    }

    this.currentLocale = locale;
    console.log('Locale set to:', this.currentLocale);

    // 保存到 localStorage
    console.log('Saving to localStorage');
    storage.set('locale', locale);

    // 更新 HTML lang 属性
    console.log('Updating HTML lang attribute');
    document.documentElement.lang = locale;

    // 更新生成器语言
    if (window.generator) {
      console.log('Updating generator locale');
      generator.setLocale(locale);
    } else {
      console.warn('Generator not found');
    }

    // 更新 UI
    console.log('Calling updateUI');
    this.updateUI();

    // 触发语言变更事件
    console.log('Dispatching localeChanged event');
    window.dispatchEvent(new CustomEvent('localeChanged', { detail: { locale } }));

    console.log('i18n.setLocale completed for locale:', locale);
  }

  /**
   * 获取翻译文本
   * @param {string} key - 翻译键（支持点号分隔的路径）
   * @param {Object} params - 参数对象（用于替换占位符）
   * @returns {string} - 翻译后的文本
   */
  t(key, params = {}) {
    const keys = key.split('.');
    let value = this.translations[this.currentLocale];

    // 遍历键路径
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        value = undefined;
        break;
      }
    }

    // 如果找不到翻译，尝试使用 fallback 语言
    if (value === undefined) {
      value = this.getFallbackTranslation(key);
    }

    // 如果还是找不到，返回键本身
    if (value === undefined) {
      console.warn(`Translation not found: ${key}`);
      return key;
    }

    // 替换参数占位符
    if (typeof value === 'string' && Object.keys(params).length > 0) {
      return this.replaceParams(value, params);
    }

    return value;
  }

  /**
   * 获取 fallback 翻译
   * @param {string} key - 翻译键
   * @returns {string|undefined}
   */
  getFallbackTranslation(key) {
    const keys = key.split('.');
    let value = this.translations[this.fallbackLocale];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return undefined;
      }
    }

    return value;
  }

  /**
   * 替换参数占位符
   * @param {string} text - 原始文本
   * @param {Object} params - 参数对象
   * @returns {string}
   */
  replaceParams(text, params) {
    return text.replace(/\{(\w+)\}/g, (match, key) => {
      return params[key] !== undefined ? params[key] : match;
    });
  }

  /**
   * 更新整个 UI 的翻译
   */
  updateUI() {
    console.log('=== updateUI called ===');
    console.log('Current locale:', this.currentLocale);

    // 更新所有带 data-i18n 属性的元素
    const i18nElements = document.querySelectorAll('[data-i18n]');
    console.log('Found data-i18n elements:', i18nElements.length);

    i18nElements.forEach(element => {
      const key = element.getAttribute('data-i18n');
      const text = this.t(key);

      // 如果是 option 元素，更新其 textContent
      if (element.tagName === 'OPTION') {
        element.textContent = text;
      } else {
        element.textContent = text;
      }
    });

    // 更新占位符
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    console.log('Found placeholder elements:', placeholderElements.length);

    placeholderElements.forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      element.placeholder = this.t(key);
    });

    // 更新 title 属性
    const titleElements = document.querySelectorAll('[data-i18n-title]');
    console.log('Found title elements:', titleElements.length);

    titleElements.forEach(element => {
      const key = element.getAttribute('data-i18n-title');
      element.title = this.t(key);
    });

    // 更新 aria-label
    const ariaElements = document.querySelectorAll('[data-i18n-aria]');
    console.log('Found aria elements:', ariaElements.length);

    ariaElements.forEach(element => {
      const key = element.getAttribute('data-i18n-aria');
      element.setAttribute('aria-label', this.t(key));
    });

    console.log('updateUI completed');
  }

  /**
   * 获取当前语言
   * @returns {string}
   */
  getCurrentLocale() {
    return this.currentLocale;
  }

  /**
   * 获取支持的语言列表
   * @returns {Array}
   */
  getSupportedLocales() {
    return this.supportedLocales;
  }

  /**
   * 获取备用翻译（内嵌）
   */
  getFallbackTranslations() {
    return {
      en: {
        generator: {
          logo: "Imposter Generator",
          badge: "Free Word Generator Tool",
          title: "Free Imposter Game Generator",
          subtitle: "Generate random words for your imposter game sessions",
          controls: {
            title: "Generator Settings",
            theme: "Select Theme",
            difficulty: "Difficulty Level",
            wordCount: "Number of Words",
            generate: "Generate Words"
          },
          themes: {
            animals: "Animals",
            sports: "Sports",
            movies: "Movies",
            food: "Food",
            technology: "Technology",
            music: "Music",
            countries: "Countries",
            colors: "Colors"
          },
          difficulty: {
            easy: "Easy",
            medium: "Medium",
            hard: "Hard"
          },
          results: {
            title: "Generated Words",
            empty: "No words generated yet",
            emptyHint: "Click the generate button",
            copy: "Copy All",
            copied: "Copied!",
            download: "Download"
          },
          toast: {
            copied: "Words copied to clipboard!",
            downloaded: "File downloaded successfully!",
            error: "Something went wrong"
          }
        }
      }
    };
  }
}

// 创建全局 i18n 实例
const i18n = new I18nManager();
