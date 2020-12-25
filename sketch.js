let gamepad = new GamePad()
let x, y

function setup() {
  createCanvas(400, 200)
  // frameRate(1)
  x = width / 2
  y = height / 2
}


function draw() {
  background(220)
  let outputText = "no gamepad connected"
  fill("white")
  if (gamepad.is_connected()) {
    // Move circle with first two axes
    outputText = `first axes ${gamepad.axes()[0]} ${gamepad.axes()[1]}\n`
    outputText += `first buttons ${gamepad.buttons()[0]} ${gamepad.buttons()[1]} ${gamepad.buttons()[2]} ${gamepad.buttons()[3]}\n`

    x += gamepad.axes()[0]
    y += gamepad.axes()[1]

    // Circle will be colored if any button pressed
    let anyButtonPressed = false
    for (let button of gamepad.buttons()) {
      if (button)
        anyButtonPressed = true
    }
    if (anyButtonPressed)
      fill("green")
  }

  circle(x, y, 20)
  fill("black")
  text(outputText, 10, 20)

}
