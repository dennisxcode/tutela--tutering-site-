import type { Metadata } from "next";
import { GuidesIndex } from "@/components/guides/GuidesIndex";

export const metadata: Metadata = {
  title: "备考指南 · 魁北克中学入学考试 | Tutela",
  description:
    "关于魁北克中学入学考试的实用备考指南：考试时间、科目、如何准备、如何选择目标中学。由刚刚考过的尖子生整理。",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "备考指南 · 魁北克中学入学考试 | Tutela",
    description: "魁北克中学入学考试的实用备考指南：时间、科目、准备方法、选校。",
    url: "/guides",
    type: "website",
  },
};

export default function GuidesPage() {
  return <GuidesIndex />;
}
