import {hexBoardDisplay} from './hexBoardDisplay'

function main() {
    let canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
    canvas.width = canvas.width * 4;
    canvas.height = canvas.height * 4;
    const size = 11;

    const hexBoard = new hexBoardDisplay(canvas, size);
    hexBoard.drawBoard();
}

window.onload = main;
