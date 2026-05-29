import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Page from "@/app/page";

describe("home page", () => {
  beforeEach(() => localStorage.clear());

  it("renders the Chinese hero by default", () => {
    render(<Page />);
    expect(screen.getAllByText("中学入学考试辅导").length).toBeGreaterThan(0);
  });

  it("switches to English when EN is selected", () => {
    render(<Page />);
    fireEvent.click(screen.getByText("EN"));
    expect(screen.getByText("Secondary Admission Exam Tutoring")).toBeInTheDocument();
  });
});
