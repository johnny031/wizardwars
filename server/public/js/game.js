var heightWidthRatio =
  screen.height / screen.width > 1 ? screen.height / screen.width : 1.4;
var scale = screen.width < 476 ? 300 : 380;
var width = scale;
var height = scale * heightWidthRatio;
var config = {
  parent: "phaser_app",
  backgroundColor: 0x000000,
  scale: {
    mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: width,
    height: height
  },
  scene: [Scene1, Scene2],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: { debug: false }
  }
};
var game = new Phaser.Game(config);
