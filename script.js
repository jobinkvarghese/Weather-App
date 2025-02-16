const id = "7589eb19c5fee443b00980d772367c3e";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${id}`);
  if(response.status==404)
  {
    document.querySelector(".errorMsg").style.display="block";
    document.querySelector(".weather").style.display="none";

  }
  else{
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  
    if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".errorMsg").style.display="none";
    
    
  }
  
}
 
const weatherIcon = document.querySelector(".weatherIcon");
const searchBox = document.querySelector(".searchinp");
const searchbtn = document.querySelector(".searchbtn");
searchbtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
