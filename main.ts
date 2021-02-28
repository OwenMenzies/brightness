let Brightness_2 = 0
let Current_brightness = 0
let More_brightnessess = 0
let Other_Brightness = 0
let Brightness_1 = 0
let Brightness_3 = 0
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    Brightness_2 = 128
    for (let index = 0; index < 1e+27; index++) {
        led.plotBrightness(randint(0, 4), randint(0, 4), Brightness_2)
        Brightness_2 += randint(randint(-10, 10), randint(-10, 10))
        basic.pause(1)
    }
})
input.onButtonPressed(Button.A, function () {
    Current_brightness = 128
    for (let index = 0; index < 1e+27; index++) {
        led.plotBrightness(randint(0, 4), randint(0, 4), Current_brightness)
        Current_brightness += randint(randint(-10, 10), randint(-10, 10))
        basic.pause(1)
    }
})
input.onButtonPressed(Button.AB, function () {
    More_brightnessess = 128
    for (let index = 0; index < 1e+27; index++) {
        led.plotBrightness(randint(0, 4), randint(0, 4), More_brightnessess)
        More_brightnessess += randint(randint(-10, 10), randint(-10, 10))
        basic.pause(1)
    }
})
input.onButtonPressed(Button.B, function () {
    Other_Brightness = 128
    for (let index = 0; index < 1e+27; index++) {
        led.plotBrightness(randint(0, 4), randint(0, 4), Other_Brightness)
        Other_Brightness += randint(randint(-10, 10), randint(-10, 10))
        basic.pause(1)
    }
})
input.onGesture(Gesture.Shake, function () {
    Brightness_1 = 128
    for (let index = 0; index < 1e+27; index++) {
        led.plotBrightness(randint(0, 4), randint(0, 4), Brightness_1)
        Brightness_1 += randint(randint(-10, 10), randint(-10, 10))
        basic.pause(1)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Brightness_3 = 128
    for (let index = 0; index < 1e+27; index++) {
        led.plotBrightness(randint(0, 4), randint(0, 4), Brightness_3)
        Brightness_3 += randint(randint(-10, 10), randint(-10, 10))
        basic.pause(1)
    }
})
basic.forever(function () {
    if (Brightness_1 <= -1) {
        Brightness_1 = 0
    } else if (Brightness_1 >= 256) {
        Brightness_1 = 255
    } else {
    	
    }
    if (Current_brightness <= -1) {
        Current_brightness = 0
    } else if (Current_brightness >= 256) {
        Current_brightness = 255
    } else {
    	
    }
    if (Other_Brightness <= -1) {
        Other_Brightness = 0
    } else if (Other_Brightness >= 256) {
        Other_Brightness = 255
    } else {
    	
    }
    if (More_brightnessess <= -1) {
        More_brightnessess = 0
    } else if (More_brightnessess >= 256) {
        More_brightnessess = 255
    } else {
    	
    }
    if (Brightness_2 <= -1) {
        Brightness_2 = 0
    } else if (Brightness_2 >= 256) {
        Brightness_2 = 255
    } else {
    	
    }
    if (Brightness_3 <= -1) {
        Brightness_3 = 0
    } else if (Brightness_3 >= 256) {
        Brightness_3 = 255
    } else {
    	
    }
})
