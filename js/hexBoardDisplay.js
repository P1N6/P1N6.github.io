var hexBoardDisplay = /** @class */ (function () {
    function hexBoardDisplay(canvas, boardSize) {
        this.canvas = canvas;
        this.boardSize = boardSize;
        this.context = canvas.getContext("2d");
    }
    hexBoardDisplay.prototype.drawBoard = function () {
        this.boardHalfSteps = this.boardSize * 2 + this.boardSize - 1;
        this.cellRadius = Math.min(this.canvas.width / ((this.boardHalfSteps + 1) * Math.cos(Math.PI / 6)), this.canvas.height / (this.boardSize * 1.5 + 1.5));
        for (var y = 1; y <= this.boardSize; y++) {
            // Doing this and counting number of tiles drawn per row gives the rhombus shape we need.
            var x = y;
            // If we just use the radius for these then the tiles do not touch as they are modelled as circles not hexagons.
            var yPixel = y * this.cellRadius * 1.5;
            for (var rowDrawn = 0; rowDrawn < this.boardSize; rowDrawn++) {
                var xPixel = (x + 1) * this.cellRadius * Math.cos(Math.PI / 6);
                // Have to use y - 1 to index because y starts at 1.
                this.drawHexagon(xPixel, yPixel);
                x += 2;
            }
        }
    };
    hexBoardDisplay.prototype.drawCell = function (x, y) {
    };
    hexBoardDisplay.prototype.drawHexagon = function (x, y) {
        this.context.beginPath();
        for (var i = 0; i < 6; i++) {
            // Trust me this draws a hexagon. The -1 constant is to get the pointy side up rather than flat side up.
            this.context.lineTo((x + this.cellRadius * Math.cos(((i * 2) - 1) * Math.PI / 6)), (y + this.cellRadius * Math.sin(((i * 2) - 1) * Math.PI / 6)));
        }
        this.context.closePath();
        this.context.stroke();
    };
    return hexBoardDisplay;
}());
export { hexBoardDisplay };
//# sourceMappingURL=hexBoardDisplay.js.map