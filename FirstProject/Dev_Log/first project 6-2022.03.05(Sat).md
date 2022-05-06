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

  - 늦잠잠
  - spotify api를 공부중 ( module 안에 refresh, access Token을 발행하는 신기한 구조)
  - 로그인 이슈
  - api docs 작성중 (post controlle는 아직 미정)

  ***

- 아쉬운점
  - 기록을 제때 안하면 기억이 가물가물하다.
    <br>
  - 많은 대화를 통해 api docs에 대한 감을 잡았다. 다만 서버가 클라이언트와의 연동에서 계속 이슈가 발생해 apidocs를 계속해서 수정해야 했음.
    <br>
  - Api 엔드 포인트 응답수정을 했고 서버 라우팅 또한 수정함.
    <br>

```jsx
const express = require("express");
const router = express.Router();
router.get("/", findPost);
router.get("/:id", findUserPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
```

> express.Router()에 대한 이해가 부족했다.

---

- 개선 점

1.  `기록은 매일 하자 <- 이거 이대로는 불가능`
2.  ~~백엔드가~~ `내가 스피드업 하자 `
3.  라우터와 controller 에 대한 이해가 시급하다.
4.  ` PR규칙을 제대로 안지키고 있다.`
5.  git branch 이슈가 가끔 터졌다. 본인들의 레포로 fork해서 push를 어디로 하는지가 문제였다.

### ❗ git branch 사용 다같이 이해하자

---
