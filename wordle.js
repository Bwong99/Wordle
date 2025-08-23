let height = 6; 
let width = 5; 

let row = 0; 
let column = 0;

let gameOver = false; 
let word = "Squid"; //my test word 


window.onload = function(){
    initialize();

}

//board set-up function 
function initialize() {

    // Board set-up
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            let tile = document.createElement("span"); //each tile is a new span
            tile.id = i.toString() + "-" + j.toString(); //assigning tile ids as so: <row>-<column>
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile); //board is a <div> not a class
        }
    }
}

    //User Input (Listening)
    document.addEventListener("keyup", (e) => {
        if (gameOver) return;

        if ("KeyA" <= e.code && e.code <= "KeyZ") {
                if (column < width) {
                    let currentTile = document.getElementById(row.toString() + "-" + column.toString());

                    if (currentTile.innerText == "") {
                        currentTile.innerText = e.code[3];
                        column += 1;
                    }
                }
            }

        else if (e.code == "Backspace"){
            if (0 < column && column < width){
                let currentTile = document.getElementById(row.toString() + "-" + (column - 1).toString());
                currentTile.innerText = "";
                column -= 1;
                
            }
        }
    });