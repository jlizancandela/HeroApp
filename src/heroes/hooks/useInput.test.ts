import { useInput } from "./useInput";
import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { ChangeEvent, act } from "react";

type UseInputResult = {
  values: { [key: string]: string };
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};

describe("useInput", () => {
  let result: { current: UseInputResult } | null = null;

  beforeEach(() => {
    const hook = renderHook(() => useInput({ nombre: "test" }));
    result = hook.result;
  });

  afterEach(() => {
    result = null;
  });

  it("should render successfully", () => {
    expect(result?.current.values).toEqual({ nombre: "test" });
    expect(result?.current.onChange).toBeInstanceOf(Function);
    expect(result?.current.reset).toBeInstanceOf(Function);
  });

  it("should change values", () => {
    act(() => {
      result?.current.onChange({
        target: { name: "nombre", value: "pedro" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result?.current.values).toEqual({ nombre: "pedro" });
  });

  it("should reset values", () => {
    act(() => {
      result?.current.onChange({
        target: { name: "nombre", value: "pedro" },
      } as ChangeEvent<HTMLInputElement>);
    });

    act(() => result?.current.reset());

    expect(result?.current.values).toEqual({ nombre: "test" });
  });
});
