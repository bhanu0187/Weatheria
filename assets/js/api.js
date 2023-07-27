"use strict";

const api_key = "a186697a18a238ce1d5113baef6798da";

export const fetchData = function (URL, callback) {
	fetch(`${URL}&appid=${api_key}`)
		.then((response) => response.json())
		.then((data) => callback(data));
};

export const url = {
	currentWeather(coords) {
		return `https://api.openweathermap.org/data/2.5/weather?${coords}&units=metric`;
	},
	forecast(coords) {
		return `https://api.openweathermap.org/data/2.5/forecast?${coords}&units=metric`;
	},
	airPollution(coords) {
		return `https://api.openweathermap.org/data/2.5/air_pollution?${coords}`;
	},
	reverseGeo(coords) {
		return `https://api.openweathermap.org/geo/1.0/reverse?${coords}&limit=5`;
	},
	geo(cityName) {
		return `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5`;
	},
};
