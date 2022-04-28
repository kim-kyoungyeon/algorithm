![](https://images.velog.io/images/ww3ysq/post/71cd450b-5d49-4cd6-a7bb-2b8f6d8fee06/image.png)

**" 페어님... 새벽4시까지.... 공부시켜줘서 너무 고마워.. 이제 그만해 다 죽어 "
**

## 👉 최근 하는 일

- HA 3 알고리즘 공부 = 백트레킹, valid 유효성 검사, 순차탐색 알고리즘
- 최ㅁㅅ 이라는 ~~_성격 더럽고 꼰대에 틀딱이지만_~~ 친절하신 34기 기수분을 만났다

## 👉 의문점

✔ 백엔드가 과연 될수있을까?
session, token, oauth, aws 공부를 좀 더 해볼것

✔ 제대로 이해하고 쓰는 템플릿 인가?  
너무 형식적으로 이해만 하는 것 같다.
어떻게 들어가는지 console.log를 각 변수값마다 찍어봐

✔ 프론트 엔드는 알고리즘이 많이 잘 이해해야 하나?  
네 당연합니다

# 👉 주말 공부

- ha 분석 및 client 에서 restful 한 API 공부

## ❗error1

```

The above error occurred in the <Signup> component:
    in Signup
    in Router (created by MemoryRouter)
    in MemoryRouter (created by WrapperComponent)
    in WrapperComponent

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://fb.me/react-error-boundaries to learn more about error boundaries.

```

## ❓solution

클라이언트 컴포넌트의 closure 문제

react 사용법 미흡

- - 아래 링크로 공식문서 확인
    > Note
    > Error boundaries do not catch errors for:
    > Event handlers (learn more)
    > Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
    > Server side rendering
    > Errors thrown in the error boundary itself (rather than its children)

- - 그외의 경우=> static getDerivedStateFromError() to render a fallback UI after an error has been thrown.
    또는 사용해보기 componentDidCatch() to log error information.

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

```html
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

## 👉 다음주 계획

- 노션 -> velog 옮기는 것 확인
- 이해하기 힘든 알고리즘, 기초 알고리즘 본인만의 글로 정리 계속
- 노마드 코더 이수 후 react, babel 사용법 정리
- 파이썬 쥬피터 노트북 코드 정리, 크롤링 방법 확인
- 아고라 스테이츠에 문의드린 내용 TIE(TODAY I ERRORED)로 정리 해 볼 것
- 링크텍스트-> 참고문헌란으로 정리해서 재업로드할 것
