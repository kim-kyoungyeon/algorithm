# server

유저 닉네임 중복여부 확인 할 엔드포인트 생성
onChange와 useEffect를 실시간으로 유저 닉네임 중복여부 확인
정규표현식을 사용해 이메일, 비밀번호 유효성검사를 맞춰야지 가입이 가능하게 생성

# client

footer 기본틀 완성

# DevOps

## 주제

### ErrorHandling

- port가 undefined 합니다
- mysql에 seeder가 들어가지않음
- sqlMessage: "Access denied for user ''@'localhost' (using password: NO)" 에러메시지를 계속확인함.

### 에러 메시지

```bash
$ 터미널의 에러 코드를 여기 넣어주세요.
port: undefined
port:undefined server is on!
mysql connected ERR: Error: ER_ACCESS_DENIED_ERROR: Access denied for user ''@'localhost' (using password: NO)
    at Handshake.Sequence._packetToError (/home/k2y/final/newPor/GG/server/node_modules/mysql/lib/protocol/sequences/Sequence.js:47:14)
    at Handshake.ErrorPacket (/home/k2y/final/newPor/GG/server/node_modules/mysql/lib/protocol/sequences/Handshake.js:123:18)
    at Protocol._parsePacket (/home/k2y/final/newPor/GG/server/node_modules/mysql/lib/protocol/Protocol.js:291:23)
    at Parser._parsePacket (/home/k2y/final/newPor/GG/server/node_modules/mysql/lib/protocol/Parser.js:433:10)
    at Parser.write (/home/k2y/final/newPor/GG/server/node_modules/mysql/lib/protocol/Parser.js:43:10)
    at Protocol.write (/home/k2y/final/newPor/GG/server/node_modules/mysql/lib/protocol/Protocol.js:38:16)
    at Socket.<anonymous> (/home/k2y/final/newPor/GG/server/node_modules/mysql/lib/Connection.js:88:28)
    at Socket.<anonymous> (/home/k2y/final/newPor/GG/server/node_modules/mysql/lib/Connection.js:526:10)
    at Socket.emit (node:events:390:28)
    at Socket.emit (node:domain:475:12)
    --------------------
    at Protocol._enqueue (/home/k2y/final/newPor/GG/server/node_modules/mysql/lib/protocol/Protocol.js:144:48)
    at Protocol.handshake (/home/k2y/final/newPor/GG/server/node_modules/mysql/lib/protocol/Protocol.js:51:23)
    at PoolConnection.connect (/home/k2y/final/newPor/GG/server/node_modules/mysql/lib/Connection.js:116:18)
    at Pool.getConnection (/home/k2y/final/newPor/GG/server/node_modules/mysql/lib/Pool.js:48:16)
    at /home/k2y/final/newPor/GG/server/src/driver/mysql/MysqlDriver.ts:1025:18
    at new Promise (<anonymous>)
    at MysqlDriver.createPool (/home/k2y/final/newPor/GG/server/src/driver/mysql/MysqlDriver.ts:1022:16)
    at MysqlDriver.<anonymous> (/home/k2y/final/newPor/GG/server/src/driver/mysql/MysqlDriver.ts:369:36)
    at step (/home/k2y/final/newPor/GG/server/node_modules/tslib/tslib.js:143:27)
    at Object.next (/home/k2y/final/newPor/GG/server/node_modules/tslib/tslib.js:124:57) {
  code: 'ER_ACCESS_DENIED_ERROR',
  errno: 1045,
  sqlMessage: "Access denied for user ''@'localhost' (using password: NO)",
  sqlState: '28000',
  fatal: true
}

```

### 에러 핸들링 방법

1. npm i -> npm install dotenv 해보았으나 안됨
2. package.json 파일 확인, ormconfig.ts 파일 확인 ,server.ts 파일 확인
3.

```jsx
require("dotenv").config();
const env = process.env;
```

### 해결

1.

```
require("dotenv").config({ path: "../.env" });
```

2. .env 파일이 server 밖에 있어 안으로 옮김

```
import dotenv from "dotenv";
 dotenv.config();
```

3. 해결완료

### 에러 핸들링을 위해 참고한 레퍼런스 링크

[dotenv안될때](https://zionh.tistory.com/34)
