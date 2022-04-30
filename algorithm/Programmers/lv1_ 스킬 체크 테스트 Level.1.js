function solution(array, commands) {
  debugger;

  //console.log(commands);
  let newArr = [];
  let result = [];
  console.log(commands);
  for (let i = 0; i < commands.length + 1; i++) {
    // for (let j = 0; j < commands[i].length; j++) {
    // for (let ele = commands[i][j]; ele < commands.length; ele++) {
    newArr.push(array[i]);
    console.log("nw", newArr);
    newArr.sort();
    newArr.filter((el) => newArr[commands[i][2]]);
    console.log("cms", commands[i][2]);
  }
  return newArr;
}

const output = solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
console.log(output);
