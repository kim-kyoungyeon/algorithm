## err1

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

## solution

- 원인분석: 우분투 linux라는 특이성
- status : pm2로 start 시켰는데 자꾸 status가 errored
- process :
  `pm2 show `
  ![](https://velog.velcdn.com/images/ww3ysq/post/473caf2e-780b-4a09-bef6-23a01cbb78bb/image.png)

`cat [앱이릅].log`

    ![](https://velog.velcdn.com/images/ww3ysq/post/0e4c43b7-eb01-4df2-8f94-1e9bf96749c6/image.png)

- 종류 : 권한 관련 문제

- 해결 완료 : 포트번호를 8080으로 변경하고 다시 시도해보니 pm2가 에러를 뱉지 않고 잘 작동.
- 해결 2
  1. 포트 80을 사용하지 말고 8080과 같은 다른 포트에서 실행하고, 아래 명령으로 80을 해당 포트로 리디렉션 해서 사용하시거나

`sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080 `

2. apache나 nginx 등을 이용해서 80번 포트로 받고 해당 내용을 node.js 쪽으로 전달 해주시면 될 것 같습니다.

## err2

```jsx
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at new NodeError (node:internal/errors:371:5)
    at ServerResponse.setHeader (node:_http_outgoing:576:11)
    at ServerResponse.header (/home/k2y/sec3/Music-Flower/server/node_modules/express/lib/response.js:776:10)
    at ServerResponse.send (/home/k2y/sec3/Music-Flower/server/node_modules/express/lib/response.js:170:12)
    at /home/k2y/sec3/Music-Flower/server/server.js:53:19
    at Layer.handle_error (/home/k2y/sec3/Music-Flower/server/node_modules/express/lib/router/layer.js:71:5)
    at trim_prefix (/home/k2y/sec3/Music-Flower/server/node_modules/express/lib/router/index.js:321:13)
    at /home/k2y/sec3/Music-Flower/server/node_modules/express/lib/router/index.js:284:7
    at Function.process_params (/home/k2y/sec3/Music-Flower/server/node_modules/express/lib/router/index.js:341:12)
    at next (/home/k2y/sec3/Music-Flower/server/node_modules/express/lib/router/index.js:275:10)
```

## solution

1 원인 서버가 클라이언트에 둘 이상의 응답을 보내려고 할 때
2 종류 런타임 오류
3 detail 클라이언트 요청에 대해 서버가 이전에 응답 (요청 된 리소스가있는 성공 응답 또는 잘못된 요청에 대한 오류 응답)을 클라이언트로 보냈고 예기치 않게 다른 응답을 보내려고한다

4 code-review
현재는 refactoring 되어 사라진 오류.
기억상 header 쿠키가 두번 보내졌음

- status: 서버에서 응답 header에 쿠키를 담아보냈다 - > 이를 클라이언트 localstorage 및 jwt 토큰 또한 확인되지 않았음

=> 신기하게도, 분명 server 에서 한 번만 토큰을 보내면서 생겼던 오류 case 였음.

해결 1
클라이언트에서 쿠키를 못읽어내서 어쩔수 없이 `isAuthorized`를 클라이언트, 서버 둘 다 선언하게 되었다.

```jsx
// client/src/App.js
const isAuthenticated = (token) => {
  axios
    .get(`${serverURL}/userInfo`, {
      headers: { jwt: token },
    })
    .then((res) => {
      console.log(res);
      setUserinfo(res.data.data.loginInfo);
      handleMainPage();
    });
};
```

```jsx
//server/controller/index.js
  sendAccessToken: (res, accessToken) => {

    return res.status(200).json({ data: null, accessToken, message: "ok" });
  },
isAuthorized: (req) => {
    // token 말고
    // TODO: JWT 토큰 정보를 받아서 검증합니다.
    const token = req.headers.jwt;
    // console.log("isAuthorized token:", token);
    if (!token) {
      return null;
    }
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      return null;
    }
```

해결 2

```jsx
if (!req.body.name) {
  return res.status(400).json({
    status: "error",
    error: "req body cannot be empty",
  });
}
```

위와 같이 응답이 클라이언트에 전송되면 코드를 종료시키는 것입니다.

### reference

[ubuntu](https://cishome.tistory.com/120)
[ubuntu2](https://stackoverflow.com/questions/60372618/nodejs-listen-eacces-permission-denied-0-0-0-080)
[ubuntu3](https://juni-official.tistory.com/144)
