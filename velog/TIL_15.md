![](https://images.velog.io/images/ww3ysq/post/931e625b-9ea5-4871-9f87-21260aca2f10/image.png)
혼이 나야하는 인간 === 나
ㅜ
엄마아빠미안해..

nodejs공부를하는중
section2 부터 다시시작하는 공부!

실은 ha2를 떨어져서..다시..공부

프로미스는 언제 써야하는지는알겠으나 아직 작동원리는 공부중
비동기적 흐름이 node.js 의 핵심!

node.js를 써야 하는 것 같은데요?
= http 공부와 api 공부를 다시 해보고 오기.

> Node.js HTTP 처리 과정을 잘 이해하게 하는 것입니다.
> 언어나 프로그래밍 환경과 관계없이 상식선에서 HTTP 요청이 어떻게 동작하는지는 알고 있어야 합니다.

```jsx
const http = require("http");
http
  .createServer((request, response) => {
    const { headers, method, url } = request;
    let body = [];
    request
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        // 여기서부터 새로운 부분입니다.

        response.on("error", (err) => {
          console.error(err);
        });

        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");
        // 주의: 위 두 줄은 다음 한 줄로 대체할 수도 있습니다.
        // response.writeHead(200, {'Content-Type': 'application/json'})

        const responseBody = { headers, method, url, body };

        response.write(JSON.stringify(responseBody));
        response.end();
        // 주의: 위 두 줄은 다음 한 줄로 대체할 수도 있습니다.
        // response.end(JSON.stringify(responseBody))

        // 새로운 부분이 끝났습니다.
      });
  })
  .listen(8080);
```

## ☝기본 문법

> server 객체 생성
> -> http.createServer();
> -> 요청처리 {메서드,url,헤더 } =request;(구조분해할당..?)
> -> 헤더 파싱과정
> -> post/put crud작업을 위한 요청바디 선언
> -> 핸들러에 request 객체 스트림연결
> -> 스트림에 data,end 이벤트에 이벤트 리스너 등록
> ->데이터 받음

## ☝http 상태코드

[링크텍스트](https://developer.mozilla.org/ko/docs/Web/HTTP/Status)

> **✍ 200 OK**
> **✍ 202 Accepted**
> 요청을 수신하였지만 그에 응하여 행동할 수 없습니다. 이 응답은 요청 처리에 대한 결과를 이후에 HTTP로 비동기 응답을 보내는 것에 대해서 명확하게 명시하지 않습니다.  
> **✍ 404 Not Found**
> 서버는 요청받은 리소스를 찾을 수 없습니다. 브라우저에서는 알려지지 않은 URL을 의미합니다.

## ☝요청 바디

```jsx
let body = [];
request
  .on("data", (chunk) => {
    body.push(chunk);
  })
  .on("end", () => {
    body = Buffer.concat(body).toString();
    // 여기서 `body`에 전체 요청 바디가 문자열로 담겨있습니다.
    //버퍼를 하는 이유는?
  });
```

## ☝오류에 대한 간단한 설명

```jsx
request.on("error", (err) => {
  // 여기서 `stderr`에 오류 메시지와 스택 트레이스를 출력합니다.
  console.error(err.stack);
});
```

## ☝명시적 헤더 데이터 전송

```jsx
response.writeHead(200, {
  "Content-Type": "application/json",
  "X-Powered-By": "bacon",
});
```

## ☝ 응답 바디 전송

response 객체는 WritableStream이므로 클라이언트로 보내는 응답 바디는 일반적인 스트림 메서드를 사용해서 작성합니다.

```jsx
response.write("<html>");
response.write("<body>");
response.write("<h1>Hello, World!</h1>");
response.write("</body>");
response.write("</html>");
response.end();
```

- async await 과axios의 관계 확인해보기
