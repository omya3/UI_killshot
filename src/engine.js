import "./styles.css";
import Hero from "/src/hero.js";
import InputHandler from "/src/inputhandler.js";
import { buildenemy } from "/src/randomenemies";

let canvas = document.getElementById("game_world");
let ctx = canvas.getContext("2d");

let enemies = [];

const GAME_HEIGHT = 600;
const GAME_WIDTH = 1200;

let hero = new Hero();
hero.draw(ctx);
new InputHandler(hero);
function looper() {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  if (enemies.length < 7) {
    enemies.push(buildenemy());
    console.log(enemies.length);
  }
  hero.update();
  hero.draw(ctx);
  for (var enemy = 0; enemy < enemies.length; enemy += 1) {
    enemies[enemy].update();
  }
  for (var enemy = 0; enemy < enemies.length; enemy += 1) {
    enemies[enemy].draw(ctx);
  }
  for (var bullet = 0; bullet < hero.bullets.length; bullet += 1) {
    hero.bullets[bullet].update();
  }
  for (var bullet = 0; bullet < hero.bullets.length; bullet += 1) {
    hero.bullets[bullet].draw(ctx);
  }

  requestAnimationFrame(looper);
}

requestAnimationFrame(looper);
