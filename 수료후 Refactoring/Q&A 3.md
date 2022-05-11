Final_Team_project_Q&A \_3

Q Promise 코드 설명해보세요
key: 비동기흐름 파악의 이해
pending => reject,resolve 둘다 사용 안되었을때

fulfilled -> Fulfilled 상태를 '이행' 이 아닌 '완료' 로도 표현할 수 있습니다.
reject -> 호출되면 실패입니다. .catch를 사용하여 잡아낼 수 있습니다.

Q_1 promise pending 이 발생하는 시점?
특정 조건을 resovle ,reject 하기전?

![](https://velog.velcdn.com/images/ww3ysq/post/4cd7b729-7b70-4736-9350-26617623c028/image.png)

![](https://velog.velcdn.com/images/ww3ysq/post/0ab98c36-d6d3-41d6-b6e1-d3dd2939683e/image.png)

```jsx
const snapshot =  firebase
      .firestore()
       .col('example')

const array

snapshot.forEach( async (value)=>{

const getValue = await value.get()
    array.push(getValue)

})
console.log(snapshot)  // []

//
for (value of snapshot){ // of 배열
  const getValue = await value.get()
    array.push(getValue)
 }
//기출문제 복구중...
 await Promise.all(snapshot.forEach( async (value)=>{

const getValue = await value.get()
    array.push(getValue)

}))
console.log(snapshot)  //
}
```

Q OOP가 뭘까요 함수 표현식과의 차이는?
OOP 란 객체지향프로그래밍이다.
이게 뭐죠? 자료를 추상화하여, 속성과 행동을 가지는 하나의 객체로 바라보기 시작한 것.

~~객체지향적 사고를 많이들었으나 솔직히 와닿지 않아 대답하지 못해 안타까웠다~~

예시

> "강아지는 다리가 4개에 꼬리가 있고, 산책을 좋아하는 동물이다."

동물을 클래스Class 라고 취급하고, 강아지를 객체Object로 보자
클래스 > 동물
객체 > 개 , 강아지.고양이, 기타
강아지는 동물의 구체적인 사례(instance) 중 하나로서, 동물의 특징을 가지고 있다.

속성> 다리가 4개다 ,털이 있다 주둥이가 길다 냄새를 잘맡는다 귀가 펄럭인다
등등
행위(behavior)> 강아지가 뛴다

우선 객체가 클래스의 인스턴스라고 했으니 클래스를 알아보자.
'객체를 만들어주기 위해, 클래스부터 만든다'
클래스는 하나의 '함수'로 함수표현식과 마찬가지로 클래스문법은 표현식과 선언 두가지 방법이 있다.

> TO BE CONTINUED (생각보다 길어지네..)

[OOP](https://velog.io/@awayfromlife/JAVASCRIPT-%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-OOP-03)

Q Async await 은 왜쓰셨죠
코드 유지보수성을 위해.. (코드양을 줄이고자함)

Q Promise awiat의 사용법 아시나요
당황함??
promsise 선언 -=> 후 async await인줄 알았는데
제공해준 코드에 async가 안보였음 (생략된건가?)

Q 싱글페이지 어플리케이션이란?
SPA(Single Page Application)은 브라우저가 로드된 이후에
페이지 전체를 서버에 요청하는 것이 아니라 최초에 페이지 전체를 불러온 후에는
데이터만 필요에 맞게 변경하여 사용하는 웹 애플리케이션을 말합니다.
**= 이거 클라이언트서버 렌더링입니다!**
서버사이드 랜더링처럼 또 다른 웹페이지를 보고 싶을 때마다 서버에 새로운 페이지 요청을 하는 것이 아니라
최초 요청에 대해서만 서버 측에서 제공하고
이후의 페이지 또는 데이터 변경에 대해서는 클라이언트 측의 스크립트를 이용해 렌더링하게 됩니다. 이를 클라이언트 사이드 렌더링(Client Side Rendering) 이라고 합니다.

빠를까? 서버에 부담이 갈까? 과연 데이터가 정상적으로 들어가지는걸까?
클라이언트에서 가지고오는거라 어떨까?

Q 버츄얼 돔
?? 수면부족...혼탁한 상태로 기억안나 대답 못함
[출처](https://jeong-pro.tistory.com/210)
하아 썼는데..

Q jwt 토큰썼다는데 시간 얼마로정함

```jsx
export async function generateAccessToken(
  id: number,
  email: string,
  password: string
): Promise<string> {
  let token: string = jwt.sign(
    {
      id: id,
      email: email,
      password: password,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 24시간
      //연습용 exp: Math.floor(Date.now() / 1000) + 60 * 5, 5분 짜리
    },
    process.env.ACCESS_SECRET
  );

  return token;
}
```

generateAccessToken
발급시간 1초(1000)
exp(만료시간 )1000 *60 *60 \* 24 (24시간)

```jsx
export async function generateRefreshToken(
  id: number,
  email: string,
  password: string
): Promise<string> {
  let token: string = jwt.sign(
    {
      id: id,
      email: email,
      password: password,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 이것은 일주일입니다
    },
    process.env.REFRESH_SECRET
  );
  return token;

```

generateRefreshToken
발급시간 1000 (1초) 유효시간 60 *60 *24 \* 7 일주일!
