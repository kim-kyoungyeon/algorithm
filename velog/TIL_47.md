## TIL \_ 47.md

- python 알고리즘 공부
  List 연장선 / 저번 TIL 에 이은 알고리즘 공부.

- 합병- 정렬 - 정복!
  Sum - sorted - conquere
  [파이썬문법1](https://docs.python.org/ko/3/library/stdtypes.html#list.sort)
  [파이썬](https://www.youtube.com/watch?v=kWiCuklohdY)

- Content Type 종류
  application /json 외 urlencode
  multer 대신해서 쓸 수있는 대안
  httpOnly 와 withCredentail을 왜 쓰게 되었는지

ex

```jsx
export const axios_GetKakaoToken = (code: string) => {
  return axios({
    method: "POST",
    url: "https://kauth.kakao.com/oauth/token",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify({
      grant_type: "authorization_code",
      client_id: kakao.clientID,
      client_secret: kakao.clientSecret,
      redirect_uri: kakao.redirectUri,
      code: code,
    }),
  });
};
```

[reference](https://jw910911.tistory.com/117)
[reference](https://gist.github.com/jays1204/703297eb0da1facdc454)

- 클린 코드에 대한 고민
  aync await vs axios

auth > axios put props.index

await async vs promise .then

- Git

* 잘못 commit 한 것 수동적으로 지우지 말고 git 언어를 이용해 지우는 방법?

```jsx
// 원격 저장소와 로컬 저장소에 있는 파일을 삭제한다.
$ git rm [File Name]
// 원격 저장소에 있는 파일을 삭제한다. 로컬 저장소에 있는 파일은 삭제하지 않는다.
$ git rm --cached [File Name]
https://gmlwjd9405.github.io/2018/05/17/git-delete-incorrect-files.html
```

[reference](https://gmlwjd9405.github.io/2018/05/17/git-delete-incorrect-files.html)

- 업무 자동화
  노코드를 하면 왜 좋은걸까? python 도 무거운건가?
  Serialize된 data를 넣는다?
  [java -serialize](https://flowarc.tistory.com/entry/Java-%EA%B0%9D%EC%B2%B4-%EC%A7%81%EB%A0%AC%ED%99%94Serialization-%EC%99%80-%EC%97%AD%EC%A7%81%EB%A0%AC%ED%99%94Deserialization)

여러부서에서 사용중인 플랫폼을 automized 한다 -> 하나의 플랫폼에서 처리한다 - 매력적
반복적인 문서작업을 한번에
특히 결재 관련 process 줄일수 있음
불필요한 인력 투입을 줄일수 있음

[노코드](https://www.youtube.com/watch?v=oPy9dOK2QsY)
[슬랙봇](https://wooiljeong.github.io/python/slack-bot/)
[디코봇](https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files)
[디코봇2](https://discordbot.tistory.com/6)
[airtable](https://airtable.com/)
