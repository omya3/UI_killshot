import Enemy from "/src/enemy.js";
export function buildenemy() {
  let y = -10;
  let x = Math.floor(Math.random() * Math.floor(250));
  console.log(x, y);
  let e = new Enemy(x, y);
  return e;
}
