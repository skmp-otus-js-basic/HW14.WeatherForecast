import { drawNativeMap, drawRegionMap } from "./weather";
import markup from "./markup";
import "./style.css";

const app = document.querySelector("#app");
markup(app);

const formElement = app.querySelector("form");
const cityListElement = app.querySelector("#cityList");
const weatherElement = app.querySelector("#weatherInfo");
const nativeElement = app.querySelector("#nativeCity");

window.addEventListener("load", async () => {
  await drawNativeMap(cityListElement, weatherElement);
});

nativeElement.addEventListener("click", async () => {
  await drawNativeMap(cityListElement, weatherElement);
});

formElement.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const form = ev.target;
  const inputElement = form.querySelector("input");
  const cityName = inputElement.value.trim();
  inputElement.value = "";
  await drawRegionMap(cityListElement, weatherElement, cityName);
});
