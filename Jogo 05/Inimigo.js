function Inimigo(){
  this.x = 100;
  this.y = 100;
  this.vx = 40;
  this.vy = 40;
  this.height = 50;
  this.width = 50;

  this.color = "orange";
}

Inimigo.prototype.desenhar = function(ctx){
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x,this.y,this.width,this.height);
}

Inimigo.prototype.mover = function (dt,tanque) {
  var hip = Math.sqrt(Math.pow(tanque.x-this.x,2)+Math.pow(tanque.y-this.y,2));
  this.x = this.x * (this.vx*(tanque.x/hip))*dt;
  this.y = this.y * (this.vy *(tanque.y/hip))*dt;

};
