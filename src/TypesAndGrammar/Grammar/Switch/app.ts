let aab = 10;
switch (aab) {
  case 10:
    console.log("10");
  case 2:
    console.log("2");
  // never gets here
  default:
    console.log("default");
  case 3:
    console.log("3");
    break;
  case 4:
    console.log("4");
}
