### 📖 DOM 이란?

### 📖 HTML에 JavaScript 적용하려면 ?

`<script>` 태그를 이용합니다
![](https://velog.velcdn.com/images/ww3ysq/post/6fe7acb6-ba74-41d5-b714-e96e42fb42b7/image.png)

_웹 브라우저가 작성된 코드를 해석하는 과정에서 `<script>` 요소를 만나면, 웹 브라우저는 HTML 해석을 잠시 멈춥니다. ( HTML 해석을 잠시 멈춘 웹 브라우저는 `<script>` 요소를 먼저 실행합니다. `<script>` 요소는 등장과 함께 실행된다는 사실을 꼭 기억하세요._

### 📖 `<span>태그 사용법`

| 태그 |       속성       |      비고       |
| :--: | :--------------: | :-------------: |
| span |     display      | diplay요소 변경 |
|      |      width       |    가로크기     |
|      |      height      |    세로크기     |
|      | background-color |   배경색 변경   |
|      |      color       |  글자 색 변경   |
|      |    font-style    | 글자 형식 변경  |
|      |      margin      |  외부 여백설정  |
|      |     padding      |  내부 여백설정  |
|      |      border      |   테두리 설정   |

1. display는 <span>태그의 요소를 변경할 수 있는 속성입니다. <span>태그의 display속성 defalut값은 inline으로 되어있습니다.

2. width는 <span>태그의 가로 사이즈를 지정해줄 수 있는 속성입니다. 이 속성을 사용하기 위해서는 display속성값을 inline에서 block으로 바꿔줘야합니다.

3. height는 <span>태그의 세로 사이즈를 변경시킬 수 있는 속성입니다. 이 속성을 사용하기 위해서는 display속성값이 inline일 경우에는 적용되지 않습니다.

4. background-color는 <span>태그의 배경색을 지정해줄 수 있는 속성입니다.

5. color는 <span>태그안에있는 글자의 색상을 지정해주는 속성입니다.

6. font-style는 <span>태그안의 글자 형식을 지정해주는 속성입니다.

7. margin <span>태그와 레이아웃간의 여백(외부여백)을 지정해주는 속성입니다.

8. padding <span>태그의 내부여백을 지정해주는 속성입니다.

9. border <span>태그 외곽에 테두리를 줄 수 있는 속성입니다.

### 📖 DOM 구조

_body가 가장 상위에 있고, 아래에 여러 구성요소가 부모-자식 관계를 가지고 있습니다. 이 관계를 그려보면 아래와 비슷한 구조가 만들어집니다._

![](https://velog.velcdn.com/images/ww3ysq/post/a1a7b299-f020-4095-aae1-5f41bb81114c/image.png)

```jsx
html>
  <body> //부모
    <div id="nav"> //자식 엘리먼트
      <div class="logo"></div>
      <div class="menu-wrapper">
        <div class="menu">menu</div>
        <div class="menu">menu</div>
        <div class="menu">menu</div>
        <div class="profile-photo">photo</div>
      </div>
    </div>
    <div id="news-contents"> //자식 엘리먼트
      <div class="news-content-wrapper">
        <div class="news-picture">news-picture</div>
        <div class="news-title">news-title</div>
        <div class="news-description">news-description</div>
      </div>
    </div>
    <div id="footer">footer</div> //자식 엘리먼트
  </body>
</html>

```

설명 :
트리 구조라고 합니다. 트리 구조의 가장 큰 특징은 부모가 자식을 여러 개 가지고, 부모가 하나인 구조가 반복되는 점입니다. 즉, 부모가 가진 하나 또는 여러 개의 자식 엘리먼트를 조회하는 코드를 작성한다면, 여러 번 반복해서 실행하는 코드가 필요합니다.

```jsx
consoel.log(document.body);
consoel.dir(document.body);
consoel.dir(document.body.children[1]);
// document.body.children 의 첫 번째 엘리먼트를 조회
```

### 📖 v8 엔진?

- 자바스크립트 엔진?
  자바스크립트 코드를 실행하는 프로그램으로, 자바스크립트 코드를 마이크로프로세서가 이해할 수 있게 더 낮은 수준의 언어(기계어)로 변환해주는 것이다.
- v8 엔진을 쓰게된 계기?
  다른 자바스크립트 엔진은 웹 특성상 유저와 상호작용을 위해 즉시성이 있는 인터프리터 방식을 사용하는데, 이는 코드가 많아질수록 속도가 느려진다는 단점이 있기때문에 이 점을 보완해서 자바스크립트 코드를 좀 더 효율적으로 번역하는 V8 엔진이 나오게 되었다.
- 특징
  Google Chrome, Node.js에서 주로 사용한다
  오픈소스가 ECMAScript 규격의 C++로 작성되어있다
  클라이언트(Chrome)와 서버(Node.js)측 애플리케이션을 모두 사용한다

### 📖 JavaScript Engine AST

_JavaScript는 인터프리터 되는 과정을 거치기 전에, 해당 소스코드를 parser -> Abstract Syntax Tree 형태로 바꾸게 됩니다._

![](https://velog.velcdn.com/images/ww3ysq/post/e5c7d77a-ca5d-49d7-a8a3-85c1935a8830/image.png)

### 📖 자바스크립트 & 어셈블리 엔진

![](https://velog.velcdn.com/images/ww3ysq/post/d97d3845-ddfb-41e6-89f8-593c6cd61841/image.png)

- 순서 (인터프리터 + 컴파일러)
  1 소스 코드를 가져와서 가장 먼저 파서(Parser)에게 넘긴다.
  2 소스 코드를 분석한 후 AST(Abstract Syntax Tree), 추상 구문 트리로 변환하게 된다.
  3 AST를 그림에 나와있는 Ignition에게 넘기는데 이 친구는 자바스크립트를 바이트 코드(Bytecode)로 변환하는 인터프리터이다

` 인터프리터 - 코드가 실행시 줄단위로 차례로 실행해서 한줄읽고 실행하는 방식으로, 동일한 동작을하는 함수가 여러번 나오더라도 이를 컴파일 하는 과정을 거치게 됩니다. 따라서 이는 매우 비효율적이다`

Q 왜 인터프리터를 쓰나요?
원본 소스 코드보다 컴퓨터가 해석하기 쉬운 바이트 코드로 변환함으로써 원본 코드를 다시 파싱(Parsing)해야하는 수고를 덜고 코드의 양도 줄이면서 코드 실행 때 차지하는 메모리 공간을 아끼려는 것이다.

4 바이트 코드를 실행함으로써 우리의 소스 코드가 실제로 작동하게 된다
5 자주 사용되는 코드는 TurboFan으로 보내져서 Optimized Machine Code, 즉 최적화된 코드로 다시 컴파일된다.
6 사용이 덜 된다 싶으면 Deoptimizing 하기도 한다.

## ✍ Advanced Challenge

- CreateDocumentFragment를 활용하여, 더 효율적으로 DOM을 제어하는 방법
- HTML5 template tag 사용법을 이해할 수 있다.
- element와 node의 차이를 이해할 수 있다.
- children과 childNodes의 차이를 이해할 수 있다.
- remove와 removeChild의 차이를 이해할 수 있다.
- 같은 엘리먼트를 appendChild 하면, 기존 엘리먼트를 복사할까?
- 좌표 정보 조회를 할 수 있다. - offsetTop...
- 크기 정보 조회를 할 수 있다. - offsetWidth...

* 프로젝트에서 쓴 react-router-dom
* virtual Dom 개념 공부
