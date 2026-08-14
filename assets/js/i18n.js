const translations = {
    "en": {
        "title": "Xueli Liu - School of Cybersecurity",
        "langSwitcherLabel": "Language switcher",
        "profileName": "Xueli Liu",
        "profilePosition": "School of Cybersecurity<br>Tianjin University<br>Ph.D, Associate Professor",
        "profileAlt": "Xueli Liu",
        "room": "Room B303, No.55 Building",
        "biographyHeading": "Biography",
        "biographyContent": "I am an Associate Professor in the School of Cybersecurity at Tianjin University. I earned my Ph.D. from Harbin Institute of Technology in 2018 under the supervision of Professor Jianzhong Li. From 2015 to 2017, I was a joint Ph.D. student at the University of Edinburgh, mentored by Academician Wenfei Fan. My research spans database systems and theory, big data processing, data governance, graph data mining, and data security and privacy computing. Currently, I focus on exploring the integration of logical rules with deep learning and large-scale models, aiming to tackle knowledge discovery challenges in multimodal data environments and to enhance the interpretability of AI computation results. In addition, I conduct in-depth research on data security and privacy computing in AI for Data, as well as the design and development of biosynthetic enzymes in AI for Science.",
        "navNews": "news",
        "navTeaching": "teaching",
        "navPublications": "publications",
        "newsHeading": "News",
        "newsContent": "NSFC General Program was granted: \"Research on Open-World Graph Rule Systems\" (2026.1–2029.12)<br>One paper was accepted by SIGKDD 2026 (CCF A)<br>One paper was accepted by VLDB 2026 (CCF A)<br>One paper was accepted by ACL Findings 2026 (CCF A)<br>One paper was accepted by Big Data Mining and Analytics 2025 (SCI Q1)<br>One paper was accepted by Big Data Mining and Analytics 2024 (SCI Q1)<br>One paper was accepted by VLDB 2024 (CCF A)<br>Two papers were accepted by DASFAA 2024 (CCF B)",
        "teachingHeading": "Teaching",
        "course1Title": "Database System",
        "course1Desc": "Advanced study of database management systems, focusing on implementation, optimization, and practical applications.",
        "course2Title": "Algorithm Design and Analysis",
        "course2Desc": "Exploration of algorithm design techniques, complexity analysis, and problem-solving strategies.",
        "publicationsHeading": "Selected Publications",
        "asterisk": "(* refers to corresponding author)",
        "tagSCI1": "SCI Q1",
        "tagSCI2": "SCI Q2",
        "programsHeading": "Programs",
        "program1Title": "NSFC General Program",
        "program1Desc": "Research on Open-World Graph Rule Systems",
        "program2Title": "National Key R&D Program of China (Sub-project)",
        "program2Desc": "Information Sharing and Collaborative Interaction for Cultural Relics Safety",
        "program3Title": "National Key R&D Program of China (Sub-project)",
        "program3Desc": "Knowledge Graph Construction of Bioterrorism Threat Factors in Important Public Places",
        "program4Title": "NSFC Youth Program",
        "program4Desc": "Research on Interpretability Theory and Algorithms for Link Prediction Based on Graph Constraints",
        "socialMedia": "Social Media",
        "copyright": "School of Cybersecurity. Tianjin University"
    },
    "zh": {
        "title": "刘雪莉 - 天津大学网络安全学院",
        "langSwitcherLabel": "语言切换",
        "profileName": "刘雪莉",
        "profilePosition": "天津大学<br>网络安全学院<br>副教授",
        "profileAlt": "刘雪莉",
        "room": "55号楼 B303室",
        "biographyHeading": "个人简介",
        "biographyContent": "天津大学网络安全学院副教授，2018年博士毕业于哈尔滨工业大学，师从数据库著名科学家李建中教授。2015-2017年，作为联合培养博士生在英国爱丁堡大学深造，师从樊文飞院士。主要研究涵盖数据库系统和理论、大数据处理、数据治理、图数据挖掘以及数据安全与隐私计算等多个方面。目前的研究重点在于探索逻辑规则与深度学习及大规模模型的融合方式，旨在解决多模态数据环境下的知识发现难题，并致力于提升AI计算结果的可解释性。此外，在AI for Data中的数据安全与隐私计算以及在AI for Science生物合成酶的设计和开发方面开展深入的研究。",
        "navNews": "最新动态",
        "navTeaching": "教学项目",
        "navPublications": "代表论文",
        "newsHeading": "最新动态",
        "newsContent": "国家自然科学基金面上项目\"开放世界图规则体系研究\"获批（2026.1–2029.12）<br>1篇论文被CCF A类会议SIGKDD 2026录用<br>1篇论文被CCF A类期刊VLDB 2026录用<br>1篇论文被CCF A类会议ACL Findings 2026录用<br>1篇论文被SCI一区期刊Big Data Mining and Analytics 2025录用<br>1篇论文被SCI一区期刊Big Data Mining and Analytics 2024录用<br>1篇论文被CCF A类期刊VLDB 2024录用<br>2篇论文被CCF B类期刊DASFAA 2024录用",
        "teachingHeading": "教学项目",
        "course1Title": "数据库系统",
        "course1Desc": "深入学习数据库管理系统，重点研究实现技术、优化方法和实际应用。",
        "course2Title": "算法设计与分析",
        "course2Desc": "探索算法设计技术、复杂度分析以及问题解决策略。",
        "publicationsHeading": "代表论文",
        "asterisk": "(* 表示通讯作者)",
        "tagSCI1": "SCI 一区",
        "tagSCI2": "SCI 二区",
        "programsHeading": "代表项目",
        "program1Title": "国家自然科学基金面上项目",
        "program1Desc": "开放世界图规则体系研究",
        "program2Title": "国家重点研发计划子课题",
        "program2Desc": "文物安全信息共享与交互协同",
        "program3Title": "国家重点研发计划子课题",
        "program3Desc": "重要公共场所生物恐怖威胁因子知识图谱构建",
        "program4Title": "国家自然科学基金青年项目",
        "program4Desc": "基于图约束的链路预测可解释性理论和算法研究",
        "socialMedia": "Social Media",
        "copyright": "School of Cybersecurity. Tianjin University"
    }
};

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

function initI18n() {
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
