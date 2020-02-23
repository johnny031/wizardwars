var title1;
var title2;
class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload() {
    this.load.image("background", "assets/images/background1.png");
    this.load.image("stopper", "assets/images/stopper.png");
    this.load.image("teleportation", "assets/images/teleportation.png");
    this.load.image("wand", "assets/images/wand.png");
    this.load.image("defend", "assets/images/defend.png");
    this.load.image("retry", "assets/images/retry.png");
    this.load.image("back", "assets/images/back.png");
    this.load.image("healthBar", "assets/images/healthBar.png");
    this.load.image("healthBar2", "assets/images/healthBar2.png");
    this.load.spritesheet("ship1", "assets/spritesheets/ship.png", {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet("ship2", "assets/spritesheets/ship2.png", {
      frameWidth: 32,
      frameHeight: 16
    });
    this.load.spritesheet("ship3", "assets/spritesheets/ship3.png", {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.image("ship2_icon", "assets/images/ship2.png");
    this.load.image("ship3_icon", "assets/images/ship3.png");
  }
  create() {
    title1 = this.add.text(game.config.width / 2, 70, "The Wizard War", {
      fontSize: "20px",
      fill: "#ffffff"
    });
    title2 = this.add.text(game.config.width / 2, 100, "Click to start", {
      fontSize: "15px",
      fill: "#ffffff"
    });
    title1.setOrigin(0.5, 0.5);
    title2.setOrigin(0.5, 0.5);
    this.input.on("pointerdown", this.start, this);
  }
  start() {
    this.scene.start("playGame");
  }
}
