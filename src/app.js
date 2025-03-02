import { createBoard, fillBoard } from "./board.js";
import { markNumbers,resetGame} from "./game.js";
import { getRandomInt } from "./utility.js";
let usedNumbers = new Set();
document.addEventListener("DOMContentLoaded", () => {
    
    createBoard("table");
    createBoard("computertable");
    console.log("hello")
    document.getElementById("gotit").addEventListener("click",closeModal)
    document.getElementById("introbutton").addEventListener("click",introbutton)
    document.getElementById("fill").addEventListener("click", 
        ()=>{
            fillBoard("table")
            fillBoard("computertable")
        }
    );
    document.getElementById("startagain").addEventListener("click",()=>{
        resetGame()
        usedNumbers = new Set();
        document.getElementById("td").value=""
    })
    document.getElementById("again").addEventListener("click", ()=>
    {
        resetGame()
        usedNumbers = new Set();
        closer()
        document.getElementById("input1").value=""
    }
);
});
let user = false;
let name = false;
window.addEventListener("keydown",(e)=>{
    
    
    let randomNumber;
    var g = document.querySelector("#guess")
    if(e.key=="Enter" && name==false){
        console.log("input2");
        name = true;
        return;
    }
    if(e.key=="Enter"){
        
        let input = document.querySelector("#userinput");
        console.log(input);
        
        let inputValue = input.value;  
        let number = parseInt(inputValue, 10);
        if (isNaN(number)|| number < 1 || number > 25) {
            console.log("Invalid input");
            document.querySelector("#wronginput").innerHTML = "Please enter a number between 1 and 25.";
            input.value = "";
            return;
        }
        if (usedNumbers.size >= 25) {
            g.innerHTML = "No more numbers to choose!";
            return;
        }
            console.log("input1");
            document.querySelector("#wronginput").innerHTML = "";
            do {
                randomNumber = getRandomInt(1, 25);
            } while (usedNumbers.has(randomNumber));
            usedNumbers.add(randomNumber);
    
            
            
                let comguess=randomNumber;
            g.innerHTML="Computer guess: "+randomNumber
            if(user==true){
                markNumbers("table",comguess);
                markNumbers("computertable",comguess)
                input.value = "";
                user=false;
            }
            markNumbers("computertable",number)
            markNumbers("table",number);
            user=true;
            input.value = "";
    }
});
window.onload = function() {
    document.getElementById('instructionModal').style.display = 'block';
};


function closeModal() {
    document.getElementById('instructionModal').style.display = 'none';
}

function introbutton(){
    document.getElementById('instructionModal').style.display = 'block';
}

function closer(){
    document.getElementById("win").style.display="none"
}
