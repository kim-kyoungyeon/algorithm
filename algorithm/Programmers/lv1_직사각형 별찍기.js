process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  // console.log("n",n)
  const a = Number(n[0]),
    b = Number(n[1]);
  // console.log("a",a);
  // console.log("b",b);
  let star = "*";

  for (let i = 0; (i = b); i++) {
    for (let j = 1; j < a; j++) {
      star += "*";
    }
    star += "\n";
  }
  console.log(star);
});

//시간 초과..
