let matrix, transposedMatrix;

document.addEventListener("DOMContentLoaded", function() {
  const createMatrixButton = document.getElementById("create-matrix-button");
  createMatrixButton.addEventListener("click", createMatrix);
});

function createMatrix() {
  const rowsInput = document.getElementById("rows");
  const colsInput = document.getElementById("cols");

  const rows = parseInt(rowsInput.value);
  const cols = parseInt(colsInput.value);

  if (isNaN(rows) || isNaN(cols)) {
    alert("Por favor, insira valores válidos para linhas e colunas.");
    return;
  }

  const matrixInputs = document.getElementById("matrix-inputs");
  matrixInputs.innerHTML = "";

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const valueInput = document.createElement("input");
      valueInput.type = "number";
      valueInput.id = `value-${i}-${j}`;
      matrixInputs.appendChild(valueInput);
    }
    matrixInputs.appendChild(document.createElement("br"));
  }

  const confirmButton = document.createElement("button");
  confirmButton.innerText = "Confirmar";
  confirmButton.addEventListener("click", processMatrix);
  matrixInputs.appendChild(confirmButton);
}

function processMatrix() {
  const rowsInput = document.getElementById("rows");
  const colsInput = document.getElementById("cols");

  const rows = parseInt(rowsInput.value);
  const cols = parseInt(colsInput.value);

  if (isNaN(rows) || isNaN(cols)) {
    alert("Por favor, insira valores válidos para linhas e colunas.");
    return;
  }

  matrix = [];

  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
      const valueInput = document.getElementById(`value-${i}-${j}`);
      const value = parseInt(valueInput.value);
      matrix[i][j] = value;
    }
  }

  transposedMatrix = transposeMatrix(matrix);

  showResult();
}

function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const transpose = [];

  for (let j = 0; j < cols; j++) {
    transpose[j] = [];
    for (let i = 0; i < rows; i++) {
      transpose[j][i] = matrix[i][j];
    }
  }

  return transpose;
}

function showResult() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const originalMatrixHeader = document.createElement("h3");
  originalMatrixHeader.innerText = "Matriz Original:";
  resultDiv.appendChild(originalMatrixHeader);

  const originalMatrixTable = document.createElement("table");
  for (let i = 0; i < matrix.length; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < matrix[i].length; j++) {
      const cell = document.createElement("td");
      cell.innerText = matrix[i][j];
      row.appendChild(cell);
    }
    originalMatrixTable.appendChild(row);
  }
  resultDiv.appendChild(originalMatrixTable);

  const transposedMatrixHeader = document.createElement("h3");
  transposedMatrixHeader.innerText = "Matriz Transposta:";
  resultDiv.appendChild(transposedMatrixHeader);

  const transposedMatrixTable = document.createElement("table");
  for (let i = 0; i < transposedMatrix.length; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < transposedMatrix[i].length; j++) {
      const cell = document.createElement("td");
      cell.innerText = transposedMatrix[i][j];
      row.appendChild(cell);
    }
    transposedMatrixTable.appendChild(row);
  }
  resultDiv.appendChild(transposedMatrixTable);
}
