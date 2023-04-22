//Tire Pressure - first event listener
document.querySelector('#same-pressure').addEventListener("click", () => {

    if(document.getElementById('same-pressure').checked===true) {
        document.getElementById('same-pressure-reveal').hidden = false;
        document.getElementById('individual-pressure-reveal').hidden = true;
    }
});

//Tire Pressure - second event listener
document.querySelector('#individual-pressure').addEventListener("click", () => {

    if(document.getElementById('individual-pressure').checked===true) {
        document.getElementById('individual-pressure-reveal').hidden = false;
        document.getElementById('same-pressure-reveal').hidden = true;
    }
});

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

// const driveSprocket = document.querySelector('#driver-sprocket');
const rearSprocket = document.querySelector('#rear-sprocket');
let calcDriveSprocket = 0;
let calcRearSprocket = 0;
let ratio = document.getElementById('gear-ratio');

document.querySelector('#drive-sprocket').addEventListener("change", () => {
    calcDriveSprocket = document.querySelector('#drive-sprocket').value;
    console.log(calcDriveSprocket);
    if (calcDriveSprocket !== 0 && calcRearSprocket !== 0) {
        ratio.textContent = Math.round((calcRearSprocket / calcDriveSprocket + Number.EPSILON) * 100) / 100;
    }
})

document.querySelector('#rear-sprocket').addEventListener("change", () => {
    calcRearSprocket = document.querySelector('#rear-sprocket').value;
    console.log(calcRearSprocket);
    if (calcDriveSprocket !== 0 && calcRearSprocket !== 0) {
        ratio.textContent = Math.round((calcRearSprocket / calcDriveSprocket + Number.EPSILON) * 100) / 100;
    }
})


// Weather API
async function weather() { //superHeroes

    const requestURL = 'https://api.open-meteo.com/v1/forecast?latitude=39.84&longitude=-85.44&hourly=temperature-2m,precipitation,weathercode,cloudcover,windspeed-10m,winddirection-10m&current-weather=true&temperature-unit=fahrenheit&windspeed-unit=mph&precipitation-unit=inch&&timezone=auto';
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const currentWeather = await response.json(); // superHeroes
  
    populateTime(currentWeather); // populateHeader (superHeroes)
    // populateTemp(currentWeather); //populateHeroes (superHeroes)
    // populateWindSpeed(currentWeather); 
    // populateWindDirection(currentWeather); 
    // populateWeatherCode(currentWeather); 
  }

  function populateTime(obj) {
    const weatherTime = document.getElementByID('weather-time');
    weatherTime.textContent = obj.current-weather.time;
    console.log(weatherTime);
  }

  // Highlight Top Icons When Section is within viewport - Section 1
  const topIconColorOne = document.getElementById('top-icon-section-one');
  const topIconColorTwo = document.getElementById('top-icon-section-two');
  const topIconColorThree = document.getElementById('top-icon-section-three');
  const topIconColorFour = document.getElementById('top-icon-section-four');
  const topIconColorFive = document.getElementById('top-icon-section-five');
  const topIconColorSix = document.getElementById('top-icon-section-six');
  const topIconColorSeven = document.getElementById('top-icon-section-seven');

  let observerOne = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
        topIconColorOne.setAttribute('style', 'color: #F02D3A')
    } else {
        topIconColorOne.setAttribute('style', '')
    }
}, { threshold: [0.5] });

observerOne.observe(document.querySelector("#section-one"));

// Highlight Top Icons - Section 2
let observerTwo = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
        topIconColorTwo.setAttribute('style', 'color: #F02D3A');
    } else {
        topIconColorTwo.setAttribute('style', '');
    }
}, { threshold: [0.5] });

observerTwo.observe(document.querySelector("#section-two"));

// Highlight Top Icons - Section 3
let observerThree = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
        topIconColorThree.setAttribute('style', 'color: #F02D3A');
    } else {
        topIconColorThree.setAttribute('style', '');
    }
}, { threshold: [0.5] });

observerThree.observe(document.querySelector("#section-three"));

// Highlight Top Icons - Section 4
let observerFour = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
        topIconColorFour.setAttribute('style', 'color: #F02D3A');
    } else {
        topIconColorFour.setAttribute('style', '');
    }
}, { threshold: [0.5] });

observerFour.observe(document.querySelector("#section-four"));

// Highlight Top Icons - Section 5
let observerFive = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
        topIconColorFive.setAttribute('style', 'color: #F02D3A');
    } else {
        topIconColorFive.setAttribute('style', '');
    }
}, { threshold: [0.5] });

observerFive.observe(document.querySelector("#section-five"));

// Highlight Top Icons - Section 6
let observerSix = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
        topIconColorSix.setAttribute('style', 'color: #F02D3A');
    } else {
        topIconColorSix.setAttribute('style', '');
    }
}, { threshold: [0.5] });

observerSix.observe(document.querySelector("#section-six"));

// Highlight Top Icons - Section 7
let observerSeven = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
        topIconColorSeven.setAttribute('style', 'color: #F02D3A');
    } else {
        topIconColorSeven.setAttribute('style', '');
    }
}, { threshold: [0.5] });

observerSeven.observe(document.querySelector("#section-seven"));


// Change the input border to blue when the input value is not empty
// const inputBorder = document.querySelector('.input-border');
// const inputBorderSelector = document.getElementsByClassName('input-border');

// document.getElementsByClassName('input-border').addEventListener("change", () => {
//     if (inputBorderSelector.value != "") {
//         inputBorderSelector.setAttribute('class', 'input-border blue-border');
//     }  
// });