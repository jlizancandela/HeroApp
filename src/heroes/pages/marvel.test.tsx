import { MarvelPage } from "./marvel";
import { render, screen } from "@testing-library/react";

describe("DcPage", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MarvelPage />);
    expect(baseElement).toBeTruthy();
  });
  it("should view some heroes of Marvel", () => {
    render(<MarvelPage />);
    expect(screen.getByText("Spider Man")).toBeInTheDocument();
  });
  it("sould not view some heroes of DC", () => {
    render(<MarvelPage />);
    expect(screen.queryByText("Batman")).toBeNull();
  });
});
