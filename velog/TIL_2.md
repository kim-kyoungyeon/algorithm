![](https://images.velog.io/images/ww3ysq/post/7c54b5e4-6eab-43f3-84b3-556e6b8ae82a/image.png)
1주차 SWE 32기 day2 !
페어분이 나와 비슷하다는 매우 큰 착각이 있었다.
시행착오입니다.
나보다 잘 함
샘 나

오늘의 느낀점:  
자바 스크립트 () 를 끝에 붙이지 않는다 대신 ;
선언과 할당의 차이
매개변수의 확실한 개념
함수, 조건문의 '조건'scope

Achievement Goals
함수 Intro
1 함수가 "작은 기능의 단위"라는 것을 이해할 수 있다.

2 함수 선언을 위해 필요한 keyword, name, parameter, body에 대해 이해할 수 있다.

3 함수 선언과 호출의 기초적인 작동 원리를 이해할 수 있다.
4 함수가 선언되어 함수 표현식이 변수에 담기는 과정을 설명할 수 있다.
5 함수의 결과값이 변수에 할당되어 담기는 과정을 설명할 수 있다.
6 함수 기초, 함수 실습
7 함수의 호출과 리턴에 대해서 이해하고, 실제 코드로 작성하여 활용할 수 있다.
8 함수 그 자체(func)와, 함수의 호출(func())를 구분하여 사용할 수 있다.
-->마지막 solution 시간때 크루님께서 친절히 설명해주심.
9 매개변수(parameter)와 전달인자(argument)를 구분하여 사용할 수 있다.
-->아직 잘 모름
10 같은 기능을 하는 함수를 선언식, 표현식, 화살표 함수로 바꾸어 표현할 수 있다.
--> 연습필요

_오늘 코플릿 및 solution에서 공부한 점_

JS에서

- ()의 사용 > 함수사용시 + 사칙연산 할때, 우선연산자 설정시에만 !
  문법 : 함수 함수이름(매개변수)  
  전달인자(argument)=param, 인수의 최대 개수는 엔진마다 다름
  [링크텍스트](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/function)

* 함수 선언할때 변수 선언시 괄호가 사용되지 않는다

- parseFloat이란? > 필터 , float(실수)형태로 변환시켜주는 함수.
- NaN = 넘버값이 아님. (Not-A-Number)
  [링크텍스트](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN)

- Number 함수에서 falsy값 ? -> 0
- let 변수 = undefined > 한 상태!
- let 변수 = 함수 > 함수(식) 그 자체를 부른다
  (변수에 함수가 할당되어 있어 변수가 함수화 된 상태)
- 변수를 사용 하려면 선언부터 해야한다.

<<한글화 공부>>
= : 할당한다
let : 선언한다

<<영어 공부>>
대괄호[] Bracket
& Ampersand
물결 ~ tilde
` Grave 그래이브
느낌표 ! exclamation
[링크텍스트](https://heropy.blog/2019/04/24/html-css-starter/)

- 문자 몇번째 있는지 확인하는 함수? indexOf ('문자열')
- .includes 함수 > boolean 값 (True/False)
- split 함수 = ' '
- slice > array 배열에서도 사용
- slice 처음값 포함되고, 끝값 포함X
- substring > function 타입으로 호출된다.
- MECE 미씨 >
- 참고로 조건문은 꼼꼼하게 = 시간반복문은 성능

Error 확인
Assertion Error : undefied / to eqaul 구문이 잘 나옴.
RangeError: 범위밖의 함수/변수등을 불렀을 때 나온다.

어려웠던 공부

```
//수를 입력받는다 -> 인자 : num = number 타입
//10과같은지 여부  --> boolean 으로 리턴하려면
//리턴
```

```
function equalsTen(num) // 숫자 파라미터를 eqaulsTen이라는 임시 함수가 사용함
return num ===10; //boolean으로 자연스럽게 나오는 이유는?
```

개선점:
boolean 타입 리턴
인자 개념 ~~확인~~
XX의 형태 (형변환과 같은 말인가?) ~~타입=형태~~
hoising? ~~확인~~
substr 의 substring차이
[링크텍스트](http://chongmoa.com/javascript/275354)
[링크텍스트](https://hianna.tistory.com/340)
slice ?
