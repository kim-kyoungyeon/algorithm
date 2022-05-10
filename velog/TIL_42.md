# 다른팀 프로젝트 분석

- 로드벨런서 403번
  : 리스너 규칙간과 http 리다이렉션 규칙설정
- styled component 왜 사용했는지 ?

```
    props 다양하게 컨트롤 할수있따
    props도 컨트롤러에 상태값을 받는다
	속성을 중첩해  가독성을 높여주고 수정 또한 용이
    css를 태그로 컴포넌트로 만들어야 했다
```

- 많은 이미지가 서버에 저장되는데 어떻게 처리했는지?
  : multer 사용 -> 이미지는 로정적 파일형태
  : 정적파일을 소스로 활용 multer express 를 이용했다(특히 사진 )

### 흥미로웠던 기능 문의

- 알고리즘을 통한 취향 선택 기능은 어떻게 구현하셨는지?
  알고리즘은 처음에 단계별로 넘어간다
  얘시 : 흑백 > 특수 > 컬러필름 식으로..
  처음엔 차라리 관련된 사진을 다 보여주고 그 사진에 취향을 찾아가는 생각
  하지만 로직을 바꿈
  알고리즘에서 제일많이 선택된 필름으로 기존의 이미지를 커스텀 !

- 위치 API 어떻게 이용하시고 이미지 태깅 어떻게 만드셨나요?
  위치같은 경우ㅡ 사진 등록시 카카오맵 좌표찍어준다.
  유사한 마커를 클릭시 위치 위도 경도 받음 ->
  키보드 검색한 내역 데이터베이스에 저장 후
  axios 서버에서 데이터베이스에서...전부구성...랜더링하게 되었다. ~~(WOW)~~

- 반응형 어떻게 만드셨나요?
  반응형 styled component 내에 medai쿼리로 넣었다. ~~너도 CSS?~~
  pc mobile ... 하나하나 구현했다.

- 좋아요 및 클릭 기능 구현 및 게시물 어떻게 만드셨는지?
  게시물 db 마이그레이션했다
  로그인- 유저를 연결했다

# 우리팀 프로젝트 분석

- 운동간 사이에 종목이바뀔때 휴식시간은 혹시고려하셨나요?  
  time을 멈추고 시작하는 기능 (setTime)

- 왜 굳이 redux? react 안쓰고..?
  리덕스를 사용하면 컴포넌트의 상태 업데이트 관련 로직을 다른 파일로 분리시켜서 효율적으로 관리할 수 있다. 코드 유지보수성을 위해..클린코드를 지향하려 노력함

- Redux 기본 용어
  액션(Action) = 상태에 변화가 필요하다면 액션을 일으켜야한다.

```jsx
{
   type: 'ADD_TODO',
   data: {
       id: 1,
       text: '리덕스 배우기'
   }
}
```

프로젝트 내 사용 예시 (SetStateAction)

```jsx
//deleteModal.tsx
interface DeleteModalProps {
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  handlePostDelete: () => void;
}

->  type SetStateAction<S> = S | ((prevState: S) => S);
    // this technically does accept a second argument, but it's already under a deprecation warning
```

해석: 기술적으로 두번째 "독립변수"는 받아들여지지 않지만, 허용되지 않는(지양하는) 경고 아래에 있다?

`Deprecated : 형용사 (컴퓨터용어) (신조어) 중요도가 떨어져 더 이상 사용되지 않고 앞으로는 사라지게 될 (컴퓨터 시스템 기능 등) (chiefly of a software feature) be usable but regarded as obsolete and best avoided, typically because it has been superseded`

-액션 생성함수(Action Creator) ?
액션 생성함수는 액션 객체를 만들어주는 함수이다. 화살표 함수로도 표현이 가능하다

```jsx
function addTodo(data) {
 return {
   type: 'ADD_TODO',
   data,
 }
}
//or
const addTodo = (data) =>{
 type: 'ADD_TODO',
   data,
 }
}
```

- 그래서 리듀서(reducer)가 뭔데?  
  리듀서를 한국어로 번역해보면 변화를 일으키는 것을 말한다.
  리듀서는 현재 상태와 액션 객체를 받아, 필요하다면 새로운 상태를 리턴하는 함수이다. 액션 유형을 기반으로 이벤트를 처리하는 이벤트 리스너라고 생각하면 된다.

```jsx
export const userInfoReducer = createSlice({
  // 서버에서 userInfo 받아옴
  //
  name: "userInfo",
  initialState: initialState,
  reducers: {
    LOG_IN: (
      state,
      action: PayloadAction<{
        id: number,
        nickname: string,
        image: string,
        accessToken: string,
        loginType: string,
      }>
    ) => {
      state.userInfo = action.payload;
      state.isLogin = true;
      //localStorage에도 저장
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
      localStorage.setItem("isLogin", JSON.stringify(true));
    },
    LOG_OUT: (state) => {
      state.userInfo = {
        id: "",
        nickname: "",
        image: "",
        accessToken: "",
        loginType: "",
      };
      state.isLogin = false;
      //localStorage에서도 삭제
      localStorage.removeItem("userInfo");
      localStorage.removeItem("isLogin");
    },
    EDIT_IMAGE: (state, action: PayloadAction<string>) => {
      let localUser = localStorage.getItem("userInfo");
      if (localUser !== null) {
        state.userInfo = JSON.parse(localUser);
      }
      state.userInfo.image = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
    EDIT_NICK: (state, action: PayloadAction<string>) => {
      let localUser = localStorage.getItem("userInfo");
      if (localUser !== null) {
        state.userInfo = JSON.parse(localUser);
      }
      state.userInfo.nickname = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
    },
  },
});
export const { LOG_IN, LOG_OUT, EDIT_IMAGE, EDIT_NICK } =
  userInfoReducer.actions;
export default userInfoReducer.reducer;
```

- creaSlide란 ?
  `export declare function createSlice<State, CaseReducers extends SliceCaseReducers<State>, Name extends string = string>(options: CreateSliceOptions<State, CaseReducers, Name>): Slice<State, CaseReducers, Name>; export {};`
- 스토어(Store) 상태가 저장됌 말그대로 store 하나의 프로젝트는 하나의 스토어만 가질 수 있다.

```jsx
// .../store
//index.ts
export interface AxiosRequestConfig<D = any> {
  url?: string;
  method?: Method;
  baseURL?: string;
  transformRequest?: AxiosRequestTransformer | AxiosRequestTransformer[];
  transformResponse?: AxiosResponseTransformer | AxiosResponseTransformer[];
  headers?: AxiosRequestHeaders;
  params?: any;
  paramsSerializer?: (params: any) => string;
  data?: D;
  timeout?: number;
  timeoutErrorMessage?: string;
  withCredentials?: boolean;
  adapter?: AxiosAdapter;
  auth?: AxiosBasicCredentials;
  responseType?: ResponseType;
  responseEncoding?: responseEncoding | string;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  maxContentLength?: number;
  validateStatus?: ((status: number) => boolean) | null;
  maxBodyLength?: number;
  maxRedirects?: number;
  socketPath?: string | null;
  httpAgent?: any;
  httpsAgent?: any;
  proxy?: AxiosProxyConfig | false;
  cancelToken?: CancelToken;
  decompress?: boolean;
  transitional?: TransitionalOptions;
  signal?: AbortSignal;
  insecureHTTPParser?: boolean;
}
//위 설정  interface- > type 으로 설정함.

initialState.ts;
```

- 디스패치(Dispatch) "스토어"의 내장 함수 중 하나인 디스패치는 액션 객체를 넘겨줘서 상태를 업데이트 하는 유일한 방법이다. 이벤트 트리거라고 생각할 수 있다.

- store 에서

  A friendly abstraction over the standard Redux createStore function that adds good defaults to the store setup for a better development experience.

redux의 createStore를 넘어선..친절한 추출이라고 한다 ~~?~~
아무튼 초기화 하는데에 도움을 줌.

```jsx
//기본문법
export declare function configureStore<S = any, A extends Action = AnyAction, M extends Middlewares<S> = [ThunkMiddlewareFor<S>]>(options: ConfigureStoreOptions<S, A, M>): EnhancedStore<S, A, M>;
export {};
```

```tsx
import { configureStore } from "@reduxjs/toolkit";
import shareReducer from "../reducer/shareReducer";
import userInfoReducer from "../reducer/userInfoReducer";
import postReducer from "../reducer/postReducer";

export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
    shareRecord: shareReducer,
    post: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

- reducer -> router 와 유사함 컴포넌트를가져와 쓸수있게 함

- 출처
  [redux-toolkit](https://redux-toolkit.js.org/api/createslice)

- 많이썼던 HTML TAG
- LABEL ? 사용자 인터페이스 항목의 설명을 나타냅니다.

```jsx
The <label> tag defines a label for several elements:

<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="search">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">
<meter>
<progress>
<select>
<textarea>
```

`<labe for ="요소 id"> `
속성은 라벨(label)과 결합될 요소(attr)를 명시합니다. id attribute 만 있으면 어디든지 사용할 수 있어서 유용하게 사용함
