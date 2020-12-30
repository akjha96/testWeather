class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.detaits = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.visibility = document.getElementById("w-visibility");
    this.wind = document.getElementById("w-wind");
    this.temperature = document.getElementById("w-temperature");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.icon.setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`
    );
    this.humidity.textContent = `Humidity : ${weather.main.humidity}`;
    this.feelsLike.textContent = `FeelsLike : ${weather.main.feels_like}`;
    this.wind.textContent = `Wind Speed : ${weather.wind.speed}`;
    this.visibility.textContent = `Visibility : ${weather.visibility}`;
    this.temperature.textContent = `Temperature : ${weather.main.temp}`;

    console.log(
      this.location,
      this.desc,
      this.icon,
      this.humidity,
      this.feelsLike,
      this.wind
    );
  }
}
