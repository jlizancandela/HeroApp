import { renderHook } from "@testing-library/react";
import { UseSearch } from "./useSearch";
import { MemoryRouter } from "react-router-dom";

describe("useSearch", () => {
  let hook: any = null;

  beforeEach(() => {
    hook = renderHook(() => UseSearch(), {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={["/search?q=batman"]}>
          {children}
        </MemoryRouter>
      ),
    });
  });

  afterEach(() => {
    hook = null;
  });

  it("should return an object with hero and q", () => {
    const result = hook.result;
    expect(result.current.q).toBe("batman");
  });

  it("should return an object with length greater than 0", () => {
    const result = hook.result;
    expect(result.current.hero?.length).toBeGreaterThan(0);
  });

  it("should return an object with a hero", () => {
    const result = hook.result;
    expect(result.current.hero[0]).toEqual({
      id: "dc-batman",
      alter_ego: "Bruce Wayne",
      characters: "Bruce Wayne",
      first_appearance: "Detective Comics #27",
      publisher: "DC Comics",
      superhero: "Batman",
    });
  });
});
