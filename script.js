
const ui = new UI;
const storage = new Storage;

const weatherLocation = storage.getLocationData();

// const weather = new Weather('Boston', 'MA');
const weather = new Weather(weatherLocation.city, weatherLocation.region);

document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'FL');

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const region = document.getElementById('region').value;

    weather.changeLocation(city, region);

    storage.setLocationData(city, region);

    getWeather();

    $('#locModal').modal('hide');
})

function getWeather(){
    weather.getWeather()
    .then(results => {
        // console.log(results);
        ui.paint(results);
    })
    .catch(err => {
        console.log(err);
    })
}
