// Wilon 个人网站配置（基于 NotionNext Proxio 主题）
// 如需调整，请修改对应字段即可即时生效

const CONFIG = {
  /** 欢迎页 */
  PROXIO_WELCOME_COVER_ENABLE: false,
  PROXIO_WELCOME_TEXT: '欢迎来到 Wilon 的知识星球，点击任意位置启程',

  /** 英雄区 */
  PROXIO_HERO_ENABLE: true,
  PROXIO_HERO_TITLE_1: '洞察驱动 · 策略致胜',
  PROXIO_HERO_TITLE_2: '用 30 年战略蓝图陪伴创业者突破增长天花板',
  PROXIO_HERO_BUTTON_1_TEXT: '预约战略诊断',
  PROXIO_HERO_BUTTON_1_URL: '/contact',
  PROXIO_HERO_BUTTON_2_TEXT: '订阅每周洞察',
  PROXIO_HERO_BUTTON_2_URL: '/newsletter',
  PROXIO_HERO_BUTTON_2_ICON: '/images/starter/mail.svg',
  PROXIO_HERO_BANNER_IMAGE: '/images/hero-banner.webp',
  PROXIO_HERO_BANNER_IFRAME_URL: '',

  /** 博客区（洞察） */
  PROXIO_BLOG_ENABLE: true,
  PROXIO_BLOG_TITLE: '洞察',
  PROXIO_BLOG_COUNT: 4,
  PROXIO_BLOG_TEXT_1: '最新战略思考',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '/images/insight-1.webp',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '/images/insight-2.webp',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '/images/insight-3.webp',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '/images/insight-4.webp',

  /** 公告条 */
  PROXIO_ANNOUNCEMENT_ENABLE: false,

  /** 特性区 */
  PROXIO_FEATURE_ENABLE: true,
  PROXIO_FEATURE_TITLE: '为什么选择尉达战略咨询',
  PROXIO_FEATURE_TEXT_1: '用系统方法让增长可预期',
  PROXIO_FEATURE_TEXT_2: '洞察 × 机制 × 心理驱动 三位一体',
  PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-map',
  PROXIO_FEATURE_1_ICON_IMG_URL: '',
  PROXIO_FEATURE_1_TITLE_1: '高维战略地图',
  PROXIO_FEATURE_1_TEXT_1: '基于 V‑Map™ 框架，快速定位企业长期增长坐标。',
  PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-people-group',
  PROXIO_FEATURE_2_ICON_IMG_URL: '',
  PROXIO_FEATURE_2_TITLE_1: '共创式陪跑',
  PROXIO_FEATURE_2_TEXT_1: '与核心团队迭代战略，确保方案真正落地。',
  PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-chart-line',
  PROXIO_FEATURE_3_ICON_IMG_URL: '',
  PROXIO_FEATURE_3_TITLE_1: '数据复盘优化',
  PROXIO_FEATURE_3_TEXT_1: '持续监测关键指标，动态修正成长路径。',
  PROXIO_FEATURE_BUTTON_TEXT: '了解服务',
  PROXIO_FEATURE_BUTTON_URL: '/services',

  /** 生涯区 */
  PROXIO_CAREER_ENABLE: true,
  PROXIO_CAREER_TITLE: '生涯里程碑',
  PROXIO_CAREER_TEXT: '从内容创作者到战略顾问的蜕变',
  PROXIO_CAREERS: [
    { title: '内容创作者', bio: '2015‑2019', text: '专注商业与心理学科普，累计百万阅读。' },
    { title: '战略顾问', bio: '2020‑Now', text: '为 50+ 中小企业绘制 V‑Map™ 战略蓝图，实现平均 3× 增长。' },
    { title: '创点社群发起人', bio: '2023‑Now', text: '搭建学习型社群，为创业者提供共创与资源链接。' }
  ],

  /** 用户反馈 */
  PROXIO_TESTIMONIALS_ENABLE: true,
  PROXIO_TESTIMONIALS_TITLE: '客户证言',
  PROXIO_TESTIMONIALS_TEXT_1: '他们如何评价尉达',
  PROXIO_TESTIMONIALS_TEXT_2: '真实反馈见证方法论价值',
  PROXIO_TESTIMONIALS_BUTTON_URL: '/case',
  PROXIO_TESTIMONIALS_BUTTON_TEXT: '查看案例',
  PROXIO_TESTIMONIALS_ITEMS: [
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT: '通过 V‑Map™ 我们在 6 个月内完成品牌重定位，线上营收提升 250%。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/images/avatar-client1.webp',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '李总',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '家用电器初创 CEO',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT: '共创式陪跑让团队对战略有了共同语言，决策效率大幅提升。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/images/avatar-client2.webp',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Angela',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'DTC 品牌联合创始人',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  /** FAQ */
  PROXIO_FAQ_ENABLE: true,
  PROXIO_FAQ_TITLE: '常见问题',
  PROXIO_FAQ_TEXT_1: '关于战略服务，你可能想知道',
  PROXIO_FAQ_TEXT_2: '如未找到答案欢迎直接联系我',
  PROXIO_FAQS: [
    { q: '战略合作流程是怎样的？', a: '1) 初步诊断 → 2) 深度访谈 → 3) 战略工作坊 → 4) 共创执行 → 5) 数据复盘。' },
    { q: '服务周期多久？', a: '标准周期为 12 周，可根据企业需求灵活调整。' },
    { q: '远程协作可以吗？', a: '支持线上+线下混合模式，远程工具保证沟通效率。' },
    { q: '咨询费用如何计算？', a: '根据企业规模与项目复杂度定价，欢迎预约免费诊断后获取报价。' }
  ],

  /** 关于我 */
  PROXIO_ABOUT_ENABLE: true,
  PROXIO_ABOUT_TITLE: '关于 Wilon',
  PROXIO_ABOUT_TEXT_1: '战略 × 心理 · 双轮驱动',
  PROXIO_ABOUT_TEXT_2: '以用户洞察为锚点，帮助企业构建长期竞争优势。',
  PROXIO_ABOUT_PHOTO_URL: '/images/avatar-wilon.webp',
  PROXIO_ABOUT_KEY_1: '实战年限',
  PROXIO_ABOUT_VAL_1: '8 年',
  PROXIO_ABOUT_KEY_2: '服务客户',
  PROXIO_ABOUT_VAL_2: '50+',
  PROXIO_ABOUT_KEY_3: '交付蓝图',
  PROXIO_ABOUT_VAL_3: '100+',
  PROXIO_ABOUT_KEY_4: '分享时长（小时）',
  PROXIO_ABOUT_VAL_4: '5000+',
  PROXIO_ABOUT_BUTTON_URL: '/about',
  PROXIO_ABOUT_BUTTON_TEXT: '更多故事',

  /** 滚动关键词 */
  PROXIO_BRANDS_ENABLE: true,
  PROXIO_BRANDS: ['战略咨询', '增长模型', '创点社群', 'V‑Map™'],

  /** 页脚 */
  PROXIO_FOOTER_SLOGAN: '用洞察与系统思维驱动可持续增长',
  PROXIO_FOOTER_LINKS: [
    {
      name: '推荐阅读',
      menus: [
        { title: '战略洞察', href: '/category/strategy' },
        { title: '心理动能', href: '/category/psychology' }
      ]
    },
    {
      name: '联系',
      menus: [
        { title: '预约诊断', href: '/contact' },
        { title: 'LinkedIn', href: 'https://www.linkedin.com/in/wilon' }
      ]
    }
  ],
  PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新洞察',
  PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',
  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legal-notice',
  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务条款',
  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms',

  /** 404 */
  PROXIO_404_TITLE: '页面迷路了',
  PROXIO_404_TEXT: '抱歉，内容不存在或已被移动。',
  PROXIO_404_BACK: '返回首页',

  /** CTA */
  PROXIO_CTA_ENABLE: true,
  PROXIO_CTA_TITLE: '准备好升级你的战略了吗？',
  PROXIO_CTA_TITLE_2: '立即预约 30 分钟免费诊断',
  PROXIO_CTA_DESCRIPTION: '点击下方按钮，与我一起开启增长之旅。',
  PROXIO_CTA_BUTTON: true,
  PROXIO_CTA_BUTTON_URL: '/contact',
  PROXIO_CTA_BUTTON_TEXT: '马上联系',

  /** 文章重定向（保持和原主题兼容，可按需关闭） */
  PROXIO_POST_REDIRECT_ENABLE: false,
  PROXIO_POST_REDIRECT_URL: '',

  /** 邮件订阅 */
  PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || true
};

export default CONFIG;
