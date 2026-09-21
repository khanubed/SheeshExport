import { slugify, unslugify } from "../../src/lib/utils/slug";

describe("Slug Utility", () => {
  it("converts product titles to lowercase kebab-case", () => {
    expect(slugify("Indian S4 Sananam Red Chilli")).toBe("indian-s4-sananam-red-chilli");
  });

  it("reverts slugs to title case for breadcrumb display", () => {
    expect(unslugify("red-chilli")).toBe("Red Chilli");
  });
});
