let canvas = document.getElementById("snake");
let context = canvas.getContext("2d"); //renderiza no modelo 2d
let box = 32;
let snake = [];
snake[0] = {
    x: 8 *box,
    y: 8 *box
} //array tamanho da cobrinha..

let direction = "right"; //variavel direção da cobrinha...

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

function iniciarjogo() {
    criarBG(); //função background
    criarCobrinha(); //função cobrinha(corpo)
    
    //ponto de partida
    let snakex = snake[0].x; //posição 0 do eixo x
    let snakey = snake[0].y; //posição 0 do eixo y

    //variação de posição
    if(direction == "right") snakex += box; //acresentando valor da box para mover "right" quadradinho
    if(direction == "left") snakex -= box; //remove valor da box "left" para avanção o quadradinho
    if(direction == "up") snakey -= box;
    if(direction == "down") snakey += box;

    snake.pop(); //retira o ultimo elemento do array

    let newHead = {
        x: snakex,
        Y: snakey
    } //acresenta um elemento a frente
} // Iniciar jogo

let jogo = setIntervalo(iniciarjogo, 100); //Intervalo de tempo(em ms) atualizando dados...