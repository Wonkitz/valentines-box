input.onGesture(Gesture.TiltLeft, function () {
    music.playTone(262, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(262, music.beat(BeatFraction.Double))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(294, music.beat(BeatFraction.Double))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Double))
    music.playTone(247, music.beat(BeatFraction.Double))
    music.playTone(262, music.beat(BeatFraction.Double))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(294, music.beat(BeatFraction.Double))
    music.playTone(262, music.beat(BeatFraction.Double))
})
input.onGesture(Gesture.TiltRight, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.clearScreen()
        basic.pause(500)
    }
})
music.setBuiltInSpeakerEnabled(true)
