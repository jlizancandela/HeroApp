import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HeroPage } from "./hero";

import { render, screen } from "@testing-library/react";

describe("HeroPage", () => {
  vi.mock("react-router-dom", async () => {
    const actual: typeof import("react-router-dom") =
      await vi.importActual("react-router-dom");
    return {
      ...actual,
      Navigate: ({ to }: { to: string }) => (
        <div data-testid="navigate" data-to={to}></div>
      ),
    };
  });

  it("should view the hero", () => {
    render(
      <MemoryRouter initialEntries={["/hero/dc-batman"]}>
        <Routes>
          <Route path="/hero/:id" element={<HeroPage />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText("Batman")).toBeInTheDocument();
    expect(screen.getByText("DC Comics")).toBeInTheDocument();
    expect(screen.getByText("Bruce Wayne")).toBeInTheDocument();
  });

  it("should redirect to home", () => {
    render(
      <MemoryRouter initialEntries={["/hero/unknownHero"]}>
        <Routes>
          <Route path="/hero/:id" element={<HeroPage />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByTestId("navigate")).toHaveAttribute("data-to", "/");
  });
});
