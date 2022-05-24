import markup from "../src/markup";

describe("Module markup tests", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    markup(el);
  });

  it("is a function", () => {
    expect(markup).toBeInstanceOf(Function);
  });

  it("basic markup", () => {
    expect(el.querySelector("div#map")).toBeTruthy();
    expect(el.querySelectorAll("div.group").length).toBe(2);
    expect(el.querySelector("form")).toBeTruthy();
    expect(el.querySelector("input")).toBeTruthy();
    expect(el.querySelectorAll("button").length).toBe(2);
    expect(el.querySelectorAll(".info").length).toBe(3);
    expect(el.querySelector("img")).toBeTruthy();
  });
});
