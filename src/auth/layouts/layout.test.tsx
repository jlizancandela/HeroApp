import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../contex/auth";
import { AuthLayout } from "./layout";
import { render, screen } from "@testing-library/react";

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
      state: { user: "jorge", logedIn: false },
      onLogin: () => {},
      onLogout: () => {},
    };

    const { baseElement } = render(
      <MemoryRouter>
        <AuthContext.Provider value={value}>
          <AuthLayout />
        </AuthContext.Provider>
      </MemoryRouter>,
    );
    expect(baseElement).toBeTruthy();

    expect(screen.queryByTestId("navigate")).toBeNull();
  });

  it("should redirect to Marvel", () => {
    const value = {
      state: { user: "jorge", logedIn: true },
      onLogin: () => {},
      onLogout: () => {},
    };
    render(
      <MemoryRouter>
        <AuthContext.Provider value={value}>
          <AuthLayout />
        </AuthContext.Provider>
      </MemoryRouter>,
    );
    expect(screen.getByTestId("navigate")).toHaveAttribute(
      "data-to",
      "/marvel",
    );
  });
});
