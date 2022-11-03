const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '308b1e5adfmsh71832e8d5316cc5p14eaffjsn359107dd406d',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch('https://open-weather13.p.rapidapi.com/city/maharashtra', options)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));