// Your JS goes here


function checkerBoard() {
  for (var i = 0; i < window.innerHeight + 1 ; i++) {
    var blackBox = document.createElement('div')
    var redBox = document.createElement('div')

    document.body.appendChild(blackBox)
    document.body.appendChild(redBox)

    function getRandomColor() {
            var lettersNumbers = 'ABCDEF0123456789';
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += lettersNumbers[Math.floor(Math.random() * lettersNumbers.length)];
            }
            return color;
        }

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
checkerBoard();
