class Weather {
  constructor(city, region) {
    this.apiKey = "85c587b263852e4df59cdbbcf5b8235f";
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
