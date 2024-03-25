"use strict";
function toggle(...args) {
    const empty = args.length === 0;
    let cur = undefined;
    return function toggler() {
        if (empty)
            return undefined;
        if (cur !== undefined)
            args.push(cur);
        cur = args.shift();
        return cur;
    };
}
const empty = toggle();
const hello = toggle("hello");
const onOff = toggle("on", "off");
const speed = toggle("slow", "medium", "fast");
console.log(empty());
console.log(hello());
console.log(hello());
console.log(onOff());
console.log(onOff());
console.log(onOff());
console.log(speed());
console.log(speed());
console.log(speed());
console.log(speed());
