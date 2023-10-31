
function createBoard(rows, cols){
    const board = document.querySelector(".board")
    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div")
        row.classList.add("row");
        board.appendChild(row)
        for (let j = 0; j < cols; j++) {
            const square = document.createElement("div")
            square.classList.add("square");
            row.appendChild(square)
        }
    }
}

function resetBoard() {
    squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.style.backgroundColor = document.body.style.backgroundColor
    });
}

function removeBoard() {
    const board = document.querySelector(".board")
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

function setDrawingColour(mouseover, mouseleave) {
    squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = mouseover
        })

        square.addEventListener('mouseleave', function(){
            square.style.backgroundColor = mouseleave
            // square.style.backgroundColor = document.body.style.backgroundColor
        })
    });

}

createBoard(16, 16)
setDrawingColour("blue", "white")

const reset = document.querySelector(".reset-button")
reset.addEventListener('click', resetBoard)

const gridSize = document.querySelector(".create-new-grid-button")
gridSize.addEventListener('click', function () {
    const inputSize = Number(document.querySelector(".grid-size-input").value)
    if (typeof inputSize == 'number' && !isNaN(inputSize) && inputSize <100) {
        removeBoard()
        createBoard(inputSize, inputSize)
        setDrawingColour("blue", "white")
    }
})