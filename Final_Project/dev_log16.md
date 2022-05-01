# server

# client

애니메이션 수정
랜딩 페이지 CSS 완성
Detail 페이지 CSS 조언
Comment css 수정
Comment 기능 엔터기능 + 2글자이상이여야지 입력가능

# DevOps

## 주제

- 주제 : Refactoring
  마우스 이벤트를 넣고싶다. (컨테이너 위치에 따라 크기가 움직이고, 반전이되는 eventHandler)

- 순서

  - css 작성
  - html 작성 후 확인
    ![](https://velog.velcdn.com/images/ww3ysq/post/95fefe84-9062-474d-9025-353df63c1825/image.png)

  - typescript 로 변경

```tsx
import "../css/Mouse.css";
import React, {
  DOMElement,
  MouseEvent,
  MouseEventHandler,
  ReactChild,
  ReactChildren,
} from "react";
//import CSS from "csstype";
export type CustomMouseEvent<T = HTMLElement> = MouseEventHandler<T>;
export default function Mouse() {
  let scale = 1;
  let stage = "";
  let cursorX = 0,
    cursorY = 0;
  let cursorDirection = "";
  const cursorParent = document.getElementById("mouse-cursor") as HTMLElement;

  const cursorChild = cursorParent.children[0] as HTMLElement;

  const mousemove = (
    e: MouseEvent<HTMLElement> & { target: HTMLElement } & {
      style: React.CSSProperties;
    }
  ) => {
    cursorX = e.pageX - cursorParent.offsetWidth / 2;
    cursorY = e.pageY - cursorParent.offsetHeight / 2;
    cursorParent.style.transform = `translate3d(${cursorX}px,${cursorY}px,0)`;
    // cursorDirection = cursorY < innerHeight / 2 ? "Up" : "Down";
    cursorChild.setAttribute("data-name", cursorDirection);

    switch (e.target.getAttribute("data-cursor")) {
      case "carousel":
        if (stage === "main-container") return;
        scale = 5;
        stage = "carousel";
        cursorParent.className = "cursor-text-mode";
        console.log("carousel");
        break;
      case "link":
        if (stage === "nav-menu") return;
        scale = 5;
        stage = "link";
        console.log("link");
        cursorChild.setAttribute(
          "data-name",
          e.target.getAttribute("data-name")! //null 허용
        );
        cursorParent.className = "cursor-text-mode";
        break;
      case "img":
        if (stage === "img") return;
        stage = "img";
        console.log("img");
        scale = 1;
        cursorChild.setAttribute("data-name", "");
        cursorParent.className = "";
        break;
      default:
        if (stage === "") return;
        stage = "";
        console.log("default");
        scale = 1;
        cursorChild.setAttribute("data-name", "");
        cursorParent.className = "";
        break;
    }
    cursorChild.style.setProperty("--cursor-scale,", `${scale}`);
  };

  const mousedown = (e: MouseEvent<HTMLElement>) => {
    //줄이기?
    // const event = e.target as HTMLDivElement;

    scale *= 0.8;
    cursorChild.style.setProperty("--cursor-scale,", `${scale}`);
  };
  const mouseup = (e: MouseEvent<HTMLElement>) => {
    //원래값 되돌리기
    scale *= 1.25;
    cursorChild.style.setProperty("--cursor-scale,", `${scale}`);
  };

  return <div id="mouse-cursor" />;
}
```

# Error

- 원인 : children (html의 `script`에서 가져온 parent, children을 그대로 활용해보려 했는데, 현재 CustomMouseEvent 에서는 인식이 불가

- 에러 메시지

```
Type '{ children: Element; }' has no properties in common with type 'IntrinsicAttributes'.ts(2559)
```

- 레퍼런스 [유사 에러](https://velog.io/@maliethy/Type-children-Element-has-no-properties-in-common-with-type-IntrinsicAttributes.ts2559-error-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0)

- 해결 시도 1 : generic 선언 > parent, child 각각 HTMLELEMENT 로 선언함
  => 해결불가 {chilrden: Element :[] ;}으로 children null 이라 받지를 못함..

- 해결 시도 2 : props 받는 곳의 문제 아닐까? 해서 e.target에다가 type 설정
  => 해결불가 children.style이 계속 Element에 포함되어있지 않다고 함
  => 해결 ? null 허용, string 으로 value 넣어야 한다고 계속 경고가 나와서 일단
  입력값을 넣는것으로 대체.
  ```tsx
  e.target.getAttribute("data-name")!; //null 허용
  cursorChild.style.setProperty("--cursor-scale,", `${scale}`);
  ```
- 레퍼런스 [Property 에러](https://www.designcise.com/web/tutorial/how-to-fix-property-does-not-exist-on-type-eventtarget-typescript-error)

- 해결시도 3 : 문법 오류는 없으나.. 현재 상황.. 무한로딩..

![](https://velog.velcdn.com/images/ww3ysq/post/d3da5a76-ff32-4811-a35d-3ed7fe47dbb4/image.png)

- 에러메시지

```jsx
Mouse.tsx:22 Uncaught TypeError: Cannot read properties of null (reading 'children')
    at Mouse (Mouse.tsx:22:1)
    at renderWithHooks (react-dom.development.js:14985:1)
    at mountIndeterminateComponent (react-dom.development.js:17811:1)
    at beginWork (react-dom.development.js:19049:1)
    at HTMLUnknownElement.callCallback (react-dom.development.js:3945:1)
    at Object.invokeGuardedCallbackDev (react-dom.development.js:3994:1)
    at invokeGuardedCallback (react-dom.development.js:4056:1)
    at beginWork$1 (react-dom.development.js:23964:1)
    at performUnitOfWork (react-dom.development.js:22776:1)
    at workLoopSync (react-dom.development.js:22707:1)
Mouse @ Mouse.tsx:22
renderWithHooks @ react-dom.development.js:14985
mountIndeterminateComponent @ react-dom.development.js:17811
beginWork @ react-dom.development.js:19049
callCallback @ react-dom.development.js:3945
invokeGuardedCallbackDev @ react-dom.development.js:3994
invokeGuardedCallback @ react-dom.development.js:4056
beginWork$1 @ react-dom.development.js:23964
performUnitOfWork @ react-dom.development.js:22776
workLoopSync @ react-dom.development.js:22707
renderRootSync @ react-dom.development.js:22670
performSyncWorkOnRoot @ react-dom.development.js:22293
scheduleUpdateOnFiber @ react-dom.development.js:21881
updateContainer @ react-dom.development.js:25482
(anonymous) @ react-dom.development.js:26021
unbatchedUpdates @ react-dom.development.js:22431
legacyRenderSubtreeIntoContainer @ react-dom.development.js:26020
render @ react-dom.development.js:26103
./src/index.tsx @ index.tsx:10
options.factory @ react refresh:6
__webpack_require__ @ bootstrap:24
(anonymous) @ startup:7
(anonymous) @ startup:7
react-dom.development.js:20085 The above error occurred in the <Mouse> component:

    at Mouse (http://localhost:3000/static/js/bundle.js:2985:36)
    at nav
    at O (http://localhost:3000/static/js/bundle.js:74855:6)
    at header
    at O (http://localhost:3000/static/js/bundle.js:74855:6)
    at PC (http://localhost:3000/static/js/bundle.js:7313:5)
    at div
    at Nav (http://localhost:3000/static/js/bundle.js:3532:70)
    at div
    at div
    at App (http://localhost:3000/static/js/bundle.js:75:82)
    at Provider (http://localhost:3000/static/js/bundle.js:58278:20)
    at Router (http://localhost:3000/static/js/bundle.js:62525:15)
    at BrowserRouter (http://localhost:3000/static/js/bundle.js:62001:5)

Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
```

- 결론 : refactoring 할거면 angular 공부하고 mouseevent 쓰자.. 무리해서 DOM 쓰려했더니 괴로웠음.
