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
  for (var i = 0; i < (window.innerHeight + 2) /10 ; i++) {
    var blackBox = document.createElement('div')
    var redBox = document.createElement('div')

    document.body.appendChild(blackBox)
    document.body.appendChild(redBox)

    redBox.style.width = "11.1%";
    redBox.style.paddingBottom = "11.1%";
    redBox.style.backgroundColor = getRandomColor()
    redBox.style.float = "left"

    blackBox.style.width = "11.1%";
    blackBox.style.paddingBottom = "11.1%";
    blackBox.style.backgroundColor = getRandomColor()
    blackBox.style.float = "left"


  }
}
checkerBoard()

function changeColor() {
    for(var i = 0; i < (window.innerHeight + 2) /10 ; i++){
      document.body.children[i].style.backgroundColor = getRandomColor()
    }

}

setInterval(changeColor, 2000)
