\
 
### TodayILearn22

### 학습목표

- [x]  서버가 token 과 auth를 유동적으로 이용하는지 유무
- [ ]  validtoken은 무엇인가 메소드의 역할파악
- [x]  지금 내가 무엇을 하고있는가 (중간중간 체크)
- [x]  헷갈리는 개념은 무조건 파악
- [x]  token을 발행하는 논리와 auth과 발생하는 시스템 파악<br/>
  ~~노션 블로그 주1회 이용 → velog로 옮길것~~

👉singout 기능 구현 (server)에서

1.  token을 삭제한다?
2. redis, blacklist 개념확인
3. controller> tokenfunction에서 아래와 같은 유효성 검사하는 token 만듬

```jsx
//tokenFunctions.js
isAuthorized: (req, res, decoded) => {
    const token = req.header("authorization").replace("Bearer", "");
    // Take the token from the Authorization header
    if (!token) {
      res.status(403).send({
        message: "No token provided!",
      });
    }
    // Verify the token
    jwt.verify(token, process.env.ACCESS_SECRET, (error, decoded) => {
      if (error) {
        return res.status(401).send({
          status: "error",
          message: error.message,
        });
      }
      // Append the parameters to the request object
      req.userId = decoded.name;
      req.tokenExp = decoded.exp;
      req.token = token;
      next();
    });
  },
};
```

1. controller> signout메소드 구현하는 blacklist? redis 코드 (공식문서)활용

```jsx
// 1. The server recieves a logout request
  // 2. The verifyToken middleware checks and makes sure the token in the request object is valid
  if(!accessTokenData){
       return res.json({data:null,message:"not authroized"})
       
  }
}
  post: (res, req) => {};
      verifyToken,
      (request, response) => {
        // 3. take out the userId and toekn from the request
        const { userId, token } = request;

        // 4. use the get method provided by redis to check with the userId to see if the user exists in the blacklist
        redisClient.get(userId, (error, data) => {
          if (error) {
            response.send({ error });
          }

          // 5. if the user is on the blacklist, add the new token
          // from the request object to the list of
          // token under this user that has been invalidated.

          /*
  The blacklist is saved in the format => "userId": [token1, token2,...]

  redis doesn't accept obejcts, so you'd have to stringify it before adding
  */
          if (data !== null) {
            const parsedData = JSON.parse(data);
            parsedData[userId].push(token);
            redisClient.setex(userId, 3600, JSON.stringify(parsedData));
            return response.send({
              status: "205",
              message: "Logout successful",
            });
          }

          // 6. if the user isn't on the blacklist yet, add the user the token
          // and on subsequent requests to the logout route the user
          // will be found and the token will be appended to the already existing list.
          const blacklistData = {
            [userId]: [token],
          };
          redisClient.setex(userId, 3600, JSON.stringify(blacklistData));
          return response.send({
            status: "success",
            message: "Logout successful",
          });
        });
      };
  }
};
if (!accessTokenData) {
  //  res.status(401).send({ data: null, message: 'not authorized' });
  return res.json({ data: null, message: "not authorized" });
} else { ///}
```

 crl + k + u   → ctrl +/  로 제거되지 않는 주석 제거할수있다.

👉singout 기능 구현 (server)에서 토큰 삭제 - node.js및 sequelizer한 express에선 삭제가 어렵다

---

다만, 토큰을 db에 저장해서 가능은 하다는데 .. 아직 확인중

기존에 찾은 redis, blacklist를 이용한 토큰삭제   → springboot&springsecurity 에서 java를이용시 간단하게 삭제 가능! (redis 가 in-memory db라 refresh token을 발행, 삭제 하는것을 확인

참조 :[https://velog.io/@tlatldms/서버개발캠프-Spring-boot-Spring-security-Refresh-JWT-Redis-JPA-4편-로그인-유지와-로그아웃-처리](https://velog.io/@tlatldms/%EC%84%9C%EB%B2%84%EA%B0%9C%EB%B0%9C%EC%BA%A0%ED%94%84-Spring-boot-Spring-security-Refresh-JWT-Redis-JPA-4%ED%8E%B8-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%9C%A0%EC%A7%80%EC%99%80-%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83-%EC%B2%98%EB%A6%AC)

![Untitled](sec%203%20-%202%207719fed773aa4f0d8db3dd44ea07ddbb/Untitled.png)

👉redis란?

---

- `읽기 성능 증대를 위한 서버 측 복제를 지원`
- `쓰기 성능 증대를 위한 클라이언트 측 샤딩(Sharding) 지원`, 빠르다
- `다양한 서비스에서 사용되며 검증된 기술`
- `문자열, 리스트, 해시, 셋, 정렬된 셋과 같은 다양한 데이터형을 지원. 메모리 저장소임에도 불구하고 많은 데이터형을 지원하므로 다양한 기능을 구현`
- `레디스는 고성능 키-값 저장소로서 문자열, 리스트, 해시, 셋, 정렬된 셋 형식의 데이터를 지원하는 NoSQL이다.`

👉redis 와 mysql 혼용불가?

---

redis → `nosql` 

mysql → `관계형 sql` 

참조 :[https://zangzangs.tistory.com/72](https://zangzangs.tistory.com/72)

참조 : [https://dev.to/mr_cea/using-redis-for-token-blacklisting-in-node-js-42g7](https://dev.to/mr_cea/using-redis-for-token-blacklisting-in-node-js-42g7)

![Untitled](sec%203%20-%202%207719fed773aa4f0d8db3dd44ea07ddbb/Untitled%201.png)

👉dbms란?

---

참조: [https://m.blog.naver.com/icbanq/221720815999](https://m.blog.naver.com/icbanq/221720815999)

| SQL | noSQL |
| --- | --- |
| 정해진 규격 | 정해진 규격 X - 장점 |
| join 기능 | join 없음 |
| 트랜잭션 사용 | 트랜잭션 없음 |
| 분산처리 어려움 | 분산처리 쉬움 |
| ACID | ACID를 완벽히 구현하지 않고 evntual consistency 개념 도입 |

참조 :[https://sjh836.tistory.com/97](https://sjh836.tistory.com/97)