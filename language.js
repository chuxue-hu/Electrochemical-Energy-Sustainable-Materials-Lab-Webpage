(function () {
    'use strict';

    const STORAGE_KEY = 'eESM-lab-language';

    // Keep publication titles, author names, and technical names in English.
    // The interface and explanatory copy below are translated locally so the
    // switch works on GitHub Pages without a translation service.
    const rawTranslations = {
        'Home': '首页',
        'Publication': '论文发表',
        'Publications': '论文发表',
        'Team': '团队',
        'News': '新闻',
        'Gallery': '图库',
        'Opening': '招生招聘',
        'About Us': '关于我们',
        'Research': '研究',
        'Research Areas': '研究方向',
        'Research Interest': '研究兴趣',
        'Our Team': '团队成员',
        'Members': '成员',
        'Contact Us': '联系我们',
        'Follow us now!': '关注我们',
        'All': '全部',
        'Group Photos': '课题组照片',
        'Events': '活动',
        'Photo Gallery': '照片图库',
        'Join Our Lab': '加入我们',
        'Openings': '招生/招聘',
        'Ph.D. Students': '博士生',
        'Postdoctoral Researchers': '博士后',
        'Postdoctoral Opportunities in Hengqin': '横琴博士后机会',
        'Research Assistants': '科研助理',
        'How to Apply': '申请方式',
        'Principal Investigator': '课题组负责人',
        'Academic Qualifications': '教育背景',
        'Academic & Professional Experience': '学术与工作经历',
        'Honors & Awards': '荣誉与奖励',
        'Postdoctoral Researcher': '博士后',
        'Ph.D. Student': '博士生',
        "Master's Student": '硕士生',
        'Research Assistant': '科研助理',
        'Assistant Professor & PhD Supervisor': '助理教授、博士生导师',
        'View All Members': '查看全部成员',
        'View All Publications': '查看全部论文',
        'View All News': '查看全部新闻',
        'Materials Studied': '研究材料',
        'Lab Members': '课题组成员',
        'Software Tools': '软件工具',
        'Read More >': '阅读更多 >',
        'Enter Lab': '进入课题组网站',
        'Scroll to Enter': '向下滚动进入',
        'Previous publications': '上一组论文',
        'Next publications': '下一组论文',
        'Previous news': '上一组新闻',
        'Next news': '下一组新闻',
        'Aqueous Zinc Batteries': '水系锌电池',
        'Redox Flow Batteries': '液流电池',
        'Lithium-Ion Battery Materials': '锂离子电池材料',
        'Sustainability & AI': '可持续发展与人工智能',
        'Application-Oriented Lithium-Ion Battery Materials': '面向应用的锂离子电池材料',
        'Sustainability-Driven Interdisciplinary Research': '可持续发展驱动的交叉研究',
        'Electrochemical Energy & Sustainable Materials Lab @ University of Macau': '澳门大学电化学能源与可持续材料课题组',
        'Electrochemical Energy & Sustainable Materials Lab @ UM': 'Electrochemical Energy & Sustainable Materials Lab @ UM',
        'Multiscale Approaches to Sustainable Energy‑Material Development': '可持续能源材料发展的多尺度研究',
        'Multiscale Approaches to Sustainable Energy鈥慚aterial Development': '可持续能源材料发展的多尺度研究',
        'Our group develops advanced materials, interfaces, and electrolyte chemistries for sustainable energy storage and beyond. We combine electrochemistry, materials science, and multiscale characterization to understand ion transport, interfacial reactions, and degradation mechanisms, then translate these insights into practical battery systems. Our research spans aqueous zinc batteries, redox flow batteries, lithium-ion battery materials and prelithiation, operando and in situ diagnostics, and sustainability-driven directions including biomass upcycling, atmospheric water harvesting, and AI-guided materials discovery. By connecting molecular-scale chemistry with cell-level engineering, we aim to create safer, longer-lasting, higher-energy, and more sustainable energy technologies.': '本课题组面向可持续能源存储及相关领域，开展先进材料、界面与电解液化学研究。我们结合电化学、材料科学与多尺度表征，解析离子传输、界面反应和衰减机制，并将基础认识转化为实用电池体系。研究方向涵盖水系锌电池、液流电池、锂离子电池材料与补锂化学、operando/in situ 表征，以及生物质高值化利用、大气集水和人工智能辅助材料发现等可持续发展方向。通过连接分子尺度化学与电芯工程，我们致力于构建更安全、更耐久、更高能量密度的可持续能源技术。',
        'Electrolyte engineering, separator design, Zn-metal interfaces, and practical cell configurations.': '电解液工程、隔膜设计、锌金属界面与实用电芯构型。',
        'Solvation regulation and application-driven electrolyte design for stable, efficient flow batteries.': '溶剂化调控与面向应用的电解液设计，助力构建稳定高效的液流电池。',
        'Prelithiation chemistry, diagnostic strategies, degradation analysis, and practical cell solutions.': '补锂化学、诊断策略、衰减分析与实用电芯解决方案。',
        'Atmospheric water harvesting, waste upcycling, and AI-guided electrochemical research.': '大气集水、废弃物高值化利用与人工智能辅助电化学研究。',
        'Our group develops advanced materials, interfaces, and electrolyte chemistries for sustainable energy storage and beyond, with an emphasis on bridging fundamental mechanistic understanding with application-driven materials design and engineering.': '本课题组开发面向可持续能源存储及相关领域的先进材料、界面和电解液化学，重点连接基础机理认识与面向应用的材料设计和工程实践。',
        'We develop key materials and chemistries for high-performance aqueous zinc batteries, with particular interests in electrolyte engineering, separator design, Zn-metal interfaces, and practical cell configurations.': '我们开发高性能水系锌电池所需的关键材料与化学体系，重点关注电解液工程、隔膜设计、锌金属界面和实用电芯构型。',
        'Regulating Zn deposition and parasitic reactions': '调控锌沉积与寄生反应',
        'Understanding interfacial evolution and ion transport': '理解界面演化与离子传输',
        'Translating materials chemistry into safer, longer-lasting, higher-energy cells': '将材料化学认识转化为更安全、更耐久、更高能量的电芯',
        'Our research aims to connect mechanistic understanding with practical cell design for safer, longer-lasting, and higher-energy aqueous batteries.': '我们的研究致力于将机理认识与实用电芯设计相结合，推动更安全、更耐久、更高能量的水系电池发展。',
        'We explore electrolyte chemistry and solvation regulation for next-generation redox flow batteries, from molecular-level structure to long-term device performance.': '我们研究下一代液流电池的电解液化学与溶剂化调控，覆盖分子结构到器件长期性能。',
        'Solvation structures, coordination chemistry, and redox speciation': '溶剂化结构、配位化学与氧化还原物种调控',
        'Ion transport and reaction selectivity': '离子传输与反应选择性',
        'Electrolyte design for calendar life, temperature window, and energy efficiency': '面向日历寿命、工作温区和能量效率的电解液设计',
        'Beyond molecular-level understanding, we emphasize application-driven electrolyte design and long-term cycling stability.': '在分子层面认识之外，我们强调面向应用的电解液设计与长期循环稳定性。',
        'We develop functional materials and diagnostic strategies for practical lithium-ion batteries, spanning materials design, lithium-compensation/prelithiation chemistry, reaction mechanisms, degradation analysis, and failure mechanisms.': '我们面向实用锂离子电池开发功能材料与诊断策略，涵盖材料设计、补锂/预锂化化学、反应机理、衰减分析和失效机制。',
        'Materials and cell-level strategies for lithium compensation': '材料与电芯层面的补锂策略',
        'Operando and in situ diagnostics for reaction and degradation mechanisms': '面向反应与衰减机制的 operando 和原位诊断',
        'Failure analysis linked to lifetime, energy density, and safety': '关联寿命、能量密度与安全性的失效分析',
        'Our goal is to connect materials-level understanding with cell-level performance and provide practical solutions for battery lifetime, energy density, and safety.': '我们的目标是连接材料层面的认识与电芯层面的性能，为电池寿命、能量密度和安全性提供实用解决方案。',
        'We are interested in emerging research at the intersection of materials science, sustainability, and artificial intelligence.': '我们关注材料科学、可持续发展与人工智能交叉领域的新兴研究。',
        'Atmospheric water harvesting': '大气集水',
        'Upcycling waste materials into functional materials': '将废弃物高值化利用为功能材料',
        'AI-guided materials discovery and electrochemical research': '人工智能辅助材料发现与电化学研究',
        'These interdisciplinary directions help us develop sustainable technologies while opening new opportunities for data-driven electrochemical research.': '这些交叉方向帮助我们发展可持续技术，并为数据驱动的电化学研究打开新的机会。',
        'We are recruiting PhD students, Research Assistants, and Postdoctoral Researchers with backgrounds in energy chemistry, electrochemistry, materials science, chemistry, physics, chemical engineering, and related disciplines.': '我们正在招收具有能源化学、电化学、材料科学、化学、物理、化学工程及相关学科背景的博士生、科研助理和博士后研究人员。',
        'Our current research interests include aqueous batteries, redox flow batteries, lithium-compensation materials for lithium-ion batteries, operando/in situ characterization, electrochemical reaction mechanisms, battery failure analysis, and theoretical/computational studies. Candidates with complementary expertise in other areas of electrochemistry and energy materials are also welcome to contact us to explore potential research opportunities.': '目前的研究兴趣包括水系电池、液流电池、锂离子电池补锂材料、operando/in situ 表征、电化学反应机制、电池失效分析以及理论与计算研究。我们也欢迎在其他电化学和能源材料方向具有互补专长的候选人与我们联系，探讨潜在研究机会。',
        'We welcome highly motivated students interested in pursuing a PhD at the University of Macau.': '我们欢迎有志于在澳门大学攻读博士学位、积极进取的学生加入。',
        'We welcome applications from highly motivated researchers interested in developing independent and collaborative research in electrochemical energy storage and related fields.': '我们欢迎有志于在电化学能源存储及相关领域开展独立研究与合作研究的优秀研究人员申请。',
        'Additional postdoctoral opportunities may be available through the Zhuhai UM Science & Technology Research Institute (ZUMRI) in Hengqin.': '珠海澳门大学科技研究院（ZUMRI）可能在横琴提供额外的博士后机会。',
        'These positions offer competitive remuneration, and eligible candidates may also benefit from additional postdoctoral support and talent programmes available in Hengqin, subject to the applicable policies.': '这些岗位提供具有竞争力的薪酬；符合条件的候选人还可能根据相关政策获得横琴地区的博士后支持和人才项目支持。',
        'Research Assistant positions are available for candidates with backgrounds in chemistry, materials science, electrochemistry, physics, chemical engineering, or related disciplines.': '我们面向具有化学、材料科学、电化学、物理、化学工程及相关学科背景的候选人提供科研助理岗位。',
        'Research topics and appointment arrangements can be discussed on a case-by-case basis. Candidates who are interested in gaining research experience before applying for a PhD are particularly encouraged to apply, and priority may be given to candidates with plans to pursue doctoral study in the group.': '研究主题和聘用安排可根据具体情况协商。我们特别鼓励希望在申请博士前积累科研经验的候选人申请；计划在本课题组攻读博士学位的候选人可能优先考虑。',
        'Interested candidates are encouraged to send a Curriculum Vitae (CV) and a brief description of their research interests.': '有意向的候选人请发送个人简历（CV）和简短的研究兴趣介绍。',
        'Please send your application to': '请将申请材料发送至',
        'Awards Ceremony': '颁奖典礼',
        'Roubenjia BBQ': '柔本家烧烤',
        'Beautiful Scientific Photo': '美丽的科研照片',
        'EM meeting': 'EM 会议',
        'Autumn Outing': '秋季团建',
        'Dinner at Dongdafang': '东大方晚餐',
        'Postdoc Exit': '博士后出站',
        'New Year Celebration': '新年庆祝',
        'Faculty Award': '学院奖项',
        'AI for Science Forum': 'AI for Science 论坛',
        'Jingshan Temple': '径山寺',
        'Dinner at Haidilao': '海底捞晚餐',
        'New Publication in Advanced Science': 'Advanced Science 发表新论文',
        'New Publication in Advanced Energy Materials': 'Advanced Energy Materials 发表新论文',
        'New Publication in Science Advances': 'Science Advances 发表新论文',
        'New Publication in Energy Materials and Devices': 'Energy Materials and Devices 发表新论文',
        'New Publication in Nano Letters': 'Nano Letters 发表新论文',
        'New Publication in ACS Nano': 'ACS Nano 发表新论文',
        'New Publication in Science Bulletin': 'Science Bulletin 发表新论文',
        'New Publication in Small': 'Small 发表新论文',
        'New Publication in Joule': 'Joule 发表新论文',
        'New Publication in Nature Communications': 'Nature Communications 发表新论文',
        'New Publication in Angewandte Chemie International Edition': 'Angewandte Chemie International Edition 发表新论文',
        'New Publication in Cellulose': 'Cellulose 发表新论文',
        'New Publication in EcoMat': 'EcoMat 发表新论文',
        'Congratulations on Angewandte Chemie Acceptance': '祝贺论文被 Angewandte Chemie 接收',
        'Welcome to the Lab, Zhaoyang Zhang!': '欢迎 Zhaoyang Zhang 加入课题组！',
        'Welcome to the Lab, Bowen Liang!': '欢迎 Bowen Liang 加入课题组！'
    };

    const translations = Object.keys(rawTranslations).reduce((result, key) => {
        result[normalize(key)] = rawTranslations[key];
        return result;
    }, {});

    let currentLanguage = 'en';
    let applying = false;

    function normalize(value) {
        return String(value || '').replace(/\s+/g, ' ').trim();
    }

    function ensureToggle() {
        let toggle = document.querySelector('.language-toggle');
        if (toggle) return toggle;

        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            const item = document.createElement('li');
            item.className = 'language-switch-item';
            toggle = document.createElement('button');
            toggle.className = 'language-toggle';
            toggle.type = 'button';
            item.appendChild(toggle);
            navLinks.appendChild(item);
        } else {
            toggle = document.createElement('button');
            toggle.className = 'language-toggle splash-language-toggle';
            toggle.type = 'button';
            document.body.appendChild(toggle);
        }

        toggle.addEventListener('click', function () {
            setLanguage(currentLanguage === 'en' ? 'zh' : 'en');
            const navLinks = document.querySelector('.nav-links');
            const menuButton = document.querySelector('.mobile-menu-btn');
            if (navLinks) navLinks.classList.remove('active');
            if (menuButton) menuButton.setAttribute('aria-expanded', 'false');
        });
        return toggle;
    }

    function collectTranslatableElements() {
        const selector = 'h1,h2,h3,h4,h5,p,li,a,button,span,strong,em';
        document.querySelectorAll(selector).forEach(element => {
            if (element.classList.contains('language-toggle') || element.closest('.language-toggle')) return;
            // Translate the leaf element, never a parent such as <li> that
            // contains a navigation link or a formatted paragraph.
            if (element.children.length > 0) return;
            if (element.dataset.i18nEn) return;

            const textKey = normalize(element.textContent);
            const htmlKey = normalize(element.innerHTML);
            if (translations[textKey] || translations[htmlKey]) {
                element.dataset.i18nEn = element.innerHTML;
                element.dataset.i18nKey = translations[textKey] ? textKey : htmlKey;
            }
        });
    }

    function translateElements() {
        document.querySelectorAll('[data-i18n-en]').forEach(element => {
            const original = element.dataset.i18nEn;
            const key = element.dataset.i18nKey || normalize(original);
            const translation = translations[key];
            if (!translation) return;
            element.innerHTML = currentLanguage === 'zh' ? translation : original;
        });
    }

    function updateToggle(toggle) {
        toggle.textContent = currentLanguage === 'en' ? '中文' : 'English';
        toggle.setAttribute('aria-label', currentLanguage === 'en' ? 'Switch to Chinese' : '切换到英文');
        toggle.setAttribute('title', currentLanguage === 'en' ? 'Switch to Chinese' : 'Switch to English');
    }

    function setLanguage(language) {
        currentLanguage = language === 'zh' ? 'zh' : 'en';
        localStorage.setItem(STORAGE_KEY, currentLanguage);
        document.documentElement.lang = currentLanguage === 'zh' ? 'zh-CN' : 'en';
        document.body.dataset.language = currentLanguage;

        if (!applying) {
            applying = true;
            collectTranslatableElements();
            translateElements();
            applying = false;
        }

        document.querySelectorAll('.language-toggle').forEach(updateToggle);
        window.dispatchEvent(new CustomEvent('siteLanguageChanged', { detail: { language: currentLanguage } }));
    }

    function initialize() {
        ensureToggle();
        const saved = localStorage.getItem(STORAGE_KEY);
        setLanguage(saved === 'zh' ? 'zh' : 'en');
    }

    window.applySiteLanguage = function () {
        setLanguage(currentLanguage);
    };
    window.getSiteLanguage = function () {
        return currentLanguage;
    };

    document.addEventListener('DOMContentLoaded', initialize);
})();
