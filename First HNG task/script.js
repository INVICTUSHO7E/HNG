"use strict";

document.querySelector('[data-testid="slackUserName"]').innerHTML =
	"Isola Oluwagbohunmi";

document.querySelector('[data-testid="myTrack"]').innerHTML = "Frontend";

function updateDayOfTheWeek() {
	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const currentDate = new Date();
	const currentDay = daysOfWeek[currentDate.getUTCDay()];
	document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
		currentDay;
}

function updateUTCTime() {
	const currentDate = new Date();
	const hours = currentDate.getUTCHours().toString().padStart(2, "0");
	const minutes = currentDate.getUTCMinutes().toString().padStart(2, "0");
	const utcTime = `${hours}:${minutes} UTC`;
	document.querySelector('[data-testid="currentUTCTime"]').textContent =
		utcTime;
}

setInterval(() => {
	updateDayOfTheWeek();
	updateUTCTime();
}, 1000);

updateDayOfTheWeek();
updateUTCTime();

document.querySelector('[  data-testid="githubURL"]').innerHTML = "github";
