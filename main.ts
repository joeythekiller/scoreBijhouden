input.onButtonPressed(Button.A, function () {
    score1 += -1
    basic.showString("" + (score1))
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    score1 = 0
    scoreGelijk = 0
})
input.onButtonPressed(Button.B, function () {
    score1 += 1
    basic.showString("" + (score1))
    basic.pause(200)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (score1))
    basic.pause(2000)
    basic.clearScreen()
})
let scoreGelijk = 0
let score1 = 0
score1 = 0
let gewonnen = 0
basic.forever(function () {
    if (score1 == 10) {
        gewonnen = 1
    }
    if (gewonnen == 1) {
        basic.showIcon(IconNames.Happy)
        basic.clearScreen()
        basic.showString("you win!")
        basic.pause(100)
        gewonnen = 0
        score1 = 0
    }
})
