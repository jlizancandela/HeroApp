import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "./navbar";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth";
import { vi, Mock } from "vitest";
import "@testing-library/jest-dom";
import { useNavigate } from "react-router-dom";

// Mock useNavigate
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe("Navbar", () => {
  let mockedHandleLogout: Mock;
  let mockedNavigate: Mock;

  beforeEach(() => {
    mockedHandleLogout = vi.fn();
    mockedNavigate = vi.fn();
    (useNavigate as Mock).mockReturnValue(mockedNavigate);
  });

  it("should view the username", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider
          value={{
            state: { user: "test", logedIn: true },
            onLogin: () => {},
            onLogout: mockedHandleLogout,
          }}
        >
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>,
    );
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("should call onLogout and navigate to login", () => {
    const value = {
      state: { user: "test", logedIn: true },
      onLogin: () => {},
      onLogout: mockedHandleLogout,
    };
    render(
      <MemoryRouter>
        <AuthContext.Provider value={value}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>,
    );
    const button = screen.getByRole("button", { name: /logout/i });
    fireEvent.click(button);
    expect(mockedHandleLogout).toHaveBeenCalled();
    expect(mockedNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });
});
