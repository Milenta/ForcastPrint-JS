"Use Strict";

const temps = [13, 14, 17, -7];
function printForcast(arrayTemp) {
  let weather = "";
  for (let i = 0; i < arrayTemp.length; i++) {
    weather += `${arrayTemp[i]}°C in ${i + 1} ${i === 0 ? "day" : "days"} ... `;
  }
  return weather;
}

console.log(printForcast(temps));
document.getElementById("h3-el").innerText = printForcast(temps);
