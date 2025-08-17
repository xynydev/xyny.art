import "q5";

export function runQ5Sketch(setup: (q: Q5) => (q: Q5) => void) {
  let q: Q5 = new Q5("instance");

  let drawFunc: (q: Q5) => void = (_q) => {};

  q.setup = () => {
    q.createCanvas(q.windowWidth, q.windowHeight);
    drawFunc = setup(q);
  };

  q.draw = () => {
    drawFunc(q);
  };

  q.windowResized = () => {
    q.resizeCanvas(q.windowWidth, q.windowHeight);
  };
}
