let distance = 0
let soundDelay = 0
let pitch = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    soundDelay = 100 + distance * 2
    led.plotBarGraph(
    81 - distance,
    81
    )
    basic.pause(100)
})
loops.everyInterval(soundDelay, function () {
    pitch = 988 - distance * 4
    music.play(music.tonePlayable(pitch, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    basic.pause(soundDelay)
})
