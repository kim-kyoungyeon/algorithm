## TIL \_ 47.md

# 1 분할정복

python 알고리즘 공부
List 연장선 / 저번 TIL 에 이은 알고리즘 공부.

    - 무엇을 분할? 입력사례 둘이상 작은 입력사례 분할
    - 정복은? 작은 입력사례 '각' 정복
            입력사례가 충분히 작지 않으면 재귀적으로 호출!
    - 통합 : '각'정복값 해답 통합해 입력사례 도출

Sum - sorted - conquere - 합병- 정렬 - 정복!

- 미분 개념
- '재귀'를 활용하는 대표 알고리즘

- 슬라이싱 (자바의 slice)

```py
a[start: end:step]
```

- start,end,step 모두 양음수
- start: 슬라이싱 시작
- end : 항상 위치 end -1
- step : 보폭 몇개씩 가져오는지

```py
a =['a','b','c','d']
-------
|a|b|c|d|
|0|1|2|3| 양수
|-4|-3|-2|-1| 음수
```

- n + n/2 + n/4 ... 무한대로 쪼개서 더하는 개념

## 1 일반 반복

### O(n)

n번의 곱셈 수행.

```py
def iterative_P(C,n):
result = 1
for _ in range(n):
result = result* C
return result
```

### O(2n)

![](https://velog.velcdn.com/images/ww3ysq/post/4feb7fd5-1d9a-4e29-9314-6918aaf0c6b1/image.png)

```py
def Recur(n)  :
if n == 0 :
	return 0
if n == 1 || n ==2 :
	return 1
return Recur(n-1) + Recur(n-2)

```

- 직관적 이해쉬움
- 같은 연산 재귀적 호출 비효율, 함수 호출될때 > 다른 함수 2개를 호출하기에 연산이 길어진다

### O(N) 메모이제이션 단한번씩 계산

- 몇 승?
  ![](https://velog.velcdn.com/images/ww3ysq/post/1d49e715-6946-4dd2-9ab7-13016dc5d97f/image.png)
- 무한대로 곱한다
  ![](https://velog.velcdn.com/images/ww3ysq/post/6956d69c-8ac9-4bd8-9947-95850c004155/image.png)

```py
def Re_Power((C,n):
if n ==1:
	return C
if n%2 == 0:
	y = Re_Power(C , n/2)
    return y*y
else:
    y = Re_Power(C, (n-1)/2)
    return y*y*C

```

## 2 병합정렬

![](https://velog.velcdn.com/images/ww3ysq/post/59246666-4dfc-4417-a10b-4fb5fcf9a63d/image.png)
![](https://velog.velcdn.com/images/ww3ysq/post/cbe83543-298f-4325-8c24-6892b842f1d3/image.png)

- 특징 :
  - 최소 단위까지 쪼갠다
  - 차례로 정렬 후 최종결과 획득
  - 병합 정렬 : top-down 방식
  - 시간복잡도 O( nlog n)
- 분석:
  1 각 위치에서 단 한번의 비교횟수 발생
  2 모두 비교 횟수를 합치면 n>1 에 대해 logn 만큼의 비교 필요
  가정 : n = 2^k, k >= 1
  3 점화식

```
W(n) : 크기가 n 배열 비교횟수
W(n) :W(n/2) +1 // 회기 호출 비교횟수 + 중간요소 비교 횟수
W(1) : 1

n = 2^k,  k >= 1  일 때,
W(n)  = W(n/2) +1
= W ((n/2^2) +1) +1 = W(n/2^2) +k
( n = 2^에 의해서 W(n/2^2) = W(n/n) = W(1) =1
= 1+k
( n = 2^에 의해서 k= logn)
1 + logn(포함됨..)0(logn)

```

![](https://velog.velcdn.com/images/ww3ysq/post/609ba645-d591-4fde-b1b4-84e831f6a73d/image.png)

```
배열크기 n
크기 n/2
크기 n/2/2
크기 n/2/2/2
크기 n/2/2/2/2
 ...
크기 2
크기 1
```

```py
def merge_sort(n):
	if len(n) <=1 : # 사이즈가 0/1 이면 리턴
    return n

    # divide 부분
 	mid = len(n) //2
    left : n[:mid] # 슬라이싱 처음부터 mid-1까지
    right : n[:mid]

    # 리스트 크기가 1이 될때까지 merge_sort 재귀 호출
    left = merge_sort(left)
    right= merg_sort(right)

    # conquer 부분 분할 리스트 병함
    return merge (left,right)

```

- 추가 예시 :피보나치 수열
  [피보나치](https://jow1025.tistory.com/101)

- 느낀점: 행렬 계산다까먹었냐.. 손코딩 , 명제풀기

# 2 ContentType 고민

- Q 뮬터 대신 쓰는 방법 몰라요?

![](https://velog.velcdn.com/images/ww3ysq/post/dde0011a-c010-420a-8245-7d3218092020/image.png)

```
 userRepo.find ({
 relations: {
 conatact :true ,
 photo :{
 album: true, },
 }
 )

`relations.photo.album /img Content-type :application/ x-www-form-urlencoded
`
```

# Content-type :application/ x-www-form-urlencoded

- 의문 : restAPI 인경우 무조건 JSON 형식으로 req,res하는걸까? -> NO

- default Content Type: application/ x-www-form-urlencoded 이라고 함.

- 콘텐트 타입이란 ? 보내는 자원의 형식을 명시하기 위해 헤더에 실리는 정보

- 출력 값 - HTTP GET 요청 을 보내면 다음과 같이 쿼리 매개 변수를 사용할 수 있습니다.
  출력값 : `Name=John+Smith&Age=23`

  - 방법
  - message body 에 들어갈 내용을 http header에 담는다
  - 특징
  - keyvalue&keyvalue 라서..url 인코딩 방식 후 웹서버

[Springrefer](https://blog.naver.com/writer0713/221853596497)

- Content-Type 형식 종류

1 content type : application  
 정의 : Rest API의 일반적인 json 형태?

```
  Content-Type: Application/EDI-X12 <--  Defined in RFC 1767

 - Content-Type: Application/EDIFACT <--  Defined in RFC 1767

 - Content-Type: Application/javascript <-- Defined in RFC 4329

 - Content-Type: Application/octet-stream  : <-- 디폴트 미디어 타입은 운영체제 종종 실행파일, 다운로드를 의미

 - Content-Type: Application/ogg <-- Defined in RFC 3534

 - Content-Type: Application/x-shockwave-flash <-- Adobe Flash files

 - Content-Type: Application/json <-- JavaScript Object Notation JSON; Defined in RFC 4627

 - Content-Type: Application/x-www-form-urlencode <-- HTML Form 형태

* x-www-form-urlencode와 multipart/form-data은 둘다 폼 형태이지만 x-www-form-urlencode은 대용량 바이너리 테이터를 전송하기에 비능률적이기 때문에 대부분 첨부파일은 multipart/form-data를 사용하게 된다.
```

2 content type : multipart - 참고로 multipart는 MIME(Multipurpose Internet Mail Extensions) 타입 중의 하나입니다. - multipart/form-data를 처리하기 위한 서버는 멀티파트 메시지에 대해서 각 파트별로 분리하여 개별 파일의 정보를 얻게 됩니다.

```
 - Content-Type: multipart/mixed: MIME E-mail;

- Content-Type: multipart/alternative: MIME E-mail;

- Content-Type: multipart/related: MIME E-mail <-- Defined in RFC 2387 and used by MHTML(HTML mail)

- Content-Type: multipart/formed-data  <-- 파일 첨부


```

3 XML Media의 타입
정의 :xml이 붙은..?

```
 - Content-Type: text/xml

 - Content-Type: Application/xml

 - Content-Type: Application/xml-external-parsed-entity

 - Content-Type: Application/xml-dtd

 - Content-Type: Application/mathtml+xml

 - Content-Type: Application/xslt+xml
```

4 Multipart Related MIME 타입

```
  - Content-Type: Multipart/related <-- 기본형태

  - Content-Type: Application/X-FixedRecord
```

- 그외에도
  오디오 타입 / 텍스트 타입/ XML Media의 타입 등이 있다.
  [media-type](http://www.iana.org/assignments/media-types/media-types.xhtml)
  ~~그만알아봐~~

- 그래서 multer 대신 쓸 수있나?
  이미지도 어짜피 문자로 이루어져있음 > 이미지 파일 > 문자생성 > http request body 에 담아 보낸다
  ![](https://velog.velcdn.com/images/ww3ysq/post/5301588c-cb77-4690-ab07-3bee5c8b3d66/image.png)

![](https://velog.velcdn.com/images/ww3ysq/post/74911089-32aa-41ae-a13e-982b0655c62e/image.png)

- header?
  헤더는 또한 보내지는 자원의 content 타입이 포함되는 것이다.
  이것은 Content-Type 헤더에 의해 지정되는데,
  이 값은 표준 MIME-Type의 하나이다.
  MIME-Type을 살펴봄으로써 브라우져는 데이터를 나타내는데 어떤 종류의 파일 Stream인지를 알고 있다.
  - 내용 : 클라이언트에게 웹 서버와 커뮤니케이션 세부사항을 묘사한다.
    예를들어, 헤더는 사용되고 있는 웹 서버의 소프트웨어 의 타입, 서버의 날짜와 시간, HTTP 프로토콜, 사용중인 커넥션 타입 등을 지정한다. 헤더는 또한 클라이언트가 이런 가상 패스나 도메인에 대해서 저장해야 할 쿠키를 포함한다.

[헤더](http://www.webmadang.net/community/community.do?action=read&boardid=5001&page=2&seq=3)

- 주의!!! 요청과 응답시 헤더 내용 변경됌.

  - 요청
    - header 메소드/엔드포인트 http 버전?
    - 옵션 : 요청에 대한 설명,
    - 빈줄 : 요청에 대한 모든 메타 정보가 전송되었음을 알리는 빈 줄(blank line)이 삽입
    - 요청과 관련된 내용(HTML 폼 콘텐츠 등)이 옵션
  - 응답
    - header 수행에 대한 성공 또는 실패가 기록됨
    - 옵션 : 메시지 본문에 대한 설명
    - 응답과 관련된 문서
    - 빈줄 : 요청에 대한 모든 메타 정보가 전송되었음을 알리는 빈 줄(blank line)이 삽입

- body : HTTP 메시지의 페이로드는 본문(body)

## [mdn](https://developer.mozilla.org/ko/docs/Web/HTTP/Messages)

- 요약
  - header = content -type 으로 해당 body 타입 명시
  - http request body에 클라이언트에 보내야 하는 데이터 담김
  - body 에 들어가는 데이터 타입 = http header 에 명시 / 서버가 타입에 따라 알맞게 처리
  - 해당 body 타입 명시 > http header 에 명시

여기서 중요한 점은 이미지 파일을 전송한다고 해서 png나 jpg 파일을 전송하는 것이 아니라는 것입니다.

---

- 추가 질문 : cookies 에서 httpOnly 와 withCredentail을 왜 쓰게 되었는지 ? 차이점은?
- multipart 와 multipart related Mime 의 차이 =
  - There are two classes of type: discrete and multipart. Discrete types are types which represent a single file or medium, such as a single text or music file, or a single video. A multipart type is one which represents a document that's comprised of multiple component parts, each of which may have its own individual MIME type; or, a multipart type may encapsulate multiple files being sent together in one transaction. For example, multipart MIME types are used when attaching multiple files to an email.
- 요약 : discrete class는 하나의 파일, 중간사이즈의 파일 (single 글/ 음악파일,한개 비디오 )
  mutipart는 document(많은 컴포넌트 부분 (MIME 타입설정 각각 되어잇음 ) ,캡슐화된 많은 파일
  multipart MiME type : 멀티 파일을 이메일에 붙일때 쓴다
- 결론 : multipart 에 multipart MiME type 포함됌!!!!
  ~~ 죽을거 같다..\_~~

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

Git

- 잘못 commit 한 것 수동적으로 지우지 말고 git 언어를 이용해 지우는 방법?

```jsx
// 원격 저장소와 로컬 저장소에 있는 파일을 삭제한다.
$ git rm [File Name]
// 원격 저장소에 있는 파일을 삭제한다. 로컬 저장소에 있는 파일은 삭제하지 않는다.
$ git rm --cached [File Name]
https://gmlwjd9405.github.io/2018/05/17/git-delete-incorrect-files.html
```

[reference](https://gmlwjd9405.github.io/2018/05/17/git-delete-incorrect-files.html)
