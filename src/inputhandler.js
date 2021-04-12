export default class InputHandler {
  constructor(hero) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          //console.log("Left");
          hero.left();
          break;
        case 39:
          hero.right();
          break;
        case 32:
          hero.hitbullets();
          break;
      }
    });

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          hero.stop();
          break;
        case 39:
          hero.stop();
          break;
      }
    });
  }
}
