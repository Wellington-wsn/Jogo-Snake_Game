let canvas = document.getElementById("snake"); //criar elemento que irá rodar o jogo
let context = canvas.getContext("2d"); //renderiza no modelo 2d
let box = 32;
let snake = []; //Cria a cobrinha como uma lista, variação de valores em coorenadas
snake[0] = {
    x: 8 * box,
    y: 8 * box
} //array tamanho da cobrinha..

let direction = "right"; //variavel direção da cobrinha...
let food = {
    x: Math.floor(Math.random() *15 *1) *box,
    y: Math.floor(Math.random() *15 *1) *box
} //gerar numeors aleatorios dentro da area do jogo ...

function criarBG(){
    context.fillStyle = "lightblue"; //background
    context.fillRect(0, 0, 16*box, 16*box); //desenha o retângulo usando x e y e a largura e altura setadas
}

function criarCobrinha() {
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
} //incrementa o corpo da cobrinha...

function drowFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box); //posoção da comida
} // Comida

document.addEventListener('keydown', update); //lê os comandos do teclado e chamar o update

function update(event){
    //condiçoes de movimento, codigo de comando para "direção" a direção não pode ser diferente(não volta)
    if(event.keyCode == 37 && direction != 'right') direction = "left";
    if(event.keyCode == 38 && direction != 'down') direction = "up";
    if(event.keyCode == 39 && direction != 'left') direction = "right";
    if(event.keyCode == 40 && direction != 'up') direction = "down";
}

function iniciarJogo() {
    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16*box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16*box;

    for( i = 1; i < snake.length; i++) { //parar o jogo se a cobra colidir no corpo
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert('GAME OVER <:o');
        }
    } 

    criarBG(); //função background
    criarCobrinha(); //função cobrinha(corpo)
    drowFood(); //função carregar comida
    
    //ponto de partida
    let snakeX = snake[0].x; //posição 0 do eixo x
    let snakeY = snake[0].y; //posição 0 do eixo y

    //variação de posição
    if(direction == "right") snakeX += box; //acresentando valor da box para mover "right" quadradinho
    if(direction == "left") snakeX -= box; //remove valor da box "left" para avanção o quadradinho
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y) { //se a cobra não passar pela comida
        snake.pop(); //retira o ultimo elemento do array
    }
    else{ // senão gera nova posição para a comida
        food.x = Math.floor(Math.random() *15 *1) *box;
        food.y = Math.floor(Math.random() *15 *1) *box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    } //acresenta um elemento a frente

    snake.unshift(newHead);  //método unshift adiciona um quadradinho na frente da cobrinha 
} // Iniciar jogo

let jogo = setInterval(iniciarJogo, 100); //Intervalo de tempo(em ms) atualizando dados...