var countDown;
var countDownSeconds = 3;
var background1;
var background2;
var sprite1;
var sprite2;
var stopper1;
var stopper2;
var bullet1_icon1;
var bullet1_icon1_loadBar;
var bullet2_icon1;
var bullet2_icon1_loadBar;
var bullet3_icon1;
var bullet3_icon1_loadBar;
var bullet4_icon1;
var bullet4_icon1_loadBar;
var bullet1_icon2;
var bullet1_icon2_loadBar;
var bullet2_icon2;
var bullet2_icon2_loadBar;
var bullet3_icon2;
var bullet3_icon2_loadBar;
var bullet4_icon2;
var bullet4_icon2_loadBar;
var teleportation1;
var teleportation1_loadBar;
var teleportation2;
var teleportation2_loadBar;
var wand1;
var wand1_loadBar;
var wand2;
var wand2_loadBar;
var bullet1_1;
var bullet2_1;
var bullet3_1_1;
var bullet3_1_2;
var bullet3_1_3;
var bullet4_1;
var bullet1_2;
var bullet2_2;
var bullet3_2_1;
var bullet3_2_2;
var bullet3_2_3;
var bullet4_2;
var defend1;
var defend2;
var healthBar1;
var healthBar2;
var retry_icon;
var back_icon;
var shoot1 = false;
var shoot2 = false;
var blood1 = 100;
var blood2 = 100;
var blood_text1;
var blood_text2;
var teleportation1_bool = false;
var teleportation2_bool = false;
var selected_bullet1 = 0;
var selected_bullet2 = 0;
var update = false;
var loadBar1_1;
var loadBar2_1;
var loadBar3_1;
var loadBar4_1;
var loadBar5_1;
var loadBar6_1;
var loadBar1_2;
var loadBar2_2;
var loadBar3_2;
var loadBar4_2;
var loadBar5_2;
var loadBar6_2;
var t1_1 = 0.0;
var t2_1 = 0.0;
var t3_1 = 0.0;
var t4_1 = 0.0;
var t5_1 = 0.0;
var t6_1 = 0.0;
var t1_2 = 0.0;
var t2_2 = 0.0;
var t3_2 = 0.0;
var t4_2 = 0.0;
var t5_2 = 0.0;
var t6_2 = 0.0;
var spin = 0;
var collideCount1 = 0;
var collideCount2 = 0;
class Scene2 extends Phaser.Scene {
  constructor() {
    super("playGame");
  }
  create() {
    this.scene.pause();
    setTimeout(() => {
      this.scene.resume();
    }, 3000);
    loadBar1_1 = this.add.graphics();
    loadBar2_1 = this.add.graphics();
    loadBar3_1 = this.add.graphics();
    loadBar4_1 = this.add.graphics();
    loadBar5_1 = this.add.graphics();
    loadBar6_1 = this.add.graphics();
    loadBar1_2 = this.add.graphics();
    loadBar2_2 = this.add.graphics();
    loadBar3_2 = this.add.graphics();
    loadBar4_2 = this.add.graphics();
    loadBar5_2 = this.add.graphics();
    loadBar6_2 = this.add.graphics();
    background2 = this.add.tileSprite(
      0,
      0,
      game.config.width,
      game.config.height / 2,
      "background"
    );
    background2.setOrigin(0, 0);
    background1 = this.make.tileSprite({
      x: 0,
      y: game.config.height / 2,
      width: game.config.width,
      height: game.config.height / 2,
      key: "background",
      add: true
    });
    background1.setOrigin(0, 0);

    bullet1_icon1_loadBar = this.make.sprite({
      x: game.config.width / 7,
      y: game.config.height - 18,
      key: "ship2_icon",
      add: true
    });
    bullet2_icon1_loadBar = this.make.sprite({
      x: (2 * game.config.width) / 7,
      y: game.config.height - 16,
      key: "ship3_icon",
      add: true
    });
    bullet3_icon1_loadBar = this.make.sprite({
      x: (3 * game.config.width) / 7,
      y: game.config.height - 16,
      key: "bow",
      add: true
    });
    bullet4_icon1_loadBar = this.make.sprite({
      x: (4 * game.config.width) / 7,
      y: game.config.height - 18,
      key: "volleyball1",
      add: true
    });
    teleportation1_loadBar = this.make.sprite({
      x: (5 * game.config.width) / 7,
      y: game.config.height - 19,
      key: "teleportation",
      add: true
    });
    wand1_loadBar = this.make.sprite({
      x: (6 * game.config.width) / 7,
      y: game.config.height - 16,
      key: "wand",
      add: true
    });

    bullet1_icon2_loadBar = this.make.sprite({
      x: (6 * game.config.width) / 7,
      y: 18,
      key: "ship2_icon",
      add: true
    });
    bullet2_icon2_loadBar = this.make.sprite({
      x: (5 * game.config.width) / 7,
      y: 16,
      key: "ship3_icon",
      add: true
    });
    bullet3_icon2_loadBar = this.make.sprite({
      x: (4 * game.config.width) / 7,
      y: 16,
      key: "bow",
      add: true
    });
    bullet4_icon2_loadBar = this.make.sprite({
      x: (3 * game.config.width) / 7,
      y: 19,
      key: "volleyball2",
      add: true
    });
    teleportation2_loadBar = this.make.sprite({
      x: (2 * game.config.width) / 7,
      y: 18,
      key: "teleportation",
      add: true
    });
    wand2_loadBar = this.make.sprite({
      x: game.config.width / 7,
      y: 16,
      key: "wand",
      add: true
    });
    bullet1_icon2_loadBar.setFlip(true, true);
    bullet2_icon2_loadBar.setFlip(true, true);
    bullet3_icon2_loadBar.setFlip(true, true);
    bullet4_icon2_loadBar.setFlip(true, true);
    teleportation2_loadBar.setFlip(true, true);
    wand2_loadBar.setFlip(true, true);

    loadBar1_1.setPosition(game.config.width / 7, game.config.height - 18);
    loadBar2_1.setPosition(
      (2 * game.config.width) / 7,
      game.config.height - 16
    );
    loadBar3_1.setPosition(
      (3 * game.config.width) / 7,
      game.config.height - 16
    );
    loadBar4_1.setPosition(
      (4 * game.config.width) / 7,
      game.config.height - 18
    );
    loadBar5_1.setPosition(
      (5 * game.config.width) / 7,
      game.config.height - 19
    );
    loadBar6_1.setPosition(
      (6 * game.config.width) / 7,
      game.config.height - 16
    );
    loadBar1_2.setPosition((6 * game.config.width) / 7, 18);
    loadBar2_2.setPosition((5 * game.config.width) / 7, 16);
    loadBar3_2.setPosition((4 * game.config.width) / 7, 16);
    loadBar4_2.setPosition((3 * game.config.width) / 7, 19);
    loadBar5_2.setPosition((2 * game.config.width) / 7, 18);
    loadBar6_2.setPosition(game.config.width / 7, 16);

    bullet1_icon1_loadBar.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      loadBar1_1
    );
    bullet2_icon1_loadBar.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      loadBar2_1
    );
    bullet3_icon1_loadBar.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      loadBar3_1
    );
    bullet4_icon1_loadBar.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      loadBar4_1
    );
    teleportation1_loadBar.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      loadBar5_1
    );
    wand1_loadBar.mask = new Phaser.Display.Masks.BitmapMask(this, loadBar6_1);

    bullet1_icon2_loadBar.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      loadBar1_2
    );
    bullet2_icon2_loadBar.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      loadBar2_2
    );
    bullet3_icon2_loadBar.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      loadBar3_2
    );
    bullet4_icon2_loadBar.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      loadBar4_2
    );
    teleportation2_loadBar.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      loadBar5_2
    );
    wand2_loadBar.mask = new Phaser.Display.Masks.BitmapMask(this, loadBar6_2);

    this.add
      .rectangle(0, game.config.height / 2 - 2, game.config.width, 4, 0x212121)
      .setOrigin(0, 0);
    sprite1 = this.physics.add.sprite(
      game.config.width / 2,
      (3 * game.config.height) / 4,
      "ship1"
    );
    sprite2 = this.physics.add.sprite(
      game.config.width / 2,
      game.config.height / 4,
      "ship1_green"
    );
    stopper1 = this.physics.add.sprite(0, 0, "stopper");
    stopper2 = this.physics.add.sprite(0, 0, "stopper");
    stopper1.setVisible(false);
    stopper2.setVisible(false);
    sprite2.flipY = true;
    bullet1_icon1 = this.add.image(
      game.config.width / 7,
      game.config.height - 18,
      "ship2_icon"
    );
    bullet2_icon1 = this.add.image(
      (2 * game.config.width) / 7,
      game.config.height - 16,
      "ship3_icon"
    );
    bullet3_icon1 = this.add.image(
      (3 * game.config.width) / 7,
      game.config.height - 16,
      "bow"
    );
    bullet4_icon1 = this.add.image(
      (4 * game.config.width) / 7,
      game.config.height - 18,
      "volleyball1"
    );
    teleportation1 = this.add.image(
      (5 * game.config.width) / 7,
      game.config.height - 19,
      "teleportation"
    );
    wand1 = this.add.image(
      (6 * game.config.width) / 7,
      game.config.height - 16,
      "wand"
    );
    defend1 = this.physics.add.sprite(-50, -50, "defend");
    defend1.disableBody(false, true);
    defend2 = this.physics.add.sprite(-50, -50, "defend");
    defend2.disableBody(false, true);
    defend2.setFlip(true, true);

    bullet1_icon2 = this.add.image(
      (6 * game.config.width) / 7,
      18,
      "ship2_icon"
    );
    bullet2_icon2 = this.add.image(
      (5 * game.config.width) / 7,
      16,
      "ship3_icon"
    );
    bullet3_icon2 = this.add.image((4 * game.config.width) / 7, 16, "bow");
    bullet4_icon2 = this.add.image(
      (3 * game.config.width) / 7,
      19,
      "volleyball2"
    );
    teleportation2 = this.add.image(
      (2 * game.config.width) / 7,
      18,
      "teleportation"
    );
    wand2 = this.add.image(game.config.width / 7, 16, "wand");
    bullet1_icon2.setFlip(true, true);
    bullet2_icon2.setFlip(true, true);
    bullet3_icon2.setFlip(true, true);
    bullet4_icon2.setFlip(true, true);
    wand2.setFlip(true, true);

    bullet1_1 = this.physics.add.sprite(-100, -100, "ship2");
    bullet1_1.setOrigin(0.5, 0.5);

    bullet2_1 = this.physics.add.sprite(-100, -100, "fire");
    this.anims.create({
      key: "fire",
      frames: this.anims.generateFrameNumbers("fire", {
        start: 0,
        end: 59
      }),
      frameRate: 80,
      repeat: -1
    });
    bullet2_1.setFlip(true, true);
    bullet2_1.anims.play("fire");
    bullet3_1_1 = this.physics.add.sprite(-100, -100, "arrow");
    bullet3_1_2 = this.physics.add.sprite(-100, -100, "arrow");
    bullet3_1_3 = this.physics.add.sprite(-100, -100, "arrow");
    bullet4_1 = this.physics.add.sprite(-100, -100, "volleyball1");
    bullet4_1.body.onWorldBounds = true;
    bullet4_1.setBounce(1);
    bullet4_1.setOrigin(0.5, 0.5);
    bullet4_1.disableBody(false, true);

    bullet1_2 = this.physics.add.sprite(-100, -100, "ship2");
    bullet1_2.setOrigin(0.5, 0.5);
    bullet1_2.flipY = true;

    bullet2_2 = this.physics.add.sprite(-100, -100, "fire");
    bullet2_2.anims.play("fire");
    bullet3_2_1 = this.physics.add.sprite(-100, -100, "arrow");
    bullet3_2_2 = this.physics.add.sprite(-100, -100, "arrow");
    bullet3_2_3 = this.physics.add.sprite(-100, -100, "arrow");
    bullet3_2_1.setFlip(true, true);
    bullet3_2_2.setFlip(true, true);
    bullet3_2_3.setFlip(true, true);
    bullet4_2 = this.physics.add.sprite(-100, -100, "volleyball2");
    bullet4_2.body.onWorldBounds = true;
    bullet4_2.setBounce(1);
    bullet4_2.setFlip(true, true);
    bullet4_2.setOrigin(0.5, 0.5);
    bullet4_2.disableBody(false, true);

    blood_text1 = this.add.text(
      game.config.width / 2,
      game.config.height / 2 + 48,
      "",
      {
        fontSize: "20px",
        fill: "#ffffff"
      }
    );
    blood_text2 = this.add.text(
      game.config.width / 2,
      game.config.height / 2 - 48,
      "",
      {
        fontSize: "20px",
        fill: "#ffffff"
      }
    );
    blood_text1.setOrigin(0.5, 0.5);
    blood_text2.setOrigin(0.5, 0.5);
    blood_text2.setFlip(true, true);

    retry_icon = this.add.image(
      game.config.width / 4,
      game.config.height / 2,
      "retry"
    );
    back_icon = this.add.image(
      (3 * game.config.width) / 4,
      game.config.height / 2,
      "back"
    );
    back_icon.setVisible(false);
    retry_icon.setVisible(false);

    healthBar2 = this.add.sprite(0, 38, "healthBar2");
    healthBar2.setOrigin(0, 0);
    healthBar2.setCrop(0, 0, game.config.width, 100);
    this.healthBarMask2 = this.add.sprite(0, 38, "healthBar2");
    this.healthBarMask2.setOrigin(0, 0);
    this.healthBarMask2.setCrop(0, 0, game.config.width, 100);
    this.healthBarMask2.setVisible(false);

    healthBar2.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      this.healthBarMask2
    );

    healthBar1 = this.add.sprite(0, game.config.height - 41, "healthBar");
    healthBar1.setOrigin(0, 0);
    healthBar1.setCrop(0, 0, game.config.width, 100);
    this.healthBarMask1 = this.add.sprite(
      0,
      game.config.height - 41,
      "healthBar"
    );
    this.healthBarMask1.setOrigin(0, 0);
    this.healthBarMask1.setCrop(0, 0, game.config.width, 100);
    this.healthBarMask1.setVisible(false);
    healthBar1.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      this.healthBarMask1
    );
    countDown = this.add.text(
      game.config.width / 2,
      game.config.height / 2,
      "3",
      {
        fontSize: "30px",
        fill: "#ffffff"
      }
    );
    countDown.setOrigin(0.5, 0.5);
    var count_interval = setInterval(() => {
      countDownSeconds--;
      countDown.setText(countDownSeconds);
      if (countDownSeconds === 0) {
        countDown.setText("Fight");
      } else if (countDownSeconds === -1) {
        countDown.setText("");
        countDownSeconds = 3;
        clearInterval(count_interval);
      }
    }, 1000);
    background1.setInteractive();
    background2.setInteractive();
    bullet1_icon1.setInteractive();
    bullet2_icon1.setInteractive();
    bullet3_icon1.setInteractive();
    bullet4_icon1.setInteractive();
    bullet1_icon2.setInteractive();
    bullet2_icon2.setInteractive();
    bullet3_icon2.setInteractive();
    bullet4_icon2.setInteractive();
    teleportation1.setInteractive();
    teleportation2.setInteractive();
    retry_icon.setInteractive();
    back_icon.setInteractive();
    wand1.setInteractive();
    wand2.setInteractive();

    background1.on("tapped", this.shootOrMove1, this);
    background2.on("tapped", this.shootOrMove2, this);
    bullet1_icon1.on("selected1_1", this.select1_1, this);
    bullet2_icon1.on("selected2_1", this.select2_1, this);
    bullet3_icon1.on("selected3_1", this.select3_1, this);
    bullet4_icon1.on("selected4_1", this.select4_1, this);
    bullet1_icon2.on("selected1_2", this.select1_2, this);
    bullet2_icon2.on("selected2_2", this.select2_2, this);
    bullet3_icon2.on("selected3_2", this.select3_2, this);
    bullet4_icon2.on("selected4_2", this.select4_2, this);
    teleportation1.on("selected_tele1", this.select_tele1, this);
    teleportation2.on("selected_tele2", this.select_tele2, this);
    wand1.on("selected_wand1", this.select_wand1, this);
    wand2.on("selected_wand2", this.select_wand2, this);
    retry_icon.on("retry_event", this.retry, this);
    back_icon.on("back_event", this.back, this);

    this.input.on("pointerup", function(pointer) {
      var duration = pointer.getDuration();
      if (duration > 1000) {
        if (this.scene.scale.isFullscreen) {
          this.scene.scale.stopFullscreen();
          var heightWidthRatio =
            window.innerHeight / window.innerWidth > 1
              ? window.innerHeight / window.innerWidth
              : 1.4;
          var scale = screen.width < 476 ? 300 : 380;
          this.scene.scale.resize(scale, scale * heightWidthRatio);
        } else {
          this.scene.scale.startFullscreen();
          var heightWidthRatio =
            screen.height / screen.width > 1
              ? screen.height / screen.width
              : 1.4;
          var scale = screen.width < 476 ? 300 : 380;
          this.scene.scale.resize(scale, scale * heightWidthRatio);
        }
      }
    });
    this.input.on(
      "gameobjectdown",
      function(pointer, gameObject) {
        gameObject.emit("tapped", pointer);
        gameObject.emit("selected1_1", gameObject);
        gameObject.emit("selected2_1", gameObject);
        gameObject.emit("selected3_1", gameObject);
        gameObject.emit("selected4_1", gameObject);
        gameObject.emit("selected1_2", gameObject);
        gameObject.emit("selected2_2", gameObject);
        gameObject.emit("selected3_2", gameObject);
        gameObject.emit("selected4_2", gameObject);
        gameObject.emit("selected_tele1", gameObject);
        gameObject.emit("selected_tele2", gameObject);
        gameObject.emit("selected_wand1", gameObject);
        gameObject.emit("selected_wand2", gameObject);
        gameObject.emit("retry_event", gameObject);
        gameObject.emit("back_event", gameObject);
      },
      this
    );
    this.input.addPointer();
    this.input.addPointer();
    this.input.addPointer();
    this.input.addPointer();
    this.physics.add.overlap(sprite1, bullet1_2, this.hit1, null, this);
    this.physics.add.overlap(sprite1, bullet2_2, this.hit1, null, this);
    this.physics.add.overlap(sprite1, bullet3_2_1, this.hit1, null, this);
    this.physics.add.overlap(sprite1, bullet3_2_2, this.hit1, null, this);
    this.physics.add.overlap(sprite1, bullet3_2_3, this.hit1, null, this);
    this.physics.add.overlap(sprite1, bullet4_2, this.hit1, null, this);
    this.physics.add.overlap(sprite2, bullet1_1, this.hit2, null, this);
    this.physics.add.overlap(sprite2, bullet2_1, this.hit2, null, this);
    this.physics.add.overlap(sprite2, bullet3_1_1, this.hit2, null, this);
    this.physics.add.overlap(sprite2, bullet3_1_2, this.hit2, null, this);
    this.physics.add.overlap(sprite2, bullet3_1_3, this.hit2, null, this);
    this.physics.add.overlap(sprite2, bullet4_1, this.hit2, null, this);
    this.physics.add.overlap(defend1, bullet1_2, this.defend, null, this);
    this.physics.add.overlap(defend1, bullet2_2, this.defend, null, this);
    this.physics.add.overlap(defend1, bullet3_2_1, this.defend, null, this);
    this.physics.add.overlap(defend1, bullet3_2_2, this.defend, null, this);
    this.physics.add.overlap(defend1, bullet3_2_3, this.defend, null, this);
    this.physics.add.overlap(defend1, bullet4_2, this.defend, null, this);
    this.physics.add.overlap(defend2, bullet1_1, this.defend, null, this);
    this.physics.add.overlap(defend2, bullet2_1, this.defend, null, this);
    this.physics.add.overlap(defend2, bullet3_1_1, this.defend, null, this);
    this.physics.add.overlap(defend2, bullet3_1_2, this.defend, null, this);
    this.physics.add.overlap(defend2, bullet3_1_3, this.defend, null, this);
    this.physics.add.overlap(defend2, bullet4_1, this.defend, null, this);
    this.physics.add.overlap(sprite1, stopper1, this.stop1, null, this);
    this.physics.add.overlap(sprite2, stopper2, this.stop2, null, this);

    this.physics.world.on("worldbounds", this.collide);
  }
  collide(a) {
    if (a.width === bullet4_1.width) {
      collideCount1++;
    } else {
      collideCount2++;
    }
    if (collideCount1 > 1) {
      bullet4_1.setCollideWorldBounds(false);
      collideCount1 = 0;
    }
    if (collideCount2 > 1) {
      bullet4_2.setCollideWorldBounds(false);
      collideCount2 = 0;
    }
  }
  update() {
    spin += 15;
    bullet1_1.angle = spin;
    bullet1_2.angle = spin;
    bullet4_1.angle = spin;
    bullet4_2.angle = spin;

    defend1.x = sprite1.x;
    defend1.y = sprite1.y - 28;
    defend2.x = sprite2.x;
    defend2.y = sprite2.y + 28;
    if (
      bullet4_1.x < -bullet4_1.width / 2 ||
      bullet4_1.x > game.config.width + bullet4_1.width / 2 ||
      bullet4_1.y < -bullet4_1.height / 2 ||
      bullet4_1.y > game.config.height + bullet4_1.height / 2
    ) {
      bullet4_1.disableBody(false, true);
    }
    if (
      bullet4_2.x < -bullet4_2.width / 2 ||
      bullet4_2.x > game.config.width + bullet4_2.width / 2 ||
      bullet4_2.y < -bullet4_2.height / 2 ||
      bullet4_2.y > game.config.height + bullet4_2.height / 2
    ) {
      bullet4_2.disableBody(false, true);
    }
  }
  loadBar(pointer, selected_bullet) {
    if (pointer.y > game.config.height / 2) {
      var start_point = -Math.PI / 2;
      if (selected_bullet === 1) {
        var loadBar = loadBar1_1;
        var t = t1_1;
        var coolDownTime = 360 / (5 * 50);
      } else if (selected_bullet === 2) {
        var loadBar = loadBar2_1;
        var t = t2_1;
        var coolDownTime = 360 / (6 * 50);
      } else if (selected_bullet === 3) {
        var loadBar = loadBar3_1;
        var t = t3_1;
        var coolDownTime = 360 / (8 * 50);
      } else if (selected_bullet === 4) {
        var loadBar = loadBar4_1;
        var t = t4_1;
        var coolDownTime = 360 / (9 * 50);
      } else if (selected_bullet === 5) {
        var loadBar = loadBar5_1;
        var t = t5_1;
        var coolDownTime = 360 / (7 * 50);
      } else if (selected_bullet === 6) {
        var loadBar = loadBar6_1;
        var t = t6_1;
        var coolDownTime = 360 / (10 * 50);
      }
    } else {
      var start_point = Math.PI / 2;
      if (selected_bullet === 1) {
        var loadBar = loadBar1_2;
        var t = t1_2;
        var coolDownTime = 360 / (5 * 50);
      } else if (selected_bullet === 2) {
        var loadBar = loadBar2_2;
        var t = t2_2;
        var coolDownTime = 360 / (6 * 50);
      } else if (selected_bullet === 3) {
        var loadBar = loadBar3_2;
        var t = t3_2;
        var coolDownTime = 360 / (8 * 50);
      } else if (selected_bullet === 4) {
        var loadBar = loadBar4_2;
        var t = t4_2;
        var coolDownTime = 360 / (9 * 50);
      } else if (selected_bullet === 5) {
        var loadBar = loadBar5_2;
        var t = t5_2;
        var coolDownTime = 360 / (7 * 50);
      } else if (selected_bullet === 6) {
        var loadBar = loadBar6_2;
        var t = t6_2;
        var coolDownTime = 360 / (10 * 50);
      }
    }
    var loadBar_interval = setInterval(() => {
      var step = start_point + Phaser.Math.DegToRad(t);
      loadBar.clear();
      loadBar.lineStyle(20, 0, 1);
      loadBar.beginPath();
      loadBar.arc(0, 0, 10, start_point, step, false);
      loadBar.strokePath();
      loadBar.closePath();
      t += coolDownTime;
      if (t > 359) {
        clearInterval(loadBar_interval);
        t = 0.0;
      }
    }, 1000 / 60);
  }
  shootOrMove1(pointer) {
    if (shoot1) {
      this.shoot(pointer, selected_bullet1);
    } else {
      this.move(pointer, selected_bullet1);
    }
  }
  shootOrMove2(pointer) {
    if (shoot2) {
      this.shoot(pointer, selected_bullet2);
    } else {
      this.move(pointer, selected_bullet2);
    }
  }
  shoot(pointer, selected_bullet) {
    this.loadBar(pointer, selected_bullet);
    if (pointer.y > game.config.height / 2) {
      var degreeAdjust = 90;
      var player = 1;
      var sprite = sprite1;
      shoot1 = false;
      if (selected_bullet === 1) {
        var bullet = bullet1_1;
        var bullet_icon = bullet1_icon1;
        var select_ship_function = this.select1_1;
        var time = 5000;
      } else if (selected_bullet === 2) {
        var bullet = bullet2_1;
        var bullet_icon = bullet2_icon1;
        var select_ship_function = this.select2_1;
        var time = 6000;
      } else if (selected_bullet === 4) {
        var bullet = bullet4_1;
        var bullet_icon = bullet4_icon1;
        var select_ship_function = this.select4_1;
        var time = 9000;
      }
    } else {
      var degreeAdjust = -90;
      var player = 2;
      var sprite = sprite2;
      shoot2 = false;
      if (selected_bullet === 1) {
        var bullet = bullet1_2;
        var bullet_icon = bullet1_icon2;
        var select_ship_function = this.select1_2;
        var time = 5000;
      } else if (selected_bullet === 2) {
        var bullet = bullet2_2;
        var bullet_icon = bullet2_icon2;
        var select_ship_function = this.select2_2;
        var time = 6000;
      } else if (selected_bullet === 4) {
        var bullet = bullet4_2;
        var bullet_icon = bullet4_icon2;
        var select_ship_function = this.select4_2;
        var time = 9000;
      }
    }
    var vector = new Phaser.Math.Vector2();
    vector.set(pointer.x - sprite.x, pointer.y - sprite.y);
    bullet.setVisible(true);
    bullet.enableBody(false, 0, 0, true, false);
    bullet.setPosition(
      sprite.x + vector.scale(20 / vector.length()).x,
      sprite.y + vector.scale(20 / vector.length()).y
    );
    this.physics.moveTo(bullet, pointer.x, pointer.y, 200);
    bullet.angle =
      Phaser.Math.RadToDeg(
        Phaser.Math.Angle.Between(sprite.x, sprite.y, pointer.x, pointer.y)
      ) + degreeAdjust;

    bullet_icon.alpha = 0.4;
    bullet_icon.clearTint();
    bullet_icon.off(
      "selected" + selected_bullet + "_" + player,
      select_ship_function
    );
    setTimeout(() => {
      bullet_icon.on(
        "selected" + selected_bullet + "_" + player,
        select_ship_function
      );
      bullet_icon.alpha = 1;
    }, time);
  }
  shootArrows(pointer) {
    if (pointer.y > game.config.height / 2) {
      var direction = 1;
      var sprite = sprite1;
      var bullet3_1 = bullet3_1_1;
      var bullet3_2 = bullet3_1_2;
      var bullet3_3 = bullet3_1_3;
    } else {
      var direction = -1;
      var sprite = sprite2;
      var bullet3_1 = bullet3_2_1;
      var bullet3_2 = bullet3_2_2;
      var bullet3_3 = bullet3_2_3;
    }
    bullet3_1.enableBody(false, 0, 0, true, false);
    bullet3_2.enableBody(false, 0, 0, true, false);
    bullet3_3.enableBody(false, 0, 0, true, false);
    bullet3_1.setVisible(true);
    bullet3_2.setVisible(true);
    bullet3_3.setVisible(true);
    bullet3_1.setPosition(sprite.x, sprite.y);
    bullet3_1.angle = -30 * direction;
    bullet3_2.setPosition(sprite.x, sprite.y);
    bullet3_3.setPosition(sprite.x, sprite.y);
    bullet3_3.angle = 30 * direction;
    bullet3_1.setVelocity(-100, -100 * Math.sqrt(3) * direction);
    bullet3_2.setVelocity(0, -200 * direction);
    bullet3_3.setVelocity(100, -100 * Math.sqrt(3) * direction);
  }
  move(pointer, selected_bullet) {
    if (pointer.y > game.config.height / 2) {
      var player = 1;
      var stopper = stopper1;
      var sprite = sprite1;
      var teleportation = teleportation1;
      var teleportation_bool = teleportation1_bool;
      var select_tele_function = this.select_tele1;
    } else {
      var player = 2;
      var stopper = stopper2;
      var sprite = sprite2;
      var teleportation = teleportation2;
      var teleportation_bool = teleportation2_bool;
      var select_tele_function = this.select_tele2;
    }
    if (teleportation_bool) {
      this.loadBar(pointer, selected_bullet);
      sprite.setPosition(pointer.x, pointer.y);
      stopper.setPosition(pointer.x, pointer.y);
      if (pointer.y > game.config.height / 2) {
        teleportation1_bool = false;
      } else {
        teleportation2_bool = false;
      }
      teleportation.alpha = 0.4;
      teleportation.clearTint();
      teleportation.off("selected_tele" + player, select_tele_function, this);
      setTimeout(() => {
        teleportation.on("selected_tele" + player, select_tele_function, this);
        teleportation.alpha = 1;
      }, 7000);
    } else {
      stopper.setPosition(pointer.x, pointer.y);
      this.physics.moveTo(sprite, pointer.x, pointer.y, 100);
    }
  }
  stop1() {
    sprite1.setVelocity(0, 0);
  }
  stop2() {
    sprite2.setVelocity(0, 0);
  }
  select1_1() {
    teleportation1_bool = false;
    bullet1_icon1.tint = 0x8a9c22;
    if (
      bullet2_icon1.isTinted ||
      bullet4_icon1.isTinted ||
      teleportation1.isTinted
    ) {
      bullet2_icon1.clearTint();
      bullet4_icon1.clearTint();
      teleportation1.clearTint();
    }
    selected_bullet1 = 1;
    shoot1 = true;
  }
  select2_1() {
    teleportation1_bool = false;
    bullet2_icon1.tint = 0x95a825;
    if (
      bullet1_icon1.isTinted ||
      bullet4_icon1.isTinted ||
      teleportation1.isTinted
    ) {
      bullet1_icon1.clearTint();
      bullet4_icon1.clearTint();
      teleportation1.clearTint();
    }
    selected_bullet1 = 2;
    shoot1 = true;
  }
  select3_1(pointer) {
    shoot1 = false;
    teleportation1_bool = false;
    bullet3_icon1.alpha = 0.4;
    bullet3_icon1.off("selected3_1", this.select3_1, this);
    bullet1_icon1.clearTint();
    bullet2_icon1.clearTint();
    teleportation1.clearTint();
    selected_bullet1 = 3;
    this.loadBar(pointer, selected_bullet1);
    this.shootArrows(pointer);
    setTimeout(() => {
      bullet3_icon1.alpha = 1;
      bullet3_icon1.on("selected3_1", this.select3_1, this);
    }, 8000);
  }
  select4_1() {
    teleportation1_bool = false;
    bullet4_icon1.tint = 0xb3c92e;
    if (
      bullet1_icon1.isTinted ||
      bullet2_icon1.isTinted ||
      teleportation1.isTinted
    ) {
      bullet1_icon1.clearTint();
      bullet2_icon1.clearTint();
      teleportation1.clearTint();
    }
    selected_bullet1 = 4;
    bullet4_1.setCollideWorldBounds(true);
    shoot1 = true;
  }
  select_tele1() {
    shoot1 = false;
    teleportation1.tint = 0xe6ff59;
    if (
      bullet1_icon1.isTinted ||
      bullet2_icon1.isTinted ||
      bullet4_icon1.isTinted
    ) {
      bullet1_icon1.clearTint();
      bullet2_icon1.clearTint();
      bullet4_icon1.clearTint();
    }
    selected_bullet1 = 5;
    teleportation1_bool = true;
  }
  select_wand1(pointer) {
    shoot1 = false;
    teleportation1_bool = false;
    wand1.alpha = 0.4;
    wand1.off("selected_wand1");
    defend1.enableBody(false, 0, 0, true, true);
    bullet1_icon1.clearTint();
    bullet2_icon1.clearTint();
    teleportation1.clearTint();
    selected_bullet1 = 6;
    this.loadBar(pointer, selected_bullet1);
    setTimeout(() => {
      defend1.disableBody(false, true);
    }, 1000);
    setTimeout(() => {
      wand1.alpha = 1;
      wand1.on("selected_wand1", this.select_wand1, this);
    }, 10000);
  }
  select1_2() {
    teleportation2_bool = false;
    bullet1_icon2.tint = 0x8a9c22;
    if (
      bullet2_icon2.isTinted ||
      bullet4_icon2.isTinted ||
      teleportation2.isTinted
    ) {
      bullet2_icon2.clearTint();
      bullet4_icon2.clearTint();
      teleportation2.clearTint();
    }
    selected_bullet2 = 1;
    shoot2 = true;
  }
  select2_2() {
    teleportation2_bool = false;
    bullet2_icon2.tint = 0x95a825;
    if (
      bullet1_icon2.isTinted ||
      bullet4_icon2.isTinted ||
      teleportation2.isTinted
    ) {
      bullet1_icon2.clearTint();
      bullet4_icon2.clearTint();
      teleportation2.clearTint();
    }
    selected_bullet2 = 2;
    shoot2 = true;
  }
  select3_2(pointer) {
    shoot2 = false;
    teleportation2_bool = false;
    bullet3_icon2.alpha = 0.4;
    bullet3_icon2.off("selected3_2", this.select3_2, this);
    bullet1_icon2.clearTint();
    bullet2_icon2.clearTint();
    teleportation2.clearTint();
    selected_bullet2 = 3;
    this.loadBar(pointer, selected_bullet2);
    this.shootArrows(pointer);
    setTimeout(() => {
      bullet3_icon2.alpha = 1;
      bullet3_icon2.on("selected3_2", this.select3_2, this);
    }, 8000);
  }
  select4_2() {
    teleportation2_bool = false;
    bullet4_icon2.tint = 0xb3c92e;
    if (
      bullet1_icon2.isTinted ||
      bullet2_icon2.isTinted ||
      teleportation2.isTinted
    ) {
      bullet1_icon2.clearTint();
      bullet2_icon2.clearTint();
      teleportation2.clearTint();
    }
    selected_bullet2 = 4;
    bullet4_2.setCollideWorldBounds(true);
    shoot2 = true;
  }
  select_tele2() {
    shoot2 = false;
    if (
      bullet1_icon2.isTinted ||
      bullet2_icon2.isTinted ||
      bullet4_icon2.isTinted
    ) {
      bullet1_icon2.clearTint();
      bullet2_icon2.clearTint();
      bullet4_icon2.clearTint();
    }
    selected_bullet2 = 5;
    teleportation2.tint = 0xe6ff59;
    teleportation2_bool = true;
  }
  select_wand2(pointer) {
    shoot2 = false;
    teleportation2_bool = false;
    wand2.alpha = 0.4;
    wand2.off("selected_wand2");
    selected_bullet2 = 6;
    this.loadBar(pointer, selected_bullet2);
    bullet1_icon2.clearTint();
    bullet2_icon2.clearTint();
    teleportation2.clearTint();
    defend2.enableBody(false, 0, 0, true, true);
    setTimeout(() => {
      defend2.disableBody(false, true);
    }, 1000);
    setTimeout(() => {
      wand2.alpha = 1;
      wand2.on("selected_wand2", this.select_wand2, this);
    }, 10000);
  }
  hit1(a, b) {
    let stepWidth = game.config.width / 100;
    b.setVisible(false);
    b.setCollideWorldBounds(false);
    if (blood1 > 0) {
      blood1--;
      this.healthBarMask1.x -= stepWidth;
    }
    if (blood1 === 0) {
      this.gameOver();
    }
  }
  hit2(a, b) {
    let stepWidth = game.config.width / 100;
    b.setVisible(false);
    b.setCollideWorldBounds(false);
    if (blood2 > 0) {
      blood2--;
      this.healthBarMask2.x += stepWidth;
    }
    if (blood2 === 0) {
      this.gameOver();
    }
  }
  defend(a, b) {
    a.disableBody(false, true);
    b.disableBody(false, true);
  }
  gameOver() {
    if (blood1 === 0) {
      blood_text1.setText("Lose");
      blood_text2.setText("Win");
    } else if (blood2 === 0) {
      blood_text1.setText("Win");
      blood_text2.setText("Lose");
    }
    background1.off("tapped");
    background2.off("tapped");
    bullet1_icon1.off("selected1_1");
    bullet2_icon1.off("selected2_1");
    bullet3_icon1.off("selected3_1");
    bullet4_icon1.off("selected4_1");
    bullet1_icon2.off("selected1_2");
    bullet2_icon2.off("selected2_2");
    bullet3_icon2.off("selected3_2");
    bullet4_icon2.off("selected4_2");
    teleportation1.off("selected_tele1");
    teleportation2.off("selected_tele2");
    wand1.off("selected_wand1");
    wand2.off("selected_wand2");
    back_icon.setVisible(true);
    retry_icon.setVisible(true);
  }
  back() {
    blood1 = 100;
    blood2 = 100;
    this.scene.start("bootGame");
  }
  retry() {
    blood1 = 100;
    blood2 = 100;
    this.scene.start("playGame");
  }
}
