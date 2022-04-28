![](https://images.velog.io/images/ww3ysq/post/a63e089b-4f3e-40d3-92f1-11d141857d04/image.png)

2주차 SWE 32기 day4 !

HTML + css본격 공부!
3일 국비에서 공부했는데 엄청 쉬운줄 알았는데..?
저게 모냐구요?
calculator
지옥에서 돌아왔다 ! 계싼끼!

페어코딩하며 운좋게 3명 코플릿을 했으나
3시간 내내 기본적인 산수도 하지 못하는 코드 분출..
css는 그나마 쉽게 쉽게 갔으나
js 코드에서 계속 오류가 났다
assertion error
type error..
js 너 그렇게 예민한 아이 아니잖아요..

여전히 순서가 뒤죽박죽

`document.querySelector(".decimal").textContent = "."; `
`firstOperend.textContent =buttonContent;`
`console.log('숫자 ' + buttonContent + ' 버튼');`

이와중에 console.log 는 왜 하는지(필요한 이유가 뭔가요?) 아직도 뜯어보는 중
국비에서 한 클론코딩이 정말 하나도 도움이 안됬구나..
분석하지 않고 습득하지 못한 코드는
단지 영타 연습에 그치지 않음을 느낀 하루였다
솔루션은 1시간 이루어졌으며
우리가 4시간 헤매던 코드를 30분만에! 설명해 주셨다고한다.

오늘도 다른 조원분들은 advanced 까지 하시던데...특히 아무것도 못한 나는 좀 우울했다.

오늘의 느낀점:

- querySelector (".myclass"); querySelector("#id"); 문법 차이 확실히.
- getElementById()와의 차이는 무엇인가?
  [링크텍스트](https://velog.io/@chloeee/getElementById-%EA%B7%B8%EB%A6%AC%EA%B3%A0-querySelector-%EC%B0%A8%EC%9D%B4%EC%A0%90)

- git> fork > pull request 방법 (private repository 인데 괜찮은걸까..?)
- .textContent 언제 어떻게 쓰나요?
  ![](https://images.velog.io/images/ww3ysq/post/df2c8bec-464f-4027-96e4-003e03a089c9/image.png) -개발자 도구 f12 debuging & tag 활용법

### Achievement Goals

- HTML을 CSS를 적용하고, JavaScript로 개발할 수 있게(Programmable) 작성할 수 있다.
- HTML이 Markup language라는 것을 이해할 수 있다.
- "구조를 표현하는 언어" 라는 의미를 자신의 언어로 표현할 수 있다.
- HTML의 구조와 문법에 대해서 이해하고 적용할 수 있다.
- Opening tag, closing tag, self-closing tag에 대해서 이해하고 있다.
- 자주 사용되는 HTML 요소(Element)가 무엇인지 알고 차이를 설명할 수 있다.
- div, span 태그가 무엇이고, 어떤 차이가 있는지 설명할 수 있다.
- ul, ol, li 가 무엇이고, 언제 사용해야 하는지 알고 있다.
- input type을 설정하여 다양한 종류의 input을 활용할 수 있다.
- 동적인 웹 어플리케이션 개발을 위한 HTML 구조를 짤 수 있다.
- 간단한 웹 페이지 기획안을 HTML 문서로 표현할 수 있다.
- id와 class를 목적에 맞게 사용하여 사람과 컴퓨터가 읽기 쉬운, 의미있는(Sementic) HTML 문서를 작성할 수 있다.
- HTML5 semantic tag를 적재적소에 사용하여 사람과 컴퓨터가 읽기 쉬운 시멘틱한 HTML 문서를 작성할 수 있다.

_오늘 코플릿 및 solution에서 공부한 점_

- 수도 코드 = 전체 흐름을 보자
- 일부 메소드나 function 사용은 먼저가 아닌 나중에 상황에 맞게 사용 해야한다!
- 예습 좀 하자

# 기본문법을 열심히 공부해야 상대방에게 방해가 되지 않는다

Error 확인

첫번째 연산항에는 값이 button 들어감-> 연산자 입력 후 -> 두번째 자리에는 들어가지 않음 (에러가..안남)
해결방안: if로 첫 번째 연산항의 조건을 만들어서 줘야함,
buttonContent // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
위와 같은 주어진 조건 잘 따져보자.

> console.log 안하면 기준 패스가 안됌
> 어려웠던 공부

```html
 </div> //사용법
<head></head>
<body></body>
<script></script> //cascade 왜이렇게 쓰는걸까요?
```

**어설프게 공부하지 말 것!**

개선점:
hoising?  
EventLister
html에서 Element & List 관계
substr / substring
slice / split
span class /div class
