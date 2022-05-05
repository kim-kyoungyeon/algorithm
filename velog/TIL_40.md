![](https://velog.velcdn.com/images/ww3ysq/post/8cf337cb-2e55-4c7d-800f-ba38468da826/image.png)

![](https://velog.velcdn.com/images/ww3ysq/post/95f1e42e-e311-41ef-a0cd-0753043f3bf1/image.png)
![](https://velog.velcdn.com/images/ww3ysq/post/05575168-04bc-4621-b2db-520a25e88f9d/image.png)
![](https://velog.velcdn.com/images/ww3ysq/post/0fee148d-d4ff-46b7-a0a4-c28aca701925/image.png)

Q 함수가 실행되는 전체과정..?

코드에서 변수선언 .함수선언시
참조값 원시값 두개가 생성됨

참조값은 ? 힙에 (메모리 저장공간)
원시값은 ? 콜스택에 (주소 값과 배열, 함수 값을 제외하고는 모두 원시 값)

각각 저장됨

- 함수의 호출은 콜 스택에 주소 값은 저장되나 값이 없다.

- 힙이란 ? Memory Heap : 메모리 할당이 일어나는 곳
  (ex, 우리가 프로그램에 선언한 변수, 함수 등이 담겨져 있음)

- 주소 값과 배열, 함수의 값은 참조 값이므로 콜스택과 힙에 저장된다.

콜스택에 있는 함수는 web API를 호출하는데
web API : AJAX, TIMEOUT, DOM 이 있음(브라우저 내장된 API)

Web API는 콜백함수를 Callback Queue에 밀어 넣는다. 큐는 FIFO 형태로 나가야함

콜스택이 비워지면 이벤트루프가 이를 감지해서 콜백큐에서 함수를 콜스택에 넣어줌

- 콜스택이 비워지는 이유?
  전체 코드 종료 후 페이지가 종료되면 전역 실행 컨텍스트가 사라진다.
  이때 전역 실행 컨텍스트 제거에 따라 스택의 값이 없기 때문에 힙에서 참조하고 있던 값이 없어지므로 가비지 컬렉터에 의해 제거된다.
  자바스크립트는 객체 생성 시 자동으로 메모리 할당, 참조된 값이 없으면 자동으로 가비지 컬렉션에 의해 메모리 해제가 된다.

차례로 나감
settimeout 이 마지막 호출됨.

- v8 엔진 자바스크립트 엔진이란?
  자바스크립트를 단일 스레드 프로그래밍 언어라 한번에 하나씩 밖에 실행할 수 없다.
  그러나 Web API, Callback Queue, Event Loop 덕분에 멀티 스레드 처럼 보여진다.

[참조한블로그](https://okayoon.tistory.com/entry/%EC%95%84%ED%8B%B0%ED%81%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-004-let-const%EC%99%80-%EB%B8%94%EB%A1%9D-%EB%A0%88%EB%B2%A8-%EC%8A%A4%EC%BD%94%ED%94%84)
