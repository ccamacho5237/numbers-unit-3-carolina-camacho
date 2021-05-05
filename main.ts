basic.showNumber(0)
basic.clearScreen()
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showNumber(2)
        basic.clearScreen()
    } else {
        if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
            basic.showNumber(1)
            basic.clearScreen()
        } else {
            basic.showNumber(0)
            basic.clearScreen()
        }
    }
})
