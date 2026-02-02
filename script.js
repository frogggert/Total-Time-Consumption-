const activity = document.getElementById("activity");

const minutes = document.getElementById("minutes");
const minutesValue = document.getElementById("minutesValue");

const days = document.getElementById("days");
const daysValue = document.getElementById("daysValue");

const years = document.getElementById("years");
const yearsValue = document.getElementById("yearsValue");

const results = document.getElementById("results");

function formatNumber(n) {
  return Math.round(n).toLocaleString();
}

function calculate() {
  const minsPerDay = parseFloat(minutes.value);
  const daysPerWeek = parseInt(days.value);
  const yearsCount = parseInt(years.value);

updateSliderFill(minutes);
updateSliderFill(days);
updateSliderFill(years);


  minutesValue.textContent = minsPerDay;
  daysValue.textContent = daysPerWeek;
  yearsValue.textContent = yearsCount;

  const minsPerWeek = minsPerDay * daysPerWeek;
  const hoursPerWeek = minsPerWeek / 60;

  const weeksPerYear = 52;
  const hoursPerYear = hoursPerWeek * weeksPerYear;
  const daysPerYear = hoursPerYear / 24;

  const totalHours = hoursPerYear * yearsCount;
  const totalDays = totalHours / 24;

  const name = activity.value.trim() || "This activity";

function updateSliderFill(slider) {
  const percent =
    ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.setProperty("--value", percent + "%");
}


  results.innerHTML = `
    <strong>${name} costs you:</strong><br>
    ${hoursPerWeek.toFixed(1)} hours per week<br>
    ${formatNumber(hoursPerYear)} hours per year (${daysPerYear.toFixed(1)} days)<br><br>

    <strong>Over ${yearsCount} year(s):</strong><br>
    ${formatNumber(totalHours)} hours total (${totalDays.toFixed(1)} days)
  `;
}

[activity, minutes, days, years].forEach(el => {
  el.addEventListener("input", calculate);
});

calculate();
