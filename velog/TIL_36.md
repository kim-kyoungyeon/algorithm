# TIL :Event Loop , Event Capturing

이벤트 루프란?
js 엔진
메모리 힙: 메모리가 저장되는 장소
콜백> 함수를 부르는게 동전쌓이듯이 쌓임
논블로킹 > 여러작업이 비동기적으로 실행되는데
web api에 다른 작업들이 불러짐
콜백 > 웹에이피아이 (dom, ajax(xmlhttprequedst), timeout(setimeout)
콜백 큐 > on click, 이벤트... ->
이벤트 루프를 통해 call 백이 된다
콜스택 > 안으로 함수가 들어간다
자바스크립트가 콜스택을 비운다 > 브라우저 콘솔에 함수가 찍힘 (콜백 비워짐)

웹 api 에 저장되어있떤 set timeout 넘겨줬던 콜백이 queue 로 넘겨진다 (타이머의 시간이 다 흐른후) 콜백큐에 들어온 타이머 함수 cb1이 콜백큐에 쌓임 -> 이벤트 루프는 콜스택이 비어있으면 콜백 큐에 있는 콜백을 콜스택으로 전달한다.
이벤트 루프는 콜스택과 콜백큐를 보며 콜백을 계속 넘겨주는 역할?
console.log(cb1) 실행후 -> 콜백 비워짐 -> cb1

이벤트 버블링?
이벤트 흐름 중 하나

이벤트 캡처?
이벤트 흐름 중 하나
상위 돔객체에서 하위 객체로 흘러가는 형태 이벤트 캡처

1. 캡처링
   윈도우 -> 다큐먼트 -> html 태그 -> 바디 태그 -> 테이블 태그 -> -> t 바디 태그 -> tr 태그-> td 태그
   이벤트가 윈도우에서 캡처링 과정을 거쳐 td 태그까지 간다
2. 타깃 단계
   타겟 태그 까지 온 이벤트 핸들러 -> 이후에 타켓 페이지로 전달된다 실제 타깃요소로 전달이된다
3. 버블링 단계
   이벤트가 상위 요소로 전파된다
   이벤트 핸들러 호출?

브라우저 - > 이벤트 루프란?
js 엔진
메모리 힙: 메모리가 저장되는 장소
콜백> 함수를 부르는게 동전쌓이듯이 쌓임
논블로킹 > 여러작업이 비동기적으로 실행되는데
web api에 다른 작업들이 불러짐
콜백 > 웹에이피아이 (dom, ajax(xmlhttprequedst), timeout(setimeout)
콜백 큐 > on click, 이벤트... ->
이벤트 루프를 통해 call 백이 된다
콜스택 > 안으로 함수가 들어간다
자바스크립트가 콜스택을 비운다 > 브라우저 콘솔에 함수가 찍힘 (콜백 비워짐)

웹 api 에 저장되어있던 set timeout(cb1) 넘겨줬던 콜백이 queue 로 넘겨진다 (타이머의 시간이 다 흐른후) 콜백큐에 들어온 타이머 함수 cb1이 콜백큐에 쌓임 -> 이벤트 루프는 콜스택이 비어있으면 콜백 큐에 있는 콜백을 콜스택으로 전달한다.
이벤트 루프는 콜스택과 콜백큐를 보며 콜백을 계속 넘겨주는 역할?
console.log(cb1) 실행후 -> 콜백 비워짐 -> cb1

이벤트 버블링?
이벤트 흐름 중 하나

이벤트 캡처?
이벤트 흐름 중 하나
상위 돔객체에서 하위 객체로 흘러가는 형태 이벤트 캡처

1. 캡처링
   윈도우 -> 다큐먼트 -> html 태그 -> 바디 태그 -> 테이블 태그 -> -> t 바디 태그 -> tr 태그-> td 태그
   이벤트가 윈도우에서 캡처링 과정을 거쳐 td 태그까지 간다
2. 타깃 단계
   타겟 태그 까지 온 이벤트 핸들러 -> 이후에 타켓 페이지로 전달된다 실제 타깃요소로 전달이된다
3. 버블링 단계
   이벤트가 상위 요소로 전파된다
   이벤트 핸들러 호출?

공부 ing

# Error

- git error :

```
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in Final_Project/dev_log4.md.
```

- 원인:이는 맥 또는 리눅스를 쓰는 개발자와 윈도우 쓰는 개발자가 Git으로 협업할 때 발생하는 Whitespace 에러다
  유닉스 시스템에서는 한 줄의 끝이 LF(Line Feed)로 이루어지는 반면, 윈도우에서는 줄 하나가 CR(Carriage Return)와 LF(Line Feed), 즉 CRLF로 이루어지기 때문이다. 따라서 어느 한 쪽을 선택할지 Git에게 혼란이 온 것이다.

- 레퍼런스 : [CRLF will be replaced by LF (혹은 반대) 핸들링하는 방법](https://blog.jaeyoon.io/2018/01/git-crlf.html)

- 해결 : core.autocrlf 를 켜는 것!

  - 윈도우 경우 : 시스템 전체가 아닌 해당 프로젝트에만 적용하고 싶다면 —global 을 빼주면 된다.

```
git config --global core.autocrlf true
```

    - 리눅스나 맥을 사용하고 있는 경우, 조회할 때 LF를 CRLF를 변환하는 것은 원하지 않을 것이다. 따라서 뒤에 input이라는 명령어를 추가해줌으로써 단방향으로만 변환이 이루어지도록 설정한다.

```
git config --global core.autocrlf true input
```

- 추가 해결 : 변환 기능을 원하지 않고, 그냥 에러 메시지 끄고 알아서 작업하고 싶은 경우에는 아래 명령어로 경고메시지 기능인 core.safecrlf를 꺼주면 된다.

```
git config --global core.safecrlf false
```

# Error 2

```
$ git config --global core.autocrlf true

warning: core.autocrlf has multiple values
error: cannot overwrite multiple values with a single value
       Use a regexp, --add or --replace-all to change core.autocrlf.
```

- 원인 : git config를 애시당초 설정하지 않고 사용해서 생긴 오류인 듯.
- 해결 : 전부 해당값으로 바꿔준다. user.name을 바꾸는 경우에도 동일한 형식으로 사용하면 된다.

```
//예시
git config --global --replace-all user.email "new@mail.com"

```

```
//내 경우
 git config --global --replace-all core.autocrlf true
```

- 출처 : [Git cannot overwrite multiple values with a single value 해결 방안
  ](https://pjs21s.github.io/cannot-overwrite-multiple-values/)
