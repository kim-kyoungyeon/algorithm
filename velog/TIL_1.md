![](https://images.velog.io/images/ww3ysq/post/f361d022-72dc-4754-a3e1-0c596d59d833/image.png)
1주차 SWE 32기의 시작!
첫주차 첫만남 페어는 나와 비슷한 실력을 가진 분이여서
나름 안심.등심

오늘의 느낀점:  
기존 해왔던 자바 문법 공부 확실히 할 것
자바 스크립트 기본 문법은 알려주지 않으니 독학해야한다.

Achievement Goals >

변수 Intro
1 프로그래밍은 데이터 처리를 하는 것임을 이해한다.

2 변수 사용은 데이터를 편리하게 저장하고 꺼내 쓰는 것임을 이해한다.
3 변수의 선언과 값의 할당에 대해서 설명하고 코드로 작성할 수 있다.
4 값으로 변환된 표현문이 변수에 할당되어 담기는 과정을 설명할 수 있어야 한다.

변수 기초, 변수 실습
1 자바스크립트에서 변수의 선언과 값의 할당에 대해서 설명할 수 있다.
2 변수 선언과 값 할당에 사용되는 용어에 대해서 정확하게 알 수 있다.
3 =가 "같다"라는 의미가 아니라 할당연산자임을 이해할 수 있다.
4 num = num + 1이 "같다"라는 의미가 아니라 값을 할당하는 것임을 설명할 수 있다.

오늘 코플릿에서 페어 코딩 공부한 점

= 와 : 할당한다, 주소값을 지정한다
== 의 차이 : 값이 같다  
 function{return} : 순서
function - let - return (x)
function - return - let (o)

변수
let const : 중복 변수를 인정하지 않는다.
var : 중복 변수 가능 (오류)
let var : 중복값 가능
const 할당값 다시 못줘..?
[링크텍스트](https://medium.com/@yeon22/javascript-var-let-const%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-9fab5c264c9c)
[링크텍스트](https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d)
function 변수명() : 임의의 함수
Number란 형변환 함수/ 래퍼객체/ 생성자 Number()

[링크텍스트](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)

Error 확인
Assertion Error : undefied / to eqaul 구문이 잘 나옴.
RangeError: 범위밖의 함수/변수등을 불렀을 때 나온다.

어려웠던 공부

```
function convertToNumber(anything) {
return Number(anything);
```

개선점:
Number 함수에 대한 정확한 인식
인자 개념
XX의 형태 (형변환과 같은 말인가?)
hoising?
