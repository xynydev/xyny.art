import p5 from "p5";

export function runP5Sketch(setup: (p: p5) => (p: p5) => void) {
  new p5((p: p5) => {
    let drawFunc: (p: p5) => void = (_p) => {};

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      drawFunc = setup(p);
    };

    p.draw = () => {
      drawFunc(p);
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
  });
}
