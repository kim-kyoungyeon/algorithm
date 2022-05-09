**Q.서비스 보안강화를 위해 어떤 일을 하셨나요?**
1 Refreshtoken, AccessToken 사용

- 계기
  -> 토큰기반 시스템은 stateless 하다.
  -> 유저의 인증정보를 서버/세션에 따로 저장하지 않고 클라이언트에서 가지고 있음
  -> 서버측에선 로그인 유무 신경 안쓸수 있어 장점.
- 토큰 기반 인증 시스템 작동 원리
  ` 서버: 웹사이트 제공
  클라 : 로그인 요청

**Q. typescript 왜 쓰셨나요 ?**

A. TypeScript를 사용할 경우 Props로 전달되는 데이터 타입을 명확히 규정할 수 있다. 이를 통해 컴포넌트에 다른 데이터를 보내거나 유실하는 일을 방지할 수 있다. 이 점은 프로젝트 규모가 커지고 Props하는 데이터가 많아질수록 생기는 실수를 미연에 방지할 수 있어 유용하다.

**Q. Redux 왜 쓰셨나요? **
A.

- 특징 전역 상태관리 라이브러리!
- 장점:
  상태관리에 용이함
  react내 props-drilling 미연에 방지
  store에서 관리하기에 유지보수관리가 좋다
- 프로젝트 내 사용:
  프로젝트 에서는 컴포넌트 구조 설계를 진행해
  APP 하위 페이지인 Navigator , Mypage, Editor, Share 페이지에서 사용했습니다.
  (userInfo, isLogin)
  (shareRecordId,shareRecord) 위 변수에서 중복사용 가능했다!
- redux를 사용하지 않은 경우:
  단점 :
  redux를 사용하기 위해 설치하는 패키지 양이 늘어나는 문제

같은 계층간에 공유가 어렵다
APP에서 상태값을 선언해야하고 상태관리가 어려움.

**Q. redux-toolkit 왜 쓰셨나요?**
A. Redux를 통해 과도한 prop drilling을 막아 상태 관리를 유용하게 할 수 있으며, store 한 곳에서 상태를 관리하기 때문에 유지 보수 관리에 용이하다. 또한 Redux Toolkit의 경우 *ConfigureSlice*로 Redux의 리듀서, 액션 타입, 액션 생성함수, 초기 상태를 하나의 함수로 편하게 선언할 수 있다는 점이 매력적이여서 사용하게 되었다.

`- Configure Slice 란? 아직 확인중 `

    - configureStore를 아시나요?
    A : 기존에 redux애서 store 를 생성할 경우 미들웨어가 한개 이상이라면 applyMiddleware 사용해야 했다. 계속해서 middleware를 추가해야하는 번거로움이 있었다.

결론 :`react-toolkit`에서 제공하는 `configurestore`이용시 코드 유지보수성 높아짐.

```jsx
const store = configureStore({
  reducer: ruducers, // 리듀서 들을 정의합니다.
  middleware: [...middlewares], // 미들웨어를 정의해주도록 합니다.
  devTools: process.env.NODE_ENV !== "production", // devTool 의 옵션을 선택합니다.
});
```

비교 (기존 createStore 를 통한 store 생성)

```jsx
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware([...middlewares]))
);
```

**Q.어떻게 쓰셨나요? **
**A: ** reducer 액션 사용

유저 상태관리 에서 :
userInfo Reducer ->

- LOG_IN
- LOG_OUT
- EDIT_IMAGE
- EDIT_NICK
  공유 기록 관리에서 :

shareReducer ->

- SHARE
- SHARE_ID
- RESET
  사용함
  <br/>

**Q 에러 핸들링이 있었나요? 혹시 어떻게 사용하셨나요?**

status :
react에서 새로고침 실행하다보니, 상태값이 초기화 되는 문제가 발생

해결:
localstorage와 ConfigureSlice와 redux-toolkit 에서 reducer action을 이용해 localstorage에서 저장 삭제 기능 구현!

**Q. styledcomponent 왜 썼나요?**
A. 장점 :
1 컨텐츠 내용과 스타일 변경이 동시에 가능하다는 장점
2 직관적으로 파일을 구성할 수 있을것.
3 기존 css 이용시 html과 css 파일을 각각 따로 만들어야 한다는 부담을 덜어내기 위해
4 하나의 파일안에 스타일을 선언해 다른파일에서도 활용가능한점
5 typescript의 props를 잘 읽어낼수 있다는점
6 다른파일과 컴포넌트 이름이 겹쳐도 css 문제가 생기지 않음코드 재사용이 용이한 것
7 사후에 스타일 변경시 하나의 파일에 들어가 한번에 수정하면 되니 에러 핸들링에 용이한 점이 있어 styled component를 사용하게 되었습니다.

**Q. MySQL 왜 쓰셨나요**
A. NoSQL인 MongoDB도 있지만 저희 프로젝트에서는 MySQL을 사용하였습니다

NoSQL의 장점

- 스키마가 없기 때문에 유연
- 조회에(read)에 유리
- 비구조적인 엄청난 용량의 데이터를 저장할 때 유리

그렇지만 이러한 장점에도 사용하지 않은 이유는 이번 프로젝트에서는 관계를 많이가지게 것이라고 예상을 하였고, 그것에 따른 명확한 구조를 만들 수 있다고 생각하였습니다.
또한 당장 엄청난 양의 대용량 데이터를 사용하지 않을것이라고 생각하였기 때문에 NoSQL의 장점이 꼭 필요하지 않았습니다.

즉 NoSQL은 Join을 잘 사용하지 않고, 자주 변경되지 않는, 대용량의 데이터일때 효율적이지만, 저희 프로젝트는 그렇지 않았기때문에 MySQL을 사용하였습니다.

**Q. Axios는 무엇이고 왜 쓰셨나요?**

- 특징 promise API (브라우저,node.js)를 이용한 http 비동기 통신 라이브러리
  - 프로젝트 내 서버와 클라 사이의 통신을 돕기 위해 사용함
- 계기 기능이 fetch 보다 낫다
- 장점
- 단점
- fetch vs axios
  공통 : object -> json.stringfy 형식
  차이 : 데이터, 바디

**Q. Axios 사용시 에러핸들링 이 있었는데 상세히 말씀부탁드려요?**

A. 1 쿠키

**status :**
로그인시 accesstoken/refreshtoken을 각각 data cookie에 담아 보냄.
서버-> 클라 localstoarge 에서 data, 쿠키에 잘 확인이 되었으나
클라 -> 서버로 전송시 서버가 쿠키를 인지 못함.

**원인 분석 1** http https 로 변해야 하는건가? => NO

**원인 분석 2** https 동일 문제 발생 !

해결 : axios -> withCredential :true 알게 됌

2 파일 에러 핸들링

유저 정보 변경, 사진 을 변경하는경우 클라 -> 서버로 보낼때! (post user)

**원인분석 1** 그냥 파일에 데이터 넣어서 보내주면 안돼나? => NO

**- 해결 :**

axios header 에 multiform- data를 담는다

헤더에서 content Type 를 > multipart/form-data 로 알맞게 넣어주어야함! (사진의 경우)

이후 프로젝트 내에 제목 ,사진, 내용, 운동부위 등 을 서버가 잘 받는것을 확인하고 종료.

- Multipart/form-data가 무엇인가요 ?
  In the multipart/form-data content type, the HTTP message body is divided into parts, each containing a discrete section of data.
  => 민감한 정보를 포함하는 content type http 메시지

**Q. typeORM 왜 썻나요?**
A. 일단 node.js 위에서 작동하며 type script를 지원 하는 orm 라이브러리 입니다
typeORM은 엔티티에 대한 모든 SQL 구조를 자동으로 생성해줍니다. MySQL / MariaDB / Postgres / SQLite / Microsoft SQL Server / Oracle / sql.js / MongoDB와 호환됩니다. 코드를 다시 쓸 필요 없이 데이터베이스 간에 전환할 수 있습니다, 처음프로젝트 시작당시 어떤 DB를 사용하게될지 정해지지않았을때 타입스크립트를 사용하기로 하엿으므로 타입스크립트와 잘어울리는 타입 orm을 사용하엿습니다.

**Q.** React 에서 지도 APi를 사용하려면..?
**A.**

- 지도 APi 종류: 카카오 네이버 구글 api
- kakaomap 선택 이유 : 한국, kakao map 샘플 코드 다수 제공, 리엑트에 맞는 reactkakaomap 제공.
- 성능개선 과정

변경 전 -

- 기존주소 - 유저주소 두번랜더링
- 기본주소 고정 - state로 위치상태 관리 Sdk 를 제공해주고있다.

---

유저가 로그인을 했을 때 지도의 위치를 유저의 주소로 바꿔주는 과정에서 새로고침, 게시물 수정 , 삭제 등 모든 행동이 일어날 때마다 지도의 기본주소로 이동했다가 유저의 주소로 이동하는 두 번 랜더링 되는 문제가 있었습니다
지도의 기본 위치가 고정되어 있는 상태에서 위치를 state로 관리를 하고 있었던 것이 문제였습니다 로그인을 하면 useEffect를 사용해 유저 주소의 위치로 지도를 변경해줬기 때문에 무조건 기본 위치로 이동했다가 본인의 주소로 이동하게 되었습니다

변경 후 -

- 고정위치 redux 유저주소
- 변경위치 state 글 ,검색 작성주소

---

두번 랜더링되는 문제점을 해결하기 위해 state로 관리하고 있던 위치들을 두개로 나누어서 관리하는 방법을 선택했습니다 위치가 고정되어 있어야 하는 것은 리덕스에, 새로고침하면 없어져야 하는것은 state로 나누어서 상태를 관리했습니다 로그인시 유저의 주소를 위도 경도로 변환해 리덕스에서 관리하였고 Redux persist를 사용해 새로고침이 되어도 데이터가 사라지지 않도록 로직을 바꾸고 나니 두번 랜더링 되는 문제를 고칠 수 있었습니다

**Q.** 지도 안의 게시물만 출력하는건 어떻게 구현 하셨나요?

**A.** 글을 작성했을 때의 주소를 위도 경도로 변환해 데이터 베이스에 넣어줬고 지도의 크기가 변경 되었을 때, 지도를 움직이다가 마우스를 뗐을 때 지도의 북동쪽과 남서쪽의 좌표정보를 얻어와 서버에 요청보내는 방식으로 지도안의 게시물만 출력 해 주고 있습니다

**Q. 상태관리 라이브러리로 리덕스를 사용했는데 어려움은 없으셨나요?**

A. 처음에는 redux의 action, reducer, dispatsh의 흐름을 이해하는데 어려움이 있었습니다.

- 상태를 한곳에서 다 찾을 수가 있고 필요한곳에 불러오기만 하면 되서 가독성이 높아짐
- 상태가 더 많아질수록, props로 내려받는것보다 더 쉽게 상태를 관리할 수 있었습니다. 유지보수에 용이.

**Q. Redux toolkit을 사용하지 않았는데  이유가 있으신가요?**

A. 리덕스는 작은 기능을 구현하려고 해도 여러개의 파일을 만들어야만 하는 단점이 있습니다
리덕스 툴킷을 사용해서 좀 더 간편하게 해결할 수 도 있었지만 리덕스로 대체함

**Q. sockeio 왜 썼나요?**
A. Http 통신 res,req 계속된 요청과 응답만을 배웠는데 비효율적이라 socket io 를 썼다.
소켓 io?

- 라이브러리입니다.
- flow : http 서버에서 요청 응답 -> socket.io 에서 클라이언트 준비 후 접속 -> socket.io 서버로 통신 (실시간)
  서버와 클라이언트가 소켓 연결 ( event 기반), on emit으로 소통한다.

**Q. Let’s Encrypt를 사용하여 HTTPS를 적용하는데 어려움은 없으셨나요?**

A. 무료 도메인을 사용하면서 Let's Encrypt를 사용하다보니 해당 도메인이 내 소유인지에 대한 인증이 원활이 이루어 지지 않아 오류가 발생하였습니다.
해결 방법으로 DNS TXT 레코드를 등록하여 내 도메인의 소유권을 확인 시켜주어 해결하였습니다.

**Q. Sequelize를 사용하였을 때의 장단점은 어떤 것이 있을까요?**

**A.**

- 장점 :
  재사용 및 유지 보수가 편리하다는 점이 있습니다. 작성해둔 코드들을 다시 보게 될 때 SQL 쿼리문을 사용했을 때보다 보기 쉽다는 느낌을 많이 받았습니다.
  실제로 팀원들과 의견 교환 후 수정해야 할 부분을 즉각적으로 바꿔줄 수 있었던 게 기억에 남습니다.

- 단점:
  으로는 SQL 쿼리문의 기초 학습에 대해 소홀해질 수 있다는 점을 꼽고 싶습니다. Sequelize를 학습하면서 원래 사용하던 SQL 쿼리문과 아예 다르다는 느낌을 많이 받았습니다.

비록 적응한 후에는 Sequelize가 더 편리하게 느껴졌지만 이로 인해 쿼리문에 대한 학습이 소홀해진다면 나중에 Sequelize가 아닌 다른 ORM을 사용해야 할 때 어려움을 겪게 될 것이라고 생각됩니다.

**Q. 배포 자동화를 구현하셨는데, 어려움은 없으셨나요?**

**A.**

- 기억에 남는 두 가지 오류를 뽑자면 첫번째로 fsevents 모듈 오류입니다.
  이 모듈은 MacOS를 위한 모듈이기에 ubuntu에서 에러가 났었는데, 심지어 ec2에서 에러 메세지를 보기 전에 렉걸림 현상이 일어나 고전했던 기억이 있습니다.

- 두번째로는 배포 스테이지 오류가 있었습니다. 파이프라인 구축 중 생겼던 이 오류는 홈페이지 내부에서 오류메세지를 띄워주지 않기 때문에 서버가 있는 가상 PC에서 직접 로그로 접속하여 문제점을 찾아야 했습니다.

**Q.** 게시물 무한스크롤을 구현하시면서 어느 부분이 어려우셨나요?

**A**. 처음 Intersection Obsever 를 사용 할 때 그 사용법에 익숙해지는 것과 무한스크롤에 사용되는 상태를 관리하는 데에 어려움이 있었습니다.

먼저 Intersection Obsever 를 처음 접해보고 프로젝트에 적용하려다 보니 API 호출부터 감시 요소 선언까지 그 플로우가 잘 이해되지 않았습니다.

요소가 감시되었다고 판단되는 `threshold` 나, 감지되는 영역을 설정해주는 `root`, `rootMargin`, 실질적인 감시를 위한 `intersectionObsever.observe()` 등등 생소한 개념들이 많았지만,

결과적으로 `entries` 객체를 이용하여 원하는 요소가 감지되는 경우 원하는 함수나 동작을 실행 시킬 수 있었습니다.

다만, 코드 구상 초기에 카테고리 별 페이지 전부를 하나의 컴포넌트를 이용해서 구현하고자 했는데, 이 과정에서 무한스크롤을 위한 상태의 초기화와 axios 요청이 정상적으로 진행되지 않아 컴포넌트를 좀 더 세분화하여 분리시키는 과정을 진행했습니다.

다행히 상태 오동작 이외의 로직에는 문제가 없어 오랜시간 고민한 문제가 비교적 간단하게 해결되었는데, 이를 계기로 하나의 컴포넌트에서 모든 것을 처리하기 보다는 적절한 컴포넌트 분리를 통해 동작의 안정성을 확보하는 것도 중요하다는 것을 깨닫게 되었습니다

**Q. AWS HTTPS 배포 어떻게 했나요?**
A.

1. AWS EC2 인스턴스 생성 -> S3 버킷 클라이언트배포 -> RDS 인스턴스 생성후 EC2 연결 ->ELB
2. 로드밸런서란? 하나 이상의 가용영역에서 들어오는 애플리케이션 트래픽을 자동 배분해주는 역할 (서버 과부화 방지)

- 종류 : application /network /gateway load balancer
- 리스너란? 연결요청을 확인하는 프로세스 -> 수신받은 요청을 정해진 대상그룹에 전달해줌
  보안프로토콜 - 서버에 연결 - 필수!
- 리스너 규칙: http 80 / https 443

3. aws router 53
   route 53 도메인 호스팅 영역 -> 구매
   freenom -> 무료 도메인

4. 이후 aws certificate manager (acm)에서 해당 도메인 인증서 요청

- 주의 타 사이트 구매시 -> 인증서 요청을 위해 반드시 CNAME 이름과 값 정보를 도메인 관리 사이트에서 등록해줘야함
- 주의 2 acm 인증서 요청이후 route53(nameserver) 정보도 해당사이트에 등록해줘야함.
- ACM 이란? aws 서비스와 연결 내부리소스를 TLS 인증서를 손쉽게 프로비전 및 관리인이 손쉽게 관리할수있게 해준다.
- 인증서(공개키 암호화 방식 )가 왜 필요한가요? 보안프로토콜을 사용하려고
- 로컬 환경 mkcer = 배포환경 ACM
- 사용 리전 / 버지니아 북부리전에 같은 도메인 요청

5 요청이후 route53에 배포중인 EC2(ELB) 별칭 레코드 생성

6 Cloud Front 통한 배포

- cloudfront란? 피싱을 통해 사용자에게 빠른 전송속도 제공
- 정적 웹페이지 배포를 s3 버킷을 원본 도메인으로 삼아 지원한다.
- option
  - 뷰어 프로토콜 정책: http/https 둘다 사용가능하나 http -> https로 리다이렉팅해줌
  - 대체 도메인 -구매한 도메인 정보 기입후 ACM SSL 인증서 등록
  - 기본값 루트 객체 -빌드로 생성한 html 파일 지정 이후 cloudfront 생성
  - 생성 후 사용자 정의 오류 페이지 설정 - 특정 에러코드 대비 응답 조정

**Q .많은 이미지를 관리하는 서비스를 구현했는데 이미지 파일은 어떻게 관리 하셨나요?**

A. 현재는 multer 라이브러리를 활용해 이미지를 서버 측에 정적 파일 형태로 저장하고 있습니다. 데이터베이스에는 정적 파일을 Source로 바로 활용할 수 있게 express static을 활용한 URL 형태로 이미지 정보가 저장됩니다

즉, 용량에 대한 부담은 데이터베이스가 아닌 서버 측이 지니게 되는데, 이미지 파일을 주로하는 서비스다 보니 이 점이 현재 고민거리이자 개선 사항으로 여겨지고 있습니다

이러한 점을 보완하기 위해 multer S3를 활용해 버킷에 이미지 업로드를 하거나 AWS Lambda를 활용해 이미지 전용 서버를 구축하는 방식도 고안하고 있습니다

Q. **리액트 상태관리는 어떻게 하셨나요?**

A.기획단계에서부터 상태관리를 위해 단방향 흐름과 관심사 분리를 고려하여 기능을 설계했습니다.

단방향 흐름에 막힌 기능은 상태끌어올리기 기법으로 해결 하였습니다.

재랜더링이 필요하지 않은 값은 적절하게 useRef 와 useMemo 를 사용했습니다.

이번 프로젝트로 상태관리 라이브러리에 의존하지 않고, 리액트에서 제공하는 hook을 많이 사용했는데 상태 관리에 대해 이해하는 좋은 시간 이었습니다.

Q. **무한 스크롤 어떻게 구현하나요**

A.

- scrollEvent
  방법 =
  1 window.innerHeight -> 현재 viewpoint로 보이는 윈도우높이
  2 document.documentElement.scrollTop -> 현재 vp의 어느 화면의 어느좌표를 보고있는지 top 좌표
  3 document.documentElement.offsetHieght -> 스크롤을 포함한 전체 페이지 길이

- 주의 : scroll이벤트는 계속해서 이벤트가 발생 -> reflow -> 성능에 안좋다! -> throttle 라이브러리로 최적화 필요

- IntersectionObserver API
  1 정의 =
  - 타겟 요소와 상위 요소 / 최상위 document의 vp 사이의 intersection내 변화를 비동기적으로 관찰하는 API
  - intersection 내 변화를 비동기적으로 관찰하는 API
  - 미리 지정해 놓은 요소의 vp 변화가 확인시 콜백함수 작동

2 사용방법

- userRef로 목적이 되는 태그 타겟설정 (target 상태관리)
- intersection observer 생성자 호출시 콜백함수 \* 옵션 설정해아함
- 옵션 설정 (root, rootMArgin,threshold)

  - root 대상객체 가시성 확인시 사용되는 vp 요소 (기본값 브라우저 vp)
  - rootMargin root가 가진 여백 기본 0
  - threshold 콜백 실행 되는 대상 요소의 가시성 비율 ( 1 = 100%, 0.5 = 50%)

- useEffect로 타겟 상태변화시 IntersectionObserver 작동.
  3 단점
- 서버에서 모든 사진에 한번에 응답 -> 브라우저에 부담
  4 해결
- 서버측에서 8장씩 보내기 로직 구성
- offset 8장 구현
- 로딩 인디게이터 사용 - get 요청 앞에 작동 시키게 하여 유저에게 기능작동 보여줌

Q. ** Sezuelize 관계 설정 어떻게 하셨나요?**
A.
1 ORM 이란?

- 키 밸류를 가진 객체데이터와 rdmbs를 자동으로 연결한다
  `rdbms <> ORM <> Application`
- SQL문을 직접 쓰지 않고 객체를 통해 간접적으로 DB 조작 - > 코드 작성 빠르다
- 모델 분리 -> 객체 재사용성이 빠르다
- 코드 전반 유지 보수 편리

2 assiciation 설정 과정

- migration이 생성된 순서대로 실행되기에 사전 table과 column 필수!
- 시도1 model = fk 키 설정
- 시도 2 migration 에 각각 reference 설정
- 해결 migration에 addConstraint(), removeConstraint() 설정 ,

**Q. 게시판페이지에 Quilleditor을 이용해 게시글 기능 구현을 하셨던데 무엇인가요?**

- CKeditor ?
  - 장점 :
    웹 표준화 , 다양한 플러그인 ,편리함과 확장성
  - 단점 :
    커스터마이징 방식 어려움
    동작 무거움
- Quill editor?
  - 장점 :
    커스터마이징 방식 간편, (최소기능)동작 가벼움, 유연성, 확작성
  - 단점 :
    Tag값이 붙어 -DB 전달 - user찾을때도 tag값 이용한다 이때문에 기능 사용자 정의가 제한
    xss 보안 취약
  - 기능구현 :
    - 에디터 컴포넌트 생성
    - 카테고리, 제목, 텍스트, 이미지 데이터 - 부모 컴포넌트
    - 이미지 미리보기 함수 / 에디터 구성 모듈 /포멧 - 자식 컴포넌트
    - Quill editor - 이미지 업로드 없음 / 글꼴 /글자색 모듈을 커스텀 (모듈,포맷 선언후 기능 작성후 Quill editor에 props 사용)
    - 이미지 사이즈 조절 - editor 모듈 활용
  - Quill editor 데이터 서버 전송
    - toolbar 이미지 업로드 버튼 -> input 태그 생성 -> type , accept 속성 생성 -> 서버로 보낼수 있게 base64형식(너무 길어서 mysql 오류)를 url로 전환 -> 이미지 접근할수 있는 url을 서버에서 클라이언트로 보냄 -> 추가적인 입력 작업 이미지 태그 생성해주는 코드 생성 -> 게시물 등룍완료 버튼 클릭시 html 코드 -> DB

> https://velog.io/@ww3ysq/finalTeamprojectQA

> To Be Continued...
