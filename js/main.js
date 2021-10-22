function main() {
    var canvas = document.getElementById("canvas");
    // Initialize the GL context
    var context = canvas.getContext("2d");
    var size = 11;
    var xHalves = size * 2 + size - 1;
    var radius = Math.min(canvas.width / ((xHalves + 1) * Math.cos(Math.PI / 6)), canvas.height / (size * 1.5 + 1.5));
    ;
    for (var y = 1; y <= size; y++) {
        // Doing this and counting number of tiles drawn per row gives the rhombus shape we need.
        var x = y;
        // If we just use the radius for these then the tiles do not touch as they are modelled as circles not hexagons.
        var yPixel = y * radius * 1.5;
        for (var rowDrawn = 0; rowDrawn < size; rowDrawn++) {
            var xPixel = (x + 1) * radius * Math.cos(Math.PI / 6);
            // Have to use y - 1 to index because y starts at 1.
            drawCell(context, xPixel, yPixel, radius);
            x += 2;
        }
    }
}
function drawCell(context, x, y, radius) {
    context.beginPath();
    for (var i = 0; i < 6; i++) {
        // Trust me this draws a hexagon. The -1 constant is to get the pointy side up rather than flat side up.
        context.lineTo((x + radius * Math.cos(((i * 2) - 1) * Math.PI / 6)), (y + radius * Math.sin(((i * 2) - 1) * Math.PI / 6)));
    }
    context.closePath();
    context.fill();
}
window.onload = main;
//# sourceMappingURL=main.js.map