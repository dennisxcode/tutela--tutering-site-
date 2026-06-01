import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Page from "@/app/page";
import { LanguageProvider } from "@/lib/LanguageContext";
import { LanguageToggle } from "@/components/LanguageToggle";

// The language toggle now lives in the global nav (layout), so the home page is
// rendered here inside a provider alongside the toggle to exercise switching.
function Home() {
  return (
    <LanguageProvider>
      <LanguageToggle />
      <Page />
    </LanguageProvider>
  );
}

describe("home page", () => {
  beforeEach(() => localStorage.clear());

  it("renders the Chinese hero by default", () => {
    render(<Home />);
    expect(screen.getAllByText("中学入学考试辅导").length).toBeGreaterThan(0);
  });

  it("switches to English when EN is selected", () => {
    render(<Home />);
    fireEvent.click(screen.getByText("EN"));
    expect(screen.getByText("Secondary Admission Exam Tutoring")).toBeInTheDocument();
  });
});
