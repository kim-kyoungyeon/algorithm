## ❓error

token이랑 oauth가 함께 쓰이는 경우인것 같은데, 왜 인지 잘 이해가 되지 않습니다.
outh는 framework이고, jwt은 토큰 형식으로 서로 다른 걸로 이해를 햇었는데 같이 쓰는 것 처럼 보입니다.
accesstoken과 refresh 토큰은 outh에서도 쓰인다고 하고, 충분히
jwt에도 위 토큰들이 있는걸로 글을 확인했는데, 그럼 왜 같이 쓰는건가요?
<br>

## ❗solution

jwt와 oauth 두가지 모두 토큰에서 파생된 개념입니다.
인증과 인가(Authentication / Authorization)의 차이가 무엇인지 이해하고 jwt와 oauth가 각각 어떤 개념과 연관되는지 이해하시면 궁금증이 해소될 것으로 보입니다.
대부분의 사이트에서 로컬 회원가입은 jwt를, 소셜 회원가입은 oauth로 2가지 방법을 모두 활용하는 경우가 많습니다.

oauth와 jwt의 차이는 JWT는 토큰의 한 형식이고 OAuth 2.0은 인증 프로토콜이라는 것입니다.
token은 Oauth 2.0 프로토콜에서 내부적으로 사용되는 장치로 생각하시면 될 것 같습니다.

---

---

[different between oauth and jwt](https://anil-pace.medium.com/json-web-tokens-vs-oauth-2-0-85dd0b32057d#:~:text=Basically%2C%20JWT%20is%20a%20token,you%20must%20go%20with%20OAuth2.)

## ❓error

```jsx
2 - 1;
module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "15s" });
  },
};
2 - 2;

(exports.generateAccessToken = function (req, res) {
  return sign(data, process.env.ACCESS_SECRET, { expiresIn: "15s" });
}),
  2 - 3;

function generateAccessToken(req, res) {
  return sign(data, process.env.ACCESS_SECRET, { expiresIn: "15s" });
}
module.exports = {
  generateAccessToken: generateAccessToken,
};
```

위 3개 차이점을 모르겠습니다.

## ❗solution

2-1와 2-3는 코드 스타일만 다를 뿐 동작하는 방식은 같습니다.
따라서 module.exports와 exports의 차이에 대해서만 설명드리도록 하겠습니다.
module.exports와 exports는 기본적으로 같은 객체를 참조합니다. 따라서 2-1, 2-2는 같은 결과를 가져옵니다.

하지만 exports = {}와 같이 exports에 다른 값을 할당하게 되면 참조 링크가 끊어지게 되어 exports는 더 이상 module.exports와 같은 객체를 가리키지 않게 됩니다.
좋은 레퍼런스가 있어 공유 드립니다.

---

---

[module.exports와 export 차이](https://dydals5678.tistory.com/97)

## ❓error

token 삭제와 blacklist 만드는 부분 관련 문의입니다.

logout은 client 쪽에서 진행하지만 token을 db로 보내서 삭제하는 방법도 있는걸 확인했습니다
blakclist를 만들어보면서 최대한 진행해보려했으나 한계에 부딪쳤습니다.
공식문서 안내로는 토큰을 redis 라는 인 메모리 db를 에 따로 저장해서 삭제를 진행하는걸 확인했는데,
로컬인 mysqal db에서는 , 특히 현재 migration 한 상태라서 , 저장후 삭제가 불가능 한 건가요?

---

[velog-redis 사용프로젝트](https://velog.io/@tlatldms/%EC%84%9C%EB%B2%84%EA%B0%9C%EB%B0%9C%EC%BA%A0%ED%94%84-Spring-boot-Spring-security-Refresh-JWT-Redis-JPA-4%ED%8E%B8-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%9C%A0%EC%A7%80%EC%99%80-%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83-%EC%B2%98%EB%A6%AC)
[how to blacklist jwt in node](https://stackoverflow.com/questions/70800633/how-do-i-blacklist-a-jwt-refresh-token-stored-in-redis-database-in-a-node-applic)
[dev- how to remain stateless](https://dev.to/mr_cea/using-redis-for-token-blacklisting-in-node-js-42g7)

## ❗solution

먼저 레퍼런스로 링크해주신 내용은 공식 문서가 아닌 걸로 보입니다:)
blacklist를 만드는 방법은 jwt의 주요 속성인 'stateless'(서버에 상태 비저장)와 맞지 않습니다.
따라서 저희가 제공해드린 스프린트의 취지에 맞지 않는다는 점을 말씀드리고 싶습니다.
mysql에 토큰을 따로 저장하지 않고 클라이언트에서 삭제하는 방법을 고민해보시길 바랍니다.
추가 질문 답변 :
redis를 사용해 blacklist를 만드는 방법은 저희 스프린트가 커버하는 범위를 넘어서는 내용이라고 하는 게 더 정확할 것 같습니다
저희가 채택한 방법은 링크해주신 기사의 후속 시리즈에 나와있는 것처럼, refreshToken을 사용하는 방법입니다.

어떤 솔루션이 무조건 맞다고 할 수는 없습니다.
각각의 기술 스택의 장단점을 비교해 프로젝트에 적용하는 것은 엔지니어의 몫입니다.
보안, 성능, ux 등등 서비스의 중점을 어디에 둘 것이냐에 따라 결정해야겠지요.

제공된 스프린트는 개념의 기본적인 이해와 실습을 위한 과정입니다.

인증과 토큰을 사용하는 방식에는 여러 방법이 있기 때문에,
후에 프로젝트를 진행할때 지금의 공부를 바탕으로 기획과 서비스의 요구사항에 따라 맞게 활용하시면 되겠습니다

---

---

[jwt와 restAPI](https://stackoverflow.com/questions/26739167/jwt-json-web-token-automatic-prolongation-of-expiration)
[redis외의 방법](https://dev.to/mr_cea/remaining-stateless-a-more-optimal-approach-e7l)

## ❓error

현재 deploy practice에서 rds생성후 db연결하여 로그인을하려고 하는데
개발자 콘솔 network에서
GET status 404
POSt 405 에러가 나옵니다.

![](https://images.velog.io/images/ww3ysq/post/8d1994c6-1576-48f9-88af-f8d79bed4f1a/image.png)
![](https://images.velog.io/images/ww3ysq/post/5b15a6cc-b991-4bfd-a754-fa532365fea3/image.png)
![](https://images.velog.io/images/ww3ysq/post/d129b5df-bc36-42c0-83d9-c5e0407333ff/image.png)

## ❗solution

EC2 로그에서 보이는 node 버전과 npm 버전도 신경쓰이는 곳이긴한데,
EC2에서 한번 npm install을 다시 진행해보시는걸 추천드려요

npm install
npm cache clean --force
npm install -g npm
npm install

`알고보니 url = http를 https 로 오타로 인한 에러였음 `

---

---

[npm설정](https://stackoverflow.com/questions/20753550/enoent-no-such-file-or-directory)

## ❓error

sprint - server deployment pipeline에서 EC2를 활용한 파이프라인 구축 hands-on 과정중에서 ApplicationStart에서 에러가 발생합니다.

```
Error during perform: InstanceAgent::Plugins::CodeDeployPlugin::ScriptError - Script at specified location: scripts/start.sh run as user root failed with exit code 255 - /opt/codedeploy-agent/lib/instance_agent/plugins/codedeploy/hook_executor.rb:183:in
`execute_script'
```

라는 에러가 왜 발생하는지 이해가 되지 않습니다.

```
2022-02-21 07:13:21 WARN [codedeploy-agent(10971)]: InstanceAgent::Plugins::CodeDeployPlugin::HookExecutor: Script at specified location: scripts/start.sh is not executable. Trying to make it executable.
2022-02-21 07:13:21 INFO [codedeploy-agent(10971)]: Version file found in /opt/codedeploy-agent/.version with agent version OFFICIAL_1.3.2-1902_deb.
2022-02-21 07:13:21 INFO [codedeploy-agent(10971)]: [Aws::CodeDeployCommand::Client 200 0.04525 0 retries] put_host_command_complete(command_status:"Failed",diagnostics:{format:"JSON",payload:"{"error_code":4,"script_name":"scripts/start.sh","message":"Script at specified location: scripts/start.sh run as user root failed with exit code 255","log":"LifecycleEvent -$
2022-02-21 07:13:21 ERROR [codedeploy-agent(10971)]: InstanceAgent::Plugins::CodeDeployPlugin::CommandPoller: Error during perform: InstanceAgent::Plugins::CodeDeployPlugin::ScriptError - Script at specified location: scripts/start.sh run as user root failed with exit code 255 - /opt/codedeploy-agent/lib/instance_agent/plugins/codedeploy/hook_executor.rb:183:in `execute_script'
```

![](https://images.velog.io/images/ww3ysq/post/ffe9de08-f392-4d71-a177-6291323ab2d8/image.png)

## ❗solution

지금 추측할 수 있는 몇가지 이슈 중 하나는 npm 버전 문제입니다. 서버에 ssh로 접속하셔서 npm 버전이 어떤지 한번 확인 부탁드릴게요. 만일 버전이 너무 낮으면 업데이트 하신 후 다시 릴리즈를 해보세요.

가장 확실한 로그는 아무래도 /opt/codedeploy-agent/deployment-root/deployment-logs 여기에서 찾을 수 있는데요. 이 내용 중에 stderr 부분만 복사 붙여넣기해서 올려주셔도 답변해드리는 데 훨씬 수월할 것 같아요!
![](https://images.velog.io/images/ww3ysq/post/86e0e176-6b28-44ec-a13c-542ddb8152c4/image.png)
노드 버전 문제가 맞네요!!!!! sudo 로 들어가서 npm 버전을 확인해보세요. 가서 업데이트해주시고요, 이래도 안되면 initialize.sh 파일에 npm을 글로벌로 설치하는 과정을 추가해주세요.

```
#!/bin/bash
cd /home/ubuntu/im-sprint-practice-deploy/server
npm install npm -g
npm install
npm install pm2@latest -g
sudo apt-get update
sudo apt-get install authbind
sudo touch /etc/authbind/byport/80
sudo chown ubuntu /etc/authbind/byport/80
sudo chmod 755 /etc/authbind/byport/80
```

## ❓error

![](https://images.velog.io/images/ww3ysq/post/e6af8ed9-a08b-439b-88cb-d41a01cb6cad/image.png)
1 . DB 인스턴스가 정상적으로 실행되고 있나요?

![](https://images.velog.io/images/ww3ysq/post/f6c8afab-0ba0-4ba2-a1b6-5c02369cad07/image.png) 2. 환경변수에 제대로된 값을 할당하지 않았는지,
![](https://images.velog.io/images/ww3ysq/post/95d3d71d-8ff7-47ab-96a4-6e6855ddbcb8/image.png)
3.env.example 파일명이 env로 정상적으로 변경되었는지 확인
이 부분에서 애초에 파일명이 .env로 되있지않나요? .env.example 했을 때 없다고 뜨고 nano .env를 했을때 실행이 됩니다.

4. 크롬 개발자 도구의 Network 탭에 들어가서 요청, 응답 과정에서 어떤 오류가 발생하는 지 확인

첫 번째 사진을 보면 인스턴스하고 연결이 잘되지않고 있다고 생각했습니다.
그래서 인스턴스에 DNS를 다시 확인하였고, 일치하고 있음을 확인했습니다.
서버도 정상적으로 실행이 됩니다.
mysql 에도 해당 엔드포인트로 로그인했을시 문제가 없고,
보안문제인가 싶어서 인스턴스에 보안도 설정하였습니다.
![](https://images.velog.io/images/ww3ysq/post/812d7ea5-0483-4b08-af79-987d81a8412c/image.png)
데이터베이스에 practice-database-deploy2.cju8kanwkj6m.ap-northeast-2.rds.amazonaws.com 엔드 포인트입니다.

아무리봐도 ec2와 연결이 돼지않아 생기는 문제인거같은데, 왜 연결이 안되는지 모르겠습니다.

에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)
![](https://images.velog.io/images/ww3ysq/post/1a55e486-b168-4dcf-b0c5-157cddadbf36/image.png)
어느부분이 문제인지 모르겠습니다. ㅠㅠ

## ❗solution

자세한 원인은 rds 로그, ec2에서 발생하는 로그를 확인해 보셔야 할 것 같습니다.

하지만 캡처해주신 부분을 보면 인바운드 규칙 혹은 포트 설정 문제가 아닌지 의심됩니다. 포트 번호를 13306번으로 설정하셨다면 rds가 속한 보안그룹의 인바운드 규칙에 13306 포트를 추가해주셨나요?

다시 확인해 보니 db 연결 여부, 값 존재 여무에 상관없이

201 혹은 401 응답이 와야 하는 POST /signin api에서도 타임아웃이 발생하네요..

request URL에 ec2에 https 프로토콜로 요청하는 부분이 보이는데 해당 스프린트 원본에서는 http로 설정되어 있던 걸로 기억하는데

혹시 따로 변경하신 부분이 있나요?
express 서버를 https 프로토콜로 생성하시려면

ec2 콘솔의 스프린트 폴더/server/ 위치에서

https://urclass.codestates.com/5f9a4b9e-8fa0-4897-a727-36b531441f32?playlist=612

urclass 자료의 mkcert로 로컬호스트 인증서 발급, express 서버 생성 부분을 참조하셔서 app.js를 수정해주시면 될 것 같습니다!
( app.listen(port), ~함수~ 는 https.createServer(options, app).listen(443) 으로 대응됩니다)

---

---

[https모듈,http.createServer 관련](https://nodejs.org/dist/latest-v16.x/docs/api/https.html#httpscreateserveroptions-requestlistener)
[express app.listen관련](https://expressjs.com/ko/4x/api.html#app.listen)
