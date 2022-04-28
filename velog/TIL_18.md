허허 기수이동 n년차
고인물이되어버린 기념으로
nodejs 와 npm 이 말썽을 부렸다.
너도 고인물이니 얼른 업데이트를 하여라.. 뭐 이런 의미인가

### error 1

- npm run submit 할 경우 아래와 같은 에러가 나옴

![](https://images.velog.io/images/ww3ysq/post/d8b1f542-d981-494b-8542-5b9b903f622d/2022-01-10______________2.png)

- 해결 1

```jsx
npm i colors@1.4.0
```

- 해결 2

```jsx
/bin/bash -c "$(curl -fsSL https://codestates-content.s3.ap-northeast-2.amazonaws.com/npm-registry/registry.sh)"

npm install , npm run submit
//을 실행하고, 과제 제출이 잘 되는지 확인해주세요.

rm ~/.npmrc
//혹시 인증 관련 문제로 잘 제출되지 않는다면 ~/.npmrc 파일을 삭제합니다.
```

### error 2

- babel cli/core /node를 깔려고 하는데 계속해서 upgrade 하라는 오류가 나옴.

![](https://images.velog.io/images/ww3ysq/post/8420500e-79cc-45b1-a47e-6ee5ea614e7f/image.png)

- 기존 해결2로 run submit 진행시 별문제 없었으나 분명 npm이 제대로 업데이트 안된것이 확인됨

```jsx
$ npm -v
6.14.4
$ sudo npm cache clean --force
npm does not support Node.js v10.19.0
You should probably upgrade to a newer version of node as we
can't make any promises that npm will work with this version.
You can find the latest version at https://nodejs.org/
/usr/local/lib/node_modules/npm/lib/npm.js:32
 #unloaded = false
```

~~쉬이발~~

- 해결 1
  [링크텍스트](https://kimce.tistory.com/11)
  위 오류가 계속남
  일단 cache clean force가 먹히질 않고
  n 모듈이 깔리지 않음

- 해결 2
  [링크텍스트](https://monee1001.tistory.com/36)
  패배를 인정하고 깔끔하게 지우란다..
  나 리눅스라 어떻게 지우는지 모르는데.. ?
- 해결3

```
   $sudo apt-get --purge remove node

   $sudo apt-get --purge remove nodejs
```

[링크텍스트](https://wrjeoung.tistory.com/30)
감사합니다 능력자님..
위 purge를 이용해 강제 삭제 드디어 가능!

- 해결4

## CURL 설치

노드를 설치하기에 앞서 설치에 필요한 커맨드라인툴을 설치해야 한다.

CURL은 서버와 통신할 수 있는 커맨드 명령어 툴이자 웹개발에 매우 많이 사용되고 있는 무료 오픈소스다. 우분투에 CURL 을 설치한다.

```
$ sudo apt-get install -y curl
```

## 1. Apt 패키지 매니저 이용

apt 패키지 매니저를 사용해 우분투 패키지 저장소에 기본으로 들어가 있는 Node.js 를 다운받는다.

```
$ sudo apt update
```

## 노드js 다운로드

```
$ sudo apt install nodejs
```

## 설치가 완료되었는지 확인

```
$ nodejs -v
```

## 노드 패키지 매니저 npm 다운로드

```
$ sudo apt install npm
```

```
3.NVM을 이용한 설치
Node.js version manager 인 nvm 을 이용해 설치할수도 있다. nvm 을 이용하면 Node.js 의 여러 버전 설치 및 환경 관리가 용이하다.

깃허브 프로젝트 페이지 에 들어가 메인에 있는 Readme 에서 curl 명령어를 복사한다. 이 명령어를 입력하면 최신버전 nvm 설치 스크립트를 얻을 수 있다.

복사한 명령을 bash 에 전달하기 전에 스크립트를 검사해 원하지 않는 항목이 있는지 검사할 수 있다. |bash 를 제외한 앞부분 명령을 입력하면 체크할 수 있다.

$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh
아래 명령을 입력해 현재 계정에 nvm 스크립트를 설치한다.

$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
nvm 스크립트를 사용하려면 아래 source 명령어를 입력해 .bashrc 파일을 수정한 값을 바로 적용되도록 한다.

$ source ~/.bashrc
source 명령어
리눅스에서 source 명령어는 스크립트 파일을 수정한 후에 수정된 값을 바로 적용하기 위해 사용하는 명령어다. 위에서 수정한 /etc/bashrc 파일은 유저가 로그인할 때 읽어들이는 파일이기 때문에 로그아웃 후 로그인하거나 리눅스를 재시작해야 적용된다.

아래 명령어를 입력해 설치 가능한 노드 버전을 볼 수 있다.

$ nvm list-remote
Output
   . . .
       v14.13.1
       v14.14.0
       v14.15.0   (LTS: Fermium)
       v14.15.1   (LTS: Fermium)
       v14.15.2   (LTS: Fermium)
       v14.15.3   (LTS: Fermium)
       v14.15.4   (Latest LTS: Fermium)
        v15.0.0
        v15.0.1
        v15.1.0
        v15.2.0
        v15.2.1
        v15.3.0
        v15.4.0
        v15.5.0
        v15.5.1
  . . .
위 버전중 원하는 버전을 골라 설치 가능하다.

$ nvm install v13.6.0
설치되어 있는 nvm 버전들을 확인할 수 있다.

$ nvm list
Output
->      v13.6.0
default -> v13.6.0
node -> stable (-> v13.6.0) (default)
stable -> 13.6 (-> v13.6.0) (default)
. . .
현재 활성화되어 있는 버전은 -> v13.6.0 와 같이 표시된다.

latest long-term support version 을 사용하고 싶다면 아래를 입력한다.

$ nvm install lts/erbium
nvm 방식을 사용하면 nvm use 를 이용해 아래와 같이 활성화중인 노드버전을 변경할 수 있다.

$ nvm use v13.6.0
Now using node v13.6.0 (npm v6.13.4)
npm 업데이트
npm은 Node.js에 포함되어 있어 Node.js 설치 시 자동 설치된다. 따라서 별도의 설치가 필요없다. npm 은 Node.js보다 자주 업데이트되므로 최신 버전이 아닐 가능성이 있기 때문에 최신 버전으로 npm을 업데이트할 수 있다.

$ npm install -g npm@latest
$ npm -v
Node.js REPL
REPL(Read Eval Print Loop)은 Node.js는 물론 대부분의 언어(Java, Python 등)가 제공하는 가상환경으로 간단한 코드를 직접 실행해 결과를 확인해 볼 수 있다.

아래 명령어를 입력해 프롬프트가 >로 변경되면 자바스크립트 코드를 실행해 볼 수 있다.

$ node
자바스크립트 파일을 실행하려면 node 명령어 뒤에 파일명을 입력한다. 파일 확장자 .js는 생략할 수 있다.

$ node index.js
CTRL + C 키를 두번 입력하면 Node.js REPL을 종료시킨다.

Node.js REPL에 관한 더 자세한 내용은 링크 에 있다.
```

[출처 : nvm을이용한nodejs,npm설치
](https://velog.io/@ywoosang/Node.js-%EC%84%A4%EC%B9%98)
세상엔 정말 많은 능력자가 있다!

현재 우분투 nodejs 및 npm version

```jsx
$ npm -v
8.3.1
nodejs -v
v10.19.0
```

~~쉬이발~~
아직 nodejs는 업데이트 안되는 상태
좀 더 구글링하다보니, 너무 버전이 낮은경우 홈페이지에서 직접 가서 업그레이드 해야한다고 적혀있는 블로그를 발견!
[링크텍스트](https://bny64.github.io/2020/12/14/update-latest-nodeversion/)
[링크텍스트](https://nhj12311.tistory.com/189)

[링크텍스트](https://github.com/nodesource/distributions#deb)
위 블로그의 글참조, curl을 이용해 lts 버전을 받아서 설치했으나 version 그대로인 상태

```
$ nodejs -v
v10.19.0
$ node -v
v16.13.2
```

_해결이 된건가..?_ === 아님
