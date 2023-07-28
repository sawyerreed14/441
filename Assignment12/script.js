class GameObject {
  constructor(id, name, x, y, width, height) {
    this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

class Collectible {
  constructor(id, name, x, y, width, height) {
    this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.isCollected = false;
  }
}

class Player {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.score = 0;
  }

  moveLeft() {
    this.x -= 5;
  }

  moveRight() {
    this.x += 5;
  }

  moveUp() {
    this.y -= 5;
  }

  moveDown() {
    this.y += 5;
  }
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const player = new Player(50, 50, 20, 20);
let objects = [];
let collectibles = [];

$.getJSON("objects.json", function (data) {
  objects = data.objects.map(
    (item) => new GameObject(item.id, item.name, item.x, item.y, item.width, item.height)
  );
});

$.getJSON("collectibles.json", function (data) {
  collectibles = data.collectibles.map(
    (item) => new Collectible(item.id, item.name, item.x, item.y, item.width, item.height)
  );
});

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      player.moveLeft();
      break;
    case "ArrowRight":
      player.moveRight();
      break;
    case "ArrowUp":
      player.moveUp();
      break;
    case "ArrowDown":
      player.moveDown();
      break;
  }
});

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawObjects() {
  ctx.fillStyle = "red";
  objects.forEach((obj) => {
    ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
  });
}

function drawCollectibles() {
  ctx.fillStyle = "green";
  collectibles.forEach((collectible) => {
    if (!collectible.isCollected) {
      ctx.fillRect(collectible.x, collectible.y, collectible.width, collectible.height);
    }
  });
}

function drawPlayer() {
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function detectCollisions() {
  collectibles.forEach((collectible) => {
    if (!collectible.isCollected) {
      if (
        player.x < collectible.x + collectible.width &&
        player.x + player.width > collectible.x &&
        player.y < collectible.y + collectible.height &&
        player.y + player.height > collectible.y
      ) {
        collectible.isCollected = true;
        player.score += 10;
      }
    }
  });
}

function updateGame() {
  clearCanvas();
  drawObjects();
  drawCollectibles();
  drawPlayer();
  detectCollisions();
  requestAnimationFrame(updateGame);
}

window.addEventListener("load", () => {
  updateGame();
});
