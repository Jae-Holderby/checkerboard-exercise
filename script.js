// Your JS goes here

function checkerBoard() {
  for (var i = 0; i < window.innerHeight + 1 ; i++) {
    var box = document.createElement('div')
    document.body.appendChild(box)

    box.style.width = "11.1%";
    box.style.paddingBottom = "11.1%";
    box.style.float = "left"

    if (i % 2 === 0) {
    box.style.backgroundColor = "black"
  } else {
    box.style.backgroundColor = "red"
  }
}
}

checkerBoard();
