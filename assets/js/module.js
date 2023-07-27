"use strict";

export const weekDaysNames = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

export const monthNames = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export const getDate = function (dateUnix, timezone) {
	const date = new Date((dateUnix + timezone) * 1000);
	const weekDayName = weekDaysNames[date.getUTCDay()];
	const monthName = monthNames[date.getUTCMonth()];

	return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
};

export const getTime = function (timeUnix, timezone) {
	// console.log(dateUnix, timezone);
	const date = new Date((timeUnix + timezone) * 1000);
	const hours = date.getUTCHours();
	const minutes = date.getUTCMinutes();
	const period = hours >= 12 ? "PM" : "AM";

	return `${hours % 12 || 12}:${minutes} ${period}`;
};

export const getHours = function (dateUnix, timezone) {
	const date = new Date((dateUnix + timezone) * 1000);
	const hours = date.getUTCHours();
	const period = hours >= 12 ? "PM" : "AM";

	return `${hours % 12 || 12} ${period}`;
};

export const mps_to_kmh = (mps) => {
	const mph = mps * 3600;
};

export const aqiText = {
	1: {
		level: "Good",
		text: "Air quality is considered satisfactory and air pollution poses little or no threat.",
	},
	2: {
		level: "Fair",
		text: "Air quality is acceptable, but some air pollution may be present.",
	},
	3: {
		level: "Moderate",
		text: " Air quality is acceptable; however, pollution in this range may pose a moderate health concern for a very small number of individuals. People who are unusually sensitive to ozone or particle pollution may experience respiratory symptoms",
	},
	4: {
		level: "Poor",
		text: "Everyone may begin to experience health effects; members of sensitive groups may experience more severe health effects.",
	},
	5: {
		level: "Very Poor",
		text: "Health warnings of emergency conditions. The entire population is more likely to affected.",
	},
};
