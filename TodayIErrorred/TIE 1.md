### 배포 Issue & BrainStorming

- aws 추천 - code commit - 코드소스관리 원격저장소 (branch 라고 생각해도 무난할듯 )
  AMI를 만들어야 한다
  ec2 -rds -bucket 생성 (sec3 참조)
  codecommit 자격증명
  git config --global 자격증명.helper

- ngix 웹서버 설치
  (엔진 x라고 읽는다)
  apchae나 ngix 써보기..
  CloudWatch는 해당 인스턴스의 상태를 체크하며, 모니터링을 도와주고, 로그를 남기기 위한 서비스 입니다.

> CodeDeploy는 AWS CodeDeploy는 Amazon EC2, AWS Fargate, AWS Lambda 및 온프레미스 서버와 같은 다양한 컴퓨팅 서비스에 대한 소프트웨어 배포를 자동화하는 완전관리형 배포 서비스 입니다.

## 질문

- - rds 설정 공부
- - appspec 공부해보기
- - start.sh 파일이란?- > 환경변수(local의)인지 확인 필요
- - aws 자격증명이란?
- - ngix가 왜 필요한지 공부해보기

---

출처

---

[aws mysql DB 연결](https://aws.amazon.com/ko/getting-started/hands-on/create-mysql-db/)

[aws codedeploy](https://docs.aws.amazon.com/ko_kr/codedeploy/latest/userguide/reference-appspec-file.html)

[ 네이버 로그인 js 코드 api 받아오는것 구현해보기](https://developers.naver.com/docs/login/api/api.md)

[이병록의 개발 블로그](https://roka88.dev/97)

[codecommit](https://docs.aws.amazon.com/ko_kr/codecommit/latest/userguide/welcome.html)

[참조한 블로그](https://roka88.dev/97)

```jsx
const SpotifyWebApi = require('../');

 const authorizationCode =
  '<insert authorization code with user-read-private user and-read-email scopes>';

/
const spotifyApi = new SpotifyWebApi({
  clientId: '<insert client id>',
  clientSecret: '<insert client secret>',
  redirectUri: '<insert redirect URI>'
});

// When our access token will expire
let tokenExpirationEpoch;

// First retrieve an access token
spotifyApi.authorizationCodeGrant(authorizationCode).then(
  function(data) {
    // Set the access token and refresh token
    spotifyApi.setAccessToken(data.body['access_token']);
    spotifyApi.setRefreshToken(data.body['refresh_token']);

    // Save the amount of seconds until the access token expired
    tokenExpirationEpoch =
      new Date().getTime() / 1000 + data.body['expires_in'];
    console.log(
      'Retrieved token. It expires in ' +
        Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
        ' seconds!'
    );
  },
  function(err) {
    console.log(
      'Something went wrong when retrieving the access token!',
      err.message
    );
  }
```

# error 1

```jsx
 notsup Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin"} (current: {"os":"linux","arch":"x64"})
```

# solution 1

` mac 만 권한이 있음`
` npm 및 모듈 설치시 오류가 나는데 알고보니 version 문제!`

```jsx
//현재 프로젝트에 설치된 node_modules 폴더를 다 삭제하고 npm i bycript 명령어 실행하신 다음에 다시 npm i로 노드 패키지들 설치해 보시겠어요? :)

//npm install express 하지 마시고
npm cache --force clean && npm install --force node-sass
yarn add express //또는
sudo nvm install
sudo nvm {설치할 버전 } // npm, node 한번에 맞춰줌!
sudo npm install express



```

출처

---

[에러를 확인한 git문서] (https://github.com/angular/angular/issues/13935)

# error 2

```jsx
// Continually print out the time left until the token expires..
let numberOfTimesUpdated = 0;

setInterval(function () {
  console.log(
    "Time left: " +
      Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
      " seconds left!"
  );

  // OK, we need to refresh the token. Stop printing and refresh.
  if (++numberOfTimesUpdated > 5) {
    clearInterval(this);

    // Refresh token and print the new time to expiration.
    spotifyApi.refreshAccessToken().then(
      function (data) {
        tokenExpirationEpoch =
          new Date().getTime() / 1000 + data.body["expires_in"];
        console.log(
          "Refreshed token. It now expires in " +
            Math.floor(tokenExpirationEpoch - new Date().getTime() / 1000) +
            " seconds!"
        );
      },
      function (err) {
        console.log("Could not refresh the token!", err.message);
      }
    );
  }
}, 1000);
```

# soultion2

Spotify API 문서 확인하며 token을 어떻게 보내는지 확인했어야 했다.
아쉽게도 api 문서는 활용할수 없었다.

Issue 1 : db와 연결을 어떻게 하는지 도대체가 감이 안잡히고
Issue2 : spotify 하나의 계정으로만 로그인이 되서 다른 유저는 접근 자체가 불가능 했다.
