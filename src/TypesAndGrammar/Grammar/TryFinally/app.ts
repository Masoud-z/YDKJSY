function notRunning() {
  function old() {
    async function testFinally() {
      await new Promise((resolve) =>
        setTimeout(() => {
          console.log("test inside setTimeout");
          return resolve;
        }, 500)
      )
        .then(() => {
          console.log("test inside then");
        })
        .finally(() => {
          console.log("test inside Finally");
        });
    }

    testFinally()
      .then(() => {
        console.log("Inside then");
      })
      .finally(() => {
        console.log("Inside finally");
      });

    function foo() {
      try {
        console.log("inside try");
        return 42;
      } finally {
        console.log("Hello from finally");
      }
      console.log("never runs");
    }

    console.log(foo());

    function fooThrow() {
      try {
        console.log("inside fooThrow try");
        return 42;
      } finally {
        throw "Oops!";
      }
      console.log("never runs");
    }

    console.log(fooThrow());
  }

  function foo() {
    try {
      return 42;
    } finally {
      // no `return ..` here, so no override
    }
  }
  function bar() {
    try {
      return 42;
    } finally {
      // override previous `return 42`
      return;
    }
  }
  function baz() {
    try {
      return 42;
    } finally {
      // override previous `return 42`
      return "Hello";
    }
  }
  console.log(foo()); // 42
  console.log(bar()); // undefined
  console.log(baz()); // Hello
}

{
  function foo() {
    try {
      console.log("This will run first.");

      return "If we have return in finally this will never run but otherwise this will run in the end.";
    } finally {
      console.log("Then this will run second.");
      // return "This is return in finally.";
    }

    console.log("never runs");
  }
  console.log(foo());
}
