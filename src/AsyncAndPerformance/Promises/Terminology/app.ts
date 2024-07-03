async function PromiseTest() {
  let rejectedTh = {
    then: function (
      resolved: (rs: string) => any,
      rejected: (rj: string) => any
    ) {
      rejected("Oops");
    },
  };
  var rejectedPr = await Promise.resolve(rejectedTh);
  console.log(rejectedPr);
}

async function ThenCatch() {
  let rejectedTh = {
    then: function (
      resolved: (rs: string) => any,
      rejected: (rj: string) => any
    ) {
      rejected("Oops");
    },
  };

  var rejectedPr = await Promise.resolve(rejectedTh)
    .then((ms) => ms)
    .catch((err) => {
      console.log("catch");
      return err;
    });
  console.log(rejectedPr);
}

ThenCatch();
