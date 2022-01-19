let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza no modelo 2d
let box = 32;
let snake = [];
snake[0] = {
    x: 8 *box,
    y: 8 *box
} //array tamanho da cobrinha..

function criarBG(){
    context.fillStyle = "lightblue"; //background
    context.fillRect(0, 0, 16*box, 16*box); //desenha o retângulo usando x e y e a largura e altura setadas
}

function criarCobrinha() {
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
} //incrementa o corpo da cobrinha...

criarBG();
criarCobrinha();