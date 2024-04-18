class Test {
  constructor(public x: number, private y: number) {}

  logger() {
    console.log(this.x);
  }
}

const newTest = new Test(1, 2);

newTest.x;
// newTest.y;  Property 'y' is private and only accessible within class 'Test'
