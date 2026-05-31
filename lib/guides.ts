import type { Bi } from "@/lib/content";

export type GuideSection = { heading: Bi; body: Bi[] };
export type Guide = {
  slug: string;
  title: Bi;
  description: Bi;
  updated: string; // ISO date
  sections: GuideSection[];
};

// Bilingual, SEO-oriented resource articles. Facts are kept general and hedged
// ("以各校官方信息为准") because exam details vary by school and change yearly —
// never assert specifics we can't stand behind.
export const guides: Guide[] = [
  {
    slug: "secondary-admission-exam-guide",
    updated: "2026-05-30",
    title: {
      zh: "魁北克中学入学考试完全指南",
      en: "A Complete Guide to Quebec's Secondary Admission Exam",
    },
    description: {
      zh: "魁北克热门私立及国际中学的入学考试是什么、什么时候考、考哪些科目，以及小学三到五年级的家庭该如何准备。",
      en: "What Quebec's selective secondary admission exam is, when it happens, which subjects it tests, and how families in primary grades 3–5 can prepare.",
    },
    sections: [
      {
        heading: { zh: "什么是中学入学考试？", en: "What is the secondary admission exam?" },
        body: [
          {
            zh: "魁北克许多热门的私立中学、国际课程中学和特色项目，都会通过入学考试来选拔学生。考试通常在小学六年级第一学期举行，决定孩子能否进入心仪的中学。对很多华人家庭来说，这是孩子求学路上第一场重要的考试。",
            en: "Many of Quebec's sought-after private, international-program, and specialized secondary schools select students through an admission exam. It usually takes place in the first term of Grade 6 and determines whether a child gets into the school the family is hoping for. For many Chinese-speaking families, it's the first major exam of a child's school journey.",
          },
          {
            zh: "需要注意的是，每所学校自行命题、自行招生，考试形式和录取标准各不相同。本文介绍的是普遍规律，具体请以各校官方信息为准。",
            en: "Note that each school sets its own exam and runs its own admissions, so formats and criteria differ. This article covers the general pattern — always confirm specifics with each school's official information.",
          },
        ],
      },
      {
        heading: { zh: "什么时候考？关键时间线", en: "When is it? The key timeline" },
        body: [
          {
            zh: "对大多数学校而言，入学考试在孩子六年级的九月底至十月举行，成绩一般在十二月左右公布。也就是说，真正的准备应该在五年级，甚至更早就开始。",
            en: "For most schools, the exam is held from late September to October of Grade 6, with results typically released around December. In practice, that means real preparation should begin in Grade 5 — or earlier.",
          },
          {
            zh: "报名通常在六年级开学前后开放，部分学校还要求提交五年级的成绩单。建议提前在目标学校官网确认报名日期，避免错过。",
            en: "Registration usually opens around the start of Grade 6, and some schools require a copy of the Grade 5 report card. Check each target school's website early for registration dates so you don't miss them.",
          },
        ],
      },
      {
        heading: { zh: "考哪些科目？", en: "Which subjects are tested?" },
        body: [
          {
            zh: "考试科目由各校决定，但通常围绕几门核心：法语、数学，部分学校还会考逻辑推理、阅读理解，或英语。法语和数学几乎是所有学校的重点。",
            en: "Subjects are set by each school, but they usually center on a few core areas: French and Math, with some schools also testing logical reasoning, reading comprehension, or English. French and Math are the focus at almost every school.",
          },
          {
            zh: "考试考查的是五年级及以前的知识，但题目往往更灵活、更看重解题速度与思维。熟悉考试题型，比单纯刷难题更重要。",
            en: "The exam draws on Grade 5 and earlier material, but questions tend to be more flexible and to reward problem-solving speed and thinking. Getting familiar with the question types matters more than grinding hard problems.",
          },
        ],
      },
      {
        heading: { zh: "如何准备？", en: "How to prepare" },
        body: [
          {
            zh: "扎实掌握五年级的法语和数学基础；按真实考试的题型和时间做模拟练习，让孩子熟悉考试节奏；针对薄弱环节查漏补缺，而不是盲目刷题。小班或一对一辅导的好处，是能根据孩子的情况对症下药。",
            en: "Build a solid foundation in Grade 5 French and Math; practise with mock papers that mirror the real format and timing so your child gets used to the pace; and target weak spots rather than drilling at random. The value of small-group or one-on-one tutoring is that it can be tailored to your child.",
          },
        ],
      },
    ],
  },
  {
    slug: "when-to-start-preparing",
    updated: "2026-05-30",
    title: {
      zh: "什么时候开始准备入学考试？",
      en: "When Should Your Child Start Preparing?",
    },
    description: {
      zh: "为什么备考最好从小学五年级开始，一份从五年级到六年级考试的实用时间线，以及每个阶段的重点。",
      en: "Why prep is best started in Grade 5, a practical timeline from Grade 5 to the Grade 6 exam, and what to focus on at each stage.",
    },
    sections: [
      {
        heading: { zh: "为什么是五年级？", en: "Why Grade 5?" },
        body: [
          {
            zh: "入学考试在六年级初举行，而它考查的正是五年级的内容。从五年级开始准备，孩子有整整一年时间打牢基础、熟悉题型，而不必在考前几周临时抱佛脚、增加压力。",
            en: "The exam happens early in Grade 6 and tests Grade 5 material. Starting in Grade 5 gives a child a full year to build a solid foundation and get familiar with the question types — instead of cramming under pressure in the weeks before.",
          },
        ],
      },
      {
        heading: { zh: "一份实用时间线", en: "A practical timeline" },
        body: [
          {
            zh: "五年级全年：跟上学校进度，重点打牢法语与数学基础；发现并补上薄弱环节。",
            en: "Throughout Grade 5: keep up with school, build strong French and Math foundations, and find and fix weak spots.",
          },
          {
            zh: "五年级暑假至六年级开学：开始接触真实题型，做模拟练习，适应考试节奏。同时确认目标学校的报名与考试日期。",
            en: "Summer before / start of Grade 6: begin working with real question types and mock papers to get used to the pace. Confirm each target school's registration and exam dates.",
          },
          {
            zh: "六年级九月至十月：进入冲刺与查漏补缺阶段，调整心态，保证考试当天发挥稳定。",
            en: "September–October of Grade 6: the final stretch — fill remaining gaps, steady the nerves, and aim for a calm, consistent performance on exam day.",
          },
        ],
      },
      {
        heading: { zh: "比刷题更重要的事", en: "What matters more than drilling" },
        body: [
          {
            zh: "考试不仅考知识，也考心态和节奏。让孩子提前在接近真实的环境里练习，熟悉时间限制和题型，往往比多做几套难题更能稳定发挥。保持轻松、规律的节奏，比临时高压突击更有效。",
            en: "The exam tests temperament and pacing, not just knowledge. Letting a child practise in near-real conditions — used to the time limits and question types — often steadies performance more than extra hard problems. A relaxed, regular rhythm beats last-minute high-pressure cramming.",
          },
        ],
      },
    ],
  },
  {
    slug: "choosing-target-schools",
    updated: "2026-05-30",
    title: {
      zh: "如何选择目标中学",
      en: "How to Choose Which Schools to Apply To",
    },
    description: {
      zh: "魁北克中学的类型、华人家长常关注的热门学校、考试录取与成绩录取的区别，以及报名时需要准备的材料。",
      en: "The types of Quebec secondary schools, schools Chinese-speaking families often consider, exam-based vs. record-based admission, and what you'll need to apply.",
    },
    sections: [
      {
        heading: { zh: "魁北克中学有哪些类型？", en: "What types of schools are there?" },
        body: [
          {
            zh: "魁北克的中学大致分为：法语公立、英语公立、法语私立、英语私立，以及双语和国际课程学校。热门的私立与国际项目学校通常需要入学考试或优异的成绩才能录取。",
            en: "Quebec secondary schools fall roughly into: French public, English public, French private, English private, and bilingual / international-program schools. The sought-after private and international-program schools usually require an admission exam or strong grades to get in.",
          },
        ],
      },
      {
        heading: { zh: "华人家长常关注的学校", en: "Schools Chinese-speaking families often consider" },
        body: [
          {
            zh: "在华人圈中口碑较好、常年排名靠前的法语私立及国际课程中学包括 Collège Jean-de-Brébeuf、Collège Jean-Eudes、École d'éducation internationale，以及 Régina Assumpta、Mont-Saint-Louis、Collège de Montréal 等。每所学校的风格、语言环境和录取方式都不同。",
            en: "Well-regarded, consistently top-ranked French private and international-program schools that come up in Chinese-speaking circles include Collège Jean-de-Brébeuf, Collège Jean-Eudes, and École d'éducation internationale, along with Régina Assumpta, Mont-Saint-Louis, and Collège de Montréal. Each differs in style, language environment, and how it admits students.",
          },
          {
            zh: "排名和口碑只是参考。最适合孩子的，往往是与孩子性格、语言基础和家庭期望最契合的那一所。",
            en: "Rankings and reputation are only a starting point. The best fit is usually the school that matches your child's personality, language base, and your family's hopes — not simply the highest-ranked one.",
          },
        ],
      },
      {
        heading: { zh: "考试录取 vs. 成绩录取", en: "Exam-based vs. record-based admission" },
        body: [
          {
            zh: "有些学校以入学考试为主要录取依据；也有学校在五年级成绩足够优秀时，可免试录取或以成绩为主。因此，平时的在校成绩同样重要——它既是录取的依据，也是备考的基础。",
            en: "Some schools rely mainly on the admission exam; others may admit a student without an exam, or weigh the record heavily, when Grade 5 marks are strong enough. So everyday school grades matter too — they're both a basis for admission and the foundation for exam prep.",
          },
        ],
      },
      {
        heading: { zh: "报名要准备什么？", en: "What you'll need to apply" },
        body: [
          {
            zh: "各校要求不同，但通常包括：填写报名表、提交五年级成绩单、一张照片，以及报名费（部分学校约 $50）。务必提前在目标学校官网确认所需材料和截止日期。",
            en: "Requirements vary, but typically include: a completed registration form, a copy of the Grade 5 report card, a photo, and a registration fee (around $50 at some schools). Always confirm the required documents and deadlines on each target school's website ahead of time.",
          },
        ],
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
