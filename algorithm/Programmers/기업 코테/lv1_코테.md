function solution(sentence) {
let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let code = sentence.split('')
console.log('cd',code)
const result = [];
//console.log(alphabet)

for (let i = 0; i < code.length; i++) {
if (code[i] !== undefined ) {
code.push(code[i]);
console.log("cd", code[i]);
}
}
for(let j = 0; j<alphabet.length;j++){
if (!alphabet.includes(code[i])) {
result.push(code[i]);

    }
    console.log("re", result);
    return result;

}

return "perfect";
}

//let output = "bjkqvwxz";
let sentence =
"His comments came after Pyongyang announced it had a plan to fire four missiles near the US territory of Guam.";

let output = solution(sentence);
console.log(output);

// let sentence ="His comments came after Pyongyang announced it had a plan to fire four missiles near the US territory of Guam."
// let result = "bjkqvwxz"

// let setence= "Jackdaws love my big sphinx of quartz"
// let result = "perfect"

/\*\*\*

- 문제 설명
  모든 알파벳을 사용하는 문자열을 완벽한 문자열이라고 합니다.

예를 들어서 "His comments came after Pyongyang announced it had a plan to fire four missiles near the US territory of Guam." 라는 문장이 주어 진다면 이 문장에는 b,j,k,q,v,w,x,z를 사용하지 않기 때문에 완벽한 문자열이 아닙니다. 반면에 "Jackdaws love my big sphinx of quartz"라는 문자열은 모든 알파벳을 사용하고 있으므로 완벽한 문자열입니다.

문자열 sentence가 매개변수로 주어질 때, 완벽한 문자열을 만드는 데 필요한 문자들을 return하도록 solution함수를 완성해주세요.

제한사항
sentence의 길이는 5,000 이하입니다.
sentence는 알파벳, 공백 그리고 특수문자(아스키코드)로 이루어져 있습니다.
sentence가 완벽한 문자열이 되기 위해 필요한 알파벳 소문자들을 오름차순으로 정렬후 하나의 문자열로 합쳐서 return 해주세요.
sentence가 완벽한 문자열인 경우 "perfect"를 return 해주세요.
입출력 예 #1
"His comments came after Pyongyang announced it had a plan to fire four missiles near the US territory of Guam." 라는 문장에는 b,j,k,q,v,w,x,z 가 없습니다.

- \*/

테스트 1
입력값 〉
"His comments came after Pyongyang announced it had a plan to fire four missiles near the US territory of Guam."
기댓값 〉
"bjkqvwxz"
실행 결과 〉
실행한 결괏값 ""이(가) 기댓값 "bjkqvwxz"와(과) 다릅니다.
테스트 2
입력값 〉
"Jackdaws love my big sphinx of quartz"
기댓값 〉
"perfect"
실행 결과 〉
실행한 결괏값 ""이(가) 기댓값 "perfect"와(과) 다릅니다.
