![](https://images.velog.io/images/ww3ysq/post/846ec165-7316-45a5-b64f-d15877951f8f/image.png)

# section3 를 드디어 수료하며

## ✍ 느낀 점

💡 난이도는 제 기준으로 적었습니다
💡 장단점도 제 기준이니 참고 😘

#### 🖍 페어 프로그래밍

# 장점

- 좋은 페어분들도 많다
- 자극을 진짜 많이 받는다 (내 경험상 일본인 페어분 최고)
- 이력서에 한줄이라도 적을 수 있는 부분은 덤!

# 단점

- 읽씹, 잠수, 노매너, 사회성 떨어지는 ~~금쪽이~~ 빌런이 있다.
- 솔직히 어떤 페어를 만나느냐에 따라 그날 공부가 잘 안될 수도 있다
- 본인의 의지력 인내심이 아주 많이 중요함

<br>

#### 🖍 DB

후기 : 좋아하는 분야여서 sequelize도 수월하게 했다! method 공부는 좀 더 해야할 듯!

```
난이도 중하
```

#### 🖍 인증/보안

후기 : 어려운데..?가 렌더링 됌 기수이동을 해서 망정이지 아직도 어려움?

```
session - 난이도 중하
token - 난이도 헬 (종류는 파악완료 했으나)
oauth - 난이도 ??????
```

#### 🖍 컴퓨터 공학 기초 & 네트워크 심화

후기 : 위 챕터는 기술 면접때 많이 나온다고 하니 면접준비때 공부하겠다는 마음 🌞

```
난이도 상
```

#### 🖍 AWS

후기 : 확실히 두번째는 빠르게 진도가 나갔다. aws에 많은 기능이 있는데 한번씩 구현하면 이해에 좀 더 좋을거 같다.

```
난이도 중
```

#### 🖍 Docker

후기 : 환경 변수를 맞춰주는 역할을 한다고 한다. 하지만 시간 관계상 많이 공부 하지 않기도 했고. 프로젝트때 사용할 수 있는지 여부가 중요한 듯 하다.

```
난이도 중
```

#### 🖍 AWS - 배포자동화

후기 : 어허 기수이동을 했는가? 이런것도 해보겠나?

```
난이도 상상 그이상
```

#### 🖍 HA - 알고리즘 && 과제형 스프린트

후기 : 기초부터 확실하게 이해해서 기능 구현에 충실했다면 HA3 시험 별 거 아니다

~~하지만 나는 아니다...~~

```
알고리즘 : 난이도 중~상 (사람에 따라 다름)
퀴즈 : 난이도 하
과제형 : 난이도 상
```

<br>

_ "역시 공부는 단기간에 수료해야 한다. 장수생은 성공 못 해 ."
By. My Mother_

## ✍ 공부

#### ❓error

     The above error occurred in the <Login> component:
    in Login
    in Router (created by MemoryRouter)
    in MemoryRouter (created by WrapperComponent)
    in WrapperComponent

#### ❗solution

    import의 문제 무엇을 사용하고 있고, 어떤 react-router-dom을
    받고있는지 확인할 것

#### ❓error2

     history.push(/) 하면 어떻게 들어가는건지, 문법이 뭔지 모르겠다.

#### ❗solution 2

    history.push(/)

1.      부모자식관계 compnent가 아닌 routing 으로 특정페이지에서 다른 페이지로 이동할때 props로 넘겨준다
2.      	props로 넘겨주지 않으면 redux나 HOC? 훅?오타인가..? 별도 컴포넌트 만들고 조건부 렌더링한다
3.       push(path, [state]) - (function) Pushes a new entry onto the history stack

#### ❓error3

    	sequelize 문법 모르겠다

#### ❗solution 2

    user.findOne({
    //첫번째로 찾은 표제어를 를 가지고옴 (that fulfills the optional query options, if provided).

<br>

## ✍ 궁금한 점

```jsx
CLIENT
1 SIGNUP

ㄴhtml 부분
    className- btn btn -logout
    <button className="btn btn-logout" onClick={props.handleLogout}>  css 확인했는데..?
    ㄴ className이 btn 밖에 없는데..?
    btn btn-logout 이부분이 이해가 잘 안대

ㄴ <form onSubmit={(e) => e.preventDefault()}>
  	-> preventDefault하는 이유?



2 LOGIN
      axios
        .post(
          `https://localhost:4000/signup`,
          { ...userinfo },  => 이게 어떻게 들어오나요?
           콘솔로 찍어보고 싶은데 안돼
        withCredentials: true, -> 옵션 기능?

3 APP


          <>
          {isLogin ? <Redirect to="/mypage" /> : <Redirect to="/login" />}
      <>
        ㄴ 해석 :"isLogin 이 된 경우 -> rederiect mypage/ 안되면 login 페이지로 redirect 시킨다"
        ㄴ 이건 react 문법인건지 확인필요

4 OVERALL
        module.exports 와 export의 차이 -> 아고라 스테이츠 확인.

        e.target.value 를 왜 하는걸까 무엇을 반환하는지 -> 아고라 스테이츠 확인

        class 선언시 왜 export module 선언을  안할까?

        function 선언시 왜 module.export를 뒤에 선언하지?

        export default function 선언하는 이유.

        return 했을때와
        render(){return }했을때의 차이!

        this 문법

```

```jsx
SERVER

1 INDEX
	ㄴ res.cookie(쿠키 옵션 정하는 문법 확인필요 )
	ㄴ  synchronous 한 방법이 뭔데..?

2 AUTH
    const cookie = req.cookie.jwt
    ㄴ cookies->cookie 오류나는 이유?

    const accessTokenData = isAuthorized(cookie);
    if (!accessTokenData || !cookie) {
    res.json({ data: null, message: "not authorized" });
  }
 	ㄴ 위순서가 지켜져야 제대로 메시지 확인이 됌 왜죠?

3 SINGIN
      const { email, password } = req.body;
	ㄴ객체분할문법은 아직 잘 모르겠다 = body에 요청해서 넣어준다로 이해 하면 될까?

4 SINGUP
    module.exports = async (req, res) => {
      ㄴ 위 async는 await을 위해서 sync를 맞춰준다는건데 왜 하는거지?




5 ENV
	ACCESS_SECRET=secret 와 ACCESS_SECRET=1 차이


6 OVERALL
    server의 index.js부분은 전체적인 확인이 필요하다.
    app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	ㄴ 위코드에서 express 의 역할이 파악이 안됌.

  const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8");
      ㄴ__dirname부분의 역할 확인해보기

```

<br>

## ✍ 아쉬운 점

- 언어적 정의에 몰두한 것 같다. 영어를 보면 번역하는게 안좋은 습관인 것 같다.

- test 통과에 둔 공부는 실전에 약하다

- 솔직히 스스로 이해하지 못하고 여러 페어분의 도움을 받았다.

- api 에 대한 개념은 클라이언트도, 서버도 중요한데 기능 구현을 제대로 이해하지 못했다.

- 아키텍처에 대한 이해도가 떨어진다고 피드백 받았다.

<br>

## ✍ 개선점

- 기능을 눈으로 일일이 console.log 해서 보는게 아직은 더 필요하다

- test에 몰두하지 말고, 서버와 클라이언트 각 서버를 돌려서 확인할 것.
- network 창을 보는 습관을 가질것. 쿠키가 어떻게 들어오고, local storage의 역할을 공부할 것

- 에러에 대한 기록을 남길 것. 꼭 해결책도 같이 남길 것 .
  <br>

---

참조문헌
[history-router](https://v5.reactrouter.com/web/api/history)

[git-history](https://github.com/remix-run/history/blob/main/docs/getting-started.md)

[Signup/login/google ouath](https://seagull-dev.tistory.com/28)

---
