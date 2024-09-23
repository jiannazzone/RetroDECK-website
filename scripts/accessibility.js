function pixelFontToggle() {
    const pixelFontDefault = "\"Upheaval TT\", monospace;"

    const pixelFontSwitchElem = document.getElementById("pixel-font-switch");
    if (pixelFontSwitchElem.checked) {
        document.documentElement.style.cssText = "--pixel-font: \"Upheaval TT\", monospace";
    } else {
        document.documentElement.style.cssText = "--pixel-font: \"Source Sans 3\", sans-serif";
    }
}