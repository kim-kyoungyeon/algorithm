//refernce code
function solution(N, stages) {
  //각스테이지 별로 남아있는 사람의 수를 세는 변수
  let stageCount = new Array(N);
  stageCount.fill(0);
  //실패율
  let failPer = [];
  let userNum = stages.length;
  // [0,0,0,0,0]  // 1,2,3,4,5  // stages > 반복되는 숫자를 count하여 넣어보겠습니다

  for (let val of stages) {
    stageCount[val - 1]++;
    //console.log("st",stageCount)
  }

  for (let i = 0; i < N; i++) {
    //stages에 있는 값을 세고 나서 전부 다 셌을때 (가감식)
    if (userNum === 0) {
      //
      failPer.push({ failPer: 0, stageNum: i + 1 });
    } else {
      failPer.push({ failPer: stageCount[i] / userNum, stageNum: i + 1 });
    }
    userNum -= stageCount[i];
  }

  // 같은 실패율 인 경우 오름차순
  //그외의 경우 내림차순

  failPer.sort((a, b) => {
    if (a.failPer === b.failPer) {
      return a.stageNum - b.stageNum;
    }
    return b.failPer - a.failPer;
  });

  return failPer.map((e) => {
    return e.stageNum;
  });
}
