![](https://images.velog.io/images/ww3ysq/post/29adde3e-762b-4527-b6fb-e5b4f97f1395/KakaoTalk_20220118_175203684.png)
_어휴 언제 적냐_

외우기 위한 공식

- 약수 알고리즘

```jsx
//최소값 MIN 약수 아록리즘
export function getDivisor (value)
if(typeof value !== 'number') return;

let result =[]

for(let i=1; i<=value; i++){
  if(value %i === 0){
    result.push(i);
  	}
}
return result.toString();
}
console.log(getDivisor(30)) //1,2,3,5,6..30
console.log(getDivisor(12)) //1,2,3,4,6,12
```

- 다음은 최대공약수 구하는 로직입니다.

```jsx
export function GCD(value, value2) {
  if (typeof value1 !== "number" || typeof value2 !== "number") {
    return;
  }
  // value1과 value2 중 큰 값을 기준으로 값을 선택
  let num = value1 > value2 ? value1 : value2;
  let max;

  for (let i = 1; i <= num; i++) {
    if (value1 % i === 0 && value2 % i === 0) {
      max = i;
    }
  }

  return max;
}
console.log(getGCD(280, 30)); // 10
console.log(getGCD(12, 4)); // 4
```

- 심플버전 (절대값사용)

```jsx
const num1 = 252;
const num2 = 105;
const findGCD = (num1, num2) => {
  let a = Math.abs(num1);
  let b = Math.abs(num2);
  while (a && b && a !== b) {
    if (a > b) {
      [a, b] = [a - b, b];
    } else {
      [a, b] = [a, b - a];
    }
  }
  return a || b;
};
console.log(findGCD(num1, num2));
```
