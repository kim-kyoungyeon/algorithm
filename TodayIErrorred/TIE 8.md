# Error 1

git rebase 문제 재발생

```jsx
 * branch            main       -> FETCH_HEAD
fatal: Not possible to fast-forward, aborting.
```

- 상황 :git push 및 pull origin 브랜치에서 같은 오류가 발생
  : git push origin +main 을 이용해 강제 push 했으나
  git pull 을 제대로 하지 못함, readme가 반복해서 지워지고
  contribution도 삭제가 되었다...(ㅜㅠ 리드미 3번째 수정중)
- 원인 :git rebase fast-fowarding 설정 문제

- 해결 1
  `git merge`

merge
변경 내용의 이력이 모두 그대로 남아 있기 때문에 이력이 복잡해짐.

- 해결 2
  `git rebase`

rebase
이력은 단순해지지만, 원래의 커밋 이력이 변경됨. 정확한 이력을 남겨야 할 필요가 있을 경우에는 사용하면 안됨.

- 정리
  - 토픽 브랜치에 통합 브랜치의 최신 코드를 적용할 경우에는 rebase 를 사용,
  - 통합 브랜치에 토픽 브랜치를 불러올 경우에는 우선 rebase 를 한 후 merge
  - 하지만 계속해서 git fastf

# Error 2

- status: 위의 방법을 다 사용해보았으나 pull 이 해결되면 push가 안되고 반대의 경우 또한 발생함.

`Fatal: Not possible to fast-forward, aborting.`

- 원인 분석 :

  - 별다른 설정 없이 git pull을 한 뒤 아래와 같은 메시지를 본 적이 있을 것이다.

  ````jsx
  warning: Pulling without specifying how to reconcile divergent branches is
  discouraged. You can squelch this message by running one of the following
  commands sometime before your next pull:

  git config pull.rebase false  # merge (the default strategy)
  git config pull.rebase true   # rebase
  git config pull.ff only       # fast-forward only
  You can replace "git config" with "git config --global" to set a default
  preference for all repositories. You can also pass --rebase, --no-rebase,
  or --ff-only on the command line to override the configured default per
  invocation.
  	```

  ````

- 해결 1 : config 의 문제라고 생각함,

`git config --unset pull.ff`

설정 후
`git rebase --abort`

# Error 3

- status :

 <div align ='center'>
 Q 안되나요? <br/> &nbsp 
 A 응 안돼...😇
 </div>
 
 
 
```jsx
Fatal: Not possible to fast-forward, aborting

```

- 원인 분석 :
현재 conflict 는 없는 상황
정확한 git 사용법 부재라고 생각함 stack over flow 참조
<br/>
`git pull --rebase.`
다른 해결과 다르게 branch 이름 알 필요가 없을때 쓴다.
<br/>
-> 시도해 보았으나 계속해서 위와같은 에러 발생.
<br/>
`git pull origin <branch> --rebase`
upstream(메인) 브랜치가 set 되어 있지 않은 경우 쓰는 명령어
<br/>
-> 내 브랜치는 git push할때 이미 자동 생성 되었음 (main*), 사용불가
<br/>
 `git config --global pull.rebase true`
 <br/>
 -> config를 매일 설정하기 귀찮다! 글로벌 설정시 쓴다 하지만 몇시간의 구글링 결과로 난 이미 선언함.


- 해결 :
  `git pull --no-ff`
  -> make fast-forwarding to be off by --no-ff
 <br/>
 -> 더이상의 설정은 무의미한 것으로 생각함
 -> git log를 봤을때 이미 staging area에서 remote repo로 넘어간것으로 판단했음
 -> fast-forwarding을 off 함으로서 해결완료


[출처](https://stackoverflow.com/questions/13106179/fatal-not-possible-to-fast-forward-aborting)
```
