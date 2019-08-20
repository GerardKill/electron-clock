function TimeAndDate() {
	TimeNow();
	DateNow();
}
function TimeNow() {
	let time__now = new Date();
	let hours = time__now.getHours();
	let minutes = time__now.getMinutes();
	let seconds = time__now.getSeconds();
	minutes = checkTime(minutes);
	seconds = checkTime(seconds);
	document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;
	t = setTimeout('TimeNow()',500);
}
function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
function DateNow() {
	let date__now = new Date();
	let m__day = date__now.getDate();
	let month = date__now.getMonth();
	let year = date__now.getFullYear();
	let w__day = date__now.getDay();
	let text__month;
	let text__w__day;
	switch(month) {
		case 0:
		text__month = "January";
		break;

		case 1:
		text__month = "February";
		break;

		case 2:
		text__month = "March";
		break;

		case 3:
		text__month = "April";
		break;

		case 4:
		text__month = "May";
		break;

		case 5:
		text__month = "June";
		break;

		case 6:
		text__month = "July";
		break;

		case 7:
		text__month = "August";
		break;

		case 8:
		text__month = "September";
		break;

		case 9:
		text__month = "October";
		break;

		case 10:
		text__month = "November";
		break;

		case 11:
		text__month = "December";
		break;
	}

	switch(w__day) {
		case 0:
		text__w__day = "Sunday";
		break;

		case 1:
		text__w__day = "Monday";
		break;

		case 2:
		text__w__day = "Tuesday";
		break;

		case 3:
		text__w__day = "Wednesday";
		break;

		case 4:
		text__w__day = "Thursday";
		break;

		case 5:
		text__w__day = "Friday";
		break;

		case 6:
		text__w__day = "Saturday";
		break;
	}
	document.getElementById('data').innerHTML = text__w__day + ", " + text__month + " " + m__day + ", " + year;
}