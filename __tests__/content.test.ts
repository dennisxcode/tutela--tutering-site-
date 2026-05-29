import { describe, it, expect } from "vitest";
import { content, type Bi } from "@/lib/content";

// Collect every {zh, en} leaf in the content tree.
function collectBi(node: unknown, acc: Bi[] = []): Bi[] {
  if (Array.isArray(node)) {
    node.forEach((n) => collectBi(n, acc));
  } else if (node && typeof node === "object") {
    const obj = node as Record<string, unknown>;
    if (typeof obj.zh === "string" && typeof obj.en === "string") {
      acc.push(obj as Bi);
    } else {
      Object.values(obj).forEach((v) => collectBi(v, acc));
    }
  }
  return acc;
}

describe("content completeness", () => {
  it("every bilingual leaf has non-empty zh and en", () => {
    const leaves = collectBi(content);
    expect(leaves.length).toBeGreaterThan(20);
    for (const leaf of leaves) {
      expect(leaf.zh.trim().length).toBeGreaterThan(0);
      expect(leaf.en.trim().length).toBeGreaterThan(0);
    }
  });
});

describe("claim safety (spec §5)", () => {
  it("math tutor names AMC + Waterloo and makes no #1 superlative", () => {
    const zh = content.tutors.math.zh;
    expect(zh).toContain("AMC");
    expect(zh).toContain("Waterloo");
    expect(zh).not.toMatch(/第一|排名第一|#1/);
    expect(content.tutors.math.en.toLowerCase()).not.toContain("#1");
  });

  it("location is framed as being finalized, not asserted at a school", () => {
    expect(content.howItWorks.body.zh).toContain("确认中");
    expect(content.faq[2].a.zh).toContain("确认中");
  });

  it("mock exams are framed as upcoming, not live", () => {
    expect(content.whatWeOffer.mockExams.zh).toContain("即将");
  });
});
