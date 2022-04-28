![](https://images.velog.io/images/ww3ysq/post/9ac8ca84-f2c0-4f62-b090-83ad8dd07456/image.png)

2주차 SWE 32기 day6

리눅스 및 git !
nvm npm 차이를 sprint review때 들었으나
전혀 이해를 못한 상태
리눅스 좋다는 말 취소야..

오전엔  
스페이스키가 먹통인 상태의 에러가 다시 발견됨
왜죠?
파워 구글링을 했으나 'space bar error' 는 combination의 경우를 제외하고 특정키만 먹통이되는.. 이런 error는 나오지 않았다고 한다.
case 1 한영키 변환은 잘되나 스페이스바 먹통
-> 기존 ubuntu setting >한글(Hangul/fcitx) 키보드를 추가 하면 영어 고정이 되어 한영키 변환 안됨
-> 한영 104키 넣어도(fctix) 한영 변환안됨
과정 1: purge를 이용해 설치한 fcitx 키보드를 지운다 -> reboot - > 스페이스바 먹통

[링크텍스트](http://brainquadro.blogspot.com/2010/06/ibus-nabi-0997.html)

과정 2: ibus 및 fcitx 완전삭제 -> 이후 fcitx 재설치
-> 스페이스 바 먹통

!주의! [링크텍스트](https://dowhateveryouwant.tistory.com/19)
위와 같이 dependency까지 다 날라가는 경우가 있다고 해서
`$sudo install ccsm`  
`$ccsm`
나는 위 프로그램이 없어서 인스톨 후 실행함
(ccsm = CompizConfig setting manager) 창을 활용하자.
블로그에서 체크되어있는 것들 똑같이 체크함.
(보이지 않는 응용프로그램은 가볍게 무시하자)
기본적인 것들 체크하고 진행할 것.

과정3 : 여전히 스페이스 바 먹통 -> 매핑 하기로 함. ->reboot 했으나 여전히 먹통

```linux
$xev
$sudo gedit ~/.Xmodmap
keycode 108 = Hangul
keycode 65 = NoSymbol

//출처: https://www.elex.pe.kr/entry/우분투-한글키-한자키-맵핑 [Elex]
```

keycode 65 에 NoSymbol값으로 나옴
매핑하면서 멘붕옴.
왜 스페이스 기능이 없지..?
일단 매핑후 reboot -> 스페이스바 먹통.
[링크텍스트](https://www.elex.pe.kr/entry/%EC%9A%B0%EB%B6%84%ED%88%AC-%ED%95%9C%EA%B8%80%ED%82%A4-%ED%95%9C%EC%9E%90%ED%82%A4-%EB%A7%B5%ED%95%91)

솔루션 : 꿀과같은 블로그 글을 찾아냄. 감사합니다

> > `linux $ xmodmap -e 'keycode 65 = space' `
> > 위와 같이 입력하면 65 키코드에 스페이스 기능이 구현된다!

출처 : [링크텍스트](https://www.elex.pe.kr/entry/%EC%9A%B0%EB%B6%84%ED%88%AC-%ED%95%9C%EA%B8%80%ED%82%A4-%ED%95%9C%EC%9E%90%ED%82%A4-%EB%A7%B5%ED%95%91)

1 day 1 commit 은 못하더라도 블로깅은 하자!

# To Do List

- css 태그 및 레이아웃 공부 정리할 것
- html 기본 + 활용 문법 정리할 것
- calculator advanced ver 주말에라도 업로드 및 분석하기
- js for, while ,if 테스트 못 푼 문제 분석

* 절대경로 상대경로 차이 확인해보기(리눅스)
* rw-rw-r 머선뜻이고?
* dependency 가 모죠?

#오늘의 느낀점:#

- update 후엔 upgrade 하기 일주일 간격으로

## Achievement Goals

- nvm, Nodejs, npm을 설치하고, 버전을 확인할 수 있다.
- 명령어 node를 이용해 JavaScript 파일을 실행할 수 있다.
- 스프린트 시작 전 package.json 파일을 확인하고, npm install을 사용할 수 있다

_오늘 코플릿 및 solution에서 공부한 점_
코플릿은 어제 패스하여 오늘은 생략함

drwxr-xr-x : 이게 무슨뜻인지 공부해보았다.
이성적으로 받아들였지만 감정적으로 받아들이지 못한 상태다.

[링크텍스트](https://kldp.org/node/22747)
[링크텍스트](https://munsonghabnida.tistory.com/58)
[링크텍스트](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=robotluv1226&logNo=220618363082)

> # "세상에 천재들이 이렇게 많습니다"

~~"리눅스 잼있어!"~~

" 기본문법을 열심히 공부해야 상대방에게 방해가 되지 않는다 "
" 예습 좀 하자 "
" 너의 머리는 복습을 해야한단다.."

Error 확인 - 오늘은 이론 공부하는 날이라 없음

어려웠던 공부

```linux
왜 linux로 git 제출 하죠?

```

**어설프게 공부하지 말 것!**

개선점:
hoising?  
EventLister
html에서 Element & List 관계
substr / substring
slice / split
span class /div class  
npm
~~module ?~~
dependency
