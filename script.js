function generateNewGrid(dimension) {
    clearExistingGrid();

    // Create dimension * dimension grid of square divs
    const containerDiv = document.querySelector('div.container');
    for (let i = 0; i < dimension * dimension; i++) {
        let squareDiv = document.createElement('div');
        squareDiv.classList.add('tile');
        squareDiv.style.width = `calc(100% / ${dimension})`;
        containerDiv.appendChild(squareDiv);
    }

    registerMouseMoveListeners();
}

function clearExistingGrid() {
    const containerDiv = document.querySelector('div.container');
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
}

function registerMouseMoveListeners() {
    let tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        let brightness = 1;
        tile.addEventListener('mouseenter', () => {
            if (tile.classList.contains('touched')) {
                brightness -= .1;
                tile.style.filter = `brightness(${brightness})`;
            }
            else {
                tile.classList.add('touched');
                tile.style.backgroundColor = random_rgb();
            }
        })
    })
}

function random_rgb() {
    var o = Math.round, r = Math.random, s = 255;
    return `rgb(${o(r() * s)},${o(r() * s)},${o(r() * s)})`;
}

generateNewGrid(50);

let button = document.querySelector('button');
button.addEventListener('click', () => {
    let userInput = prompt("Enter number of squares per side (1-100): ");
    let dimension = (userInput > 100) ? 100 : (userInput < 1) ? 1 : userInput;
    generateNewGrid(dimension);
});