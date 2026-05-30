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
  announcement: {
    zh: "6 月 19 日 家长说明会 · 6 月 26 日 开放报名",
    en: "June 19 parent info session · Enrollment opens June 26",
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
      zh: "我们是来自魁北克顶尖中学的学生，包括 Collège Jean-de-Brébeuf。我们刚刚走过中学入学考试这条路，希望把自己的备考经验，分享给正在准备的孩子和家庭。",
      en: "We're students from top Quebec secondary schools, including Collège Jean-de-Brébeuf. We've just been through the secondary admission exams ourselves, and we want to share what we learned with the children and families preparing for them now.",
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
      zh: "导师 Chen Chen：在 AMC（美国数学竞赛）及 Waterloo（CEMC）数学竞赛中名列前茅，成绩公开可查。",
      en: "Tutor Chen Chen: places among the top in the AMC (American Mathematics Competitions) and Waterloo (CEMC) math contests — publicly verifiable results.",
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
    enrolNote: {
      zh: "报名将于 6 月 26 日正式开始。",
      en: "Enrollment opens June 26.",
    },
  },
  advantages: {
    title: { zh: "我们的优势", en: "Why choose Tutela" },
    intro: {
      zh: "我们把最关键的几件事做好，帮孩子稳稳通过中学入学考试。",
      en: "We do the few things that matter most well — to get your child through the secondary admission exam.",
    },
    items: [
      {
        title: { zh: "小班教学", en: "Small classes" },
        body: {
          zh: "每组 5–10 人，名额有限，每个孩子都能得到充分关注。",
          en: "Groups of 5–10 with limited spots, so every child gets real attention.",
        },
      },
      {
        title: { zh: "刚考过的尖子生授课", en: "Taught by students who just passed" },
        body: {
          zh: "导师来自魁北克顶尖中学（包括 Collège Jean-de-Brébeuf），刚刚考过同样的入学考试，最清楚考什么、怎么准备。",
          en: "Our tutors attend top Quebec schools (incl. Collège Jean-de-Brébeuf) and just sat the same exams — they know exactly what's tested and how to prepare.",
        },
      },
      {
        title: { zh: "全科覆盖", en: "All three subjects" },
        body: {
          zh: "数学、法语、英语三门核心科目，按年级和报名人数分组。",
          en: "Math, French, and English — the three core subjects, grouped by grade and enrolment.",
        },
      },
      {
        title: { zh: "24/7 在线答疑", en: "24/7 question support" },
        body: {
          zh: "孩子随时遇到不懂的问题，我们全天候在线解答，不必等到下次上课。",
          en: "Whenever your child gets stuck, we're online to answer — no need to wait for the next class.",
        },
      },
      {
        title: { zh: "灵活上课", en: "Flexible format" },
        body: {
          zh: "周六上午授课，线上线下结合，按孩子的情况安排。",
          en: "Saturday mornings, in-person and online combined, arranged to suit your child.",
        },
      },
      {
        title: { zh: "免费试听", en: "Free trial" },
        body: {
          zh: "首次免费试听，满意再报名，零风险。",
          en: "Your first lesson is free — enrol only if you're happy.",
        },
      },
    ] as { title: Bi; body: Bi }[],
  },
  subjects: {
    title: { zh: "科目与年级", en: "Subjects & grades" },
    intro: {
      zh: "针对中学入学考试的三门核心科目，按年级和报名人数分组。",
      en: "The three core subjects for the secondary admission exam, grouped by grade and enrolment.",
    },
    list: [
      {
        name: { zh: "数学", en: "Math" },
        blurb: {
          zh: "入学考试的核心，重点突破题型与解题速度。",
          en: "The core of the exam — focused on question types and solving speed.",
        },
      },
      {
        name: { zh: "法语", en: "French" },
        blurb: {
          zh: "阅读、写作与语法，贴近考试要求。",
          en: "Reading, writing, and grammar, aligned to the exam.",
        },
      },
      {
        name: { zh: "英语", en: "English" },
        blurb: {
          zh: "理解与表达并重，打好语言基础。",
          en: "Comprehension and expression, building a solid base.",
        },
      },
    ] as { name: Bi; blurb: Bi }[],
    grades: {
      zh: "适合小学三、四、五年级。除入学考试备考外，我们也提供一般学科辅导。",
      en: "For primary grades 3, 4, and 5. Beyond admission prep, we also offer general academic tutoring.",
    },
    special: {
      zh: "有特殊情况（例如 Sec 1 想转入 Sec 2）或想了解一对一辅导，欢迎私信联系我们。",
      en: "For special cases (e.g. a Sec 1 student moving into Sec 2) or one-on-one tutoring, message us privately.",
    },
  },
  philosophy: {
    title: { zh: "为什么学生会进步", en: "Why students improve" },
    intro: {
      zh: "我们的方法很简单：用刚刚走过这条路的人，带还在路上的孩子。",
      en: "Our approach is simple — students who just walked the path guide the ones still on it.",
    },
    principles: [
      {
        title: { zh: "真正懂这场考试", en: "We actually know this exam" },
        body: {
          zh: "我们刚刚考过同样的入学考试，最清楚考什么、该怎么准备，帮孩子少走弯路。",
          en: "We just sat the same admission exams, so we know exactly what they test and how to prepare — fewer detours for your child.",
        },
      },
      {
        title: { zh: "小班，真关注", en: "Small groups, real attention" },
        body: {
          zh: "每组 5–10 人，名额有限，老师能照顾到每个孩子的薄弱点。",
          en: "Groups of 5–10 with limited spots, so each tutor can address every child's weak spots.",
        },
      },
      {
        title: { zh: "按真实题型练习", en: "Practice on the real format" },
        body: {
          zh: "我们将提供基于近年入学考试内容设计的模拟测试，让孩子提前熟悉考试形式。（即将推出）",
          en: "We'll provide practice exams modeled on recent admission-exam content, so children get familiar with the format ahead of time. (Coming soon)",
        },
      },
    ] as { title: Bi; body: Bi }[],
  },
  dates: {
    title: { zh: "重要日期", en: "Key dates" },
    items: [
      {
        date: { zh: "6 月 19 日", en: "June 19" },
        label: { zh: "家长说明会 · 晚 7–9 点", en: "Parent info session · 7–9 PM" },
        note: {
          zh: "介绍收费、课程安排与备考方式，并设有问答环节。地点稍后确认。",
          en: "Covers pricing, schedule, and how we prepare students, with a Q&A. Location to be confirmed.",
        },
      },
      {
        date: { zh: "6 月 26 日", en: "June 26" },
        label: { zh: "开放报名", en: "Enrollment opens" },
        note: {
          zh: "正式开始报名，名额有限，报满即止。",
          en: "Registration opens — limited spots, first come first served.",
        },
      },
    ] as { date: Bi; label: Bi; note: Bi }[],
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
      q: { zh: "小班课通常有几个人？", en: "How many students are in a group class?" },
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
      q: { zh: "什么时候开课？", en: "When does tutoring run?" },
      a: {
        zh: "我们今年夏天开课，一直持续到九月新学年开始前。具体上课时间会在报名后同步。",
        en: "Classes run through this summer, up until the new school year begins around September. Exact dates are shared after you enrol.",
      },
    },
    {
      q: { zh: "是线上还是线下上课？", en: "Are classes online or in person?" },
      a: {
        zh: "线上、线下我们都提供，根据学生的情况安排：线上报名人数足够就开线上班，线下人数足够就开线下班。",
        en: "We offer both online and in-person, arranged around what students need — if enough students sign up online we run an online class, and likewise for in-person.",
      },
    },
    {
      q: { zh: "有一对一辅导吗？", en: "Do you offer one-on-one tutoring?" },
      a: {
        zh: "提供。一对一辅导请私信联系我们单独安排。",
        en: "Yes. For one-on-one tutoring, please message us privately to arrange it.",
      },
    },
    {
      q: { zh: "孩子课后有问题，找谁问？", en: "Where can my child ask questions after class?" },
      a: {
        zh: "我们提供 24/7 在线答疑，孩子随时遇到不懂的问题，都可以联系我们，不必等到下次上课。",
        en: "We offer 24/7 question support — whenever your child gets stuck, they can reach us, no need to wait for the next class.",
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
  finalCta: {
    heading: { zh: "准备好帮孩子开始了吗？", en: "Ready to help your child get started?" },
    subtitle: {
      zh: "扫码联系我们，先免费试听，满意再报名。",
      en: "Message us on WeChat — start with a free trial, enrol only if you're happy.",
    },
  },
  footer: {
    cta: { zh: "扫码联系我", en: "Scan to contact me" },
    scanHint: {
      zh: "扫一扫，添加微信咨询与报名。",
      en: "Scan to add us on WeChat for questions and enrolment.",
    },
    qrHelp: {
      zh: "手机访问：在微信中长按二维码即可识别；或截图保存后用「扫一扫」从相册识别。",
      en: "On a phone: long-press the QR in WeChat to recognise it, or save a screenshot and scan it from your album.",
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
