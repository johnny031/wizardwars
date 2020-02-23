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
var bullet1_icon2;
var bullet1_icon2_loadBar;
var bullet2_icon2;
var bullet2_icon2_loadBar;
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
var bullet1_2;
var bullet2_2;
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
var loadBar1_2;
var loadBar2_2;
var loadBar3_2;
var loadBar4_2;
var t1_1 = 0.0;
var t2_1 = 0.0;
var t3_1 = 0.0;
var t4_1 = 0.0;
var t1_2 = 0.0;
var t2_2 = 0.0;
var t3_2 = 0.0;
var t4_2 = 0.0;
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
    loadBar1_2 = this.add.graphics();
    loadBar2_2 = this.add.graphics();
    loadBar3_2 = this.add.graphics();
    loadBar4_2 = this.add.graphics();
    background2 = this.add.image(0, 0, "background");
    background2.setOrigin(0, 0);
    background1 = this.make.image({
      x: 0,
      y: game.config.height / 2,
      key: "background",
      add: true
    });
    background1.setOrigin(0, 0);

    bullet1_icon1_loadBar = this.make.sprite({
      x: game.config.width / 5,
      y: game.config.height - 16,
      key: "ship2_icon",
      add: true
    });
    bullet2_icon1_loadBar = this.make.sprite({
      x: (2 * game.config.width) / 5,
      y: game.config.height - 16,
      key: "ship3_icon",
      add: true
    });
    teleportation1_loadBar = this.make.sprite({
      x: (3 * game.config.width) / 5,
      y: game.config.height - 16,
      key: "teleportation",
      add: true
    });
    wand1_loadBar = this.make.sprite({
      x: (4 * game.config.width) / 5,
      y: game.config.height - 16,
      key: "wand",
      add: true
    });

    bullet1_icon2_loadBar = this.make.sprite({
      x: (4 * game.config.width) / 5,
      y: 16,
      key: "ship2_icon",
      add: true
    });
    bullet2_icon2_loadBar = this.make.sprite({
      x: (3 * game.config.width) / 5,
      y: 16,
      key: "ship3_icon",
      add: true
    });
    teleportation2_loadBar = this.make.sprite({
      x: (2 * game.config.width) / 5,
      y: 16,
      key: "teleportation",
      add: true
    });
    wand2_loadBar = this.make.sprite({
      x: game.config.width / 5,
      y: 16,
      key: "wand",
      add: true
    });
    bullet1_icon2_loadBar.setFlip(true, true);
    bullet2_icon2_loadBar.setFlip(true, true);
    teleportation2_loadBar.setFlip(true, true);
    wand2_loadBar.setFlip(true, true);

    loadBar1_1.x = game.config.width / 5;
    loadBar1_1.y = game.config.height - 16;
    loadBar2_1.x = (2 * game.config.width) / 5;
    loadBar2_1.y = game.config.height - 16;
    loadBar3_1.x = (3 * game.config.width) / 5;
    loadBar3_1.y = game.config.height - 16;
    loadBar4_1.x = (4 * game.config.width) / 5;
    loadBar4_1.y = game.config.height - 16;

    loadBar1_2.x = (4 * game.config.width) / 5;
    loadBar1_2.y = 16;
    loadBar2_2.x = (3 * game.config.width) / 5;
    loadBar2_2.y = 16;
    loadBar3_2.x = (2 * game.config.width) / 5;
    loadBar3_2.y = 16;
    loadBar4_2.x = game.config.width / 5;
    loadBar4_2.y = 16;

    bullet1_icon1_loadBar.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      loadBar1_1
    );
    bullet2_icon1_loadBar.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      loadBar2_1
    );
    teleportation1_loadBar.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      loadBar3_1
    );
    wand1_loadBar.mask = new Phaser.Display.Masks.BitmapMask(this, loadBar4_1);

    bullet1_icon2_loadBar.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      loadBar1_2
    );
    bullet2_icon2_loadBar.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      loadBar2_2
    );
    teleportation2_loadBar.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      loadBar3_2
    );
    wand2_loadBar.mask = new Phaser.Display.Masks.BitmapMask(this, loadBar4_2);

    this.add
      .rectangle(0, game.config.height / 2, game.config.width, 1, 0xff0000)
      .setOrigin(0, 0);
    sprite1 = this.physics.add.sprite(
      game.config.width / 2,
      (3 * game.config.height) / 4,
      "ship1"
    );
    sprite2 = this.physics.add.sprite(
      game.config.width / 2,
      game.config.height / 4,
      "ship1"
    );
    sprite2.flipY = true;
    stopper1 = this.physics.add.sprite(0, 0, "stopper");
    stopper2 = this.physics.add.sprite(0, 0, "stopper");
    stopper1.setVisible(false);
    stopper2.setVisible(false);
    bullet1_icon1 = this.add.image(
      game.config.width / 5,
      game.config.height - 16,
      "ship2_icon"
    );
    bullet2_icon1 = this.add.image(
      (2 * game.config.width) / 5,
      game.config.height - 16,
      "ship3_icon"
    );
    teleportation1 = this.add.image(
      (3 * game.config.width) / 5,
      game.config.height - 16,
      "teleportation"
    );
    wand1 = this.add.image(
      (4 * game.config.width) / 5,
      game.config.height - 16,
      "wand"
    );
    defend1 = this.physics.add.sprite(-50, -50, "defend");
    defend1.disableBody(false, true);
    defend2 = this.physics.add.sprite(-50, -50, "defend");
    defend2.disableBody(false, true);

    bullet1_icon2 = this.add.image(
      (4 * game.config.width) / 5,
      16,
      "ship2_icon"
    );
    bullet2_icon2 = this.add.image(
      (3 * game.config.width) / 5,
      16,
      "ship3_icon"
    );
    teleportation2 = this.add.image(
      (2 * game.config.width) / 5,
      16,
      "teleportation"
    );
    wand2 = this.add.image(game.config.width / 5, 16, "wand");
    bullet1_icon2.setFlip(true, true);
    bullet2_icon2.setFlip(true, true);
    wand2.setFlip(true, true);

    bullet1_1 = this.physics.add.sprite(-100, -100, "ship2");
    bullet2_1 = this.physics.add.sprite(-100, -100, "ship3");

    bullet1_2 = this.physics.add.sprite(-100, -100, "ship2");
    bullet2_2 = this.physics.add.sprite(-100, -100, "ship3");
    bullet1_2.flipY = true;
    bullet2_2.flipY = true;

    blood_text1 = this.add.text(2, game.config.height - 48, "100", {
      fontSize: "13px",
      fill: "#ffffff"
    });
    blood_text2 = this.add.text(game.config.width - 2, 32, "100", {
      fontSize: "13px",
      fill: "#ffffff"
    });
    blood_text2.setOrigin(1, 0);
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

    healthBar2 = this.add.sprite(game.config.width / 2, 38, "healthBar2");
    this.healthBarMask2 = this.add.sprite(
      game.config.width / 2,
      38,
      "healthBar2"
    );
    this.healthBarMask2.setVisible(false);

    healthBar2.mask = new Phaser.Display.Masks.BitmapMask(
      this,
      this.healthBarMask2
    );

    healthBar1 = this.add.sprite(
      game.config.width / 2,
      game.config.height - 40,
      "healthBar"
    );
    this.healthBarMask1 = this.add.sprite(
      game.config.width / 2,
      game.config.height - 40,
      "healthBar"
    );
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
    bullet1_icon2.setInteractive();
    bullet2_icon2.setInteractive();
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
    bullet1_icon2.on("selected1_2", this.select1_2, this);
    bullet2_icon2.on("selected2_2", this.select2_2, this);
    teleportation1.on("selected_tele1", this.select_tele1, this);
    teleportation2.on("selected_tele2", this.select_tele2, this);
    wand1.on("selected_wand1", this.select_wand1, this);
    wand2.on("selected_wand2", this.select_wand2, this);
    retry_icon.on("retry_event", this.retry, this);
    back_icon.on("back_event", this.back, this);
    this.input.on(
      "gameobjectdown",
      function(pointer, gameObject) {
        gameObject.emit("tapped", pointer);
        gameObject.emit("selected1_1", gameObject);
        gameObject.emit("selected2_1", gameObject);
        gameObject.emit("selected1_2", gameObject);
        gameObject.emit("selected2_2", gameObject);
        gameObject.emit("selected_tele1", gameObject);
        gameObject.emit("selected_tele2", gameObject);
        gameObject.emit("selected_wand1", gameObject);
        gameObject.emit("selected_wand2", gameObject);
        gameObject.emit("retry_event", gameObject);
        gameObject.emit("back_event", gameObject);
      },
      this
    );
    this.physics.add.overlap(sprite1, stopper1, this.stopShip, null, this);
    this.physics.add.overlap(sprite2, stopper2, this.stopShip2, null, this);
    this.physics.add.overlap(sprite1, bullet1_2, this.hit1, null, this);
    this.physics.add.overlap(sprite1, bullet2_2, this.hit1, null, this);
    this.physics.add.overlap(sprite2, bullet1_1, this.hit2, null, this);
    this.physics.add.overlap(sprite2, bullet2_1, this.hit2, null, this);
    this.physics.add.overlap(defend1, bullet1_2, this.defend, null, this);
    this.physics.add.overlap(defend1, bullet2_2, this.defend, null, this);
    this.physics.add.overlap(defend2, bullet1_1, this.defend, null, this);
    this.physics.add.overlap(defend2, bullet2_1, this.defend, null, this);
  }
  update() {
    defend1.x = sprite1.x;
    defend1.y = sprite1.y - 16;
    defend2.x = sprite2.x;
    defend2.y = sprite2.y + 16;
  }
  loadBar(pointer, selected_bullet) {
    if (pointer.y > game.config.height / 2) {
      var start_point = -Math.PI / 2;
      if (selected_bullet === 1) {
        var loadBar = loadBar1_1;
        var t = t1_1;
        var coolDownTime = 360 / (4 * 60);
      } else if (selected_bullet === 2) {
        var loadBar = loadBar2_1;
        var t = t2_1;
        var coolDownTime = 360 / (4 * 60);
      } else if (selected_bullet === 3) {
        var loadBar = loadBar3_1;
        var t = t3_1;
        var coolDownTime = 360 / (7 * 60);
      } else if (selected_bullet === 4) {
        var loadBar = loadBar4_1;
        var t = t4_1;
        var coolDownTime = 360 / (10 * 60);
      }
    } else {
      var start_point = Math.PI / 2;
      if (selected_bullet === 1) {
        var loadBar = loadBar1_2;
        var t = t1_2;
        var coolDownTime = 360 / (4 * 60);
      } else if (selected_bullet === 2) {
        var loadBar = loadBar2_2;
        var t = t2_2;
        var coolDownTime = 360 / (4 * 60);
      } else if (selected_bullet === 3) {
        var loadBar = loadBar3_2;
        var t = t3_2;
        var coolDownTime = 360 / (7 * 60);
      } else if (selected_bullet === 4) {
        var loadBar = loadBar4_2;
        var t = t4_2;
        var coolDownTime = 360 / (10 * 60);
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
      var player = 1;
      var sprite = sprite1;
      shoot1 = false;
      if (selected_bullet === 1) {
        var bullet = bullet1_1;
        var bullet_icon = bullet1_icon1;
        var select_ship_function = this.select1_1;
      } else if (selected_bullet === 2) {
        var bullet = bullet2_1;
        var bullet_icon = bullet2_icon1;
        var select_ship_function = this.select2_1;
      }
    } else {
      var player = 2;
      var sprite = sprite2;
      shoot2 = false;
      if (selected_bullet === 1) {
        var bullet = bullet1_2;
        var bullet_icon = bullet1_icon2;
        var select_ship_function = this.select1_2;
      } else if (selected_bullet === 2) {
        var bullet = bullet2_2;
        var bullet_icon = bullet2_icon2;
        var select_ship_function = this.select2_2;
      }
    }
    bullet.setVisible(true);
    bullet.x = sprite.x;
    bullet.y = sprite.y;
    var adjacent = pointer.x - sprite.x;
    var opposite = pointer.y - sprite.y;
    var hypotenuse = Math.sqrt(adjacent ** 2 + opposite ** 2);
    bullet.body.velocity.x = (90 * adjacent) / hypotenuse;
    bullet.body.velocity.y = (90 * opposite) / hypotenuse;
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
    }, 4000);
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
      sprite.x = pointer.x;
      sprite.y = pointer.y;
      stopper.x = pointer.x;
      stopper.y = pointer.y;
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
      stopper.x = pointer.x;
      stopper.y = pointer.y;
      var adjacent = pointer.x - sprite.x;
      var opposite = pointer.y - sprite.y;
      var hypotenuse = Math.sqrt(adjacent ** 2 + opposite ** 2);
      sprite.body.velocity.x = (70 * adjacent) / hypotenuse;
      sprite.body.velocity.y = (70 * opposite) / hypotenuse;
    }
  }
  stopShip() {
    sprite1.body.velocity.x = 0;
    sprite1.body.velocity.y = 0;
  }
  stopShip2() {
    sprite2.body.velocity.x = 0;
    sprite2.body.velocity.y = 0;
  }
  select1_1() {
    teleportation1_bool = false;
    bullet1_icon1.tint = 0xe2ff3d;
    bullet1_1.enableBody(false, 0, 0, true, false);
    if (bullet2_icon1.isTinted || teleportation1.isTinted) {
      bullet2_icon1.clearTint();
      teleportation1.clearTint();
    }
    selected_bullet1 = 1;
    shoot1 = true;
  }
  select2_1() {
    teleportation1_bool = false;
    bullet2_icon1.tint = 0xe2ff3d;
    bullet2_1.enableBody(false, 0, 0, true, false);
    if (bullet1_icon1.isTinted || teleportation1.isTinted) {
      bullet1_icon1.clearTint();
      teleportation1.clearTint();
    }
    selected_bullet1 = 2;
    shoot1 = true;
  }
  select_tele1() {
    teleportation1.tint = 0xe2ff3d;
    if (bullet1_icon1.isTinted || bullet2_icon1.isTinted) {
      bullet1_icon1.clearTint();
      bullet2_icon1.clearTint();
    }
    selected_bullet1 = 3;
    teleportation1_bool = true;
  }
  select_wand1(pointer) {
    teleportation1_bool = false;
    wand1.alpha = 0.4;
    wand1.off("selected_wand1");
    defend1.enableBody(false, 0, 0, true, true);
    selected_bullet1 = 4;
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
    bullet1_icon2.tint = 0xe2ff3d;
    bullet1_2.enableBody(false, 0, 0, true, false);
    if (bullet2_icon2.isTinted || teleportation2.isTinted) {
      bullet2_icon2.clearTint();
      teleportation2.clearTint();
    }
    selected_bullet2 = 1;
    shoot2 = true;
  }
  select2_2() {
    teleportation2_bool = false;
    bullet2_icon2.tint = 0xe2ff3d;
    bullet2_2.enableBody(false, 0, 0, true, false);
    if (bullet1_icon2.isTinted || teleportation2.isTinted) {
      bullet1_icon2.clearTint();
      teleportation2.clearTint();
    }
    selected_bullet2 = 2;
    shoot2 = true;
  }
  select_tele2() {
    if (bullet1_icon2.isTinted || bullet2_icon2.isTinted) {
      bullet1_icon2.clearTint();
      bullet2_icon2.clearTint();
    }
    selected_bullet2 = 3;
    teleportation2.tint = 0xe2ff3d;
    teleportation2_bool = true;
  }
  select_wand2(pointer) {
    teleportation2_bool = false;
    wand2.alpha = 0.4;
    wand2.off("selected_wand2");
    selected_bullet2 = 4;
    this.loadBar(pointer, selected_bullet2);
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
    let stepWidth = this.healthBarMask1.displayWidth / 100;
    b.setVisible(false);
    if (blood1 > 0) {
      blood1--;
      this.healthBarMask1.x -= stepWidth;
      blood_text1.setText(blood1);
    }
    if (blood1 === 0) {
      this.gameOver();
    }
  }
  hit2(a, b) {
    let stepWidth = this.healthBarMask2.displayWidth / 100;
    b.setVisible(false);
    if (blood2 > 0) {
      blood2--;
      this.healthBarMask2.x += stepWidth;
      blood_text2.setText(blood2);
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
      blood_text2.setText("Win!");
    } else if (blood2 === 0) {
      blood_text1.setText("Win!");
      blood_text2.setText("Lose");
    }
    background1.off("tapped");
    background2.off("tapped");
    bullet1_icon1.off("selected1_1");
    bullet2_icon1.off("selected2_1");
    bullet1_icon2.off("selected1_2");
    bullet2_icon2.off("selected2_2");
    teleportation1.off("selected_tele1");
    teleportation2.off("selected_tele2");
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
