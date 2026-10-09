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
        'Welcome to the Lab, Bowen Liang!': '欢迎 Bowen Liang 加入课题组！',
        'Institute of Applied Physics and Materials Engineering, University of Macau': '澳门大学应用物理及材料工程研究院',
        'Dr. Qing Li is an Assistant Professor and PhD Supervisor at the Institute of Applied Physics and Materials Engineering (IAPME), University of Macau. Her research focuses on advanced electrochemical energy storage, particularly aqueous zinc batteries, electrolyte engineering, interfacial chemistry, and battery materials.': '李清博士是澳门大学应用物理及材料工程研究院（IAPME）助理教授、博士生导师，主要从事先进电化学储能研究，重点关注水系锌电池、电解液工程、界面化学和电池材料。',
        'She has over two years of industrial R&D experience in battery technologies, connecting fundamental research with practical applications. She has published over 80 peer-reviewed papers, including in Nature Communications, Science Advances, Joule, Angewandte Chemie International Edition, and Advanced Materials, with more than 10,000 citations and an h-index of 47.': '她拥有两年以上电池技术产业研发经验，致力于连接基础研究与实际应用。她已发表 80 余篇同行评议论文，发表于 Nature Communications、Science Advances、Joule、Angewandte Chemie International Edition 和 Advanced Materials 等期刊，论文被引用超过 10,000 次，h-index 为 47。',
        'Her projects have received support from the National Natural Science Foundation of China, the University of Macau, and industrial partners. She has been recognized as a Stanford World鈥檚 Top 2% Scientist.': '她主持或参与的项目获得国家自然科学基金、澳门大学及产业合作伙伴支持，并入选 Stanford/Elsevier 全球前 2% 科学家。',
        'Dr. Qing Li leads research in advanced electrochemical energy storage, with particular interests in aqueous zinc batteries, electrolyte engineering, interfacial chemistry, and battery materials.': '李清博士主要开展先进电化学储能研究，重点关注水系锌电池、电解液工程、界面化学和电池材料。',
        'She has over two years of industrial R&D experience in battery technologies, connecting fundamental research with practical applications. Her projects are supported by the National Natural Science Foundation of China, the University of Macau, and industrial partners.': '她拥有两年以上电池技术产业研发经验，致力于连接基础研究与实际应用；相关项目获得国家自然科学基金、澳门大学及产业合作伙伴支持。',
        'She has published over 80 peer-reviewed papers in journals including Nature Communications, Science Advances, Joule, Angewandte Chemie International Edition, and Advanced Materials.': '她已在 Nature Communications、Science Advances、Joule、Angewandte Chemie International Edition 和 Advanced Materials 等期刊发表 80 余篇同行评议论文。',
        'Ph.D., Materials Science and Engineering, City University of Hong Kong, 2023 (HKPFS recipient)': '香港城市大学材料科学与工程博士，2023 年（香港博士研究生奖学金获得者）',
        'M.Phil., Chemical and Biomolecular Engineering, The Hong Kong University of Science and Technology, 2017': '香港科技大学化学及生物分子工程哲学硕士，2017 年',
        'M.S., Materials Science and Engineering, Tsinghua University, 2017': '清华大学材料科学与工程硕士，2017 年',
        'B.S., Materials Chemistry, Central South University, 2014': '中南大学材料化学学士，2014 年',
        'Aug 2024鈥損resent: Assistant Professor, Institute of Applied Physics and Materials Engineering, University of Macau': '2024 年 8 月至今：澳门大学应用物理及材料工程研究院助理教授',
        '2023鈥?024: Postdoctoral Fellow, Department of Materials and Engineering, City University of Hong Kong (PDFS recipient)': '2023–2024 年：香港城市大学材料与工程系博士后（博士后研究奖学金获得者）',
        '2018鈥?019: Product Design Engineer, Sunwoda Electronics Co., Ltd.': '2018–2019 年：欣旺达电子股份有限公司产品设计工程师',
        '2017鈥?018: Engineer, Shenzhen Qingxin Power Research Institute': '2017–2018 年：深圳清新动力研究院工程师',
        '2025 Stanford/Elsevier World鈥檚 Top 2% Scientist': '2025 年 Stanford/Elsevier 全球前 2% 科学家',
        '2023 Hong Kong RGC Postdoctoral Fellowship, University Grants Committee (Hong Kong)': '2023 年香港研究资助局博士后奖学金，香港大学教育资助委员会',
        '2022 Chow Yei Ching School of Graduate Studies Scholarship, City University of Hong Kong': '2022 年香港城市大学研究生院周亦卿奖学金',
        '2019 Hong Kong PhD Fellowship, University Grants Committee (Hong Kong)': '2019 年香港博士研究生奖学金，香港大学教育资助委员会',
        '2014 International Exchange Program Scholarship, China Scholarship Council': '2014 年国际交流项目奖学金，中国国家留学基金管理委员会',
        '2012 National Scholarship, Ministry of Education of China': '2012 年国家奖学金，中华人民共和国教育部',
        'Postdoctoral Researcher, Institute of Applied Physics and Materials Engineering, University of Macau; Ph.D., Wuhan University.': '澳门大学应用物理及材料工程研究院博士后；武汉大学博士。',
        'Research: redox flow batteries. Published 8 first-author papers in related fields and applied for 8 invention patents.': '研究方向：液流电池。以第一作者在相关领域发表 8 篇论文，申请发明专利 8 项。',
        'Postdoctoral Researcher, Institute of Applied Physics and Materials Engineering, University of Macau; Ph.D., Southeast University.': '澳门大学应用物理及材料工程研究院博士后；东南大学博士。',
        'Research: MOF structural design for aqueous zinc-ion batteries. Published 10 papers as first or co-first author, including papers in Advanced Materials and Energy & Environmental Science (2 papers), and applied for 2 invention patents.': '研究方向：用于水系锌离子电池的 MOF 结构设计。以第一作者或共同第一作者发表 10 篇论文，其中包括 Advanced Materials 和 Energy & Environmental Science 论文（2 篇），申请发明专利 2 项。',
        'Ph.D. Student, Institute of Applied Physics and Materials Engineering, University of Macau; M.S., Institute of Process Engineering, Chinese Academy of Sciences.': '澳门大学应用物理及材料工程研究院博士生；中国科学院过程工程研究所硕士。',
        'Research: zinc-halogen flow batteries, aqueous zinc-ion batteries, and metal-chelate flow batteries. First author of 4 papers in Angewandte Chemie International Edition, Advanced Energy Materials, Chemical Engineering Journal, and ACS Applied Energy Materials; co-author of 6 papers, with 40 citations and 1 patent application. Amateur astrophotographer and intermediate judge at Xunjixingke.': '研究方向：锌卤素液流电池、水系锌离子电池和金属螯合物液流电池。以第一作者在 Angewandte Chemie International Edition、Advanced Energy Materials、Chemical Engineering Journal 和 ACS Applied Energy Materials 发表 4 篇论文，合作发表 6 篇论文，被引 40 次，申请专利 1 项。业余天文摄影师，担任巡星客中级评委。',
        'Ph.D. Student, Institute of Applied Physics and Materials Engineering, University of Macau.': '澳门大学应用物理及材料工程研究院博士生。',
        'Research: design of lithium-compensation materials, interfacial regulation, and mechanisms for long-life, high-energy-density lithium iron phosphate batteries. Published 2 papers in related fields and applied for 4 invention patents.': '研究方向：面向长寿命、高能量密度磷酸铁锂电池的补锂材料设计、界面调控及机理研究。在相关领域发表 2 篇论文，申请发明专利 4 项。',
        'Ph.D. Student, Institute of Applied Physics and Materials Engineering, University of Macau; M.S., Xiamen University.': '澳门大学应用物理及材料工程研究院博士生；厦门大学硕士。',
        'Research: battery interfacial evolution and the development of high-performance alkali-metal batteries. Published one first-author paper in Advanced Energy Materials and applied for 2 invention patents.': '研究方向：电池界面演化及高性能碱金属电池构建。以第一作者在 Advanced Energy Materials 发表 1 篇论文，申请发明专利 2 项。',
        'Ph.D. Student, University of Macau.': '澳门大学博士生。',
        'Research: materials computation and AI4S. Personality type: ENTJ. Outside research, he enjoys fitness, badminton, outdoor activities, and fishing and hunting.': '研究方向：材料计算和 AI4S。性格类型：ENTJ。业余时间喜欢健身、羽毛球，也喜欢户外活动和渔猎。',
        'Research: renewable biomass resources for energy storage, with a focus on high-value biomass utilization, cellulose-based biomass separator fabrication, and applications in aqueous zinc-based batteries. First-author papers have appeared in Cellulose, Energy Materials and Devices, and Microporous and Mesoporous Materials.': '研究方向：可再生生物质资源在储能领域的应用开发，重点关注生物质资源高值化利用、纤维素基生物质隔膜制备及其在水系锌基电池中的应用。以第一作者在 Cellulose、Energy Materials and Devices 和 Microporous and Mesoporous Materials 等期刊发表论文。',
        'Research: advanced functional materials and technologies for sustainable water resources. First-author papers have appeared in Cellulose and Environmental Research; applied for 2 invention patents.': '研究方向：面向水资源可持续发展的先进功能材料与技术。以第一作者在 Cellulose 和 Environmental Research 发表论文，申请发明专利 2 项。',
        "Master's Student, Institute of Applied Physics and Materials Engineering, University of Macau; B.S., Harbin Institute of Technology.": '澳门大学应用物理及材料工程研究院硕士生；哈尔滨工业大学学士。',
        'Research: energy-storage materials for zinc battery systems, currently focusing on the investigation and performance optimization of low-temperature-adapted electrolytes.': '研究方向：锌电池体系储能材料，现阶段聚焦低温适配电解液的探究与性能优化。',
        "Joined Li's Lab in September 2025. B.S. in Chemical Engineering and Technology, Faculty of Chemical and Materials, Huaibei Normal University (September 2020 – June 2024).": '2025 年 9 月加入李老师课题组。淮北师范大学化学工程与工艺学士，化学与材料学院（2020 年 9 月–2024 年 6 月）。',
        'Recipient of the Excellent Graduation Scholarship in 2024.': '2024 年优秀毕业奖学金获得者。',
        'Joined the lab in September 2025. B.S., Beijing Institute of Petrochemical Technology (2023).': '2025 年 9 月加入课题组。北京石油化工学院学士，2023 年。',
        "Master's Student, Institute of Applied Physics and Materials Engineering, University of Macau.": '澳门大学应用物理及材料工程研究院硕士生。',
        'Research: aqueous zinc-bromine energy-storage batteries, focusing on electrolyte regulation, bromine valence-state conversion mechanisms, bromine-shuttle suppression strategies, and electrochemical performance optimization.': '研究方向：水系锌溴储能电池，聚焦电解液调控、溴价态转化机制、溴穿梭抑制策略和电化学性能优化。',
        'Joined the lab in July 2026. B.S., Ningbo University.': '2026 年 7 月加入课题组。宁波大学学士。',
        'Research: surface engineering, solid-state electrolytes, and materials computation. Published 4 first- or second-author papers in journals including Surface & Coatings Technology and Carbon; applied for 1 invention patent.': '研究方向：表面工程、固态电解质和材料计算。在 Surface & Coatings Technology、Carbon 等期刊以第一或第二作者发表 4 篇论文，申请发明专利 1 项。',
        'Redox flow batteries; 8 first-author papers and 8 invention patent applications.': '液流电池；以第一作者发表 8 篇论文，申请发明专利 8 项。',
        'MOF structural design for aqueous zinc-ion batteries; 10 first- or co-first-author papers and 2 patent applications.': '用于水系锌离子电池的 MOF 结构设计；以第一作者或共同第一作者发表 10 篇论文，申请专利 2 项。',
        'Zinc-halogen flow batteries, aqueous zinc-ion batteries, and metal-chelate flow batteries; 4 first-author papers and 1 patent application.': '锌卤素液流电池、水系锌离子电池和金属螯合物液流电池；以第一作者发表 4 篇论文，申请专利 1 项。',
        'Lithium-compensation materials, interface regulation, and mechanisms for long-life lithium iron phosphate batteries.': '长寿命磷酸铁锂电池的补锂材料、界面调控与机理研究。',
        'Battery interfacial evolution and high-performance alkali-metal batteries; first-author paper in Advanced Energy Materials.': '电池界面演化与高性能碱金属电池；在 Advanced Energy Materials 发表第一作者论文。',
        'Materials computation and AI4S; enjoys fitness, badminton, outdoor activities, and fishing and hunting.': '材料计算和 AI4S；喜欢健身、羽毛球、户外活动和渔猎。',
        'Renewable biomass resources for energy storage, including cellulose-based separators for aqueous zinc batteries.': '可再生生物质资源储能应用，包括用于水系锌电池的纤维素基隔膜。',
        'Advanced functional materials and technologies for sustainable water resources; 2 patent applications.': '面向水资源可持续发展的先进功能材料与技术；申请专利 2 项。',
        'Zinc battery energy-storage materials, focusing on low-temperature-adapted electrolytes.': '锌电池储能材料，聚焦低温适配电解液。',
        'Joined in September 2025; B.S. in Chemical Engineering and Technology, Huaibei Normal University; Excellent Graduation Scholarship recipient (2024).': '2025 年 9 月加入；淮北师范大学化学工程与工艺学士；2024 年优秀毕业奖学金获得者。',
        'Joined in September 2025; B.S., Beijing Institute of Petrochemical Technology (2023).': '2025 年 9 月加入；北京石油化工学院学士（2023 年）。',
        'Aqueous zinc-bromine energy-storage batteries, electrolyte regulation, bromine conversion, and shuttle suppression.': '水系锌溴储能电池、电解液调控、溴转化与溴穿梭抑制。',
        'Surface engineering, solid-state electrolytes, and materials computation; 4 first- or second-author papers and 1 patent application.': '表面工程、固态电解质和材料计算；以第一或第二作者发表 4 篇论文，申请专利 1 项。',
        'Peer-reviewed papers': '同行评议论文',
        'Citations': '引用次数',
        'Stanford/Elsevier Scientist': 'Stanford/Elsevier 科学家',
        'View Full Profile & Credentials': '查看完整个人简介与履历',
        'Intake: August each year.': '招生时间：每年 8 月。',
        'Application deadline: Typically around January each year for UM-funded students and March for PI-funded students.': '申请截止时间：澳门大学资助项目通常为每年 1 月左右，导师资助项目通常为每年 3 月。',
        'Financial support: Approximately MOP 12,500–20,000 per month, depending on the scholarship or assistantship awarded. Outstanding applicants may compete for the UM Macao PhD Scholarship, which provides a stipend of MOP 20,000 per month.': '资助待遇：根据获得的奖学金或助学金不同，每月约 12,500–20,000 澳门元。优秀申请者可竞争澳门大学澳门博士奖学金，每月津贴为 20,000 澳门元。',
        'Academic background: Applicants should have a strong academic record. Candidates from leading universities, including Double First-Class universities and former Project 985/211 institutions in Mainland China, are particularly encouraged to apply. A competitive GPA and/or class ranking is advantageous for scholarship applications.': '学术背景：申请人应具有良好的学业成绩，尤其欢迎来自中国内地“双一流”高校及原 985/211 高校的候选人。具有竞争力的 GPA 和/或专业排名有助于奖学金申请。',
        'English proficiency: Normally IELTS 6.0 or above, with no individual band below 5.5, or CET-6 around 430 or above, subject to the latest University admission requirements.': '英语要求：通常要求 IELTS 6.0 及以上且单项不低于 5.5，或大学英语六级约 430 分及以上，具体以学校最新招生要求为准。',
        'Research experience: Previous research experience in batteries, electrochemistry, materials chemistry, computational materials science, or related areas is preferred. Applicants with publications or substantial research experience are particularly encouraged to apply.': '科研经历：优先考虑具有电池、电化学、材料化学、计算材料科学或相关领域研究经历的申请人，特别欢迎有论文或较丰富科研经历的候选人。',
        'Remuneration: Approximately MOP 28,000 per month under standard postdoctoral appointments, with outstanding fellowship recipients potentially receiving up to approximately MOP 40,000 per month, depending on the appointment scheme.': '薪酬：标准博士后岗位约为每月 28,000 澳门元；优秀奖学金获得者根据聘用项目不同，最高可获得约每月 40,000 澳门元。',
        'Application deadline: Calls are generally announced annually. Candidates are encouraged to check the official University announcement and contact us in advance for research discussions and application preparation.': '申请截止时间：相关项目通常每年发布通知，建议候选人关注学校官方公告，并提前联系我们进行研究交流和申请准备。',
        'Candidates for the UM Postdoctoral Fellowship schemes should normally have obtained their PhD within the past two years, or expect to receive their PhD within approximately six months of the relevant application deadline.': '申请澳门大学博士后奖学金项目的候选人通常应在过去两年内获得博士学位，或预计在相关申请截止日期前后约六个月内获得博士学位。',
        'Applicants should demonstrate a competitive research record through high-quality publications, academic achievements, and other research outputs.': '申请人应通过高质量论文、学术成就及其他科研成果展示具有竞争力的科研记录。',
        'For the competitive UM Postdoctoral Fellowship, candidates are generally expected to have obtained their PhD from a highly ranked university or discipline, such as a university ranked within the Top 200 in THE/QS rankings or a Double First-Class university/discipline in Mainland China.': '对于竞争性澳门大学博士后奖学金，候选人通常应毕业于高排名高校或学科，例如 THE/QS 排名全球前 200 的高校，或中国内地“双一流”高校及学科。',
        'For detailed admission deadlines and online applications, please visit the University of Macau doctoral programmes page.': '如需了解详细招生截止时间及在线申请流程，请访问<a href="https://grs.um.edu.mo/index.php/prospective-students/doctoral-degrees-programmes/" target="_blank" rel="noopener noreferrer">澳门大学博士项目页面</a>。',
        'Please send your application to Prof. Qing Li (liqing@um.edu.mo), and indicate the position you are applying for in the email subject line.': '请将个人简历和研究兴趣简介发送至<a href="mailto:liqing@um.edu.mo">李清教授（liqing@um.edu.mo）</a>，并在邮件主题中注明申请岗位。',
        'Address: University Avenue, Taipa, Macau, China': '地址：中国澳门氹仔大学大马路',
        'University of Macau Research Building (N23)': '澳门大学研究大楼（N23）',
        'Tel: +853 8822 4142': '电话：+853 8822 4142',
        'Fax: +853 8822 2454': '传真：+853 8822 2454',
        'Email: liqing@um.edu.mo': '邮箱：liqing@um.edu.mo',
        'General enquiries: iapme.enquiry@um.edu.mo': '一般咨询：iapme.enquiry@um.edu.mo'
    };

    const translations = Object.keys(rawTranslations).reduce((result, key) => {
        result[normalize(key)] = rawTranslations[key];
        return result;
    }, {});

    // Chinese is the default presentation for the lab site; visitors can
    // switch to English with the language button, and their choice is saved.
    let currentLanguage = 'zh';
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
            if (element.dataset.i18nEn) return;

            const textKey = normalize(element.textContent);
            const htmlKey = normalize(element.innerHTML);
            // Navigation list items contain links; translate the link itself
            // so the href and structure are never replaced.
            if (element.tagName === 'LI' && element.querySelector('a')) return;
            // Parent elements are safe only when an explicit full translation
            // exists. This allows bios with <em> tags while avoiding partial
            // translations that would destroy nested markup.
            if (element.children.length > 0 && !translations[textKey] && !translations[htmlKey]) return;
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
        setLanguage(saved === 'en' ? 'en' : 'zh');
    }

    window.applySiteLanguage = function () {
        setLanguage(currentLanguage);
    };
    window.getSiteLanguage = function () {
        return currentLanguage;
    };

    document.addEventListener('DOMContentLoaded', initialize);
})();
