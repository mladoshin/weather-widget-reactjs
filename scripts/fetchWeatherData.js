const weather_key = "aa1af3ff1aff91c62d3ebf32bc983fcb";
async function fetchWeatherData(e){
  e.preventDefault()
  const city = document.getElementById("inp-location").value;
  const url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&&APPID='+weather_key;

  const response = await fetch(url).then((response) => {return response.json()})
  .catch((error) => {
    console.log(error);
  })
  document.getElementById("info").classList.remove("none");
  document.getElementById("info").classList.add("info");
  return response;
}
export default fetchWeatherData;
