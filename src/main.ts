function main() {
    let canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
    // Initialize the GL context
    const context: CanvasRenderingContext2D | null | undefined = canvas.getContext("2d");
    const size = 11;
    const xHalves = size * 2 + size - 1;
    const radius = Math.min(canvas.width / ((xHalves + 1) * Math.cos(Math.PI / 6)),
                            canvas.height / (size * 1.5 + 1.5));;

    for (let y = 1; y <= size; y++) {
        // Doing this and counting number of tiles drawn per row gives the rhombus shape we need.
        let x = y;
        // If we just use the radius for these then the tiles do not touch as they are modelled as circles not hexagons.
        const yPixel = y*radius*1.5;
        for (let rowDrawn = 0; rowDrawn < size; rowDrawn++) {
            const xPixel = (x + 1) * radius * Math.cos(Math.PI / 6);
            // Have to use y - 1 to index because y starts at 1.
            drawCell(context, xPixel, yPixel, radius);
            x += 2;
        }
    }
}

function drawCell(context : CanvasRenderingContext2D, x : number, y : number, radius : number) {
    context.beginPath();
    for (let i = 0; i < 6; i++) {
        // Trust me this draws a hexagon. The -1 constant is to get the pointy side up rather than flat side up.
        context.lineTo((x + radius * Math.cos(((i * 2) - 1) * Math.PI / 6)),
        (y + radius * Math.sin(((i * 2) - 1) * Math.PI / 6)));
    }
    context.closePath();
    context.stroke();
}

window.onload = main;
