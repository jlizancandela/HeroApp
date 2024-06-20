import { DcPage } from "./dc";
import { render, screen } from "@testing-library/react";

describe("DcPage", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DcPage />);
    expect(baseElement).toBeTruthy();
  });
  it("should view some heroes of DC", () => {
    render(<DcPage />);
    expect(screen.getByText("Batman")).toBeInTheDocument();
  });
  it("sould not view some heroes of Marvel", () => {
    render(<DcPage />);
    expect(screen.queryByText("Spider Man")).toBeNull();
  });
});
