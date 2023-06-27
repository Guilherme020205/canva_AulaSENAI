let tela = document.querySelector("#tabuleiroCanvas"); // Váriavel que seleciona a tela.
let pincel = tela.getContext('2d'); // Váriavel usada para pintar na tela.

// função que desenha o grid.
function desenhaRetangulo(cor, xInicial, yInicial, largura, altura) {

    pincel.fillStyle = cor;
    pincel.strokeStyle = "black"; 
    pincel.beginPath();
    pincel.rect(xInicial, yInicial, largura, altura);
    pincel.closePath();
    pincel.fill();
    pincel.stroke();
}
desenhaRetangulo("red", 75, 50, 25, 25);
desenhaRetangulo("black", 50, 25, 25, 25);

limpaTela();