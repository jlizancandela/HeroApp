import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../auth";
import { HeroesLayout } from "./layout";

describe("AuthLayout", () => {
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

  it("should dont redirect", () => {
    const value = {
      state: { user: "jorge", logedIn: true },
      onLogin: () => {},
      onLogout: () => {},
    };

    const { baseElement } = render(
      <MemoryRouter>
        <AuthContext.Provider value={value}>
          <HeroesLayout />
        </AuthContext.Provider>
      </MemoryRouter>,
    );
    expect(baseElement).toBeTruthy();

    expect(screen.queryByTestId("navigate")).toBeNull();
  });

  it("should redirect to Login", () => {
    const value = {
      state: { user: "uknown", logedIn: false },
      onLogin: () => {},
      onLogout: () => {},
    };
    render(
      <MemoryRouter>
        <AuthContext.Provider value={value}>
          <HeroesLayout />
        </AuthContext.Provider>
      </MemoryRouter>,
    );
    expect(screen.getByTestId("navigate")).toHaveAttribute("data-to", "/login");
  });
});
