> ![](https://images.velog.io/images/ww3ysq/post/834062b2-9418-42af-b3b3-ecbbc28a09fc/image.png)

2주차 SWE 32기 day5 (실은 하루 빼먹음)

리눅스의 시작!
벌써요..?
실은 html + css calculator를 공부하면서
3인이서
고급 버전까지의 공부를 하다가 다음날 아침 어깨부터 이어지는 끔찍한 두통에 시달리게 되었다.

1 day 1 commit 은 못하더라도..
블로그에 간단하게라도 기록이라도 남겨야 할 것 같아
플래너 식으로 진행 하기로 했다.

plan : 계획하다
계획은 모다?모다? 바뀔수 있으니까~

# To Do List

- css 태그 공부 정리할 것
- html 기본 문법 정리할 것
- calculator advanced ver 주말에라도 업로드 및 분석하기
- js for, while ,if 테스트 못 푼 문제 분석

* 절대경로 상대경로 차이 확인해보기(리눅스)
* rw-rw-r 머선뜻이고?

#오늘의 느낀점:#

- OS: #62~20.04.1-Ubuntu
  `$uname -a`
- ctrl + alt + t -> 터미널 실행
- rm 제거키 cd 실행키 sudo 일시적 관리자 권한 cp copy
- mv move
  `$cp a.txt b.txt `
  a-> b a에서 b이름으로 복사된다
  `$cp a.txt b`
  a-> b a폴더가 b디렉토리로 복사된다
  `$cp a.txt b/def c.txt `
  a-> b -> c a폴더가 b디렉토리 안의 c파일이름으로 복사된다
  `$cp -r abc xyz `
  1 abc가 디렉토리이고 xyz라는 디렉토리가 x -> abc 디렉토리를 xyz로 이름을 바꾸어 복사합니다.
  abc가 디렉토리이고 xyz라는 디렉토리가 o - > abc 디렉토리를 xyz 디렉토리 안에 복사합니다.  
  `$cp - r xyz/abc`
  [링크텍스트](https://www.manualfactory.net/10805)
- mkdir = Making directory
  `$mkdir <옵션> <생성할이름>`
  `$mkdir --version`//버전 확인
- rm-f = rm
  -rf 강제종료
  [링크텍스트](https://studymake.tistory.com/241)
  [링크텍스트](https://truecode-95.tistory.com/43)

- pwd : Print Working Directory --> 현재 어떤 위치에 있는지 (절대위치:~)
- ../ 상위 폴더(상단다이렉토리) ./ 현재위치(폴더,디렉토리) / 루트
- ls :리스트 (목록확인) 활용법 많음
  `$ls -al // a`
  `$ls -l // 한줄로 길게 7개 요소 나온다 `
  [링크텍스트](https://jhnyang.tistory.com/13?category=815412)
  ![](https://images.velog.io/images/ww3ysq/post/71f982a6-ce88-485c-bc4c-1396ce564836/image.png)

### Achievement Goals

- 리눅스 터미널을 실행할 수 있다.
- CLI를 이용한 작업과 GUI를 이용한 작업이 동일함을 이해할 수 있다.
- GUI의 변경사항을 CLI로 확인할 수 있다.
- CLI의 변경사항을 GUI로 확인할 수 있다.
- 리눅스 터미널에서 기본적인 명령어를 사용할 수 있다.
- pwd: 현재 위치를 확인하는 명령어
- mkdir: 새로운 폴더를 생성하는 명령어
- ls: 폴더나 파일의 목록을 출력하는 명령어
- nautilus (Ubuntu), open (macOS): 현재 폴더를 파일 탐색기로 여는 명령어
- cd: 폴더에 진입하는 명령어
- touch: 새로운 파일을 생성하는 명령어
- cat: 파일의 내용을 터미널에 출력하는 명령어
- rm: 폴더나 파일을 삭제하는 명령어
- mv: 폴더나 파일의 위치를 이동하거나, 이름을 변경하는 명령어
- cp: 폴더나 파일을 복사하는 명령어
- sudo: 관리자 권한을 이해할 수 있다.
- 명령어를 사용할 때, 등장하는 키워드에 대해 이해할 수 있다.
- /: 루트 디렉토리
- ~: 홈 디렉토리
- 절대 경로와 상대 경로의 차이를 이해할 수 있다.
- 절대 경로의 시작이 루트 디렉토리(/)인 것을 이해할 수 있다.
- 상대 경로의 시작이 현재 디렉토리(.)인 것을 이해할 수 있다.
- 텍스트 에디터 nano를 이용해 파일을 수정하고, 저장할 수 있다.

_오늘 코플릿 및 solution에서 공부한 점_

"제시된 문제를 뜯어서 꼼꼼하게 보고 여러방향으로 모색하자"

"리눅스 잼있어!"

" 기본문법을 열심히 공부해야 상대방에게 방해가 되지 않는다 "
" 예습 좀 하자 "

Error 확인

#### TypeError

> TypeError: Cannot read property '3' of undefined

해결방안: 배열을 만들어주었으나 인자가 배열 범위를 벗어날 때 = AIOB 오류
[링크텍스트](https://hashcode.co.kr/questions/2899/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B9%84%EA%B5%90%EC%97%B0%EC%82%B0%EC%9E%90%EB%A5%BC-%EC%93%B0%EB%8A%94%EB%8D%B0-%EC%98%A4%EB%A5%98%EA%B0%80%EB%82%A9%EB%8B%88%EB%8B%A4)

#### 우분투 fcitx 오류

case 1 gui gnome 으로 바꾼뒤부터 한글키가 먹통됌
해결책 : 설정 > 접근성 > 설치된 언어 설정 >ibus 설정 dmf fcitx 설정 변경 하고 리부팅
일시적으로 해결
[링크텍스트](https://velog.io/@ddubbu/%EC%9A%B0%EB%B6%84%ED%88%AC-20.04-%ED%95%9C%EA%B8%80-%EC%9E%85%EB%A0%A5-%EB%B0%A9%EB%B2%95-feat.-fcitx)
case 2 쒸프뜨키까 안빠쪄요
해결책 : fcitx 삭제 후 재 다운로드 이후 리부팅 하면 일시적 해결됌
[링크텍스트](https://velog.io/@ddubbu/%EC%9A%B0%EB%B6%84%ED%88%AC-20.04-%ED%95%9C%EA%B8%80-%EC%9E%85%EB%A0%A5-%EB%B0%A9%EB%B2%95-feat.-fcitx)

case 3 fcitx 도 먹통이고 한글도 먹통이고 한영 변환이 안돼요
해결책 : 여기까지 왔다. 뿌리까지 완전 삭제 진행함.
[링크텍스트](https://askubuntu.com/questions/705319/cannot-uninstall-fcitx-without-causing-a-login-loop)

case 4 한글 영어 입력문제는 제거되었으나
매번 한/ 영키 변경시마다 디스플레이창에서 키를 선택해 엔터를 눌르거나 shift+space를 눌러야 한다.
좀 더 고쳐보자.
현재 :설정 > 언어 설정>키보드 없음 설정함
해결책 : 터미널 > vim > 키값 변경..
`$sudo install vim $cd /usr/share/X11/xkb/keycodes $sudo vim evdev`
참고한 블로그 :
[링크텍스트](https://m.blog.naver.com/akima95/221782676272)

reboot 하고도 이상있을시 다른 케이스 쓰겠음

어려웠던 공부

```linux
node.js //
npm module //npm 모듈은 왜 다른 js 파일때마다 모듈 깔아줘야하나요..?
range(첫째항, 마지막항 , 등차/등비)
{range}.range() // 이거 어떻게쓰는거예요..?
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
module ?
