{
  let res = [];
  function* reqData(
    url: string
  ): Generator<
    Promise<Record<string, any>> | undefined,
    void,
    Record<string, any>
  > {
    let data = yield new Promise((res, rej) => {
      res({ url });
    });
    yield;
    res.push(data);
  }

  let it1 = reqData("http://some.url.1");
  let it2 = reqData("http://some.url.2");
  let p1 = it1.next().value;
  let p2 = it2.next().value;

  if (p1 && p2) {
    p1.then((data) => {
      console.log("p1:");
      console.log(data);
      console.log(it1.next(data));
      console.log("============+++++===============");
    });
    p2.then((data) => {
      console.log("p2:");
      console.log(data);
      console.log(it2.next(data));
      it2.next(data);
      console.log("============+++++===============");
    });

    Promise.all([p1, p2]).then(() => {
      console.log(it1.next());
      console.log(it2.next());
    });
  }
}
