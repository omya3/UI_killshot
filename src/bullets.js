export default class Bullets {
  constructor(ix, iy) {
    this.image = document.getElementById("missile_img");
    this.position = {
      x: ix,
      y: iy
    };
    this.speed = -2;
    this.width = 3;
    this.height = 6;
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
