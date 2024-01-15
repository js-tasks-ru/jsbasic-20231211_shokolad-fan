function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let rowsI = table.rows[i];
    let columnI = rowsI.cells[i];
    columnI.style.backgroundColor = 'red';
  }
}
