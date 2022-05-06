![](https://images.velog.io/images/ww3ysq/post/67efab94-a246-4bcc-b599-b75166cbc9ea/2022-03-03_1.43.13.png)

> 분명히 이 포스트 썼는데 ? (😨) velog에서 날아가서 다시쓰는 포스트 🤬

- teammeber

  - 2 back -end
  - 2 front -end

  ***

- leader = 나 입니다 (back-end)😂 ~~개망함~~

---

- 주제 - 음악 공유 커뮤니티 -스포티파이 (클론같지만 아닌듯한)유사 코딩.

---

- 현재 status

  - 첫째주 server의 router와 controller를 구분도 못하는 정도의 심각성을 알고
  - 토요일 늦잠잔 것을 보충할 겸 일요일 공부를 하러나섰다.
  - 혼자서 해보겠다고 server 부분 코드를 만지다가, 오류에 오류가 겹치는 상황
  - 일단 내 repo로 push하겠다고 `git chechout -b`를 이용해 branch를 무수히 만듬
  - git branch 문제로 pull 할때 기존 다같이 작업중인 dev 브랜치 아닌 main에서 계속 가져와서 진도가 나가지 않음.

  ***

- 아쉬운점
  - 기록을 제때 안하면 기억이 가물가물하다. (Devlog가 도움이 돼었음)
    <br>
  - git branch를 이용하여 본인은 레파지토리에서 -> codestate branch로 merge를 하려고 했는데 계속해서 merge 오류가 났습니다.
    <br>
  - git branch -v git remote -v 를 통해 본인의 ㅅㅇbranch 위치 파악을 하려 했으나 이부분 파악이 힘들었습니다.
    <br>
  - git pull origin dev 로 잘 끌어왔다고 생각했으나 제대로 파일이 불러오지지 않았습니다.
    <br>
  - git remove branch를 통해 기존의 branch를 지우려 했으나 제대로 지워지지 않았습니다.
    <br>
  - git checkout -b 를 통해 너무 많은 브랜치를 만들어버려서 힘들었습니다.
    <br>
  - 현재 본인 레파지토리 feature2 브랜치는 병합을했음에도 삭제가 되지 않는 bug 가 있습니다.
    <br>
  - git 사용법 미숙으로 너무 많은 시간을 빼앗겼습니다.

# err1

```jsx
To https://github.com/kim-kyoungyeon/Music-Flower.git
! [rejected]        dev -> dev (non-fast-forward)
error: failed to push some refs to 'https://github.com/kim-kyoungyeon/Music-Flower.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

# solution

- git merge 나 stash에 대한 공부가 필요했음.
- git remove 로 브랜치 올 삭제
- git pull upstream 사용

---

- 개선 점

1.  `기록은 매일 하자 <- 계속 불가능`
2.  ~~백엔드가~~ `내가 스피드업 하자 `
3.  git 제발 기본은 공부하자.

### ❗ git 명령어 공부

---

출처

---

[git공부](https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-%EB%8F%84%EC%9B%80%EB%A7%90-%EB%B3%B4%EA%B8%B0)
[gitlab](https://lab.github.com/)
