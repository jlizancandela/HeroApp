import { SearchPage } from "./search";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { Mock } from "vitest";

// Mock useNavigate
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe("SearchPage", () => {
  let mockedNavigate: Mock;

  beforeEach(() => {
    // Assign mockedNavigate to useNavigate

    mockedNavigate = vi.fn();
    (useNavigate as Mock).mockReturnValue(mockedNavigate);
  });

  it("should render the info alert", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>,
    );
    const element = screen.getByLabelText("alert-info");
    expect(element.style.display).toBe("block");
  });

  it("should render the error alert", () => {
    render(
      <MemoryRouter initialEntries={["/search/?q=Unknown"]}>
        <SearchPage />
      </MemoryRouter>,
    );
    const element = screen.getByLabelText("alert-danger");
    expect(element.style.display).toBe("block");
  });

  it("should render the hero", () => {
    render(
      <MemoryRouter initialEntries={["/search/?q=batman"]}>
        <SearchPage />
      </MemoryRouter>,
    );
    const element = screen.getByRole("textbox");
    expect(element).toHaveValue("batman");
    expect(screen.getByText("Bruce Wayne")).toBeInTheDocument();
  });

  it("should set the query", () => {
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchPage />
      </MemoryRouter>,
    );

    const value = "batman";

    const element = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.change(element, { target: { value: value } });

    // verify that the value has changed
    expect(element).toHaveValue("batman");

    fireEvent.submit(form);

    // verify that Navigate has been called
    expect(mockedNavigate).toHaveBeenCalledWith(`?q=${value}`);
  });
});
