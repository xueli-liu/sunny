let translations = {};

async function loadTranslations() {
    try {
        const response = await fetch('assets/i18n.json');
        translations = await response.json();
    } catch (err) {
        console.error('Failed to load translations:', err);
    }
}

function getLang() {
    return localStorage.getItem('lang') || 'en';
}

function setLang(lang) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    applyTranslations();
    updateIndicator();
}

function applyTranslations() {
    const lang = getLang();
    const t = translations[lang];
    if (!t) return;

    if (t.title) {
        document.title = t.title;
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.dataset.i18nAria;
        if (t[key] !== undefined) {
            el.setAttribute('aria-label', t[key]);
        }
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.dataset.i18nAlt;
        if (t[key] !== undefined) {
            el.setAttribute('alt', t[key]);
        }
    });
}

function updateIndicator() {
    const lang = getLang();
    const buttons = document.querySelectorAll('.lang-switcher');
    const indicator = document.querySelector('.indicator-bar');
    if (!indicator) return;

    buttons.forEach(btn => {
        const isActive = btn.dataset.lang === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        if (isActive) {
            indicator.style.width = `${btn.offsetWidth}px`;
            indicator.style.left = `${btn.offsetLeft}px`;
        }
    });
}

function handleLanguageSwitch(event) {
    const target = event.currentTarget;
    const lang = target.dataset.lang;
    if (lang) {
        setLang(lang);
    }
}

async function initI18n() {
    await loadTranslations();
    const lang = getLang();
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    applyTranslations();
    updateIndicator();

    document.querySelectorAll('.lang-switcher').forEach(btn => {
        btn.addEventListener('click', handleLanguageSwitch);
    });
}

window.addEventListener('DOMContentLoaded', initI18n);
window.addEventListener('resize', updateIndicator);
