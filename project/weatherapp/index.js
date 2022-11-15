const getweatherdata = (city) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "308b1e5adfmsh71832e8d5316cc5p14eaffjsn359107dd406d",
      "X-RapidAPI-Host": "bestweather.p.rapidapi.com",
    },
  };



  return fetch(
    `https://bestweather.p.rapidapi.com/weather/${city}/today?unitGroup=us`,
    options
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};



const searchCity = async() => {
	const city = document.getElementById("city-input").value;
	console.log(city);
	const data=await getweatherdata(city)
	// getweatherdata(city)
	showweatherdata(data)
  };



const showweatherdata = (weatherdata)=>
{
	console.log(weatherdata,'hi');
	console.log(weatherdata.currentConditions.temp)

	document.getElementById('city-name').innerText=weatherdata.resolvedAddress
	document.getElementById('weather-type').innerText=weatherdata.currentConditions.conditions;
	document.getElementById('temp').innerText=weatherdata.currentConditions.temp;
	document.getElementById('city-name').innerText=weatherdata.resolvedAddress
	document.getElementById('city-name').innerText=weatherdata.resolvedAddress
}