import {HexCellColor} from './enums'

export class HexBoardDisplay {
    private context : CanvasRenderingContext2D;
    private boardHalfSteps : number;
    private cellRadius : number;

    constructor(private readonly canvas : HTMLCanvasElement, public boardSize : number) {
        this.context = canvas.getContext("2d");
    }

    drawBoard() : void {
        this.boardHalfSteps = this.boardSize * 2 + this.boardSize - 1;
        this.cellRadius = Math.min(
            this.canvas.width / ((this.boardHalfSteps + 1) * Math.cos(Math.PI / 6)),
            this.canvas.height / (this.boardSize * 1.5 + 1.5)
        );

        for (let x = 1; x <= this.boardSize; x++) {
            for (let y = 1; y <= this.boardSize; y++) {
                this.drawCell(x, y);
            }
        }
    }

    drawCell(x : number, y : number) : void {
        const xPixel = (x * 2 + y) * this.cellRadius * Math.cos(Math.PI / 6);
        const yPixel = y * this.cellRadius * 1.5;
        this.drawHexagon(xPixel, yPixel, HexCellColor.NONE);
    }

    drawHexagon(x : number, y : number, color : HexCellColor) : void {
        this.context.beginPath();
        for (let i = 0; i < 6; i++) {
            // Trust me this draws a hexagon. The -1 constant is to get the pointy side up rather than flat side up.
            this.context.lineTo(
                (x + this.cellRadius * Math.cos(((i * 2) - 1) * Math.PI / 6)),
                (y + this.cellRadius * Math.sin(((i * 2) - 1) * Math.PI / 6))
            );
        }
        this.context.closePath();
        this.context.stroke();
    }
}
