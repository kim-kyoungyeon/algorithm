## error1

- 로그인패이지에서 login시 login 되지 않고 check 알람 - chrome

- 로그인페이지에서 login시 login 후 db에는 데이터가 들어가나, main으로 가지 않음 - safari
- 회원가입에서도 회원가입후 main페이지로 넘어가지 않음.
- 회원정보가 db에 입력되지 않음

![](https://images.velog.io/images/ww3ysq/post/4271c7ea-e8bd-40bd-bc8e-870064b2eb32/image.png)

![](https://images.velog.io/images/ww3ysq/post/91a652af-5f4b-4ef2-a4cd-a265450e2c27/image.png)

![](https://images.velog.io/images/ww3ysq/post/6cecd1b6-1aa8-4e5a-b2c6-40476addbcc3/image.png)

## error2

![](https://images.velog.io/images/ww3ysq/post/9d751be4-0398-4e30-8d74-824d2cbae694/image.png)

## solution 1

- token 이 헤더에 담기지 않는 문제가 컸음 (서버에서는 보내지만 클라이언트에서 확인불가)
- 현재 쓰고있는 chrome, http 문제.
- 클라이언트측에서 authorization 기능을 이용해 직접 헤더에 쿠키를 전송함.

## solution 2

- 토큰 및 쿠키 설정의 문제였다.

```jsx
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
```

- 위와 같이 해야 http 상에서 오류가 나지 않았기에 어쩔수 없이 설정한 부분인데, 계속 토큰은 보내지만, 쿠키를 보내지 못했다.

- 다른 페어분께서 https의 문제라고 함 (httponly 설정문제등)
- 이 부분은 좀 더 공부할 예정

```jsx
//user Controller.js
const token = generateAccessToken(loginInfo.dataValues);
sendAccessToken(res, token);
```

res와 함께 token도 같이 넣어서 send를 하기로 fix.
