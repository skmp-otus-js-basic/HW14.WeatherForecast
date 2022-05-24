import { drawRegionMap } from "./weather";

export default function setEvents(
  cityElement,
  cityListElement,
  weatherElement
) {
  cityElement.addEventListener("click", () => {
    drawRegionMap(cityListElement, weatherElement, cityElement.innerHTML);
  });
  cityElement.addEventListener(
    "mouseover",
    (event) => (event.target.className = "current")
  );
  cityElement.addEventListener(
    "mouseout",
    (event) => (event.target.className = "")
  );
}
