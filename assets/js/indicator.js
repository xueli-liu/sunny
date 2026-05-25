function initIndicator() {
    const activeBtn = document.querySelector('.lang-switcher.default');
    const indicator = document.querySelector('.indicator-bar');
    if (!activeBtn || !indicator) return;

    indicator.style.width = `${activeBtn.offsetWidth}px`;
    indicator.style.left = `${activeBtn.offsetLeft}px`;
    activeBtn.classList.add('active');
}

function handleLanguageSwitch(event) {
    const buttons = document.querySelectorAll('.lang-switcher');
    const indicator = document.querySelector('.indicator-bar');
    const target = event.currentTarget;

    if (!indicator) return;

    buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });

    target.classList.add('active');
    target.setAttribute('aria-pressed', 'true');

    indicator.style.width = `${target.offsetWidth}px`;
    indicator.style.left = `${target.offsetLeft}px`;

    const lang = target.getAttribute('data-lang');
    if (lang === 'zh') {
        window.location.href = 'index_zh.html';
    } else {
        window.location.href = 'index.html';
    }
}