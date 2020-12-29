const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = `
<div class="main_wrapper">
    <header>
        <h1 class="header_title">Погода здесь</h1>
        <button class="header_refresh" id="refresh-btn" >
            Обновить геолокацию
        </button>
        <button class="header_refresh_mobile">
            <img src="src/img/refresh.png" alt="refresh" class="header_refresh_mobile_image">
        </button>
        <div></div>
    </header>
    <main>
        <section class="main_city_weather_block">

        </section>
        <section class="city_search_block mt-1rem">
            <h3>
                Избранное
            </h3>
            <form id='form' class="city_search_form">
                <div class="mr-1rem">
                    <label>
                        <input type="text" class="city_search_form-input" placeholder="Добавить новый город">
                    </label>
                </div>
                <button type="submit" class="city_search_form-btn">
                    +
                </button>
            </form>
        </section>
        <section>
            <ul class="main_weather_list">

            </ul>
        </section>
    </main>
</div>

<template id="loader">
    <div class="loader-container">
        <img class="loader" src="./src/img/loader.gif" alt="loading">
    </div>
</template>

<template id="weather-data-block">
     <li class="weather_row">
         <div class="weather_row_title">{title}</div>
         <div class="weather_row_value">{value}</div>
     </li>
</template>

<template id="main-city">
    <div class="main_city_weather_block_common">
        <div class="main_city">
            <h2>
                {title}
            </h2>
            <div class="main_city_flex">
                <img src="src/img/weather/rain.png" class="main_city__icon" alt="weather icon"/>
                <div class="main_city__temperature">
                    {temp}°C
                </div>
            </div>
        </div>
    </div>
    <div class="main_city_weather_detail">
        <ul class="weather-block">
            {stats}
        </ul>
    </div>
</template>

<template id="fav-city">
    <li class="mt-2rem">

        <div class="city" style=>
            <h4>
                {title}
            </h4>
            <div class="city_temperature">
                {temp}°C
            </div>
            <img src="src/img/weather/rain.png"
                 class="city_extra__icon" alt="weather icon"/>
            <button type="button" class="city_remove" data-id="{id}">
                ✖
            </button>
        </div>
        <ul>
            {stats}
        </ul>
    </li>
</template>
`
const dom = new JSDOM(html)
const { window } = dom
global["window"] = window
global["document"] = window.document
global["alert"] = (msg) => {
  console.log(`ALERT -> "${msg}"`)
}
global["navigator"] = {
  geolocation:{
    getCurrentPosition: (res, rej, opts) => res({
      coords: {
        latitude: '50',
        longitude: '45',
      }
    }),
  }
}
