export default function markup(app) {
  app.innerHTML = `<div id="map"></div>
<div class="group">  
  <form>
      <input
        placeholder="Укажите название города"
        required
        autofocus
      />
    <button class="buttons">Найти город</button>
  </form>
  <button class="buttons" id="nativeCity">Свой город</button>
</div>
<div class="group">
  <div class="info" id="cityList"></div>
  <div class="info" id="weatherInfo"></div>
  <img class="info" alt=""/>
</div>`;
}
