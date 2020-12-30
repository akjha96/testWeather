class Weather {
  constructor(city, region) {
    this.apiKey = "a8e71c9932b20c4ceb0aed183e6a83bb";
    this.city = city;
    this.region = region;
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
    );
    const responseData = await response.json();
    return responseData;
  }

  changeLocation(city, region) {
    this.city = city;
    this.region = region;
  }
}
