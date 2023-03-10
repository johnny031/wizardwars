var title1;
var title2;
var title3;
var title4;
class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }
  preload() {
    this.load.image("background", "assets/images/background1.png");
    this.load.image("stopper", "assets/images/stopper.png");
    this.load.image("teleportation", "assets/images/teleportation.png");
    this.load.image("wand", "assets/images/shield.png");
    this.load.image("bow", "assets/images/bow.png");
    this.load.image("arrow", "assets/images/arrow.png");
    this.load.image("volleyball1", "assets/images/volleyball1.png");
    this.load.image("volleyball2", "assets/images/volleyball2.png");
    this.load.image("defend", "assets/images/defend.png");
    this.load.image("retry", "assets/images/retry.png");
    this.load.image("back", "assets/images/back.png");
    this.load.image("healthBar", "assets/images/healthBar.png");
    this.load.image("healthBar2", "assets/images/healthBar2.png");
    this.load.image("ship1", "assets/images/ship1.png");
    this.load.image("ship1_green", "assets/images/ship2.png");
    this.load.image("ship2", "assets/images/Shuriken.png");
    this.load.spritesheet("fire", "assets/spritesheets/fire1_64.png", {
      frameWidth: 64,
      frameHeight: 64
    });
    this.load.spritesheet("burn", "assets/spritesheets/burn_64.png", {
      frameWidth: 64,
      frameHeight: 64
    });
    this.load.image("ship2_icon", "assets/images/Shuriken.png");
    this.load.image("ship3_icon", "assets/images/fire.png");
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
    title3 = this.add.text(
      game.config.width / 2,
      360,
      "Press 2 sec to enter full screen",
      {
        fontSize: "13px",
        fill: "#c2c2c2"
      }
    );
    title4 = this.add.text(
      game.config.width / 2,
      390,
      "(Only support Android with Chrome)",
      {
        fontSize: "11px",
        fill: "#c2c2c2"
      }
    );
    title1.setOrigin(0.5, 0.5);
    title2.setOrigin(0.5, 0.5);
    title3.setOrigin(0.5, 0.5);
    title4.setOrigin(0.5, 0.5);
    this.input.on("pointerup", this.refresh, this);
    this.input.on("pointerup", this.start, this);
  }
  start() {
    this.scene.start("playGame");
  }
  refresh(pointer) {
    var duration = pointer.getDuration();
    if (duration > 2000) {
      this.scale.toggleFullscreen();
    }
  }
}
