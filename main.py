def show_temperature():
    temperature = input.temperature()
    if temperature > 22:
        basic.show_string("Hot!")
    else:
        basic.show_string("Cold!")

def show_light():
    light = input.light_level()
    if light > 200:
        music.play(music.builtin_playable_sound_effect(soundExpression.happy),
        music.PlaybackMode.UNTIL_DONE)
    else:
        music.play(music.builtin_playable_sound_effect(soundExpression.sad),
        music.PlaybackMode.UNTIL_DONE)

basic.forever(show_temperature)
basic.forever(show_light)