// Your JS goes here



function checkerBoard() {
  document.body.style.backgroundImage = "linear-gradient( 45deg, white, black )"
  var color1 = 0
  var color2 = 255
  for (var i = 0; i < (window.innerHeight + 1) / 2; i++) {
    // var blackBox = document.createElement('div')
    var box = document.createElement('div')
    document.body.appendChild(box)

    box.style.width = "11.1%";
    box.style.paddingBottom = "11.1%";
    box.style.float = "left"
    if (i % 2 === 0) {
      box.style.backgroundColor = "rgba(0, 0, " + color1 + ", .6)"
    } else {
      box.style.backgroundColor = "rgba(" + color2 +", 0, 0, .6)"
    }
    color1++
    color2--
  }
}
checkerBoard();
