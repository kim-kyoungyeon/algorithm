//내코드

//reference code 입니다.
function solution(id_list, report, k) {
  let counts = new Map(); //신고 횟수를 세는 변수
  //신고한 reprot를 합산함.
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });

  //console.log("rs",reports)

  //bad  report
  for (const bad of reports) {
    console.log("b", bad);
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }
  console.log("cnts:", counts);
  //good report

  let good = new Map();

  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      //중복값제거
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
    console.log("g:", good);
  }
  let answer = id_list.map((a) => good.get(a) || 0);
  console.log("aws", answer);
  return answer;
}
