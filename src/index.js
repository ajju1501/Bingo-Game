

// let table = document.getElementById("table");
// function filltable(){
//     let rows = table.getElementsByTagName("tr"); // Get all rows

//     for (let i = 0; i < rows.length; i++) {
//         let cells = rows[i].getElementsByTagName("td"); // Get cells in the row

//         for (let j = 0; j < cells.length; j++) {// Check if number exists in numbers array
//                 cells[j].innerText= getRandomInt0to26();
//     }
//     }

// }
// for (let i = 0; i < 5; i++) {
//     let tr = document.createElement("tr");
//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement("td");
//         let input = document.createElement("input");
//         input.id = "td"; // Use class instead of duplicate IDs
//         td.id = "td"
//         // td.innerText = getRandomInt0to26()
//         // td.appendChild(input);
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// }

// let B = document.querySelector("#B");
// let I = document.querySelector("#I");
// let N = document.querySelector("#N");
// let G = document.querySelector("#G");
// let O = document.querySelector("#O");
// let over = document.querySelector("p")

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11, 12, 13, 14,15,23,17,18, 20, 21, 24, 16, 18, 19, 22,25];


// function getRandomInt0to26() {
//     return Math.floor(Math.random() * (27 - 0 + 1)) + 0;
// }


// function read() {
//     let rows = table.getElementsByTagName("tr"); // Get all rows

//     for (let i = 0; i < rows.length; i++) {
//         let cells = rows[i].getElementsByTagName("td"); // Get cells in the row

//         for (let j = 0; j < cells.length; j++) {
//             if (numbers.includes(Number(cells[j].innerText))) {  // Check if number exists in numbers array
//                 cells[j].innerText= "X";
//         }
//     }
//     }
//     analyse()
// }

// function analyse() {
    
//     let count = 0;
//     let rows = table.getElementsByTagName("tr");
//     for (let k = 0; k < 5; k++) {
        
//         if (isRowComplete(rows[k]) || isColumnComplete(k)) {
//             count += 1;
//             check(count);
//         }
//     }

//     if (isMainDiagonalComplete() || isAntiDiagonalComplete()) {
//         count++;
//         check(count);
//     }
// }

// function check(count) {
//     console.log("hello")
//     if (count == 1) {
//         B.innerText = "1";
//     } else if (count == 2) {
//         I.innerText = "2";
//     } else if (count == 3) {
//         N.innerText = "3";
//     } else if (count == 4) {
//         G.innerText = "4";
//     } else if (count == 5) {
//         O.innerText = "5";
//         over.innerHTML = "GAME OVER"
//     }
// }

// function isRowComplete(row) {
    
//     let cells = row.getElementsByTagName("td"); // Get all cells in the row
    
//     for (let j = 0; j < cells.length; j++) {
//         let input = cells[j].querySelector("input"); // Get input field if exists
//         let cellValue = input ? input.value.trim() : cells[j].innerText.trim(); // Get value
        
//         if (cellValue !== "X") {
//             return false;
//         }
//     }


//     return true;
// }

// function isColumnComplete(colIndex) {

//     let rows = table.getElementsByTagName("tr"); // Get all rows

//     for (let i = 0; i < rows.length; i++) {
//         let cells = rows[i].getElementsByTagName("td"); // Get all cells in the row
//         if (!cells[colIndex]) continue; // If the column index is out of bounds, skip

//         let input = cells[colIndex].querySelector("input"); // Get input if exists
//         let cellValue = input ? input.value.trim() : cells[colIndex].innerText.trim(); // Get value

//         if (cellValue !== "X") {
//             return false;
//         }
//     }
//     return true;
// }

// function isMainDiagonalComplete() {
//     let rows = table.getElementsByTagName("tr");
//     for (let i = 0; i < rows.length; i++) {
//         let cell = rows[i].getElementsByTagName("td")[i];
//         if (!cell || cell.innerText !== "X") {
//             return false;
//         }
//     }
//     return true;
// }

// function isAntiDiagonalComplete() {
//     let rows = table.getElementsByTagName("tr");
//     let size = rows.length;
//     for (let i = 0; i < size; i++) {
//         let cell = rows[i].getElementsByTagName("td")[size - i - 1];
//         if (!cell || cell.innerText !== "X") {
//             return false;
//         }
//     }
//     return true;
// }
// function startagain(){
//     let rows = table.getElementsByTagName("tr"); // Get all rows

//     for (let i = 0; i < rows.length; i++) {
//         let cells = rows[i].getElementsByTagName("td"); // Get cells in the row

//         for (let j = 0; j < cells.length; j++) {
//             // let input = cells[j].querySelector("td"); // Get input inside td
//             // input.innerHTML=""
//             cells[j].innerHTML=""
//         }
//     }
//     B.innerText = "B"
//     I.innerText = "I"
//     N.innerText = "N"
//     G.innerText = "G"
//     O.innerText = "O"

//     over.innerHTML=""
// }

