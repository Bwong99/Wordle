let height = 6; //number of guesses
let width = 5; //length of word 

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
            let tile = document.createElement("span");
            tile.id = i.toString() + "-" + j.toString(); //assigning tile ids as so: <row>-<column>
            tile.classList.add("tile");
            tile.innerText = "P";
            document.getElementById("board").appendChild(tile);
        }
    }

}