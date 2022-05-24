import drawMap from "./map";
import { showCityList, saveList } from "./storage";

export async function drawNativeMap(cityListElement, weatherElement) {
  const data = await getNativeData();
  await drawRegionMap(cityListElement, weatherElement, data.city);
}

async function getNativeData() {
  const url = `https://get.geojs.io/v1/ip/geo.json`;
  const response = await fetch(url);
  return response.json();
}

export async function drawRegionMap(cityListElement, weatherElement, cityName) {
  const weatherInfo = await getWeather(cityName);
  if (!weatherInfo) {
    alert(`Город '${cityName}' не найден!`);
    return;
  }
  clearPage(document);
  drawMap(weatherInfo.coord.lat, weatherInfo.coord.lon);
  saveList(cityName);
  showCityList(cityListElement, weatherElement);
  showWeather(weatherElement, weatherInfo);
  showIcon(weatherInfo.weather[0].icon, document);
}

export async function getWeather(cityName) {
  const key = "2278e099547656232d64e378d31cfe71";
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${key}`;
  try {
    const response = await fetch(url);
    const weatherInfo = await response.json();
    return weatherInfo.cod === 200 ? weatherInfo : false;
  } catch (e) {
    alert(`api.openweathermap.org: ${e.message}`);
    return false;
  }
}

export function clearPage(element) {
  const ym = element.querySelector("ymaps");
  if (!ym) return;
  element.querySelector("ymaps").remove();
  element.querySelector("ul").remove();
  element.querySelector("ol").remove();
  element.querySelector("img").src = "";
}

export function showWeather(weatherElement, weatherInfo) {
  const ul = document.createElement("ul");
  weatherElement.append(ul);
  addElement(ul, `Город: ${weatherInfo.name}`);
  addElement(ul, `Страна: ${weatherInfo.sys.country}`);
  addElement(
    ul,
    `Погода: ${weatherInfo.weather[0].main}(${weatherInfo.weather[0].description})`
  );
  addElement(ul, `Температура: ${weatherInfo.main.temp}`);
  addElement(ul, `Ощущается как: ${weatherInfo.main.feels_like}`);
  addElement(ul, `Давление: ${weatherInfo.main.pressure}`);
  addElement(ul, `Влажность: ${weatherInfo.main.humidity}`);
  addElement(ul, `Видимость: ${weatherInfo.visibility}`);
  addElement(ul, `Скорость ветра: ${weatherInfo.wind.speed}`);
  addElement(ul, `Облачность: ${weatherInfo.clouds.all}`);
}

export function addElement(el, text) {
  const li = document.createElement("li");
  li.innerHTML = text;
  el.append(li);
}

export function showIcon(icon, element) {
  const img = element.querySelector("img");
  img.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
}
