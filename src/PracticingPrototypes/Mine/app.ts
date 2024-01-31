function randMax(max: number) {
  return Math.trunc(1e9 * Math.random()) % max;
}

let reel = {
  symbols: ["X", "Y", "Z", "W", "$", "*", "<", "@"],
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

interface Reel {
  spin: () => void;
  display: () => string;
  symbols: string[];
}

interface slotMachine {
  reels: Reel[];
  spin: () => void;
  display: () => void;
}

let slotMachine: slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
  spin() {
    this.reels.forEach((reel) => {
      reel.spin();
    });
  },
  display() {
    this.reels.forEach((reel) => {
      let printArr = [];
      reel.spin();
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
