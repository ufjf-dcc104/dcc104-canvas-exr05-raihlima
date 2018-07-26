function Tanque(cor){
  this.imagem = new Image();
  this.imagem.src = "tanque.png";

  this.id=cor;

  this.vx = 0;
  this.vy = 0;
  this.ax = 0;
  this.ay = 0;
  this.width = 30;
  this.height = 30;
  this.imunidade = 10;
  this.energia = 100;
  this.vida=5;

  this.cadencia =1;

  //Saber o sentido que está virado
  // 0 - Norte /1 - Leste  / 2 - Sul / 3 - Oeste
  this.sentido = 0;

  //Seleção de color
  if(cor==0){
    this.x = 80;
    this.y = 80;
    this.color = "lime";
    this.corOriginal=this.color;
  } else if(cor==1){
    this.x = 80;
    this.y = 80;
    this.color = "green";
    this.corOriginal=this.color;
  } else if(cor==2){
    this.x = 600;
    this.y = 400;
    this.color = "SteelBlue";
    this.corOriginal=this.color;
  } else if(cor==3){
    this.x = 600;
    this.y = 400;
    this.color = "Navy";
    this.corOriginal=this.color;
  }
}

Tanque.prototype.alteraEnergia = function(){
  this.energia-=25;
  if(this.energia<25){
    var somExplosao = new Audio();
    somExplosao.src = "Som/Explosao.m4a";
    somExplosao.play();
    this.energia=100;
    this.vida-=1;
    this.resetarPosição();
  }
}

Tanque.prototype.resetarPosição = function () {
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.width = 30;
    this.height = 30;
    this.imunidade = 10;
    this.energia = 100;
    //Saber o sentido que está virado
    // 0 - Norte /1 - Leste  / 2 - Sul / 3 - Oeste
    this.sentido = 0;

    //Seleção de color
    if(this.id==0){
      this.x = 80;
      this.y = 80;
    } else if(this.id==1){
      this.x = 80;
      this.y = 80;
    } else if(this.id==2){
      this.x = 600;
      this.y = 400;
    } else if(this.id==3){
      this.x = 600;
      this.y = 400;
    }
};

Tanque.prototype.desenhar = function (ctx) {
  ctx.fillStyle = this.color;
//  ctx.fillRect(this.x,this.y,this.width,this.height);
  //ctx.strokeStyle = "white";
  if(this.color=="lime"){
    if(this.sentido==0){
      ctx.drawImage(this.imagem,0,0,30,30,this.x,this.y,this.width,this.height);

    } else if(this.sentido==1){
      ctx.drawImage(this.imagem,60,0,30,30,this.x,this.y,this.width,this.height);

    } else if(this.sentido==2){
      ctx.drawImage(this.imagem,30,0,30,30,this.x,this.y,this.width,this.height);

    } else if(this.sentido==3){
      ctx.drawImage(this.imagem,90,0,30,30,this.x,this.y,this.width,this.height);

    }
  } else if(this.color=="green"){
    if(this.sentido==0){
      ctx.drawImage(this.imagem,0,30,30,30,this.x,this.y,this.width,this.height);

    } else if(this.sentido==1){
      ctx.drawImage(this.imagem,60,30,30,30,this.x,this.y,this.width,this.height);

    } else if(this.sentido==2){
      ctx.drawImage(this.imagem,30,30,30,30,this.x,this.y,this.width,this.height);

    } else if(this.sentido==3){
      ctx.drawImage(this.imagem,90,30,30,30,this.x,this.y,this.width,this.height);

    }

  } else if(this.color=="SteelBlue"){
    if(this.sentido==0){
      ctx.drawImage(this.imagem,0,60,30,30,this.x,this.y,this.width,this.height);

    } else if(this.sentido==1){
      ctx.drawImage(this.imagem,60,60,30,30,this.x,this.y,this.width,this.height);

    } else if(this.sentido==2){
      ctx.drawImage(this.imagem,30,60,30,30,this.x,this.y,this.width,this.height);

    } else if(this.sentido==3){
      ctx.drawImage(this.imagem,90,60,30,30,this.x,this.y,this.width,this.height);

    }

  } else if(this.color=="Navy"){
    if(this.sentido==0){
      ctx.drawImage(this.imagem,0,90,30,30,this.x,this.y,this.width,this.height);

    } else if(this.sentido==1){
      ctx.drawImage(this.imagem,60,90,30,30,this.x,this.y,this.width,this.height);

    } else if(this.sentido==2){
      ctx.drawImage(this.imagem,30,90,30,30,this.x,this.y,this.width,this.height);

    } else if(this.sentido==3){
      ctx.drawImage(this.imagem,90,90,30,30,this.x,this.y,this.width,this.height);

    }

  }
};


Tanque.prototype.mover = function (dt) {
  //this.vy = this.vy * dt;
  //Mover
  this.y = this.y + this.vy * dt;
  this.vx = this.vx + this.ax*dt;
  if(this.x<0){
    this.x=0;
    this.vx=0;
  } else if(this.x>669){
    this.x=669;
        this.vx=0;
  } else {
    this.x = this.x + this.vx * dt;
  }

  if(this.y<30){
    this.y=30;
    this.vy=0;
  }
  if(this.y>470){
    this.y=470;
  }
  //Atualizar cadencia
  this.cadencia +=0.1;


};

Tanque.prototype.colisao = function (inimigo){
  if(this.y>=inimigo.y && this.y<=(inimigo.y+inimigo.height)){
    if(this.x>=inimigo.x && this.x<=(inimigo.x+inimigo.width)){
      return true;
    }
    return false;
  }
  if(this.y+ this.height>=inimigo.y && this.y + this.height <=(inimigo.y+inimigo.height)){
    if(this.x + this.width>=inimigo.x && this.x + this.width <=(inimigo.x+inimigo.width)){
      return true;
    }
    return false;
  }
  return false;
}
