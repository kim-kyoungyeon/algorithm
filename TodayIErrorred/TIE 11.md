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
