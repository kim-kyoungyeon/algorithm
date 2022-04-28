> ~~_TIL 08 어디갔나요? 글쎄요..._~~

새로운 페어분을 만났다.
은'혜'로우신 '원'대한 그분은
여자 개발자로서 완벽한 체력, 정신력, 능지까지 모두 다 가진듯 했다.
3시간 연속,
점심시간 이후 4시간 연속으로 단 10분도 쉬지않았음.
~~이런 누추한 곳에 귀한 분이??~~

물 받고, 화장실 가는 걸 빼곤 개념, 알고리즘
계속 알려주심 ㅋㅋㅋ
분명 같이 시작한 거 같은데?
미리 해버리시고는 또 내 코드 충고까지 ㅋㅋ

어제부터 나의 바닥이 보여진 것 같아
슬퍼져서 오늘은 신세한탄 함.

![](https://images.velog.io/images/ww3ysq/post/3d888114-1f47-4d71-b566-4746a099851e/image.png)
나는 비전공자라고 오늘 문밍(~~문과라 죄송해요~~) 아웃도 했어.
마음이 약해지신 그 분은 어제보단 조금 약하게 몰아붙여주셨음.

![](https://images.velog.io/images/ww3ysq/post/fdf0fde1-ab03-40b5-a006-f3c2e23eef16/image.png)

## Achievement Goals

- 객체 기초, 퀴즈, 실습
- 배열과 객체의 구조를 이해하고 언제, 어떻게 사용하는 지 이해할 수 있다.
- 배열과 객체의 특징을 구분하여 사용할 수 있다. (순서를 가진다, 의미를 가진다)
- 배열과 객체의 특징에 따라 실생활에서 언제 쓰는지 이해할 수 있다.
- 객체 속성(property)의 추가, 조회, 변경, 삭제를 자유자재로 할 수 있다.
- 객체 속성 조회법 두 가지, dot notation과 bracket notation의 차이를 이해한다.
- 객체 실습 - 2의 tweet.content와 tweet['content']의 차이가 무엇인지 설명할 수 있다.
- dot notation을 이용한 객체 할당 방식을 능숙하게 다룰 수 있다. obj.a = "hello"
- 객체 속성 삭제를 위한 delete 키워드를 사용할 수 있다.
- 객체를 위한 for문 for ... in 문을 이해하고 다룰 수 있다.
- 배열과 객체, 반복문을 응용하여 능숙하게 대량의 정보를 다룰 수 있다.

---

#### " 오늘 공부한 내용 "

> for 문 기초

```
파블로스 개처럼 현재 블로그의 주인은
반복문만 보면 침을 질질 흘리며
for(초기값; 조건문;증감식)을 외치고
이를 한치의 오차도 없이 변형하지 못하는 재주가 있다
```

```js
let i =0 ;
for(i=0; i<arr.length; i++);
-->
for (let i=0; i<arr.length; i++);
-->
for( let i in propertyobj)
  //for(변수 in 객체)
-->
for( let i of obj)
  //for (변수 of 객체)

```

#### "어려웠던 공부"

> for 문 변형식

for ... in :객체 / property까지 순회/ key값 반복
[링크텍스트](http://hacks.mozilla.or.kr/2015/08/es6-in-depth-iterators-and-the-for-of-loop/)
for... of : 배열(요소)순환/Iterable한 객체 반복/

-> 공통점 : 첫번째 값을 지정할 수 없음

forEach : Array만 반복할 수 있는 forEach
![](https://images.velog.io/images/ww3ysq/post/f0468f6a-7176-4495-be10-ea7e0220a917/image.png)
(key: value가 다양하게 output 된다 : String, number, Array그자체..)
Object.entries() : 오늘 review 할 때 나온 메소드
[링크텍스트](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
페어분들의 의견과 mdn 에서의 console 값을 보면
여러 형태의 객체값을 key: value 형태로 만들어 낼 수 있다.
따로 형변환 안해줘도 무관.

[링크텍스트](<(https://velog.io/@eomttt/for-...in-for-...of-%EC%B0%A8%EC%9D%B4)>)

#### "아직 궁금한 점 "

1 .Iterator 가 뭐고 Iterable 이 뭔데!
[참조1](https://victorydntmd.tistory.com/89)

2 . agora - Iterator 관련 문의
[답변](https://gist.github.com/qodot/ecf8d90ce291196817f8cf6117036997)

---

#### "추가 팁"

1. console은 활용많이 할것.
   구글 console (f12)
   or
   codesandbox 에서 각 반복문 조건식마다
   console.log 사용해서 값을 계속 유추 할것

```js
console.log(); // = java System.out() 와 같은 개념
```

2. 의사 코드 pseudocode 슈도코드
   의식의 흐름을 명확하게 하여
   간단 명료하게.
   흐름은 정확하게.
   변수를 지정해야하는거나,
   조건을 따져야 하는 건지, 반복을 해야하는 건지
   큰 흐름을 짜고 이후 세부적인 흐름을 짜보자

3. 문제 풀기 보단 개념 확립 먼저
   백준 알고리즘 / 프로그램 lv1 추천하나,
   일단 기본적인 개념이 약해보이니
   개념 먼저
   특히 배열 , 객체 구분과
   for문 사용법 이 약해보인다
   Java의 collection 유사개념이 있으니
   함께 참조해 공부해 볼 것

4. 추천 받거나 괜찮은 블로그들

- https://victorydntmd.tistory.com/

- https://codesandbox.io/s/dry-cookies-7ygo1?file=/src/index.js
