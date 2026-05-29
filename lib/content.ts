export type Bi = { zh: string; en: string };

export const content = {
  meta: {
    title: {
      zh: "Tutela · 中学入学考试辅导",
      en: "Tutela · Secondary Admission Exam Tutoring",
    },
    description: {
      zh: "由刚刚考过入学考试的尖子生提供的中学入学考试小组辅导。",
      en: "Small-group secondary admission exam tutoring by students who just aced the exams.",
    },
    brand: { zh: "Tutela", en: "Tutela" },
  },
  nav: {
    contact: { zh: "联系我", en: "Contact me" },
  },
  hero: {
    tag: { zh: "蒙特利尔 · 中学入学考试备考", en: "Montreal · Secondary admission exam prep" },
    title: { zh: "中学入学考试辅导", en: "Secondary Admission Exam Tutoring" },
    subtitle: {
      zh: "我们是刚刚考过入学考试的尖子生，帮助孩子顺利通过考试。",
      en: "We're top students who just passed the admission exams, here to help your child pass theirs.",
    },
    trial: {
      zh: "首次免费试听 · 满意再报名",
      en: "First lesson free — enrol only if you're happy",
    },
    chips: [
      { zh: "5–10 人小班", en: "Small classes of 5–10" },
      { zh: "数学 · 法语 · 英语", en: "Math · French · English" },
      { zh: "周六上午授课", en: "Saturday mornings" },
    ],
  },
  stats: [
    { value: { zh: "5–10", en: "5–10" }, label: { zh: "人 / 每班", en: "per class" } },
    { value: { zh: "3", en: "3" }, label: { zh: "门科目", en: "subjects" } },
    { value: { zh: "周六", en: "Sat" }, label: { zh: "上午授课", en: "mornings" } },
  ] as { value: Bi; label: Bi }[],
  whyUs: {
    title: { zh: "为什么选择我们", en: "Why choose us" },
    points: [
      {
        zh: "我们刚刚考过同样的入学考试，最清楚考什么、该怎么准备。",
        en: "We just sat the same admission exams ourselves — we know exactly what they test and how to prepare.",
      },
      {
        zh: "导师均就读于魁北克顶尖中学，包括 Collège Jean-de-Brébeuf。",
        en: "Our tutors all attend top Quebec secondary schools, including Collège Jean-de-Brébeuf.",
      },
      {
        zh: "5–10 人小班，名额有限，确保每个孩子都得到充分关注。",
        en: "Small classes of 5–10 with limited spots, so every child gets real attention.",
      },
    ] as Bi[],
  },
  whoWeAre: {
    title: { zh: "关于我们", en: "Who we are" },
    body: {
      zh: "我们是来自魁北克顶尖学校的中学生，包括 Collège Jean-de-Brébeuf。我们都参加过中学入学考试，知道考试考什么、怎么考，也明白孩子需要准备什么。我们用自己的经验来帮助孩子备考。",
      en: "We're secondary students from top Quebec schools, including Collège Jean-de-Brébeuf. We've all taken the secondary admission exams ourselves — we know what they test, how they work, and what your child needs to prepare. We use that first-hand experience to help your child get ready.",
    },
  },
  whatWeOffer: {
    title: { zh: "我们提供什么", en: "What we offer" },
    body: {
      zh: "我们主要提供针对中学入学考试的小组辅导，科目包括数学、法语、英语。课程适合小学三、四、五年级的学生，按年级和报名人数分组。除了入学考试备考，我们也提供一般学科辅导。",
      en: "We focus on small-group tutoring for the secondary admission exams, covering Math, French, and English. Classes suit primary grades 3, 4, and 5, grouped by grade level and enrolment. Beyond admission prep, we also offer general academic tutoring.",
    },
    mockExams: {
      zh: "我们还将提供基于近年入学考试内容设计的模拟测试，帮助孩子熟悉考试形式。（即将推出）",
      en: "We'll also provide practice exams modeled on recent admission-exam content to help children get familiar with the format. (Coming soon)",
    },
  },
  tutors: {
    title: { zh: "导师团队", en: "The tutors" },
    math: {
      zh: "数学导师：在 AMC（美国数学竞赛）及 Waterloo（CEMC）数学竞赛中名列前茅。",
      en: "Math tutor: places among the top in the AMC (American Mathematics Competitions) and Waterloo (CEMC) math contests.",
    },
    english: {
      zh: "英语导师：就读于 Brébeuf 最高级别的英语课程，成绩优异。",
      en: "English tutor: enrolled in the highest level of English offered at Brébeuf, with excellent results.",
    },
    french: {
      zh: "法语导师：曾多次在 Brébeuf 的写作比赛中获奖。",
      en: "French tutor: multiple-time winner of writing contests at Brébeuf.",
    },
  },
  howItWorks: {
    title: { zh: "上课方式", en: "How it works" },
    body: {
      zh: "小组课程在每周六上午9点至12点进行。每组人数设定在5至10人，这样每个孩子都能得到足够的关注。我们采用线下 + 线上结合的方式，根据孩子的情况灵活安排。上课地点正在确认中，确定后会第一时间在家长群通知。",
      en: "Group classes run every Saturday, 9:00 AM–12:00 PM. Each group is kept to 5–10 students so every child gets enough attention. We combine in-person and online formats, arranged to suit your child. The class location is being finalized and will be announced in the parents' group as soon as it's confirmed.",
    },
  },
  pricing: {
    title: { zh: "收费", en: "Pricing" },
    rows: [
      { label: { zh: "选 1 门", en: "1 subject" }, price: "$15" },
      { label: { zh: "选 2 门", en: "2 subjects" }, price: "$30" },
      { label: { zh: "选 3 门（套餐）", en: "3 subjects (bundle)" }, price: "$40" },
    ] as { label: Bi; price: string }[],
    note: {
      zh: "建议参加全部三门课，效果更全面，也更划算。",
      en: "We recommend all three subjects — more complete preparation, better value.",
    },
  },
  whoItsFor: {
    title: { zh: "适合谁", en: "Who it's for" },
    body: {
      zh: "主要适合小学三、四、五年级，准备中学入学考试的学生。有特殊情况（例如 Sec 1 想转入 Sec 2）或想了解一对一辅导的家长，欢迎私信联系我们。",
      en: "Best for primary grades 3, 4, and 5 preparing for the secondary admission exams. For special cases (e.g. a Sec 1 student transferring into Sec 2) or one-on-one tutoring, message us privately.",
    },
  },
  infoSession: {
    title: { zh: "说明会", en: "Information session" },
    body: {
      zh: "说明会将于6月19日晚上7点至9点举行，欢迎所有家长参加。届时会介绍收费、课程安排、备考方式等详细信息，并设有问答环节。地点稍后确认；如有变动，我们会及时通知。",
      en: "Our information session is on June 19, 7:00–9:00 PM — all parents welcome. We'll cover pricing, the class schedule, and how we prepare the children, with a Q&A. Location to be confirmed; we'll notify you of any changes.",
    },
  },
  enrol: {
    title: { zh: "报名流程", en: "How to enrol" },
    steps: [
      {
        zh: "扫码加微信，私信联系我们。",
        en: "Scan the QR code and message us on WeChat.",
      },
      {
        zh: "先参加说明会，详细了解课程内容与备考安排。",
        en: "Join the information session first to learn how the courses and exam prep work.",
      },
      {
        zh: "确认报名后，我们会邀请您加入家长群，及时同步上课信息。",
        en: "Once you enrol, we'll add you to the parents' group so you get all the class updates.",
      },
    ] as Bi[],
  },
  faq: [
    {
      q: { zh: "你们是怎么收费的？", en: "How do you charge?" },
      a: {
        zh: "小组课程 15$/小时/科目。选1门15$，选2门30$，选3门40$（套餐优惠）。一对一价格因导师而异，请私信。",
        en: "Group classes are $15/hour/subject. 1 subject $15, 2 subjects $30, 3 subjects $40 (bundle). One-on-one pricing varies by tutor — please message us.",
      },
    },
    {
      q: { zh: "group class 通常是几个人？", en: "How many students are in a group class?" },
      a: {
        zh: "我们将每组人数设定在5至10人，这样每个孩子都能得到足够的关注，学习效果更好。",
        en: "We keep groups to 5–10 students so every child gets enough attention and learns better.",
      },
    },
    {
      q: { zh: "上课地点在哪里？", en: "Where are the classes held?" },
      a: {
        zh: "上课地点正在确认中。我们计划安排线下教室，同时也提供线上课程，具体细节确认后通知。",
        en: "The location is being finalized. We plan to hold in-person classes and also offer online sessions; we'll share details once confirmed.",
      },
    },
    {
      q: { zh: "课程由谁授课？", en: "Who teaches the classes?" },
      a: {
        zh: "授课由我们的导师团队负责，每位导师教自己的科目。",
        en: "Classes are taught by our tutor team — each tutor teaches their own subject.",
      },
    },
    {
      q: { zh: "适合几年级的孩子？", en: "What grades is this for?" },
      a: {
        zh: "主要适合小学三、四、五年级，准备中学入学考试的学生。特殊情况请私信。",
        en: "Mainly primary grades 3, 4, and 5 preparing for the secondary admission exams. For special cases, please message us.",
      },
    },
  ] as { q: Bi; a: Bi }[],
  footer: {
    cta: { zh: "扫码联系我", en: "Scan to contact me" },
    scanHint: {
      zh: "扫一扫，添加微信咨询与报名。",
      en: "Scan to add us on WeChat for questions and enrolment.",
    },
    wechatIdLabel: { zh: "微信号", en: "WeChat ID" },
    wechatId: { zh: "wxid_qs6tqmt94en122", en: "wxid_qs6tqmt94en122" },
    contactLabel: { zh: "联系人", en: "Contact" },
    contactName: "Dennis",
    note: { zh: "有问题欢迎私信。", en: "Message us with any questions." },
    privacy: {
      zh: "您的联系方式仅用于课程沟通，不会用于其他用途。",
      en: "Your contact details are used only to reach you about classes.",
    },
    copyright: {
      zh: "© 2026 Tutela · 蒙特利尔升学辅导",
      en: "© 2026 Tutela · Montreal admission-exam tutoring",
    },
  },
};

export type Content = typeof content;
