import { getRandomInt } from "./utility";

export function createBoard(id) {
    const table = document.getElementById(id);
    table.innerHTML = "";
    for (let i = 0; i < 5; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
            let td = document.createElement("td");
            td.innerText = "";
            td.id="td"
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

export function fillBoard(id) {
    let table = document.getElementById(id);
    let rows = table.getElementsByTagName("tr");
    let usedNumbers = new Set();

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        for (let j = 0; j < cells.length; j++) {
            let randomNumber;
            do {
                randomNumber = getRandomInt(1, 25);
            } while (usedNumbers.has(randomNumber)); // Avoid duplicates
            usedNumbers.add(randomNumber);
            cells[j].innerText = randomNumber;
        }
    }
}
