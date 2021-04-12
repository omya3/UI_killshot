import Bullets from "/src/bullets.js";
export default class Hero {
  constructor() {
    this.image = document.getElementById("hero_img");
    this.height = 15;
    this.width = 15;
    this.position = {
      x: 80,
      y: 120
    };
    this.speed = 0;
    this.maxSpeed = 2;
    this.gameheight = 600;
    this.gamewidth = 1200;
    this.bullets = [];
  }

  hitbullets() {
    let b = new Bullets(this.position.x, this.position.y);
    this.bullets.push(b);
    //console.log(this.bullets.length);
  }

  left() {
    this.speed = -this.maxSpeed;
  }

  right() {
    this.speed = +this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  update() {
    this.position.x += this.speed;
    if (this.position.x < 0) {
      this.position.x = 0;
    }

    if (this.position.x + this.width > this.gamewidth) {
      this.position.x = this.gamewidth - this.width;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
