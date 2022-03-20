const API_KEY = "89dd66d6c0f642fc7dcd6c8bc5238b28"
const error = document.querySelector(".alert");

function GeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`

    fetch(url).then(response => response.json()).then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerText =data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${Math.ceil(data.main.temp)}`;
    });
    console.log(url);
}

function GeoError(){
    // error.classList.remove("on");
    alert("Can't find you.");

}

navigator.geolocation.getCurrentPosition(GeoOk, GeoError)