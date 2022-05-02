😲 새벽을 이용한 폭풍 post
📖 예전 java spring 했던 기억이 배포에 도움이 되길 바라며
💡 gmail로 이전 Error 부분에 대한 질문에 대한 답변이 다행히 남아있었다  
~~이건 몰랐쥬??~~

---

# ✍ 아고라 스테이츠 질문 정리

## ❓error

[codestates/agora-states-spring] sudo: installer: command not found 오류가 나는데 어떻게 해결해야할지 모르겠습니다

## ❗solution 1

띄어쓰기가 잘못되었을 수도 있습니다.
저 같은 경우에는
sudo installer -pkg AWSCLIV2.pkg -target /
설치했습니다.

## ❗solution 2

질문 주신 사항은 aws cli 설치 문제로 확인됩니다.

현재 @nmin11 님께서 올려주신방법으로 해결이 되셨을까요?
혹시 해당 방법으로 설치가 완료되지 않았다면, 새로운 설치방법을 알려드립니다.

```
    $ sudo apt-get install awscli
    $ sudo apt install ruby
    $ wget https://aws-codedeploy-ap-northeast-2.s3.amazonaws.com/latest/install

```

해당 방법으로도 설치가 가능합니다.

답변이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크해주세요 ✅
추가 질문이 있으실 경우, 댓글을 달아 주시기 바랍니다. 👍  감사합니다. 코드스테이츠 교육 엔지니어 이정민
