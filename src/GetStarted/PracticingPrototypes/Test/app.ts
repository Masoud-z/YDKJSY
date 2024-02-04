interface SlotMachine {}

function randMax(max: number) {
  return Math.trunc(1e9 * Math.random()) % max;
}
var reel = {
  symbols: ["X", "Y", "Z", "W", "$", "*", "<", "@"],
  position: randMax(7),
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};
var slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    this.spin();
    this.reels.forEach((reel) => {
      const printArr = [];
      const fixedPosition = reel.position;
      for (let i = -1; i < 2; i++) {
        reel.position =
          (reel.symbols.length + fixedPosition + i) % reel.symbols.length;
        printArr.push(reel.display());
      }
      console.log(printArr.join(" | "));
    });
  },
};

slotMachine.display();
