const button = document.querySelector('button');
const table = document.querySelector('table');
const rowCountElement = document.querySelector('p');

let rowCount = 0;

button.addEventListener('click', addNewRow);

function addNewRow() {
    const row = document.createElement('tr');
    for (let i = 0; i < 7; i++) {
        const cell = document.createElement('td');
        const randomNumber = Math.floor(Math.random() * 10);
        cell.textContent = randomNumber;
        row.appendChild(cell);
    }

    table.appendChild(row);
    rowCount++;
    rowCountElement.textContent = `Valmiita rivejä ${rowCount}`;
}