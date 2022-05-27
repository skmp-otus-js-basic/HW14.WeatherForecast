# Приложение "Прогноз погоды"

### Демонстрация краткой сводки погоды в выбранном городе

[![codecov](https://codecov.io/gh/svpotysev/Otus.JS-Basic.HW14.WeatherForecast/branch/main/graph/badge.svg)](https://codecov.io/gh/svpotysev/Otus.JS-Basic.HW14.WeatherForecast)
[![Sanity check](https://github.com/svpotysev/Otus.JS-Basic.HW14.WeatherForecast/actions/workflows/sanity-check.yml/badge.svg)](https://github.com/svpotysev/Otus.JS-Basic.HW14.WeatherForecast/actions/workflows/sanity-check.yml)
[![License][license-image]][license-url]

[license-url]: https://github.com/svpotysev/Otus.JS-Basic.HW14.WeatherForecast/blob/main/LICENSE
[license-image]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat

- При открытии страницы пользователь видит свой город, сводку погоды и иконку погоды в своей местности
- Для получения прогноза погоды используется [OpenWeather](https://openweathermap.org/current) (работает нестабильно :-1:)
- Пользователь может ввести имя города в поле ввода и увидеть погоду в выбранном городе
- Веденные города сохраняются у пользователя в браузере, так что он видит последние 10 городов, где он смотрел погоду (записи в истории не повторяются)
- При клике по строчке города в списке пользователь видит погоду в выбранном городе
- Вместе с погодой показывается картинка карты местности для введенного города
- Для получения карты местности используется [API Яндекс.Карт](https://yandex.ru/dev/maps/)

### Структура проекта

1. image - скриншот работы приложения;
2. src - исходный код приложения (\*.js), подкаталог **mocks** с модулями для тестов;
3. tests - файлы с тестами;
4. index.html - базовая разметка страницы;
5. LICENSE - MIT лицензия.

### Скриншот приложения

![This is an image](/image/screenshot.jpg)
