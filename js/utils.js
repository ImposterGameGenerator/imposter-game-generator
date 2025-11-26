// Utility Functions
// 工具函数集合

/**
 * Fisher-Yates 洗牌算法 - 真正的随机打乱数组
 * @param {Array} array - 需要打乱的数组
 * @returns {Array} - 打乱后的新数组
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * 复制文本到剪贴板
 * @param {string} text - 要复制的文本
 * @returns {Promise<boolean>} - 复制是否成功
 */
async function copyToClipboard(text) {
  try {
    // 尝试使用现代 Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    // 降级方案：使用传统方法
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    textarea.style.top = '-999999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  } catch (err) {
    console.error('Failed to copy text:', err);
    return false;
  }
}

/**
 * 下载文本文件
 * @param {string} text - 文件内容
 * @param {string} filename - 文件名
 */
function downloadTextFile(text, filename) {
  try {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 释放 URL 对象
    setTimeout(() => URL.revokeObjectURL(url), 100);
  } catch (err) {
    console.error('Failed to download file:', err);
  }
}

/**
 * 显示通知提示
 * @param {string} message - 通知消息
 * @param {number} duration - 显示时长（毫秒）
 */
function showToast(message, duration = 2000) {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.classList.remove('toast-hide');
  toast.classList.add('toast-show');

  setTimeout(() => {
    toast.classList.remove('toast-show');
    toast.classList.add('toast-hide');
  }, duration);
}

/**
 * 获取 URL 参数
 * @param {string} name - 参数名
 * @returns {string|null} - 参数值
 */
function getUrlParameter(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

/**
 * 从路径获取语言代码
 * @returns {string|null} - 语言代码 (en, zh, ja, ko, es)
 */
function getLanguageFromPath() {
  const path = window.location.pathname;

  // 匹配路径中的语言代码（支持子目录部署）
  // 例如: /zh, /zh/, /imposter-game-generator/zh, /imposter-game-generator/zh/
  const match = path.match(/\/(zh|ja|ko|es)\/?$/);
  if (match) {
    return match[1];
  }

  // 如果路径以 / 结尾或包含 index.html，默认为英文
  // 例如: /, /imposter-game-generator/, /index.html
  if (path === '/' || path.endsWith('/') || path.endsWith('/index.html') || path === '') {
    // 检查查询参数（向后兼容）
    const langParam = getUrlParameter('lang');
    if (langParam && ['en', 'zh', 'ja', 'ko', 'es'].includes(langParam)) {
      return langParam;
    }
    return 'en';  // 默认英文
  }

  // 其他情况也默认为英文
  return 'en';
}

/**
 * 设置 URL 参数（不刷新页面）
 * 此函数已废弃，使用路径式语言切换
 * @param {string} name - 参数名
 * @param {string} value - 参数值
 */
function setUrlParameter(name, value) {
  // 不再需要设置 URL 参数，因为使用路径式切换
  // 保留此函数以保持向后兼容
}

/**
 * 节流函数 - 限制函数执行频率
 * @param {Function} func - 要执行的函数
 * @param {number} wait - 等待时间（毫秒）
 * @returns {Function} - 节流后的函数
 */
function throttle(func, wait) {
  let timeout;
  let previous = 0;

  return function(...args) {
    const now = Date.now();
    const remaining = wait - (now - previous);

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(this, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now();
        timeout = null;
        func.apply(this, args);
      }, remaining);
    }
  };
}

/**
 * 防抖函数 - 延迟执行
 * @param {Function} func - 要执行的函数
 * @param {number} wait - 等待时间（毫秒）
 * @returns {Function} - 防抖后的函数
 */
function debounce(func, wait) {
  let timeout;

  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

/**
 * 格式化日期
 * @param {Date} date - 日期对象
 * @returns {string} - 格式化的日期字符串
 */
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * 检测是否为移动设备
 * @returns {boolean}
 */
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

/**
 * 检测是否支持触摸
 * @returns {boolean}
 */
function isTouchDevice() {
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

/**
 * 平滑滚动到元素
 * @param {string|HTMLElement} target - 目标元素或选择器
 * @param {number} offset - 偏移量
 */
function smoothScrollTo(target, offset = 0) {
  const element = typeof target === 'string'
    ? document.querySelector(target)
    : target;

  if (!element) return;

  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

/**
 * 等待指定时间
 * @param {number} ms - 毫秒数
 * @returns {Promise}
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 生成唯一 ID
 * @returns {string}
 */
function generateId() {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * 本地存储辅助函数
 */
const storage = {
  /**
   * 获取存储的值
   * @param {string} key - 键名
   * @param {*} defaultValue - 默认值
   * @returns {*}
   */
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : defaultValue;
    } catch (err) {
      console.error('Storage get error:', err);
      return defaultValue;
    }
  },

  /**
   * 设置存储的值
   * @param {string} key - 键名
   * @param {*} value - 值
   */
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error('Storage set error:', err);
    }
  },

  /**
   * 删除存储的值
   * @param {string} key - 键名
   */
  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.error('Storage remove error:', err);
    }
  },

  /**
   * 清空所有存储
   */
  clear() {
    try {
      localStorage.clear();
    } catch (err) {
      console.error('Storage clear error:', err);
    }
  }
};

/**
 * DOM 就绪检测
 * @param {Function} callback - 回调函数
 */
function ready(callback) {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

/**
 * 创建元素（辅助函数）
 * @param {string} tag - 标签名
 * @param {Object} attrs - 属性对象
 * @param {Array|string} children - 子元素
 * @returns {HTMLElement}
 */
function createElement(tag, attrs = {}, children = []) {
  const element = document.createElement(tag);

  // 设置属性
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === 'className') {
      element.className = value;
    } else if (key === 'dataset') {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue;
      });
    } else if (key.startsWith('on')) {
      element.addEventListener(key.substring(2).toLowerCase(), value);
    } else {
      element.setAttribute(key, value);
    }
  });

  // 添加子元素
  const childArray = Array.isArray(children) ? children : [children];
  childArray.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof HTMLElement) {
      element.appendChild(child);
    }
  });

  return element;
}
