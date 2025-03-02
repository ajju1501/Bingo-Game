import { createBoard } from "./board";

const B = document.querySelector("#B");
const I = document.querySelector("#I");
const N = document.querySelector("#N");
const G = document.querySelector("#G");
const O = document.querySelector("#O");

const B1 = document.querySelector("#B1");
const I1 = document.querySelector("#I1");
const N1 = document.querySelector("#N1");
const G1 = document.querySelector("#G1");
const O1 = document.querySelector("#O1");
const over = document.querySelector("#OVER")

let input = document.querySelector("input")
let guess=document.querySelector("#guess")

export function markNumbers(id,number) {
    const table = document.getElementById(id);
    let rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        for (let j = 0; j < cells.length; j++) {
            if(number==cells[j].innerText){
                cells[j].style.color = 'white'
                cells[j].innerText = "X";
            }
        }
    }
    checkBoard(id);
    
}

function checkBoard(id) {
    let table = document.getElementById(id);
    let count = 0;
    let rows = table.getElementsByTagName("tr");
    let colsChecked = new Array(5).fill(false);
    for (let k = 0; k < 5; k++) {
        if (isRowComplete(rows[k])) {
            count++;
            updateBingoStatus(id,count);
            if (count >= 5) return;
        }
        if (isColumnComplete(table, k) && !colsChecked[k]) {
            count++;
            colsChecked[k] = true;
            updateBingoStatus(id,count);
            if (count >= 5) return;
        }
    }

    if (isMainDiagonalComplete(table) || isAntiDiagonalComplete(table)) {
        count++;
        updateBingoStatus(id,count);
        if (count >= 5) return;
    }
    
}

function updateBingoStatus(id,count) {
    if(id=="computertable"){
        const letters1 =[B1, I1, N1, G1, O1] 
        if (count <= 5) {
            letters1[count - 1].innerText = count;
        }
        if (count === 5) {
            letters1[count - 1].innerText = count;
            win(id)
                resetGame()
                over.innerText = "CLICK START AGAIN";
                return;
    
            } 
        }

    const letters = [B, I, N, G, O];

    if (count <= 5) {
        letters[count - 1].innerText = count;
    }
    if (count === 5) {
        letters[count - 1].innerText = count;
        win(id)
        resetGame()
        over.innerText = "CLICK START AGAIN";
        return;
    }
}

function isRowComplete(row) {
    return Array.from(row.getElementsByTagName("td")).every(cell => cell.innerText == "X");
}

function isColumnComplete(table, colIndex) {
    return Array.from(table.getElementsByTagName("tr")).every(row => row.getElementsByTagName("td")[colIndex].innerText == "X");
}

function isMainDiagonalComplete(table) {
    return Array.from(table.getElementsByTagName("tr")).every((row, i) => row.getElementsByTagName("td")[i].innerText == "X");
}

function isAntiDiagonalComplete(table) {
    let size = table.getElementsByTagName("tr").length;
    return Array.from(table.getElementsByTagName("tr")).every((row, i) => row.getElementsByTagName("td")[size - i - 1].innerText == "X");
}

export function resetGame() {
    createBoard("table");
    createBoard("computertable");
    B.innerText = "B";
    I.innerText = "I";
    N.innerText = "N";
    G.innerText = "G";
    O.innerText = "O";
    B1.innerText = "B";
    I1.innerText = "I";
    N1.innerText = "N";
    G1.innerText = "G";
    O1.innerText = "O";
    over.innerText=""
    guess.innerHTML="Computer guess:"
}

// --------------

function win(id){
    document.getElementById("win").style.display="block";
    if(id=="computertable"){
        document.getElementById("winnername").innerText="Computer Won";
        return;
    }
    document.getElementById("winnername").innerText=input.value+" Won";
}
