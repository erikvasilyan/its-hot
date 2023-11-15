basic.forever(function show_temperature() {
    let temperature = input.temperature()
    if (temperature > 22) {
        basic.showString("Hot!")
    } else {
        basic.showString("Cold!")
    }
    
})
basic.forever(function show_light() {
    let lightLvl = input.lightLevel()
    if (lightLvl > 200) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.UntilDone)
    } else {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
    }
    
})
