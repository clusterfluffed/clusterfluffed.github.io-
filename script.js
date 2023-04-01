//Tire Pressure - first event listener
document.querySelector('#same_pressure').addEventListener("click", () => {

    if(document.getElementById('same_pressure').checked===true) {
        document.getElementById('same_pressure_reveal').hidden = false;
        document.getElementById('individual_pressure_reveal').hidden = true;
    }
});

//Tire Pressure - second event listener
document.querySelector('#individual_pressure').addEventListener("click", () => {

    if(document.getElementById('individual_pressure').checked===true) {
        document.getElementById('individual_pressure_reveal').hidden = false;
        document.getElementById('same_pressure_reveal').hidden = true;
    }
});

// if checked, then populate track input with 'NCMP'. If unchecked, then remove 'NCMP'
// if checked make default track layout field hidden = true
// if checked, then changed reveal div hidden to false. if unchecked then hidden = true
document.querySelector('#is_ncmp').addEventListener("click", () => {

    if(document.getElementById('is_ncmp').checked===true) {
        document.getElementById('ncmp_layouts').hidden = false;
        document.getElementById('default_layout').hidden = true;
        document.getElementById('track').value = 'NCMP';
    }

    if(document.getElementById('is_ncmp').checked===false) {
        document.getElementById('ncmp_layouts').hidden = true;
        document.getElementById('default_layout').hidden = false;
        document.getElementById('track').value = '';
    }
});

// layout image section reveal: if checked then reveal image div hidden = false. if unchecked = true
// if checked then populate img src="" with default link to the image for national track
// Event listener for the NCMP layout dropdown. Will load the corresponding track layout
document.querySelector('#ncmp_layouts').addEventListener("change", () => {
    // const layout1 = 'https://i.ibb.co/7RZP2DD/NCMP-1.png';
    // const layout2 = 'https://i.ibb.co/YpC3PCL/NCMP-2-Fast-Track.png';
    // const layout3 = 'https://i.ibb.co/KF1fW1f/NCMP-3.png';
    // const layout4 = 'https://i.ibb.co/tH3TYJV/NCMP-4.png';
    // const layout5 = 'https://i.ibb.co/k5fHrvB/NCMP-5.png';

    let layoutChoice = document.querySelector('#ncmp_layout_number').value;
    let imageElement = document.querySelector('#image_reveal');

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
    }
});

// const driveSprocket = document.querySelector('#driver_sprocket');
const rearSprocket = document.querySelector('#rear_sprocket');
let calcDriveSprocket = 0;
let calcRearSprocket = 0;
let ratio = document.getElementById('gear_ratio');

document.querySelector('#drive_sprocket').addEventListener("change", () => {
    calcDriveSprocket = document.querySelector('#drive_sprocket').value;
    console.log(calcDriveSprocket);
    if (calcDriveSprocket !== 0 && calcRearSprocket !== 0) {
        ratio.textContent = Math.round((calcRearSprocket / calcDriveSprocket + Number.EPSILON) * 100) / 100;
    }
})

document.querySelector('#rear_sprocket').addEventListener("change", () => {
    calcRearSprocket = document.querySelector('#rear_sprocket').value;
    console.log(calcRearSprocket);
    if (calcDriveSprocket !== 0 && calcRearSprocket !== 0) {
        ratio.textContent = Math.round((calcRearSprocket / calcDriveSprocket + Number.EPSILON) * 100) / 100;
    }
})

