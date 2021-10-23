export class hexBoardDisplay {
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

        for (let y = 1; y <= this.boardSize; y++) {
            // Doing this and counting number of tiles drawn per row gives the rhombus shape we need.
            let x = y;
            // If we just use the radius for these then the tiles do not touch as they are modelled as circles not hexagons.
            const yPixel = y*this.cellRadius*1.5;
            for (let rowDrawn = 0; rowDrawn < this.boardSize; rowDrawn++) {
                const xPixel = (x + 1) * this.cellRadius * Math.cos(Math.PI / 6);
                // Have to use y - 1 to index because y starts at 1.
                this.drawHexagon(xPixel, yPixel);
                x += 2;
            }
        }
    }

    drawCell(x : number, y : number) : void {

    }

    drawHexagon(x : number, y : number) : void {
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
