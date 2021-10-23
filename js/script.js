const months = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

const weekdays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

function setDateAndTime() {
  const d = new Date();

  const weekday = weekdays[d.getUTCDay()];
  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  const date = `${weekday}., ${day}. ${month} ${year}`;

  const hour = d.getHours();
  const minute = d.getMinutes();

  const time = `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")} Uhr`;

  document.getElementById("date").innerText = date;
  document.getElementById("time").innerText = time;
}

setDateAndTime();
setInterval(setDateAndTime, 1000);
