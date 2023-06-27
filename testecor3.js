
let tela = document.querySelector("#tabuleiroCanvas"); // Váriavel que seleciona a tela.
let pincel = tela.getContext('2d'); // Váriavel usada para pintar na tela.

// função que desenha o grid.
function desenhaBox(cor, xInicial, yInicial, largura, altura) {

    pincel.fillStyle = cor;
    pincel.strokeStyle = "red";
    pincel.beginPath();
    pincel.rect(xInicial, yInicial, largura, altura);
    pincel.closePath();
    pincel.fill();
    pincel.stroke();
}
function desenhaGrid() {
    for (let linha = 0; linha <= 500; linha = linha + 25) {
        for (let coluna = 0; coluna <= 500; coluna = coluna + 25) {

            desenhaBox("yellow", linha, coluna, 25, 25)
        }
    }
}

function desenhaLetra() {
    
    desenhaBox("black", 75, 0, 25, 25);
    desenhaBox("black", 50, 0, 25, 25);
    desenhaBox("black", 25, 0, 25, 25);
    desenhaBox("black", 0, 25, 25, 25);
    desenhaBox("black", 0, 50, 25, 25);
    desenhaBox("black", 0, 75, 25, 25);
    desenhaBox("black", 25, 100, 25, 25);
    desenhaBox("black", 50, 100, 25, 25);
    desenhaBox("black", 75, 100, 25, 25);
    desenhaBox("black", 100, 75, 25, 25);
    desenhaBox("black", 100, 50, 25, 25);
    desenhaBox("black", 75, 50, 25, 25);
    desenhaBox("black", 50, 50, 25, 25);
}

desenhaGrid();
desenhaLetra();
