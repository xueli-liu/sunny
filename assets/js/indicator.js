function initIndicator() {
    const activeBtn = document.querySelector('.lang-switcher.default');
    const indicator = document.querySelector('.indicator-bar');
    if (activeBtn && indicator) {
        indicator.style.width = `${activeBtn.offsetWidth}px`;
        indicator.style.left = `${activeBtn.offsetLeft}px`;
        activeBtn.classList.add('active');
    }
}

function handleLanguageSwitch(event) {
    const buttons = document.querySelectorAll('.lang-switcher');
    const indicator = document.querySelector('.indicator-bar');
    const target = event.currentTarget;

    buttons.forEach(btn => btn.classList.remove('active'));
    target.classList.add('active');
    
    indicator.style.width = `${target.offsetWidth}px`;
    indicator.style.left = `${target.offsetLeft}px`;

    if (target.getAttribute('data-lang') == "zh") {
        window.location.replace("index_zh.html");
    } else {
        window.location.replace("index.html");
    }
}