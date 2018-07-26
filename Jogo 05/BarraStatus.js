function BarraStatus (){
  this.x = 0;
  this.y = 0;
  this.width = 700;
  this.height = 30;
  this.color = "gray";
}

BarraStatus.prototype.desenhar = function (ctx, j1,j2) {
  //Barra Jogador 1
  ctx.textAlign = "start";
  ctx.fillStyle = j1.color;
  ctx.fillRect(this.x,this.y,this.width/2,this.height);
  ctx.strokeStyle = "white";
  ctx.strokeRect(this.x,this.y,this.width/2,this.height);

  //Barra Jogador 2
  ctx.fillStyle = j2.color;
  ctx.fillRect(this.x+350,this.y,this.width/2,this.height);
  ctx.strokeStyle = "white";
  ctx.strokeRect(this.x+350,this.y,this.width/2,this.height);


  //Texto no Menu
  ctx.strokeStyle="black";
  ctx.fillStyle = 'white';
  ctx.font = '14pt Arial';
  ctx.strokeText("Vidas: ", 20,21);
  ctx.fillText("Vidas: ", 20, 21);
  ctx.strokeText(j1.vida, 100, 21);
  ctx.fillText(j1.vida, 100, 21);
  ctx.strokeText("Vidas: ", 20+350,21);
  ctx.fillText("Vidas: ", 20+350, 21);
//  ctx.strokeText("Vidas: ", 20,21);
  ctx.strokeText(j2.vida, 100+350, 21);
  ctx.fillText(j2.vida, 100+350, 21);
  ctx.strokeText("Energia: ", 200, 21);
  ctx.fillText("Energia: ", 200, 21);
  ctx.strokeText(j1.energia, 290, 21);
  ctx.fillText(j1.energia, 290, 21);
  ctx.strokeText("Energia: ", 200+350, 21);
  ctx.fillText("Energia: ", 200+350, 21);
  ctx.strokeText(j2.energia, 290+350, 21);
  ctx.fillText(j2.energia, 290+350, 21);

};
