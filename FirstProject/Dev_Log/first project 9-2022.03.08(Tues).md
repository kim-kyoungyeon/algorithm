![](https://images.velog.io/images/ww3ysq/post/67efab94-a246-4bcc-b599-b75166cbc9ea/2022-03-03_1.43.13.png)

- teammeber

  - 2 back -end
  - 2 front -end

  ***

- leader = 나 입니다 (back-end)😂 ~~개망함~~

---

- 주제 - 음악 공유 커뮤니티 -스포티파이 (클론같지만 아닌듯한)유사 코딩.

---

- 현재 status

  - 쿠키의 이슈 클라이언트에서 난리남
  - 클라이언트가 코드를 수정시 서버에 크랙이 난다고 함?
  - dev log를 대충적은듯 하다. 아마 똑같은 이슈로 인해 나만 뒤쳐져서 그런듯
  - post controller 와 배포를 시작했다.

  ***

- 아쉬운점
  - 기록을 제때 안하면 기억이 가물가물하다.
    <br>
  - module 이슈 발생했으나 제대로 처리를 못한듯 함

# err1

```jsx
 node:events:368
      throw er; // Unhandled 'error' event
     ^
Error: listen EACCES: permission denied 0.0.0.0:80
    at Server.setupListenHandle [as _listen2] (node:net:1317:21)
    at listenInCluster (node:net:1382:12)
    at Server.listen (node:net:1469:7)
    at Function.listen (/home/k2y/sec3/im-sprint-practice-deploy/server/node_modules/express/lib/application.js:618:24)
    at Object.<anonymous> (/home/k2y/sec3/im-sprint-practice-deploy/server/app.js:138:5)
    at Module._compile (node:internal/modules/cjs/loader:1101:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
Emitted 'error' event on Server instance at:
    at emitErrorNT (node:net:1361:8)
    at processTicksAndRejections (node:internal/process/task_queues:83:21) {
  code: 'EACCES',
  errno: -13,
  syscall: 'listen',
  address: '0.0.0.0',
  port: 80
}
```

# solution

- 위 문제는 계속 아래 코드로 임시 방편으로 처리함.
- 왜 Ubuntu 에서 반복해서 생기는지에 대한 해결책 필요.

```
sudo lsof -i :8080
sudo kill -9 [PID]
```

# erro2

```jsx
/home/ubuntu/.pm2/logs/server-error.log last 15 lines:
0|server   |     syscall: 'connect',
0|server   |     address: '127.0.0.1',
0|server   |     port: 3306,
0|server   |     fatal: true
0|server   |   },
0|server   |   original: Error: connect ECONNREFUSED 127.0.0.1:3306
0|server   |       at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1161:16) {
0|server   |     errno: -111,
0|server   |     code: 'ECONNREFUSED',
0|server   |     syscall: 'connect',
0|server   |     address: '127.0.0.1',
0|server   |     port: 3306,
0|server   |     fatal: true
0|server   |   }
0|server   | }

/home/ubuntu/.pm2/logs/app-out.log last 15 lines:
/home/ubuntu/.pm2/logs/app-error.log last 15 lines:
1|app      |     at listenInCluster (node:net:1382:12)
1|app      |     at Server.listen (node:net:1469:7)
1|app      |     at Function.listen (/home/ubuntu/im-sprint-practice-deploy/server/node_modules/express/lib/application.js:618:24)
1|app      |     at Object.<anonymous> (/home/ubuntu/im-sprint-practice-deploy/server/app.js:135:5)
1|app      |     at Module._compile (node:internal/modules/cjs/loader:1101:14)
1|app      |     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
1|app      |     at Module.load (node:internal/modules/cjs/loader:981:32)
1|app      |     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
1|app      |     at Object.<anonymous> (/home/ubuntu/.nvm/versions/node/v16.13.0/lib/node_modules/pm2/lib/ProcessContainerFork.js:33:23) {
1|app      |   code: 'EACCES',
1|app      |   errno: -13,
1|app      |   syscall: 'listen',
1|app      |   address: '0.0.0.0',
1|app      |   port: 80
1|app      | }
```

# solution

- errno -111 이부분은 현재 파악중

# err 3

```
npx sequelize-cli db:seed:undo 를 입력해도 입력했던 seed가 레코드에서 사라지지 않고 다시 중복 생성되는 경우가 발생하곤 함
```

# solution

- 임시 처리
- db 데이터를 수정시 매번 drop -> create- > migration을 진행해야 하는데 이부분에 대한 해결책 필요함

0.  기존 데이터베이스 삭제하시고 다시 만들자

```jsx
drop database
create database
npm run start
```

1.  env 파일 생성후 다음 코드 입력

```jsx
DATABASE_USERNAME = root;
DATABASE_PASSWORD = DATABASE_NAME = "MusicFlower";
ACCESS_SECRET = secret;
```

2.  Seed 반영 위해서 다음 명령어 입력

```jsx
npx sequelize-cli db:seed:all
```

> 뭔가 제대로 안될 때
> 데이터베이스 삭제하시고 다시 만드시는 게 나을지도.

# err4

```jsx
login:1 Access to XMLHttpRequest at 'http://ec2-3-35-27-251.ap-northeast-2.compute.amazonaws.com/login' from origin 'http://musicflowerclient.s3-website.ap-northeast-2.amazonaws.com' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

- frontend 에서 리포트 -> aws에서cors에러 있습니다

# solution 4

```jsx
app.use(
  cors({
    origin: [`${server}`, `${localhost}`],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);
```

- 위 origin에서 `/` 이렇게 되어있던 것을 `${server}`, `${localhost}`로 수정한것으로 기억함.

---

- 개선 점

1.  `기록은 매일 하자 <- 계속 불가능`
2.  ~~백엔드가~~ `내가 스피드업 하자 `
3.  서버랑 클라이언트 속도를 비등비등하게 해줘야 한다.
4.  DB에 대한 고민을 다같이 해결해야 한다.

### ❗ errono 오류 처리하기!

---
