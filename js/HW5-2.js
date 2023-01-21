let user = {
  name: "Mohammad",
  steps: 0,
  increase() {
    this.steps++;
    return this;
  },
  decrease() {
    this.steps--;
    return this;
  },
  reset() {
    this.steps = 0;
    return this;
  },
  increase() {
    console.log(this.steps);
    return this;
  },
};
