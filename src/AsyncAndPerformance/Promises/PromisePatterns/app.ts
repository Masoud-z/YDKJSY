async function PromiseAll() {
  const [a, b] = await Promise.all([43, 21]);
  console.log(a, b);
}

PromiseAll();
