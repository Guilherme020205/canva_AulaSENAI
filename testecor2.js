
let tela = document.querySelector("#tabuleiroCanvas"); // Váriavel que seleciona a tela.
let pincel = tela.getContext('2d'); // Váriavel usada para pintar na tela.

// função que desenha o grid.
function desenhaRetangulo(cor, xInicial, yInicial, largura, altura) {

    pincel.fillStyle = cor;
    pincel.strokeStyle = "black";
    pincel.beginPath();//começa a desenhar
    pincel.rect(xInicial, yInicial, largura, altura);
    pincel.closePath();//para de desenhar
    pincel.fill();//aplica o preenchimeno
    pincel.stroke();//aplica a borda
}
function desenhaGrid() {
    for (let linha = 0; linha <= 500; linha = linha + 25) {
        for (let coluna = 0; coluna <= 500; coluna = coluna + 25) {

            if (coluna % 2 === 0) {
                desenhaRetangulo("yellow", linha, coluna, 25, 25);
            } else {
                desenhaRetangulo("red", linha, coluna, 25, 25);
            }
        }
    }
}
desenhaRetangulo("yellow", 0, 0, 25, 25)
desenhaGrid();