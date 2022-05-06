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

  - 드디어 aws 배포!
  - Post 수정 요청 데이터 처리 controller 작성
  - 음악 리스트 시드 정리 및 음악 리스트 요청시 데이터 controller 작성
  - 서버 배포 관련 공부
  - 클라이언트 배포 파이프 자동화

  ***

- 아쉬운점
  - 기록을 제때 안하면 기억이 가물가물하다.
    <br>
  - aws 서버 배포를 위해선 mysql을 연동해야해서 sequelize 모듈을 깔아야하는데.. 그래야 했는데.. 못했다.
    <br>
  - ec2에서 이상하게 module을 일일이 깔아야 하는 오류가 발생!
    <br>
  - 해당 오류 스크린샷, 코드를 전부는 갖고오지 못함.

# err1

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

```jsx
ssh -i "MusicFlower.pem" ubuntu@ec2-3-39-11-114.ap-northeast-2.compute.amazonaws.com
ubuntu@ec2-3-39-11-114.ap-northeast-2.compute.amazonaws.com: Permission denied (publickey).
k2y@k2y-HP-ENVY-x360-Convertible-13-ar0xxx:~$ ssh -i "MusicFlower.pem" ubuntu@ec2-3-39-11-114.ap-northeast-2.compute.amazonaws.com
```

# err2

- ec2 기본설정의 어려움. Inbound 보안 설정 다 시도했으나 계속 무한 로딩만..

# solution

- EC2 기본 설정이 어려워서 헤맸다. 서버에서 띄우는 포트가 엔드포인트 뒤에 붙는 것을 뒤늦게 알게 되어서 고생을 했다.

# err3

- ubuntu의 문제인건지, ec2 배포때 계속 나온 오류!

```jsx
 server is running
AccessDeniedError [SequelizeAccessDeniedError]: Access denied for user ''@'localhost' (using password: YES)
    at ConnectionManager.connect (/home/ubuntu/Music-Flower/server/node_modules/sequelize/lib/dialects/mysql/connection-manager.js:94:17)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at async ConnectionManager._connect (/home/ubuntu/Music-Flower/server/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:216:24)
    at async /home/ubuntu/Music-Flower/server/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:174:32
    at async ConnectionManager.getConnection (/home/ubuntu/Music-Flower/server/node_modules/sequelize/lib/dialects/abstract/connection-manager.js:197:7)
    at async /home/ubuntu/Music-Flower/server/node_modules/sequelize/lib/sequelize.js:303:26
    at async MySQLQueryInterface.createTable (/home/ubuntu/Music-Flower/server/node_modules/sequelize/lib/dialects/abstract/query-interface.js:94:12)
    at async Function.sync (/home/ubuntu/Music-Flower/server/node_modules/sequelize/lib/model.js:930:5)
    at async Sequelize.sync (/home/ubuntu/Music-Flower/server/node_modules/sequelize/lib/sequelize.js:377:9) {
  parent: Error: Access denied for user ''@'localhost' (using password: YES)
      at Packet.asError (/home/ubuntu/Music-Flower/server/node_modules/mysql2/lib/packets/packet.js:728:17)
      at ClientHandshake.execute (/home/ubuntu/Music-Flower/server/node_modules/mysql2/lib/commands/command.js:29:26)
      at Connection.handlePacket (/home/ubuntu/Music-Flower/server/node_modules/mysql2/lib/connection.js:456:32)
      at PacketParser.onPacket (/home/ubuntu/Music-Flower/server/node_modules/mysql2/lib/connection.js:85:12)
      at PacketParser.executeStart (/home/ubuntu/Music-Flower/server/node_modules/mysql2/lib/packet_parser.js:75:16)
      at Socket.<anonymous> (/home/ubuntu/Music-Flower/server/node_modules/mysql2/lib/connection.js:92:25)
      at Socket.emit (node:events:527:28)
      at addChunk (node:internal/streams/readable:324:12)
      at readableAddChunk (node:internal/streams/readable:297:9)
      at Socket.Readable.push (node:internal/streams/readable:234:10) {
    code: 'ER_ACCESS_DENIED_ERROR',
    errno: 1045,
    sqlState: '28000',
    sqlMessage: "Access denied for user ''@'localhost' (using password: YES)",
    sql: undefined
  },
  original: Error: Access denied for user ''@'localhost' (using password: YES)
      at Packet.asError (/home/ubuntu/Music-Flower/server/node_modules/mysql2/lib/packets/packet.js:728:17)
      at ClientHandshake.execute (/home/ubuntu/Music-Flower/server/node_modules/mysql2/lib/commands/command.js:29:26)
      at Connection.handlePacket (/home/ubuntu/Music-Flower/server/node_modules/mysql2/lib/connection.js:456:32)
      at PacketParser.onPacket (/home/ubuntu/Music-Flower/server/node_modules/mysql2/lib/connection.js:85:12)
      at PacketParser.executeStart (/home/ubuntu/Music-Flower/server/node_modules/mysql2/lib/packet_parser.js:75:16)
      at Socket.<anonymous> (/home/ubuntu/Music-Flower/server/node_modules/mysql2/lib/connection.js:92:25)
      at Socket.emit (node:events:527:28)
      at addChunk (node:internal/streams/readable:324:12)
      at readableAddChunk (node:internal/streams/readable:297:9)
      at Socket.Readable.push (node:internal/streams/readable:234:10) {
    code: 'ER_ACCESS_DENIED_ERROR',
    errno: 1045,
    sqlState: '28000',
    sqlMessage: "Access denied for user ''@'localhost' (using password: YES)",
    sql: undefined
  }
}
```

# solution

- 주말에 공부를 해보니 계속해서 잘못된 사용자에게 권한을 주고있었음

`$ sudo /usr/bin/mysql -u root -p`
위 코드로 입력해서 별도의 계정을 만들고, 권한을 주는 것 같다.

다만 git clone 한 레파지토리 서버에서는 npm run start 시 user/bin/mysql
이 아닌 다른 mysql로 작동되는듯 했다.  
이전에 mysql2 모듈도 깔고 해서 어느쪽 모듈이 진행되는지 모르겠으나
계속해서
아무리 새로운 계정을 파고 새로운 권한을 줘도..
계속해서
` original: Error: Access denied for user ''@'localhost' (using password: YES) at Packet.asError (/home/ubuntu/Music-Flower/server/node_modules/mysql2/lib/packets/packet.js:728:17)`
이 오류가 나왔었음..

`sudo mysql -u root -p` 로 기존 root에게 재권한을 설정하니 성공함!!!!!
아마 다른 mysql에 새로운 계정만 잔뜩 만들어져있는 것으로 파악함

---

출처

---

[EC2 MYSQL 설치문제1](https://curryyou.tistory.com/434)
[EC2 MYSQL 설치문제2](https://velog.io/@seungsang00/Ubuntu-%EC%9A%B0%ED%88%AC%EC%97%90-MySQL-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0)
[EC2 MYSQL 설치문제3](https://curryyou.tistory.com/434)
[Ec2 mysql 권한]https://5sangs.tistory.com/214?category=966746
[Ec2 mysql 권한 ]https://ssungkang.tistory.com/entry/React-axios-%EC%9D%98-withCredentials

---

- 개선 점

1.  `기록은 매일 하자 <- 계속 불가능`
2.  ~~백엔드가~~ `내가 스피드업 하자 `
3.  클라이언트 서버 도전해보기 (mysql, mysql2 설치문제는 은 일단 제외)

### ❗ ec2 공부하기

---
