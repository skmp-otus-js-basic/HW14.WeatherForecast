import { saveList, readList, showCityList } from "../src/storage";

jest.mock("../src/setevents");

describe("Module storage tests", () => {
  let itemsSave;
  beforeEach(() => {
    itemsSave = JSON.parse(sessionStorage.getItem("items")) || [];
  });
  afterEach(() => {
    sessionStorage.setItem("items", JSON.stringify(itemsSave));
  });

  it("saveList -> only 10 ones capacity", () => {
    for (let i = 0; i < 20; i++) saveList(`item_${i}`);
    const itemsNow = JSON.parse(sessionStorage.getItem("items"));
    expect(itemsNow.length).toBe(10);
  });

  it("readList test", () => {
    const items = ["city_1", "city_2", "city_3"];
    sessionStorage.setItem("items", JSON.stringify(items));
    const itemsNow = readList();
    expect(itemsNow.length).toBe(3);
  });

  it("showCityList test", () => {
    const cityListElement = document.createElement("div");
    const weatherElement = document.createElement("div");
    const items = ["city_1", "city_2", "city_3", "city_4"];
    sessionStorage.setItem("items", JSON.stringify(items));
    showCityList(cityListElement, weatherElement);
    expect(cityListElement.querySelectorAll("li").length).toBe(4);
  });
});
