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
        tile.addEventListener('mousemove', () => {
            tile.classList.add('touched');
        })
    })
}

generateNewGrid(50);
registerMouseMoveListeners();

let button = document.querySelector('button');
button.addEventListener('click', () => {
    let userInput = prompt("Enter number of squares per side: ");
    let dimension = (userInput > 100) ? 100 : (userInput < 1) ? 1 : userInput;
    generateNewGrid(dimension);
});