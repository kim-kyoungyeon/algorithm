// process.stdin.setEncoding("utf8");
// process.stdin.on("data", (data) => {
//   const n = data.split(" ");
//   // console.log("n",n)
//   const a = Number(n[0]),
//     b = Number(n[1]);
//   // console.log("a",a);
//   // console.log("b",b);
//   let star = "*";

//   for (let i = 0; (i = b); i++) {
//     for (let j = 1; j < a; j++) {
//       star += "*";
//     }
//     star += "\n";
//   }
//   console.log(star);
// });

// //시간 초과..

//재도전
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    // 열
    //i을 선언해주고 몇줄(b)만큼 반복
    let str = ""; //출력할 변수 선언
    for (let j = 0; j < a; j++) {
      //행
      // j선언후 별을 한줄에 몇개 찍을지 반복
      str = str + "*"; //출력할 변수에 별을 담는다
    }
    console.log(str); // 출력
  }
});
