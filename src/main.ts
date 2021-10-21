function main() {
    let canvas: HTMLCanvasElement = document.getElementById("canvas") as HTMLCanvasElement;
    // Initialize the GL context
    const context: CanvasRenderingContext2D | null | undefined = canvas.getContext("2d");

    context.fillRect(68, 68, 45, 67);

    this.canvas = canvas;
    this.context = context;
}

window.onload = main;
