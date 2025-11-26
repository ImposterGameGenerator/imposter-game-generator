// Main Application
// 主应用程序

class App {
  constructor() {
    this.elements = {};
    this.isGenerating = false;
    this.ignoreNextDocumentClick = false;  // 用于防止下拉菜单立即关闭
  }

  /**
   * 初始化应用
   */
  async init() {
    console.log('Initializing app...');

    // 缓存 DOM 元素
    this.cacheElements();

    // 绑定事件（必须在 i18n.init 之前，以便接收 localeChanged 事件）
    this.bindEvents();

    // 初始化国际化
    await i18n.init();

    // 初始化生成器
    this.initGenerator();

    // 从 URL 或 localStorage 恢复状态
    this.restoreState();

    // 加载 SEO 内容
    this.loadSEOContent();

    console.log('App initialized successfully');
  }

  /**
   * 缓存 DOM 元素
   */
  cacheElements() {
    console.log('=== Caching DOM elements ===');

    this.elements = {
      // 语言切换器
      languageButton: document.getElementById('languageButton'),
      languageDropdown: document.getElementById('languageDropdown'),
      currentLanguage: document.getElementById('currentLanguage'),

      // 控制器
      themeSelector: document.getElementById('themeSelector'),
      difficultyButtons: document.getElementById('difficultyButtons'),
      wordCountSlider: document.getElementById('wordCountSlider'),
      wordCountValue: document.getElementById('wordCountValue'),
      generateBtn: document.getElementById('generateBtn'),

      // 结果显示
      emptyState: document.getElementById('emptyState'),
      wordGrid: document.getElementById('wordGrid'),
      exportButtons: document.getElementById('exportButtons'),
      copyBtn: document.getElementById('copyBtn'),
      downloadBtn: document.getElementById('downloadBtn'),

      // Toast
      toast: document.getElementById('toast'),
      toastMessage: document.getElementById('toastMessage'),

      // SEO 内容
      seoContent: document.getElementById('seoContent')
    };

    // 诊断：检查关键元素
    console.log('Language button found:', !!this.elements.languageButton);
    console.log('Language dropdown found:', !!this.elements.languageDropdown);
    console.log('Current language element found:', !!this.elements.currentLanguage);

    // 检查语言选项
    const languageOptions = document.querySelectorAll('.language-option');
    console.log('Language options in DOM:', languageOptions.length);
  }

  /**
   * 初始化生成器
   */
  initGenerator() {
    generator.setLocale(i18n.getCurrentLocale());
    generator.setTheme('animals');
    generator.setDifficulty('medium');
    generator.setWordCount(10);
  }

  /**
   * 绑定所有事件
   */
  bindEvents() {
    // 语言切换器按钮 - 只需要控制下拉菜单的显示/隐藏
    if (this.elements.languageButton && this.elements.languageDropdown) {
      console.log('Setting up language switcher events');

      // 按钮点击切换下拉菜单
      this.elements.languageButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        const isHidden = this.elements.languageDropdown.classList.contains('hidden');
        this.elements.languageDropdown.classList.toggle('hidden');

        console.log('Language button clicked, dropdown is now:', isHidden ? 'OPEN' : 'CLOSED');

        // 标记正在打开下拉菜单，防止 document 点击事件立即关闭
        if (isHidden) {
          this.isOpeningDropdown = true;
          setTimeout(() => {
            this.isOpeningDropdown = false;
          }, 100);
        }
      });

      // 监听 document 点击来关闭下拉菜单
      document.addEventListener('click', (e) => {
        // 如果正在打开下拉菜单，忽略这次点击
        if (this.isOpeningDropdown) {
          console.log('Ignoring click - dropdown is being opened');
          return;
        }

        // 检查点击是否在语言切换器区域内
        const clickedButton = this.elements.languageButton.contains(e.target);
        const clickedDropdown = this.elements.languageDropdown.contains(e.target);

        // 如果点击了按钮或下拉菜单内部，不关闭
        if (clickedButton || clickedDropdown) {
          console.log('Clicked inside language switcher, keeping dropdown open');
          return;
        }

        // 点击了外部，关闭下拉菜单
        if (!this.elements.languageDropdown.classList.contains('hidden')) {
          this.elements.languageDropdown.classList.add('hidden');
          console.log('Dropdown closed - clicked outside');
        }
      });

      console.log('Language switcher events attached');

      // 语言选项点击事件 - 允许链接正常跳转到对应的语言路径
      document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', (e) => {
          // 移除 preventDefault，允许链接正常跳转
          // 链接将导航到 /zh, /ja, /ko, /es 或 / (英文)
          const lang = option.getAttribute('data-lang');
          console.log('Language option clicked, navigating to:', lang);
        });
      });

      console.log('Language option click events attached');
    }

    // 主题选择
    if (this.elements.themeSelector) {
      this.elements.themeSelector.addEventListener('change', (e) => {
        this.handleThemeChange(e.target.value);
      });
    }

    // 难度按钮
    if (this.elements.difficultyButtons) {
      this.elements.difficultyButtons.addEventListener('click', (e) => {
        if (e.target.classList.contains('difficulty-btn')) {
          this.handleDifficultyChange(e.target);
        }
      });
    }

    // 词汇数量滑块
    if (this.elements.wordCountSlider) {
      this.elements.wordCountSlider.addEventListener('input', (e) => {
        this.handleWordCountChange(e.target.value);
      });
    }

    // 生成按钮
    if (this.elements.generateBtn) {
      this.elements.generateBtn.addEventListener('click', () => {
        this.handleGenerate();
      });
    }

    // 复制按钮
    if (this.elements.copyBtn) {
      this.elements.copyBtn.addEventListener('click', () => {
        this.handleCopy();
      });
    }

    // 下载按钮
    if (this.elements.downloadBtn) {
      this.elements.downloadBtn.addEventListener('click', () => {
        this.handleDownload();
      });
    }

    // 语言变更事件
    window.addEventListener('localeChanged', (e) => {
      this.onLocaleChanged(e.detail.locale);
    });

    // 键盘快捷键
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + G 生成词汇
      if ((e.ctrlKey || e.metaKey) && e.key === 'g') {
        e.preventDefault();
        this.handleGenerate();
      }
      // Ctrl/Cmd + C 复制（当有生成的词汇时）
      if ((e.ctrlKey || e.metaKey) && e.key === 'c' && generator.getGeneratedWords().length > 0) {
        // 只在没有选中文本时触发
        if (window.getSelection().toString().length === 0) {
          e.preventDefault();
          this.handleCopy();
        }
      }
    });
  }

  /**
   * 处理主题切换
   */
  handleThemeChange(theme) {
    generator.setTheme(theme);
    this.saveState();
    console.log('Theme changed to:', theme);
  }

  /**
   * 处理难度切换
   */
  handleDifficultyChange(button) {
    const difficulty = button.dataset.difficulty;

    // 移除所有按钮的 active 类
    document.querySelectorAll('.difficulty-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    // 添加 active 类到当前按钮
    button.classList.add('active');

    generator.setDifficulty(difficulty);
    this.saveState();
    console.log('Difficulty changed to:', difficulty);
  }

  /**
   * 处理词汇数量变化
   */
  handleWordCountChange(count) {
    this.elements.wordCountValue.textContent = count;
    generator.setWordCount(parseInt(count));
    this.saveState();
  }

  /**
   * 处理生成词汇
   */
  async handleGenerate() {
    if (this.isGenerating) return;

    this.isGenerating = true;
    this.elements.generateBtn.disabled = true;

    try {
      // 生成词汇
      const words = generator.generate();

      // 显示结果
      this.displayWords(words);

      // 显示导出按钮
      this.elements.exportButtons.classList.remove('hidden');
      this.elements.exportButtons.classList.add('flex');

      console.log('Generated words:', words);
    } catch (error) {
      console.error('Error generating words:', error);
      showToast(i18n.t('generator.toast.error'));
    } finally {
      this.isGenerating = false;
      this.elements.generateBtn.disabled = false;
    }
  }

  /**
   * 显示生成的词汇
   */
  displayWords(words) {
    // 隐藏空状态 - 移除flex类并添加hidden类
    this.elements.emptyState.classList.remove('flex');
    this.elements.emptyState.classList.add('hidden');

    // 显示词汇网格
    this.elements.wordGrid.classList.remove('hidden');
    this.elements.wordGrid.classList.add('grid');

    // 清空现有词汇
    this.elements.wordGrid.innerHTML = '';

    // 添加词汇卡片
    words.forEach((word, index) => {
      const card = createElement('div', {
        className: 'word-card'
      }, [
        createElement('span', {}, word)
      ]);

      this.elements.wordGrid.appendChild(card);
    });
  }

  /**
   * 处理复制
   */
  async handleCopy() {
    try {
      const text = generator.getWordsAsText();
      const success = await copyToClipboard(text);

      if (success) {
        showToast(i18n.t('generator.toast.copied'));

        // 临时更新按钮文本
        const originalText = this.elements.copyBtn.querySelector('span').textContent;
        this.elements.copyBtn.querySelector('span').textContent = i18n.t('generator.results.copied');

        setTimeout(() => {
          this.elements.copyBtn.querySelector('span').textContent = originalText;
        }, 2000);
      } else {
        showToast(i18n.t('generator.toast.error'));
      }
    } catch (error) {
      console.error('Error copying:', error);
      showToast(i18n.t('generator.toast.error'));
    }
  }

  /**
   * 处理下载
   */
  handleDownload() {
    try {
      const text = generator.getWordsForDownload();
      const filename = generator.getFileName();

      downloadTextFile(text, filename);
      showToast(i18n.t('generator.toast.downloaded'));
    } catch (error) {
      console.error('Error downloading:', error);
      showToast(i18n.t('generator.toast.error'));
    }
  }

  /**
   * 当语言改变时
   */
  onLocaleChanged(locale) {
    console.log('=== onLocaleChanged called ===');
    console.log('New locale:', locale);

    // 更新语言按钮显示
    const languageMap = {
      'en': '🇺🇸 English',
      'zh': '🇨🇳 中文',
      'ja': '🇯🇵 日本語',
      'ko': '🇰🇷 한국어',
      'es': '🇪🇸 Español'
    };

    if (this.elements.currentLanguage) {
      const newText = languageMap[locale] || '🌐 English';
      console.log('Updating language button text to:', newText);
      this.elements.currentLanguage.textContent = newText;
    }

    // 更新选中状态
    console.log('Updating language option states');
    document.querySelectorAll('.language-option').forEach(option => {
      const checkMark = option.querySelector('.lang-check');
      if (option.getAttribute('data-lang') === locale) {
        option.classList.add('bg-slate-700/30');
        if (checkMark) checkMark.classList.remove('hidden');
      } else {
        option.classList.remove('bg-slate-700/30');
        if (checkMark) checkMark.classList.add('hidden');
      }
    });

    // 如果已经有生成的词汇，重新生成（使用新语言）
    if (generator.getGeneratedWords().length > 0) {
      console.log('Regenerating words with new language');
      this.handleGenerate();
    }

    // 加载 SEO 内容
    console.log('Loading SEO content for new language');
    this.loadSEOContent();
  }

  /**
   * 保存状态
   */
  saveState() {
    const state = {
      theme: generator.currentTheme,
      difficulty: generator.currentDifficulty,
      wordCount: generator.wordCount,
      locale: i18n.getCurrentLocale()
    };

    storage.set('appState', state);
  }

  /**
   * 恢复状态
   */
  restoreState() {
    const state = storage.get('appState');

    if (state) {
      // 恢复主题
      if (state.theme && this.elements.themeSelector) {
        this.elements.themeSelector.value = state.theme;
        generator.setTheme(state.theme);
      }

      // 恢复难度
      if (state.difficulty) {
        const difficultyBtn = document.querySelector(`[data-difficulty="${state.difficulty}"]`);
        if (difficultyBtn) {
          document.querySelectorAll('.difficulty-btn').forEach(btn => btn.classList.remove('active'));
          difficultyBtn.classList.add('active');
          generator.setDifficulty(state.difficulty);
        }
      }

      // 恢复词汇数量
      if (state.wordCount && this.elements.wordCountSlider) {
        this.elements.wordCountSlider.value = state.wordCount;
        this.elements.wordCountValue.textContent = state.wordCount;
        generator.setWordCount(state.wordCount);
      }

      // 注意：不恢复语言设置
      // 语言由 i18n.init() 根据 URL路径 > localStorage > 浏览器语言 > 默认 的优先级处理
      // onLocaleChanged 会被 i18n.setLocale() 触发的 localeChanged 事件自动调用
    }
  }

  /**
   * 加载 SEO 内容
   */
  loadSEOContent() {
    if (!this.elements.seoContent) return;

    try {
      // 初始化 SEO 构建器（如果还没有）
      if (!window.seoBuilder) {
        window.seoBuilder = initSEOBuilder();
      }

      // 生成并插入 SEO 内容
      const content = seoBuilder.buildAllSections();
      this.elements.seoContent.innerHTML = content;

      console.log('SEO content loaded');
    } catch (error) {
      console.error('Error loading SEO content:', error);
    }
  }
}

// 应用启动
let app;

ready(async () => {
  try {
    app = new App();
    await app.init();
  } catch (error) {
    console.error('Failed to initialize app:', error);
  }
});
