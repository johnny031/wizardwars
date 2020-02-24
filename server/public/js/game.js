function detectmob() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}
var width = detectmob() ? screen.width : 400;
var height = detectmob() ? screen.height : 544;
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
