
function createBoard(rows, cols){
    const board = document.querySelector(".board")
    removeBoard()  // used if needed after the first iteration
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
        })
    });
}

// edit this so it actually is random. Don't really feel like it.
function setRandomDrawingColour() {
    squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.addEventListener('mouseover', function(){
            square.style.backgroundColor = "red"
        })

        square.addEventListener('mouseleave', function(){
            square.style.backgroundColor = "yellow"
        })
    });
}

const reset = document.querySelector(".reset-button")
reset.addEventListener('click', resetBoard)

const gridSize = document.querySelector(".create-new-grid-button")
gridSize.addEventListener('click', function () {
    const inputSize = Number(document.querySelector(".grid-size-input").value)
    if (typeof inputSize == 'number' && !isNaN(inputSize) && inputSize <100) {
        createBoard(inputSize, inputSize)

        // do some checks here, if randomise button is active etc. and change this otherwise.
        // don't really feel like it tbh
        setDrawingColour(mouseoverColour,mouseleaveColour)
    }
})

const randomizeColours = document.querySelector(".randomize-colours-button")
randomizeColours.addEventListener('click', setRandomDrawingColour)


mouseoverColour = "blue", mouseleaveColour = "white"
createBoard(16, 16)
setDrawingColour(mouseoverColour,mouseleaveColour)