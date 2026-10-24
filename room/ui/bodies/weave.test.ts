import { describe, expect, it } from "vitest";
import { weave } from "./weave";

describe("sharing pictures between the gaps in the text", () => {
  it("puts one in each gap when there are just enough", () => {
    expect(weave(["a", "b", "c"], 3)).toEqual([["a"], ["b"], ["c"]]);
  });

  it("gives the spare to the earlier gaps, so a picture comes early", () => {
    expect(weave([1, 2, 3, 4, 5, 6, 7], 4)).toEqual([[1, 2], [3, 4], [5, 6], [7]]);
  });

  it("leaves the later gaps empty when there are fewer pictures than gaps", () => {
    expect(weave(["a", "b"], 4)).toEqual([["a"], ["b"], [], []]);
  });

  it("keeps every picture, in order", () => {
    const items = Array.from({ length: 19 }, (_, i) => i);
    expect(weave(items, 4).flat()).toEqual(items);
  });

  it("returns one group per gap even with nothing to share", () => {
    expect(weave([], 3)).toEqual([[], [], []]);
  });
});
