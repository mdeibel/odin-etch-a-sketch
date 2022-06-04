function generateNewGrid(dimension) {
    // Create dimension * dimension grid of square divs
    const containerDiv = document.querySelector('div.container');
    for (let i = 0; i < dimension*dimension; i++) {
        let squareDiv = document.createElement('div');
        squareDiv.classList.add('tile');
        squareDiv.style.width = `calc(100% / ${dimension})`;
        containerDiv.appendChild(squareDiv);
    }
}

generateNewGrid(4);

let tiles = document.querySelectorAll('.tile');
tiles.forEach(tile => {
    tile.addEventListener('mouseenter', () => {
        tile.classList.add('touched');
    })
})