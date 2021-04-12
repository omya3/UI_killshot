export default class Enemy {
  constructor(ix, iy) {
    this.image = document.getElementById("enemy_img");
    this.height = 15;
    this.width = 15;
    this.position = {
      x: ix,
      y: iy
    };
    this.speed = 0.5;
  }

  update() {
    this.position.y += this.speed;
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
