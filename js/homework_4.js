//Task 1

// let blockFirestLine = document.querySelector('section:first-line');
// let blockTwoHeader = document.querySelector('.blockTwo__Header');
// let blockTwoList = document.querySelector('ul li:nth-child(5)');
// let footerLevelCurrent = document.querySelector('#footerLevelCurrent');


//Task 2
let flowData = document.getElementById('flowData');
let toggleButton = document.getElementById('button');
let isButton = localStorage.getItem('isButton');
let lastToggleTime = localStorage.getItem('lastToggleTime');
const bgColorDark = 'rgb(65, 65, 65)';
const bgColorLigth = 'rgb(225, 225, 225)';

function updateButtonState() {
	if (isButton === 'true' ) {
		toggleButton.textContent = 'Turn off' ;
		document.body.style.background = bgColorLigth;
		flowData.innerHTML = `Last turn on:` + lastToggleTime;
	} else {
		toggleButton.textContent = 'Turn on' ;
		document.body.style.background = bgColorDark;
		flowData.innerHTML = `Last turn off:` + lastToggleTime;
	}
}

if (isButton !== null && lastToggleTime !== null) {
    updateButtonState();
} else {
    isButton = 'true';
    lastToggleTime = '';
    localStorage.setItem('isButton', isButton);
    localStorage.setItem('lastToggleTime', lastToggleTime);
}

function toggleButtonClick() {
    if (isButton === 'true') {
        isButton = 'false';
        lastToggleTime = new Date().toLocaleString();
    } else {
        isButton = 'true';
        lastToggleTime = new Date().toLocaleString();
    }

    localStorage.setItem('isButton', isButton);
    localStorage.setItem('lastToggleTime', lastToggleTime);

    updateButtonState();
}

toggleButton.addEventListener('click', toggleButtonClick);
