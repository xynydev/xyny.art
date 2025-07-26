import "q5";

export function runSketch(setup: (q: Q5) => (q: Q5) => void) {
  let q: Q5 = new Q5("instance");

  let drawFunc: (q: Q5) => void = (_q) => {};

  q.setup = () => {
    drawFunc = setup(q);
  };

  q.draw = () => {
    drawFunc(q);
  };
}
