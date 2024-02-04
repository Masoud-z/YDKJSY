(() => {
  type Reel = {
    symbols: string[];
    position: number;
    spin(): void;
    display(): string;
  };
  interface SlotMachine {
    reels: Reel[];
    spin: () => void;
    display: () => void;
  }

  function randMax(max: number) {
    return Math.trunc(1e9 * Math.random()) % max;
  }

  let reel: Reel = {
    symbols: ["X", "Y", "Z", "W", "$", "*", "<", "@"],
    position: randMax(7),
    spin() {
      this.position =
        (this.position + 100 + randMax(100)) % this.symbols.length;
    },
    display() {
      if (this.position == null) {
        this.position = randMax(this.symbols.length - 1);
      }
      return this.symbols[this.position];
    },
  };

  let slotMachine: SlotMachine = {
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
})();
