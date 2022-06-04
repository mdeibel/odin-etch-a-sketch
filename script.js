function generateNewGrid(dimension) {
    // Create dimension * dimension grid of square divs
    const containerDiv = document.querySelector('div.container');
    for (let i = 0; i < dimension*dimension; i++) {
        let squareDiv = document.createElement('div');
        squareDiv.innerText = 'hello';
        containerDiv.appendChild(squareDiv);
    }
}

generateNewGrid(4);