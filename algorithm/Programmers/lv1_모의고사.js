//reference code 입니다.
function solution(answers) {
  var answer = [];
  answers = answers.join("").split("");
  //console.log("answers",answers);

  let num1 = "12345"; //5
  let num2 = "21232425"; //8
  let num3 = "3311224455"; //10

  //중복값을 제거합니다.
  let n1 = answers.length / 5;
  n1 = parseInt(n1 + 1); //소수점 처리시 +1 값처리합니다.
  //이부분이 잘 이해가 되지 않음 --추가 테스트케이스시 통과못하는 경우가있다.
  console.log("n1", n1);

  // 각 값이 반복됨/ 반복횟수만큼 나누어준다.
  let n2 = answers.length / 8;
  console.log("n2", n2);

  n2 = parseInt(n2 + 1);
  console.log("n2", n2);

  let n3 = answers.length / 10;
  n3 = parseInt(n3 + 1);

  num1 = num1.repeat(n1).split("");
  console.log("num1", num1);

  num2 = num2.repeat(n2).split("");
  console.log("num2", num2);
  num3 = num3.repeat(n3).split("");
  console.log("num3", num3);

  //수포자들의 맞춘 점수 입니다.
  let point1 = 0;
  let point2 = 0;
  let point3 = 0;

  for (let i = 0; i < answers.length; i++) {
    console.log(answers);

    if (num1[i] === answers[i]) {
      point1 += 1;
      console.log("p1", point1);
    }
    if (num2[i] === answers[i]) {
      point2 += 1;
    }
    if (num3[i] === answers[i]) {
      point3 += 1;
    }
  }

  let x = Math.max(point1, point2, point3);
  if (x === point1) {
    answer.push(1);
  }
  if (x === point2) {
    answer.push(2);
  }
  if (x === point3) {
    answer.push(3);
  }
  console.log("x:", x);

  return answer;
}

const output = solution([1, 3, 2, 4, 2]);
console.log(output);
//output 	[1]
