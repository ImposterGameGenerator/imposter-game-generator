// SEO Content Builder
// SEO 内容构建器 - 使用 i18n 多语言支持

class SEOContentBuilder {
  constructor(i18nManager) {
    this.i18n = i18nManager;
  }

  /**
   * 构建所有SEO内容
   */
  buildAllSections() {
    return [
      this.buildHowToUse(),
      this.buildBestWords(),
      this.buildWhyUse(),
      this.buildTips(),
      this.buildFAQ(),
      this.buildCTA()
    ].join('');
  }

  /**
   * 使用教程部分
   */
  buildHowToUse() {
    const t = (key) => this.i18n.t(`generator.howToUse.${key}`);

    return `
      <section class="seo-section">
        <h2>${t('title')}</h2>
        <p>${t('intro')}</p>

        <div class="grid md:grid-cols-2 gap-6 mt-6">
          ${this.buildStep(1, t('step1.title'), t('step1.description'))}
          ${this.buildStep(2, t('step2.title'), t('step2.description'))}
          ${this.buildStep(3, t('step3.title'), t('step3.description'))}
          ${this.buildStep(4, t('step4.title'), t('step4.description'))}
        </div>
      </section>
    `;
  }

  /**
   * 构建单个步骤
   */
  buildStep(number, title, description) {
    return `
      <div class="flex gap-4">
        <div class="step-number">${number}</div>
        <div>
          <h3 class="text-white font-semibold mb-1">${title}</h3>
          <p class="text-slate-400 text-sm">${description}</p>
        </div>
      </div>
    `;
  }

  /**
   * 最佳词汇推荐部分
   */
  buildBestWords() {
    const t = (key) => this.i18n.t(`generator.bestWords.${key}`);
    const themeT = (key) => this.i18n.t(`generator.themes.${key}`);

    const themes = [
      { key: 'animals', title: themeT('animals'), desc: t('animalsDescription') },
      { key: 'sports', title: themeT('sports'), desc: t('sportsDescription') },
      { key: 'movies', title: themeT('movies'), desc: t('moviesDescription') },
      { key: 'food', title: themeT('food'), desc: t('foodDescription') }
    ];

    return `
      <section class="seo-section">
        <h2>${t('title')}</h2>
        <p class="mb-6">${t('intro')}</p>

        <div class="space-y-6">
          ${themes.map(theme => `
            <div class="category-item">
              <h3 class="text-white font-semibold mb-2">${theme.title}</h3>
              <p class="text-slate-400 text-sm mb-3">${theme.desc}</p>
              <div class="flex flex-wrap gap-2">
                ${this.getSampleWords(theme.key).map(word =>
                  `<span class="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">${word}</span>`
                ).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  /**
   * 获取示例词汇
   */
  getSampleWords(theme) {
    const locale = this.i18n.getCurrentLocale();
    const wordPack = WORD_PACKS[locale]?.[theme] || WORD_PACKS.en[theme];
    return wordPack.slice(0, 5);
  }

  /**
   * 使用理由部分
   */
  buildWhyUse() {
    const t = (key) => this.i18n.t(`generator.whyUse.${key}`);

    const benefits = [
      { title: t('benefit1.title'), desc: t('benefit1.description') },
      { title: t('benefit2.title'), desc: t('benefit2.description') },
      { title: t('benefit3.title'), desc: t('benefit3.description') },
      { title: t('benefit4.title'), desc: t('benefit4.description') }
    ];

    return `
      <section class="seo-section">
        <h2>${t('title')}</h2>
        <div class="grid md:grid-cols-2 gap-6">
          ${benefits.map(benefit => `
            <div class="flex gap-4">
              <svg class="check-icon flex-shrink-0 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5"/>
              </svg>
              <div>
                <h3 class="text-white font-semibold mb-1">${benefit.title}</h3>
                <p class="text-slate-400 text-sm">${benefit.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  /**
   * 技巧建议部分
   */
  buildTips() {
    const t = (key) => this.i18n.t(`generator.tips.${key}`);

    const tips = [
      t('tip1'),
      t('tip2'),
      t('tip3'),
      t('tip4'),
      t('tip5')
    ];

    return `
      <section class="seo-section">
        <h2>${t('title')}</h2>
        <p class="mb-6">${t('intro')}</p>
        <ul class="space-y-3">
          ${tips.map(tip => `
            <li class="flex gap-3 text-slate-300">
              <span>${tip}</span>
            </li>
          `).join('')}
        </ul>
      </section>
    `;
  }

  /**
   * FAQ部分
   */
  buildFAQ() {
    const t = (key) => this.i18n.t(`generator.faq.${key}`);

    const faqs = [
      { q: t('q1'), a: t('a1') },
      { q: t('q2'), a: t('a2') },
      { q: t('q3'), a: t('a3') },
      { q: t('q4'), a: t('a4') },
      { q: t('q5'), a: t('a5') }
    ];

    return `
      <section class="seo-section">
        <h2>${t('title')}</h2>
        <div class="space-y-6">
          ${faqs.map(faq => `
            <div class="faq-item">
              <h3 class="text-white font-semibold mb-2">${faq.q}</h3>
              <p class="text-slate-400 leading-relaxed">${faq.a}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  /**
   * CTA行动号召部分
   */
  buildCTA() {
    const t = (key) => this.i18n.t(`generator.cta.${key}`);

    return `
      <section class="cta-section seo-section text-center">
        <h2>${t('title')}</h2>
        <p class="text-slate-300 mb-6 max-w-2xl mx-auto">${t('description')}</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onclick="window.scrollTo({top: 0, behavior: 'smooth'}); document.getElementById('generateBtn').click();"
            class="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-purple-500/25 transition-all cursor-pointer"
          >
            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
              <path d="M21 3v5h-5"/>
            </svg>
            ${t('generateNow')}
          </button>
          <button
            onclick="document.querySelector('.seo-section').scrollIntoView({behavior: 'smooth'})"
            class="inline-flex items-center justify-center gap-2 bg-slate-700/50 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-lg border border-slate-600/50 transition-all cursor-pointer"
          >
            ${t('learnMore')}
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </section>
    `;
  }
}

/**
 * 初始化SEO构建器
 * @returns {SEOContentBuilder}
 */
function initSEOBuilder() {
  return new SEOContentBuilder(i18n);
}
