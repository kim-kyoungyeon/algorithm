// 1
function reverseArr(arr) {
  // TODO: 여기에 코드를 작성합니다.
  /**
   *  reverseArr([1, 2, 3]);
   *            3 [1,2] arr [0] concat arr[arr.length -1]
   *              3, 2 [1]
   *              [] + 3, 2, 1 concat  -. 새 배열에 할당
   *  arr=0
   * 2 3 1
   *      2
   * [arr[n-1]
   *  , arr[n-2],
   *  ... , arr[0]]
   * n 이 0이 되면 탈출
   * n은 arr.length
   */

  if (arr.length === 0) {
    //빈배열되면 탈출 1
    return [];
  }

  // if(arr[arr.length-1] === undefined) {
  //   return arr2;
  // }

  const arr2 = arr[0]; // 숫자
  // slice 복제 배열 나머지 숫자

  return reverseArr(arr.slice(1)).concat(arr2); // 재귀는 arr3 -> [] 마지막에 cocnat arr2 [4,3,2,1]
}

// 2
function findMatryoshka(matryoshka, size) {
  //객체 사이즈
  // TODO: 여기에 코드를 작성합니다.
  // recursive case
  if (matryoshka.size === size) {
    //객체 length 를 할수없음
    return true; // size로 정의함
  } else if (matryoshka.matryoshka && matryoshka.size > size) {
    //마트료시카.키 값고 마트료시카.size 값이 > 기존 size보다 클때
    return findMatryoshka(matryoshka.matryoshka, size);
  } //return 재귀함수 값과 사이즈를 중첩시켜 작아지게 된다. 객체안 객체 matryoshka.matryoshka 계속 갱신한다.둘다

  // base case
  return false;
}

//3
