var heightWidthRatio =
  window.innerHeight / window.innerWidth > 1
    ? window.innerHeight / window.innerWidth
    : window.innerWidth / window.innerHeight;
var scale = screen.width < 476 ? 280 : 350;

var width = scale;
var height = scale * heightWidthRatio;
var config = {
  backgroundColor: 0x000000,
  scale: {
    mode: Phaser.Scale.FIT,
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
