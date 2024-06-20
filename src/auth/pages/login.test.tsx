import { LoginPage } from "./login";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Mock } from "vitest";
import { AuthContext } from "../contex/auth";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe("LoginPage", () => {
  let mockedHandleLogout: Mock;
  let mockedNavigate: Mock;

  beforeEach(() => {
    mockedHandleLogout = vi.fn();
    mockedNavigate = vi.fn();
    (useNavigate as Mock).mockReturnValue(mockedNavigate);
  });

  it("should render correctly", () => {
    const { container } = render(<LoginPage />);
    expect(container).toMatchSnapshot();
  });

  it("should redirect to home", () => {
    const value = {
      state: { user: "uknown", logedIn: false },
      onLogin: mockedHandleLogout,
      onLogout: vi.fn(),
    };
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={value}>
          <LoginPage />
        </AuthContext.Provider>
      </MemoryRouter>,
    );
    const button = screen.getByRole("button", { name: /login/i });
    fireEvent.click(button);
    expect(mockedHandleLogout).toHaveBeenCalled();
    expect(mockedNavigate).toHaveBeenCalledWith("/");
  });
});
