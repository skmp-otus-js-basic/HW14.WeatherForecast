import * as wzr from "../src/weather";

describe("Module weather tests", () => {
  it("addElement test", () => {
    const ul = document.createElement("ul");
    wzr.addElement(ul, `123`);
    wzr.addElement(ul, `321`);
    expect(ul.innerHTML).toBe("<li>123</li><li>321</li>");
    ul.remove();
  });

  it("getWeather 404 test", async () => {
    const testJson = {
      name: "Hakuna Matata",
      cod: 404,
    };
    expect.assertions(1);
    fetch = mockFetch(testJson);
    const weatherInfo = await wzr.getWeather(testJson.name);
    expect(weatherInfo).toBeFalsy();
  });

  it("getWeather 200 test", async () => {
    const testJson = {
      name: "Moscow",
      cod: 200,
    };
    expect.assertions(1);
    fetch = mockFetch(testJson);
    const weatherInfo = await wzr.getWeather(testJson.name);
    expect(weatherInfo.name).toBe(testJson.name);
  });
});

it("clearPage test", async () => {
  const element = document.createElement("div");
  const ymap = document.createElement("ymaps");
  const ul = document.createElement("ul");
  const ol = document.createElement("ol");
  const img = document.createElement("img");
  img.src = "123";
  element.append(ymap);
  element.append(ul);
  element.append(ol);
  element.append(img);
  expect(element.children[0].tagName).toEqual("YMAPS");
  expect(element.children[1].tagName).toEqual("UL");
  expect(element.children[2].tagName).toEqual("OL");
  expect(element.children[3].tagName).toEqual("IMG");
  expect(element.children[3].getAttribute("src")).toEqual("123");
  expect(element.children.length).toBe(4);
  wzr.clearPage(element);
  expect(element.children.length).toBe(1);
  expect(element.children[0].tagName).toEqual("IMG");
  expect(element.children[0].getAttribute("src")).toEqual("");
  element.remove();
});

it("showWeather test", async () => {
  const element = document.createElement("div");
  wzr.showWeather(element, data);
  expect(element.children[0].tagName).toEqual("UL");
  expect(element.children.length).toBe(1);
  element.remove();
});

it("showIcon test", async () => {
  const element = document.createElement("div");
  const img = document.createElement("img");
  element.append(img);
  wzr.showIcon(data.weather[0].icon, element);
  expect(
    element.querySelector("img").getAttribute("src").length
  ).toBeGreaterThan(0);
  element.remove();
});

function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
    })
  );
}

const data = {
  coord: {
    lon: 37.62,
    lat: 55.75,
  },
  weather: [
    {
      id: 803,
      main: "Clouds",
      description: "broken clouds",
      icon: "04d",
    },
  ],
  base: "stations",
  main: {
    temp: 2.15,
    feels_like: -3.03,
    temp_min: 2,
    temp_max: 2.22,
    pressure: 1029,
    humidity: 69,
  },
  visibility: 10000,
  wind: {
    speed: 4,
    deg: 310,
  },
  clouds: {
    all: 75,
  },
  dt: 1605098072,
  sys: {
    type: 1,
    id: 9029,
    country: "RU",
    sunrise: 1605070630,
    sunset: 1605101407,
  },
  timezone: 10800,
  id: 524901,
  name: "Moscow",
  cod: 200,
};

//   it("drawRegionMap alert test", async () => {
//     const cityListElement = document.querySelector("#cityList");
//     const weatherElement = document.querySelector("#weatherInfo");
//     window.alert = jest.fn();
//     //const drawMap = jest.spyOn(map, "drawMap");
//     //map.drawMap = jest.fn().mockImplementation();
//     //stor.saveList = jest.fn().mockImplementation();
//     //stor.showCityList = jest.fn();
//     //weather.showWeather = jest.fn();

//     await weather.drawRegionMap(
//       cityListElement,
//       weatherElement,
//       "Hakuna Matata"
//     );

//     //expect(map.drawMap).toBeCalledTimes(1);
//     //expect(stor.saveList).toBeCalledTimes(1);
//     //expect(stor.showCityList).toBeCalledTimes(1);
//     //expect(weather.showWeather).toBeCalledTimes(1);
//     expect(window.alert).toBeCalledTimes(1);
//     expect(window.alert).toHaveBeenCalledWith(
//       "Город 'Hakuna Matata' не найден!"
//     );
//   });
// });

// //   it("getNativeData test", async () => {
// //      let weatherInfo = await getWeather(testJson.name);
// //      expect(weatherInfo).toBeFalsy();
// //      testJson = {
// //        name: "Chelyabinsk",
// //        cod: 200,
// //      };
// //      fetch = mockFetch(testJson);
// //      weatherInfo = await getWeather(testJson.name);
// //      expect(weatherInfo.name).toBe(testJson.name);
