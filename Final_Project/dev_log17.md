# server

# client

랜딩 애니메이션 일부 추가, 버그 삭제
배포 Client 버그 수정

# DevOps

## 주제

### CI/CD

- 서론
  실은 파이널 프로젝트때 CI/CD에 대해 거의 생각하지 못함
  마지막 주 http -> https 설정 오류 핸들링으로 시간을 보냈기 때문에 ..
  백엔드가 혼자 인데 혼자 다함.
  근데 기록을 전혀 안남긴 상태.

Reference : 내 개인적인 기억력 + Git PR 기록

- How to ?

- 첫번째 프로젝트 때 썼던 EC2 - S3 - RDS DevOps 로직 사용

- code pipeline을 이용해 client EC2 - serverEC2 연결 시도

![](https://velog.velcdn.com/images/ww3ysq/post/821e8820-083c-4df4-b9fb-9da7a8b34592/image.png)

- RDBMS인 MYSQL과 RDS 연동법을 확인함 - EC2 에서 연동 완료
  <br/>
  ###error
  _ubuntu에서 client 및 server ec2어디에서도 , ec2와 MYSQL과 연동이 안되는 Issue 발생_

### 원인

프로젝트 끝나고 알아보니 ubuntu는 default 설정, 외부 port가 closed된 상태라고 합니다 (방화벽 문제라는 얘기를 졸업기수분께 들음)

### solution

▶ sudo su

▶ cd /etc/mysql/mysql.conf.d

▶ vi mysqld.cnf

bind-address 값을 0.0.0.0 으로 수정

### ![](https://velog.velcdn.com/images/ww3ysq/post/0d8e2039-0ceb-46ad-9316-32aa75743d70/image.png)

vi 에디터 수정 하는 방법

i 키 누르면 수정

ctrl + c 로 명령행

:wq로 저장후 vi 종료

`위 방화벽부분을 전혀 생각하지 못하고 계속 삽질했는데, 좀 아쉽다..`
`mysql 워크벤치 설정부분도 window와 다르게 우분투에서 나오지않음... 계속 사용이 어려웠다.`

### 레퍼런스

[우분투- ec2-mysql 연결](https://devkingdom.tistory.com/84)
[우분투- ec2-mysql 연결 2](https://emong.tistory.com/235)
