![](https://images.velog.io/images/ww3ysq/post/67efab94-a246-4bcc-b599-b75166cbc9ea/2022-03-03_1.43.13.png)

# Self KPT 회고

## Keep (유지할 항목)

- markdown에 대한 문법적 지식 갖춤 (그나마 ..)
- 프로젝트 진행하면서 소화 가능한 수준의 기록을 남기자
- Tension :
  다들 열정과 에너지가 넘치셨다. 좋은 멤버는 좋은 시너지를 주는걸까!

- Team Work :
  2주간 손발과 에러 핸들링이 척척되는 환상의 T.E.A.M
- Trust :
  남탓, 사회탓을 하지 않고 묵묵히 본인의 일을 한다는 신념.

## Problem (문제라고 생각하는 항목)

- 나 자신의 git 사용법 미흡

`git branch , checkout, switch 의 활용법 정리할 것`

- 백엔드 였으면서 배포에 대한 제대로된 정보나 지식이 없었다
  <br>
- - JWT 토큰과 쿠키의 관계 확인필요
    `왜 오류가 나는것인지, 작동원리가 잘 이해가 안되는 부분 중 하나이다. `

- - http 와 https의 쿠키 사용법 확인 필요

```jsx
 generateAccessToken: (data) => {
    // TODO: Access token으로 sign합니다.

    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "1h" });
  },

  sendAccessToken: (res, accessToken) => {
    // console.log(loginInfo);
    // TODO: JWT 토큰을 쿠키로 전달합니다.
    // res.cookie("jwt", accessToken, {
    //   domain: "localhost",
    //   path: "/",
    //   secure: true,
    //   maxAge: 24 * 6 * 60 * 10000,
    //   sameSite: "none",
    // });
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

- - 보안에서 쿠키, 토큰등 보안에 대한 이해가 어려웠다.

```jsx
app.use(
  cors({
    origin: [`${server}`, `${localhost}`],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
```

- - sequelize 문법 이해 미숙
    ` 어느 디렉토리에 어떻게 넣어야 하는건지 파악필요`

```jsx
findMusic: async (req, res) => {
    const musicList = await MusicData.findAll();
    return res.status(200).json({ data: musicList, message: "ok" });
  }
}
```

- 프로젝트 하면서 꾸준한 기록을 해야하는데 본인 수준에 가능한 수준에서의 기록을 할 것.

## Try (Action Items)

- [ ] console.log로 찍어보는 습관, 어디에 찍어야 할지 확인
- [ ] 보안은 기초부터 다시 정독할 것
- [ ] Database에 그나마 흥미가 생겼고, 관계 데이터베이스에 좀 더 관여 하고싶어졌다. 좀더 파고들 것.
- [ ] 프론트 엔드로 재합류 하니, css, html, redux 등 하나쯤은 자신 있는 기술을 만들어 가지고 갈 것.
- [ ] 무능한 팀장이 되지 말것
