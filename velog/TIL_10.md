TIL쓰기 싫은날..금요일 !

![](https://images.velog.io/images/ww3ysq/post/e3607d17-9128-4a4e-8537-1ec6b1993879/image.png)
새로운 페어분을 또 만났다.
새로운 이직을 꿈꾸시는 그분은
나와 같은 비전공자이신데

# 독해력이 👍

아니 같은 글을 읽었는데 이해력이 남다르시다구요

😱 다들 처음 하신다고 구글링 하셨다고 하셨지만
난.. 알아버렸다구요
이미 그들의 말에 신뢰를 잃었음

> 처음이라 어렵네요 = 처음 보는 개념이지만 난 잘 한단다

앞으로 그냥 어렵다 처음이다 하시는 분은 믿고 가기로 했다.

혼자 질주 하시길래 도중도중 멈춰달라고 부탁드렸다

나중에는 빨리 끝나서 component 개념을 친절하게
바닥부터 알려 주셨다고 한다.
항상 감사드립니다.

## Achievement Goals

- [x] Create React App 소개를 보고, Create React App 이 무엇인지 대략적으로 이해할 수 있다.

* npx create-react-app 으로 새로운 리액트 프로젝트를 시작할 수 있다.
* create-react-app 으로 간단한 개발용 React 앱을 실행할 수 있다.
  리액트 랜덤 명언 앱 Hands-on을 따라 간단한 리액트 랜덤 명언 앱을 만들 수 있다.
* Create React App으로 만들어진 리액트 프로젝트 구성을 대략적으로 이해할 수 있다.
* 리액트, JSX 기본 문법을 익힌다.
* 리액트, JSX로 트위틀러를 하드 코딩할 수 있다.
* 컴포넌트를 먼저 개발하는 Bottom-up 개발 방식에 익숙해진다.
* npm script로 리액트 개발에 필요한 기본적인 툴을 사용할 수 있다.

#### " 오늘 공부한 내용 "

### 👉고차 함수

진짜 .... 하나도 모르겠음
왜 필요한 거죠?
react내에 jsx를 위한 새로운 접근법?

### 👉 React 에서 많이 쓰이는 내장 고차함수

#### 🥖 map

유동적인 데이터와 map 안의 조건식을 도출해서 최종 값을 정해준다
모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.
기존 배열을 수정하지 않는다.
함수는 직접 작성해야한다.

- 렌더링 : 반복한다?
  [링크텍스트](https://seoyoung612.tistory.com/22)

```js
array.map((item) => <div key={item.id}>{item.text}</div>);
```

map은 키와 자주쓴다고 한다.
시간효율성을 위해 순서대로가 아닌 key값을 참조해서 렌더링 해준다?
`배열을 렌더링 할 때에는 고유한 key 값이 있는것이 중요하며, 만약에 배열안에 중복되는 key 가 있을 때에는 렌더링시에 오류메시지가 콘솔에 나타나게 되며, 업데이트가 제대로 이루어지지 않게 됩니다.`

초기값이 정해진 경우 그값을 조건식과 합해서 나오게 해준다

#### 🥖 filter

true값만 새로운 배열로 반환한다.
어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
각요소가 -> 특정 논리(함수)에 따라 T?F?일때 -> 따로 분류
기존 array를 변형시키지 않음

#### 🥖 reduce

혼돈..
초기값이 있다. = 배열의 [0]
특정 방법(함수)에 따라
원하는 하나의 형태로 응축한다 (reduction)
배열 X
하나의 결과값 O

#### "어려웠던 공부"

> 구조 분해 할당

객체의 구조분해 할당 sprint review때 강사님이 엄청 강조하심
그래서.. 그게 뭔데..!

` 키를 가진 데이터 여러 개를 하나의 엔티티에 저장할 땐 객체를, 컬렉션에 데이터를 순서대로 저장할 땐 배열을 사용하죠. 개발을 하다 보면 함수에 객체나 배열을 전달해야 하는 경우가 생기곤 합니다. 가끔은 객체나 배열에 저장된 데이터 전체가 아닌 일부만 필요한 경우가 생기기도 하죠. 이럴 때 객체나 배열을 변수로 '분해’할 수 있게 해주는 특별한 문법인 구조 분해 할당(destructuring assignment) 을 사용할 수 있습니다. 이 외에도 함수의 매개변수가 많거나 매개변수 기본값이 필요한 경우 등에서 구조 분해(destructuring)는 그 진가를 발휘합니다.`

[링크텍스트](https://ko.javascript.info/destructuring-assignment)

> .value

- [ ] 언제 어떻게 쓰이는지 아직 응용 불가

- object , array, Set.values 등으로 여러모로 쓰임
- DOM 에서 value의 사용이란? 값을 찾아온다?
- 참고할 코드 w3c에서 가져옴

```js
<!DOCTYPE html>
<html>
<body>

Name: <input type="text" id="myText" value="Mickey">

<p>Click the button to change the value of the text field.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("myText").value = "Bravo";
}
</script>

</body>
</html>

```

#### "아직 궁금한 점 "

1 .Iterator 가 뭐고 Iterable 이 뭔데!
[참조1](https://victorydntmd.tistory.com/89) 2. 렌더링은 좀 더 map이랑 같이 공부 3. 자바랑 비교하며 공부하는것도 추천 4. DOM 이 쓰이는 이유 확인 5. jsx 와 <> 의 사용법

---

#### "추가 팁"

1. advanced 골은 미리 공부하기 위한 수단

2. 어려운 개념 -> mdn등에서 기본 코드 암기 해서 써보기

3. 객체 호이스팅 렌더링 단어에 대한 개념 확립
