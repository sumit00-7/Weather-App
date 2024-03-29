const apiKey = "f6ce45ae822b9e5f57c7edc9cb259f33";
const apiURl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".header input");
const searchBtn = document.querySelector(".header button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(cityName){
    const response = await fetch(apiURl + cityName + `&appid=${apiKey}`);
    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png"
    }

    document.querySelector(".weather").style.display = "block";

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
