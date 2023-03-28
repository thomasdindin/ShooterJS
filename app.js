let canvas = document.querySelector(".canvas");
let gameMenu = document.querySelector(".game-start");
let bug;

class Bug{
    path = "./bug.svg";

    constructor(size, pos){
        this.size = size;
        this.pos = pos;
    }

    getBug = () => {
        const img = new Image(this.size, this.size);
        img.src = this.path;
        img.style = "top: " + this.pos[1] + "; left: " + this.pos[0] + ";";
        
        img.addEventListener("click", () => {
            img.remove()
            console.log("popped");
        })

        return img;
    }
}

function gameStart(){
    if(gameMenu.style.display === "none") {
        gameMenu.style.display = "block";
    } else  {
        gameMenu.style.display = "none";
    }

    let bug = new Bug(70, getRandomCoordinates());

    canvas.append(bug.getBug());
}


function getRandomCoordinates(){
    return [Math.floor(Math.random()*100), Math.floor(Math.random()*100)];
}