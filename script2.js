document.addEventListener("DOMContentLoaded", function () {
    const updateTableButton = document.getElementById("updateTableButton");
    const highlightMaxButton = document.getElementById("highlightMaxButton");
    const numberTable = document.getElementById("numberTable");

    updateTableButton.addEventListener("click", function () {
        updateTable();
        clearHighlight();
    });

    highlightMaxButton.addEventListener("click", function () {
        highlightMaxCell();
    });

    function updateTable() {
        for (let row = 0; row < numberTable.rows.length; row++) {
            for (let col = 0; col < numberTable.rows[row].cells.length; col++) {
                const randomValue = Math.floor(Math.random() * 20) + 1;
                numberTable.rows[row].cells[col].textContent = randomValue;
            }
        }
    }

    function clearHighlight() {
        const cells = numberTable.getElementsByTagName("td");
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "";
            cells[i].style.color = "";
        }
    }

    function highlightMaxCell() {
        let maxCellValue = Number.MIN_SAFE_INTEGER;
        let maxCell;

        for (let row = 0; row < numberTable.rows.length; row++) {
            for (let col = 0; col < numberTable.rows[row].cells.length; col++) {
                const cellValue = parseInt(numberTable.rows[row].cells[col].textContent);

                if (cellValue > maxCellValue) {
                    maxCellValue = cellValue;
                    maxCell = numberTable.rows[row].cells[col];
                }
            }
        }

        if (maxCell) {
            maxCell.style.backgroundColor = "#ff0800";
            maxCell.style.color = "white";
        }
    }

    updateTable();
});
