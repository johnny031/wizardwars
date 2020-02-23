var config = {
  backgroundColor: 0x000000,
  scale: {
    width: 400,
    height: 544,
    mode: Phaser.Scale.RESIZE,
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
