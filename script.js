// Your JS goes here

function checkerBoard() {
  for (var i = 0; i < window.innerHeight + 1 ; i++) {
    var blackBox = document.createElement('div')
    var redBox = document.createElement('div')

    document.body.appendChild(blackBox)
    document.body.appendChild(redBox)


    redBox.style.width = "11.1%";
    redBox.style.paddingBottom = "11.1%";
    redBox.style.backgroundColor = "black"
    redBox.style.float = "left"

    blackBox.style.width = "11.1%";
    blackBox.style.paddingBottom = "11.1%";
    blackBox.style.backgroundColor = "red"
    blackBox.style.float = "left"
  }
}
checkerBoard();
