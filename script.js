const music = document.getElementById("bg-music")

document.body.addEventListener("click", () => {
  music.volume = 0.35
  music.play()
}, { once: true })

function changeBody(num) {
  document.getElementById("base").src = `images/body${num}.png`;
}

function changeShirt(num) {
  document.getElementById("shirt").src = `images/shirt${num}.png`;
}

function changeSkirt(num) {
  document.getElementById("skirt").src = `images/skirt${num}.png`;
}

function changeShoes(num) {
  document.getElementById("shoes").src = `images/shoes${num}.png`;
}

function changeHair(num) {
  document.getElementById("hair").src = `images/hair${num}.png`;
}

function changePurse(num) {
  document.getElementById("purse").src = `images/purse${num}.png`;
}
