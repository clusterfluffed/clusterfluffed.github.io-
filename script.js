// if checked, then populate track input with 'NCMP'. If unchecked, then remove 'NCMP'
// if checked make default track layout field hidden = true
// if checked, then changed reveal div hidden to false. if unchecked then hidden = true
document.querySelector('#is-ncmp').addEventListener("click", () => {

    if(document.getElementById('is-ncmp').checked===true) {
        document.getElementById('ncmp-layouts').hidden = false;
        document.getElementById('default-layout').hidden = true;
        document.getElementById('track').value = 'NCMP';
    }

    if(document.getElementById('is-ncmp').checked===false) {
        document.getElementById('ncmp-layouts').hidden = true;
        document.getElementById('default-layout').hidden = false;
        document.getElementById('track').value = '';
    }
});

// layout image section reveal: if checked then reveal image div hidden = false. if unchecked = true
// if checked then populate img src="" with default link to the image for national track
// Event listener for the NCMP layout dropdown. Will load the corresponding track layout
document.querySelector('#ncmp-layouts').addEventListener("change", () => {
    let layoutChoice = document.querySelector('#ncmp-layout-number').value;
    let imageElement = document.querySelector('#image-reveal');

    if (layoutChoice === 'ncmp1') {
        imageElement.setAttribute('src', 'https://i.ibb.co/7RZP2DD/NCMP-1.png');
    } else if (layoutChoice === 'ncmp2') {
        imageElement.setAttribute('src', 'https://i.ibb.co/YpC3PCL/NCMP-2-Fast-Track.png');
    } else if (layoutChoice === 'ncmp3') {
        imageElement.setAttribute('src', 'https://i.ibb.co/KF1fW1f/NCMP-3.png');
    } else if (layoutChoice === 'ncmp4') {
        imageElement.setAttribute('src', 'https://i.ibb.co/tH3TYJV/NCMP-4.png');
    } else if (layoutChoice === 'ncmp5') {
        imageElement.setAttribute('src', 'https://i.ibb.co/k5fHrvB/NCMP-5.png');
    } else if (layoutChoice === 'ncmp6') {
        imageElement.setAttribute('src', 'https://i.ibb.co/7CpkXhF/NCMP-6.png');
    } else if (layoutChoice === 'ncmp7') {
        imageElement.setAttribute('src', 'https://i.ibb.co/3TmcKJn/NCMP-7.png');
    } else if (layoutChoice === 'ncmp8') {
        imageElement.setAttribute('src', 'https://i.ibb.co/NyMmT1j/NCMP-8.png');
    } else if (layoutChoice === 'ncmp9') {
        imageElement.setAttribute('src', 'https://i.ibb.co/5s31rrY/NCMP-9-ironman.png');
    } else if (layoutChoice === 'ncmp10') {
        imageElement.setAttribute('src', 'https://i.ibb.co/H7PBHnp/NCMP-10.png');
    }
    });

// V2 of Tire Pressure based on toggle
document.querySelector('#individual-pressure-toggle').addEventListener("click", () => {

    if(document.getElementById('individual-pressure-toggle').checked===true) {
        document.getElementById('individual-pressure-reveal').hidden = false;
        document.getElementById('same-tire-pressure').disabled = true;
    } else {
        document.getElementById('individual-pressure-reveal').hidden = true;
        document.getElementById('same-tire-pressure').disabled = false;
    }
});

// const driveSprocket = document.querySelector('#driver-sprocket');
const rearSprocket = document.querySelector('#rear-sprocket');
let calcDriveSprocket = 0;
let calcRearSprocket = 0;
let ratio = document.getElementById('gear-ratio');
let ratioDb = document.getElementById('gear-ratio-db');

document.querySelector('#drive-sprocket').addEventListener("change", () => {
    calcDriveSprocket = document.querySelector('#drive-sprocket').value;
    console.log(calcDriveSprocket);
    if (calcDriveSprocket !== 0 && calcRearSprocket !== 0) {
        ratio.innerHTML = Math.round((calcRearSprocket / calcDriveSprocket + Number.EPSILON) * 100) / 100;
        ratioDb.value = Math.round((calcRearSprocket / calcDriveSprocket + Number.EPSILON) * 100) / 100;
    }
})

document.querySelector('#rear-sprocket').addEventListener("change", () => {
    calcRearSprocket = document.querySelector('#rear-sprocket').value;
    console.log(calcRearSprocket);
    if (calcDriveSprocket !== 0 && calcRearSprocket !== 0) {
        ratio.innerHTML = Math.round((calcRearSprocket / calcDriveSprocket + Number.EPSILON) * 100) / 100;
        ratioDb.value = Math.round((calcRearSprocket / calcDriveSprocket + Number.EPSILON) * 100) / 100;
    }
})



// Change the input border to blue when the input value is not empty
// const inputBorder = document.querySelector('.input-border');
// const inputBorderSelector = document.getElementsByClassName('input-border');

// document.getElementsByClassName('input-border').addEventListener("change", () => {
//     if (inputBorderSelector.value != "") {
//         inputBorderSelector.setAttribute('class', 'input-border blue-border');
//     }  
// });

// form submit to Google Sheets
// const scriptURL = 'https://script.google.com/macros/s/AKfycbwzDabdzOSsANLmudRpiaQH4C8bBGzKGNmdPb6claXvAdSroK-1ZjQARxNNsiYD8Dxd/exec'
// const form = document.forms['submit-to-google-sheet']

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => console.log('Success!', response))
//     .catch(error => console.error('Error!', error.message))
// })

const scriptURL = 'https://script.google.com/macros/s/AKfycbwzDabdzOSsANLmudRpiaQH4C8bBGzKGNmdPb6claXvAdSroK-1ZjQARxNNsiYD8Dxd/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
//   e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert('Your data has been submitted!', response))
    .catch(error => alert('Sorry, an error has occured!', error.message))
    document.getElementById("kart-track-form").reset();
})



//location and weather API
document.querySelector('#auto-weather').addEventListener("click", () => {
    let lat = 0;
    let latitude = '';
    let long = 0;
    let longitude = '';
    let weatherOutputTemp = document.getElementById('live-weather-temp');
    let weatherOutputWindSpeed = document.getElementById('live-weather-windspeed');
    let weatherOutputWindDirection = document.getElementById('live-weather-wind-direction');
    let weatherOutputTempDb = document.getElementById('live-weather-temp-db');
    let weatherOutputWindSpeedDb = document.getElementById('live-weather-windspeed-db');
    let weatherOutputWindDirectionDb = document.getElementById('live-weather-wind-db');

    if(document.getElementById('auto-weather').checked===true) {
        document.getElementById('auto-weather-reveal').hidden = false;
        document.getElementById('default-weather').hidden = true;
        (function () {
            navigator.geolocation.getCurrentPosition(function (position) {
                lat = position.coords.latitude
                latitude = lat.toFixed(2);
                long = position.coords.longitude
                longitude = long.toFixed(2);
                console.log('lat', latitude);
                console.log('long', longitude);
                fetch(`https://api.open-meteo.com/v1/gfs?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch`)
                    // Handle success
                    .then(response => response.json())  // convert to json
                    .then(json => console.log(json.current_weather.temperature))    //print data to console
                    .catch(err => console.log('Request Failed', err)); // Catch errors
                // fetch(`https://api.open-meteo.com/v1/gfs?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch`)
                //     .then(response => response.text())
                //     .then(data => console.log(data));
                fetch(`https://api.open-meteo.com/v1/gfs?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch`)
                    .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error, status = ${response.status}`);
                    }
                    return response.json();
                    })
                    .then((data) => {
                        const weatherResponseTemp = Math.round(data.current_weather.temperature);
                        console.log(`Temp:`, weatherResponseTemp);
                        const weatherResponseWindSpeed = Math.round(data.current_weather.windspeed);
                        console.log(`Wind Speed:`, weatherResponseWindSpeed);
                        const weatherResponseWindDirection = data.current_weather.winddirection;
                        console.log(`Wind Direction:`, weatherResponseWindDirection);
                        const weatherResponseCode = data.current_weather.weathercode;
                        console.log(`Weather Code:`, weatherResponseCode);
                        weatherOutputTemp.innerHTML = `Temp: <span>${weatherResponseTemp}</span>`;
                        // weatherOutputWindSpeed.innerHTML = `Wind Speed: ${weatherResponseWindSpeed}`;
                        //Populate the hidden inputs for database weather
                        weatherOutputTempDb.innerHTML = `Temperature: ${weatherResponseTemp}`;
                        weatherOutputWindSpeedDb.innerHTML = `Wind Speed: ${weatherResponseWindSpeed}`;
                        windDirectionCalc(weatherResponseWindDirection);
                        //wind direction calculation
                        function windDirectionCalc(dir) {
                            let windDirectionOutput = '';
                        if (dir >= 346 && dir <= 360 || dir >= 0 && dir <= 15) {
                            windDirectionOutput = 'N';
                        } else if (dir >= 16 && dir <= 45) {
                            windDirectionOutput = 'NNE';
                        } else if (dir >= 46 && dir <= 75) {
                            windDirectionOutput = 'ENE';
                        } else if (dir >= 76 && dir <= 105) {
                            windDirectionOutput = 'E';
                        } else if (dir >= 106 && dir <= 135) {
                            windDirectionOutput = 'ESE';
                        } else if (dir >= 136 && dir <= 165) {
                            windDirectionOutput = 'SSE';
                        } else if (dir >= 166 && dir <= 195) {
                            windDirectionOutput = 'S';
                        } else if (dir >= 196 && dir <= 225) {
                            windDirectionOutput = 'SSW';
                        } else if (dir >= 226 && dir <= 255) {
                            windDirectionOutput = 'WSW';
                        } else if (dir >= 256 && dir <= 285) {
                            windDirectionOutput = 'W';
                        } else if (dir >= 286 && dir <= 315) {
                            windDirectionOutput = 'WNW';
                        } else if (dir >= 316 && dir <= 345) {
                            windDirectionOutput = 'NNW';
                        }
                        console.log(windDirectionOutput);
                        weatherOutputWindDirectionDb.value = `${windDirectionOutput}`;
                        weatherOutputWindSpeedDb.value = `${weatherResponseWindSpeed} mph`;
                        weatherOutputTempDb.value = `${weatherResponseTemp}`;
                        return weatherOutputWindDirection.innerHTML = `Wind: <span>${windDirectionOutput}</span> at <span>${weatherResponseWindSpeed} mph</span>`;
                        };
      })
            },
            function (error) {
                console.log("The Locator was denied. :(");
            })
        })();
    }
    if(document.getElementById('auto-weather').checked===false) {
        document.getElementById('auto-weather-reveal').hidden = true;
        document.getElementById('default-weather').hidden = false;
    }
});



//Highlight if an input has a value

// let labelHighlight = document.getElementById('event-label');

// document.querySelector('#event').addEventListener("change", () => {
    
//     if (document.querySelector('#event').value !== '') {
//         console.log('event value not blank');
//         labelHighlight.style.backgroundColor='green';
//     }
// })

