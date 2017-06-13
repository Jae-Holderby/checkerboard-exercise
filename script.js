// Your JS goes here

function getRandomColor() {
        var lettersNumbers = 'ABCDEF0123456789';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += lettersNumbers[Math.floor(Math.random() * lettersNumbers.length)];
        }
        return color;
    }
var divs = [];
function checkerBoard() {
  for (var i = 0; i < (window.innerHeight) / 2 ; i++) {
    var box = document.createElement('div')


    document.body.appendChild(box)
    box.style.width = "11.1%";
    box.style.paddingBottom = "11.1%";
    box.style.float = "left"
    box.style.backgroundColor = getRandomColor()
  }
}
checkerBoard()

function changeColor() {
    for(var i = 0; i < (window.innerHeight + 2) /10 ; i++){
      document.body.children[i].style.backgroundColor = getRandomColor()
    }

}

setInterval(changeColor, 2000)
