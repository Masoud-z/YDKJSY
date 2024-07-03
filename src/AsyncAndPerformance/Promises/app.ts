Promise.resolve(42)
  .then((value) => {
    console.log(value);
    return value * 2;
  })
  .then((doubledValue) => {
    console.log(doubledValue);
    return doubledValue;
  })
  .then((newVal) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(newVal * 3);
      }, 3000);
    });
  })
  .then((v) => {
    console.log(v);
    return v;
  });

fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
  method: "GET",
})
  .then((res) => {
    if (res.ok) {
      return res;
      //   return res.json();
    } else {
      console.log(res.statusText);
      console.log(res.status);
      console.log(res);
    }
  })
  .then((response) => {
    if (response) {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
