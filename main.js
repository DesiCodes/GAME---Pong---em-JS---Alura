//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 25;
let raioBolinha = diametroBolinha / 2;

//velocidade da bolinha
let velXBolinha = 10;
let velYBolinha = 8;

//variaveis da minha raquete
let xMinhaRequete = 5;
let yMinhaRaquete = 150;
let larguraMinhaRaquete = 10;
let alturaMinhaRaquete = 115;

//variaveis da raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let larguraRaqueteOponente = 10;
let alturaRaqueteOponente = 115;
let velRaqueteOponenteY;

//variaveis para marcar pontos
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  mostraBolinha();
  
  movimentaBolinha();
  
  limitesColisaoBorda();
  
  mostra_minha_raquete();
  
  movimentarMinhaRaquete();
  
  verificaColisaoRaqueteBolinha();
  
  mostra_raquete_oponente();
  
  movimentaRaqueteOponente();
  
  verificaColisaoRaqueteOponenteBolinha();
  
  incluiPlacar();
  
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametroBolinha);
}

function movimentaBolinha() {
  xBolinha += velXBolinha;
  yBolinha += velYBolinha;
  
}


function limitesColisaoBorda(){
  if (xBolinha + raioBolinha > width || xBolinha - raioBolinha < 0){
    velXBolinha *= -1;
  }
  
  
  if (yBolinha + raioBolinha > height || yBolinha - raioBolinha < 0){
    velYBolinha *= -1;
  }
}
  


function mostra_minha_raquete(){
  rect(xMinhaRequete,yMinhaRaquete,larguraMinhaRaquete,alturaMinhaRaquete);
}

function movimentarMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yMinhaRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yMinhaRaquete += 10;
  }
}

function verificaColisaoRaqueteBolinha(){
  if(xBolinha - raioBolinha < xMinhaRequete + larguraMinhaRaquete && yBolinha - raioBolinha < yMinhaRaquete + alturaMinhaRaquete && yBolinha + raioBolinha > yMinhaRaquete) {
    velXBolinha *= -1;
  }
}

function mostra_raquete_oponente(){
  rect(xRaqueteOponente,yRaqueteOponente,larguraRaqueteOponente,alturaRaqueteOponente);
}

function verificaColisaoRaqueteOponenteBolinha(){
    if(xBolinha + raioBolinha > xRaqueteOponente - larguraRaqueteOponente && yBolinha + raioBolinha < yRaqueteOponente + alturaRaqueteOponente && yBolinha + raioBolinha > yRaqueteOponente) {
    velXBolinha *= -1;
  }
} 

function movimentaRaqueteOponente(){
  velRaqueteOponenteY = yBolinha - yRaqueteOponente  - 100;
  
  yRaqueteOponente += velRaqueteOponenteY;
}

function incluiPlacar() {
    fill(255);
    text(meusPontos, 278, 26);
    text(pontosDoOponente, 321, 26);
}

function marcaPonto() {
    if (xBolinha > 580) {
        meusPontos += 1;
    }
    if (xBolinha < 20) {
        pontosDoOponente += 1;
    }
}
