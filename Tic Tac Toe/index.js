const displayController =(()=>{
    const renderMessage = (message) =>{
        document.querySelector(".message").innerHTML = message;
    }

    return{
        renderMessage,
    }
})()



const Gameboard = (()=>{
    let gameboard = ["", "", "", "", "", "", "", "", "",] //private

    const render = () =>{ // I have only access to  this func :)
        let boardHTML = ""
        gameboard.forEach((squere,index) => {
            boardHTML += `<div class="square" id="square-${index}">${squere}</div>` // rendering the squares
        })
        document.querySelector("#gameboard").innerHTML = boardHTML

        const squares = document.querySelectorAll(".square")
        squares.forEach((squere)=>{
            squere.addEventListener("click",Game.handleClick) // adding click to every square
        })
    }

    const update = (index, value) => {
        gameboard[index] = value
        render()
    }

    const getGameboard = () => gameboard // indirectly returns gameboard, i still cant modify gameboard
    
    
    return{
        render,
        update,
        getGameboard
    }
})(); //IIFE

const createPlayer = (name, mark) =>{ // factory for Players
    return{
        name,
        mark
    }

}


const Game =(()=>{
    let players = []
    let currentPlayerIndex // all private
    let gameOver

    const start = () =>{ // I have access to this func :), starting game by constructing players and rendering board
        players = [
            createPlayer(document.querySelector("#player1").value,"X"), 
            createPlayer(document.querySelector("#player2").value,"O")
        ]
        currentPlayerIndex = 0
        gameOver = false
        Gameboard.render()
        displayController.renderMessage(`${players[0].name} vs ${players[1].name}`) // displaying players names
    }

    const restart = () =>{
        for(let i=0; i < 9; i++){ //retarting board
            Gameboard.update(i,"")
        }
        Gameboard.render()
        displayController.renderMessage("")             // retarting message
        document.querySelector("#player1").value = ""  // restarting name inputs
        document.querySelector("#player2").value = ""
    }

    const handleClick = (event) =>{ // handeling clicks on each square
        if(gameOver){
            return
        }

        let index =parseInt(event.target.id.split("-")[1])// this splits just number from id of square and convert it to Integer :)

        if(Gameboard.getGameboard()[index]!=="")  //you cant click twice on one square
            return;

        Gameboard.update(index, players[currentPlayerIndex].mark) // update game on click to each square by index of square

        if(checkForWin(Gameboard.getGameboard(), players[currentPlayerIndex].mark)){// checking for win andl alert it
            gameOver = true;
            displayController.renderMessage(`${players[currentPlayerIndex].name} wins.`)
        }
        else if(checkForTie(Gameboard.getGameboard())){
            gameOver = true
            displayController.renderMessage(`A tie!`)
        }


        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0 // after click it is fliping X and O
    }
    return{
        start,
        handleClick,
        restart
    }
})(); //IIFE 


const startButton = document.querySelector("#start-game")
startButton.addEventListener("click",()=>{
    Game.start()
});

const restartButton = document.querySelector("#restart-game")
restartButton.addEventListener("click",()=>{
    Game.restart()
});

const checkForWin = (board) =>{ //it takes board and match it with hardcoded won combination
    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6], // winning combinations
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for (let i=0; i < winningCombinations.length; i++) {
        const[a, b, c] = winningCombinations[i] 
        if(board[a] && board[a] === board[b] && board[a] === board[c]){  
            return true
        }
    }
    return false
}

const checkForTie = (board) =>{
    return board.every(cell => cell !=="") // if every cell is filled returns true
}