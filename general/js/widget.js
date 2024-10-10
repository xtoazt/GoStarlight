function loadWidget() {
    if(firstLoadWidget) {
        firstLoadWidget = 0;
        loadScript("/general/js/widgetbot.js", loadCrate);
    }
}
function loadCrate() {
    new Crate({server: '1211576175672172636',channel: '1211576176607232004', color: "#00000000", glyph: ["data:;base64,=", "100%"]});
    crate.toggle(true);
    let element = document.querySelector('[aria-label="Discord chat embed"]');
    element.remove();
}