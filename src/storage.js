import setEvents from "./setevents";

export function readList() {
  const items = JSON.parse(sessionStorage.getItem("items"));
  return items || [];
}

export function saveList(cityName) {
  const items = readList();
  if (items.includes(cityName)) return false;
  if (items.length === 10) items.shift();
  items.push(cityName);
  sessionStorage.setItem("items", JSON.stringify(items));
  return true;
}

export function showCityList(cityListElement, weatherElement) {
  const items = readList();
  let i = 0;
  cityListElement.innerHTML = `<ol>${items
    .map((el) => `<li id="city${++i}">${el}</li>`)
    .join("")}</ol>`;
  for (i = 1; i <= items.length; i++) {
    const cityElement = document.querySelector(`#city${i}`);
    setEvents(cityElement, cityListElement, weatherElement);
  }
}
