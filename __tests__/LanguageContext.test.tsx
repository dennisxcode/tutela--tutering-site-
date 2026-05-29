import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";

function Probe() {
  const { locale, toggle, t } = useLanguage();
  return (
    <div>
      <span data-testid="locale">{locale}</span>
      <span data-testid="word">{t({ zh: "你好", en: "hello" })}</span>
      <button onClick={toggle}>switch</button>
    </div>
  );
}

describe("LanguageContext", () => {
  beforeEach(() => localStorage.clear());

  it("defaults to zh", () => {
    render(<LanguageProvider><Probe /></LanguageProvider>);
    expect(screen.getByTestId("locale").textContent).toBe("zh");
    expect(screen.getByTestId("word").textContent).toBe("你好");
  });

  it("toggles to en and persists the choice", () => {
    render(<LanguageProvider><Probe /></LanguageProvider>);
    fireEvent.click(screen.getByText("switch"));
    expect(screen.getByTestId("locale").textContent).toBe("en");
    expect(screen.getByTestId("word").textContent).toBe("hello");
    expect(localStorage.getItem("locale")).toBe("en");
  });
});
