heading = document.querySelector('h1');
heading.textContent = 'Hello world from script.js file!';

ul_test = document.querySelector('ul.test');
ul_test.innerHTML = '<li>First item</li><li>Second item</li><li>Third item</li>';

function generateMultiplicationTable(n) {
    let tableHTML = '<table>';

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            let result = i * j;
            tableHTML += `<tr><td>${i} x ${j} = ${result}</td></tr>`;
        }
    }

    tableHTML += '</table>';
    return tableHTML;
}

let tableContainer = document.querySelector('#tableContainer');
tableContainer.innerHTML = generateMultiplicationTable(12);