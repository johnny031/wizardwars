var config = {
  backgroundColor: 0x000000,
  width: 256,
  height: 272,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [Scene1, Scene2],
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: { debug: false }
  }
};

var game = new Phaser.Game(config);
