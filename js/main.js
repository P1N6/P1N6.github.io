import { hexBoardDisplay } from './hexBoardDisplay.js';
function main() {
    var canvas = document.getElementById("canvas");
    canvas.width = canvas.width * 4;
    canvas.height = canvas.height * 4;
    var size = 11;
    var hexBoard = new hexBoardDisplay(canvas, size);
    hexBoard.drawBoard();
}
window.onload = main;
//# sourceMappingURL=main.js.map