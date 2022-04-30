array와 commands를 받았을때,
이중배열 내에 [i,j,k]가 있다고 하면
array에서 index i ~ index j 까지의 값을 추출
오름차순 정리후
추출한 값에서 k 번째 값만 배열로 output

const output= solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])

step 1
// 2,3,5,6
// 6
// 1,2,3,4,5,6,7
step 2
// 5
// 6
// 3

consoe.log(output); // [5,6,3]

//이중포문
// 새 배열 선언 = step1에서 찾는 값을 배열화 해서 이중 배열로 넣을꺼임.
//1번째 for
// let i = commands[i][0] ; i = command[i][2] ; i++ // 2,5, 점차증가한다
commands[i][0] > 4
commands[i][0] >1
newArr.map(array[i]) //array[2]array[3]array[4]array[5]
newArr.push(array[i]).sort()// 오름차순 정리
//이중 for
let j =

//
