function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("purple");
    fill("violet");
    
    textSize(40);
    textAlign(CENTER, CENTER);
    
    palavra = "Arroz";
    let maximo = width;
    let minimo = 1;
    let quantidade = map (mouseX, 0, maximo, minimo, palavra.length);
    let parcial = palavra.substring (0, quantidade);
    text (parcial, 200, 200);
    
  }