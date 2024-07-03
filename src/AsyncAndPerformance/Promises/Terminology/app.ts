var rejectedTh = {
  then: function (
    resolved: (rs: string) => any,
    rejected: (rj: string) => any
  ) {
    rejected("Oops");
  },
};
var rejectedPr = Promise.resolve(rejectedTh);

rejectedPr.then((res) => console.log(res));
