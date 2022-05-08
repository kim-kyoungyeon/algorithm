# error 1

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

# error 2

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

3.NVM을 이용한 설치
Node.js version manager 인 nvm 을 이용해 설치할수도 있다. nvm 을 이용하면 Node.js 의 여러 버전 설치 및 환경 관리가 용이하다.

깃허브 프로젝트 페이지 에 들어가 메인에 있는 Readme 에서 curl 명령어를 복사한다. 이 명령어를 입력하면 최신버전 nvm 설치 스크립트를 얻을 수 있다.

복사한 명령을 bash 에 전달하기 전에 스크립트를 검사해 원하지 않는 항목이 있는지 검사할 수 있다. |bash 를 제외한 앞부분 명령을 입력하면 체크할 수 있다.

```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh
```

아래 명령을 입력해 현재 계정에 nvm 스크립트를 설치한다.

`$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash `

nvm 스크립트를 사용하려면 아래 source 명령어를 입력해 .bashrc 파일을 수정한 값을 바로 적용되도록 한다.

`$ source ~/.bashrc`

source 명령어
리눅스에서 source 명령어는 스크립트 파일을 수정한 후에 수정된 값을 바로 적용하기 위해 사용하는 명령어다. 위에서 수정한 /etc/bashrc 파일은 유저가 로그인할 때 읽어들이는 파일이기 때문에 로그아웃 후 로그인하거나 리눅스를 재시작해야 적용된다.

아래 명령어를 입력해 설치 가능한 노드 버전을 볼 수 있다.

```
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
```

위 버전중 원하는 버전을 골라 설치 가능하다.

`$ nvm install v13.6.0`
설치되어 있는 nvm 버전들을 확인할 수 있다.

`$ nvm list`

Output
-> v13.6.0
default -> v13.6.0
node -> stable (-> v13.6.0) (default)
stable -> 13.6 (-> v13.6.0) (default)
. . .
현재 활성화되어 있는 버전은 -> v13.6.0 와 같이 표시된다.

latest long-term support version 을 사용하고 싶다면 아래를 입력한다.

`$ nvm install lts/erbium`
nvm 방식을 사용하면 nvm use 를 이용해 아래와 같이 활성화중인 노드버전을 변경할 수 있다.

`$ nvm use v13.6.0`
Now using node v13.6.0 (npm v6.13.4)
npm 업데이트
npm은 Node.js에 포함되어 있어 Node.js 설치 시 자동 설치된다. 따라서 별도의 설치가 필요없다. npm 은 Node.js보다 자주 업데이트되므로 최신 버전이 아닐 가능성이 있기 때문에 최신 버전으로 npm을 업데이트할 수 있다.

`$ npm install -g npm@latest`
`$ npm -v`

Node.js REPL

REPL(Read Eval Print Loop)은 Node.js는 물론 대부분의 언어(Java, Python 등)가 제공하는 가상환경으로 간단한 코드를 직접 실행해 결과를 확인해 볼 수 있다.

아래 명령어를 입력해 프롬프트가 >로 변경되면 자바스크립트 코드를 실행해 볼 수 있다.

`$ node`
자바스크립트 파일을 실행하려면 node 명령어 뒤에 파일명을 입력한다. 파일 확장자 .js는 생략할 수 있다.

`$ node index.js`
CTRL + C 키를 두번 입력하면 Node.js REPL을 종료시킨다.

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

_해결이 된건가?_ === 아님
👹

# Error00

여전히 nodejs -v 과 node -v 이 다름

```jsx
$ node -v
v16.13.2
$ nodejs -v
v10.19.0

```

충돌문제라 생각해서 완전삭제하겠다는 마음으로
다시구글링

## error 3

[링크텍스트](https://gompro.postype.com/post/1737968)
[링크텍스트](https://jjeongil.tistory.com/1275)

- 해결
  에러의 원인-->

sudo apt으로 깔았다가 curl을 이용해 nvm으로 깔았다하며
충돌이 일어났음

nvm 으로 현재 다운받은 상태

```jsx
npm -v
8.3.1
$ node -v
v16.13.2
 nodejs -v

Command 'nodejs' not found, but can be installed with:

sudo apt install nodejs

```

현재 nodejs는 따로 install 하지 않았음.

## error 4

![](https://images.velog.io/images/ww3ysq/post/8e7ad540-72da-4e45-a7fc-9571d12ff80a/image.png)

와 새로운문제발생!

- 해결

```jsx

sudo apt-get --purge remove nodejs
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs

//You need to manually create a symlink /usr/bin/node. Shortcut for bash compatible shells:

sudo ln -s `which nodejs` /usr/bin/node

//Or if you use non-standard shells, just hardcode the path you find with which nodejs:

sudo ln -s /usr/bin/nodejs /usr/bin/node
```

그렇다고 한다
참조는 stack overflow
[링크텍스트](https://stackoverflow.com/questions/26320901/cannot-install-nodejs-usr-bin-env-node-no-such-file-or-directory)

[링크텍스트](https://stackoverflow.com/questions/18130164/nodejs-vs-node-on-ubuntu-12-04)

버전은 여전히 10.19.0 이다?
도대체 업데이트 어떻게 하냐.
synlink를 하라고 하는데 나같은경우

```jsx
$ sudo ln -s /usr/bin/nodejs /usr/bin/node
ln: failed to create symbolic link '/usr/bin/node': File exists
```

# Solution

- 원인분석 : nodejs 와 node 차이를 몰라서 생긴 에러
- 비교 :
  - npm ? <br/>
    npm은 Node.js로 만들어진 모듈을 웹에서 받아서 설치하고 관리해주는 프로그램입니다.
  - nodejs? <br/>
    Node.js는 chrome의 Javascript엔진인 V8이 Desktop App으로 추출된 것이다.
    Node/js는 터미널 프로그램(원도우 cmd, mac terminal 등)에서 node를 입력하여 브라우저 없이도 실행할 수 있게 됐다.

> Node.js의 장점

1. 비동기 처리로 인해 매우 빠른 고성능 서버 구현

2. 한 가지 언어만으로도 서버-클라이언트 모두 개발

3. 구글의 최신화된 VB Engine을 이용

4. 적은 양의 자원으로 일을 처리

5. 높은 커뮤니티 이용율 및 참여율

   - node ?
     node -v 명령어를 통해. Node.js 설치 유무를 알 수 있다.
     여기서 보이는게 node.js (서버쪽) 버전.

   - nvm? <br/>
     node.js의 버전 관리자. node.js의 각 버전을 유지하면서 시스템을 구성해야 하는 경우를 위해 사용한다. 같은 시스템 안에서 여러 node.js를 사용하기 위해 버전별로 Node.js 환경을 격리시키는 역할 = nvm 은 Node.js를 설치하는 툴

- 현재 상태
  ![](https://velog.velcdn.com/images/ww3ysq/post/944bf866-a066-4475-aafd-4fb26cdc89a5/image.png)

- 해결법\_ Final : nvm 이나 n등 , Nodejs의 패키지(라이브러리) 관리자인 npm 을 이용하여 Nodejs 버전 관리 패키지인 'n'을 설치합니다 설치 후 nvm use [버전] 하면 자동으로 맞춰준다. node와 npm을 설정 할 필요가 없음

  - n 을 이용한 방법

`npm install -g n`

![](https://velog.velcdn.com/images/ww3ysq/post/3f2b5c6f-1285-4d56-a7f6-f78a1432d972/image.png)

```jsx
n --lastest // 최신 버전 확인
n --stable  // Stable 버전 확인
n --lts     // LTS 버전 확인


n '버전'  // 버전을 지정하여 설치 ex)n 0.10
n lastest // 최신 버전을 설치
n stable  // Stable 버전을 설치
n lts     // LTS 버전을 설치
```

- - nvm을 이용한 방법

```jsx
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

```
. ~/.nvm/nvm.sh
```

```
nvm install node
```

```
//test
node -e "console.log('Running Node.js ' + process.version)"
```

- 현재 상황
  ![](https://velog.velcdn.com/images/ww3ysq/post/977f901c-1e05-4814-9c23-ff0ff7a3fd85/image.png)

[노드버전관리](https://intrepidgeeks.com/tutorial/node-briefly-introduce-the-management-nvm-and-n-of-js-version)
[노드aws](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html)
[노드 깃](https://github.com/nvm-sh/nvm)
