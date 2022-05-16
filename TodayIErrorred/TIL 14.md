- status : network 에러 없음, 로컬에서 서버 돌렸을 때 오류 발생

![](https://velog.velcdn.com/images/ww3ysq/post/0550a77b-e215-4bcf-9d53-1619626f20f7/image.png)

![](https://velog.velcdn.com/images/ww3ysq/post/a9ba4c3b-dacf-4909-9c2e-fe6df52ebaa6/image.png)

### Try

원인 분석: package. json을 이전에 npm init 하면서 초기화 한 상태라 다른 페어분께 요청함.
똑같은 package를 가지고 npm run 시도.

해결 1 :
1 서버가 npm/nodemon으로 제대로 작동중인지 확인
2 npm version 확인 꼭 double 첵..
2 sequelize 가 제대로 안된 걸 수 있음 (db 삭제후 ,false를 true 처리후 제도전)
=> NO
local 에서 실행한 프로젝트 파일이 오류남

## err 1 : Mouse.tsx:22 Uncaught TypeError: Cannot read properties of null (reading 'children')at Mouse (Mouse.tsx:22:1)

원인분석: 리팩토링 한 파일(Mouse.tsx)때문에 생기는 에러라고 판단
solution : props로 전달하던 것들을 제거, 이후 app 영향 없는 test파일로 옮김

## err 2:Warning: Each child in a list should have a unique "key" prop. Check the render method of `Landing`. See https://reactjs.org/link/warning-keys for more information.

원인분석: Landing 내에 render method를 체크하라고 한다.
(이전 프로젝트때 없던 에러라 당황스러움.)
listchild에 uniqe key가 없어서 props 되지 않는 모양
solution : 공식문서 참조

Keys?
key는 react가 어떤 item이 바뀌고, 변화는지 (제거 추가 포함)확인시켜 주는 역할.
key는 배열안 element에 제공되어야 함.(엘리먼트의 안정적인 정체성을 확인)

```jsx
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => (
  <li key={number.toString()}>{number}</li>
));
```

```jsx
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
```

## err3 : react-dom.development.js:20085 The above error occurred in the `<Mouse>` component:

원인분석: 리팩토링 한 파일(Mouse.tsx)때문에 생기는 에러라고 판단

solution : 삭제 처리 후 error 메시지 사라짐

## err4 : Uncaught TypeError: Cannot read properties of null (reading 'children')

원인분석: 리팩토링 한 파일(Mouse.tsx)때문에 생기는 에러라고 판단
solution : toString 이 될수 있는건지,
요약 : console로 type을 꼭 확인하자

```
toString(null) -> "[object Undefined]"
toString(12) -> "[object Undefined]"

toString(anythingatall) -> "[object Undefined]"
```

`var currentHTMLElem = document.getElementById(toString(currentCodeN))`

`var currentHTMLElem = document.getElementById(current.codeName)`

`console.log(typeof(currentHTMLElem)) //returns 'object'`

---

# err 5: react-jsx-dev-runtime.development.js:117 Warning: Each child in a list should have a unique "key" prop.

![](https://velog.velcdn.com/images/ww3ysq/post/f3cf5e2a-35ae-49e6-81f5-86e97998e1eb/image.png)

원인분석: 위 마우스 tsx 와 같은 child 문제라 판단, 하지만 프로젝트때에는 이런 에러가 없었는데..?

Solution 1 : at img / at Landing / at Routes / at div / at App 등 같은 계층에서 child노드가 연결되었는지, 잘 react hook 되었는지?

#### 의문점

- 왜 git pull 할 때마다 orm.config에서 synchronize: true, false를 수동적으로 해야하는지 정확한 파악 (자동 update 할 수 없다면 다른 방안) / 개선점
