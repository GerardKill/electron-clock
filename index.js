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
	let text__month = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
	let text__w__day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	document.getElementById('data').innerHTML = text__w__day[w__day] + ", " + text__month[month] + " " + m__day + ", " + year;
}