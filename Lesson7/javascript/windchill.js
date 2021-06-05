var windChill = null;
var temp = 50;
var speed = 3.0;

function chillFactor( airTemp, windSpeed ) {
    var chill = 35.74 + 0.6215 * airTemp - 35.75 * ( windSpeed ** 0.016 ) + 0.4275 * airTemp * ( windSpeed ** 0.16 );
    return chill;
}

windChill = chillFactor(temp, speed);
windChill = windChill.toFixed(2);
document.querySelector("#chill").textContent = windChill;