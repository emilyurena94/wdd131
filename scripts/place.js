// Current year and last modified
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastmodified').textContent = document.lastModified;

// Weather data
const temperature = 5; // °C
const windSpeed = 20; // km/h

function calculateWindChill(temp, wind) {
  return (temp <= 10 && wind > 4.8) 
    ? Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)) 
    : "N/A";
}

document.getElementById('windChill').textContent = calculateWindChill(temperature, windSpeed);
