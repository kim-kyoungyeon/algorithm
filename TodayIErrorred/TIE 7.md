### err1

```jsx
fatal: Not possible to fast-forward, aborting.
$ git rebase origin dev
fatal: It seems that there is already a rebase-merge directory, and
I wonder if you are in the middle of another rebase.  If that is the
case, please try
        git rebase (--continue | --abort | --skip)
If that is not the case, please
        rm -fr ".git/rebase-merge"
and run me again.  I am stopping in case you still have something
valuable there.
$ git checkout dev
Previous HEAD position was 5b1c976 Merge pull request #78 from ChooHongWook/feature
Switched to branch 'dev'

$  git pull origin dev --rebase
From https://github.com/codestates/MuscleFormula
 * branch            dev        -> FETCH_HEAD
Auto-merging client/src/pages/Login.tsx
CONFLICT (content): Merge conflict in client/src/pages/Login.tsx
error: could not apply 7846dea... css수정
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
Could not apply 7846dea... css수정

$ git log --oneline
7846dea (HEAD -> dev) css수정
8ec52a7 Merge pull request #59 from jiyuunyang/dev
5409ef2 Fix: [Client] 별점매기기 스타일드컴포넌트화
e732f3c Merge pull request #58 from ChooHongWook/feature
f0f2a20 Feat: makePost 구현
1c60577 Merge pull request #57 from jiyuunyang/dev
eaf0f6a Feat: [Client] 난이도별 기능 구현
e061062 Merge pull request #55 from jiyuunyang/dev
0ae2747 Feat: [Client] 별점 매기기 컴포넌트 테스트

$ git log --decorate
commit 2b9386c7bb22e66dc765ed67f78f0f331b19245a (HEAD -> dev, repo/dev)
Author: kim-kyoung <marycarychin@gmail.com>
Date:   Mon Mar 21 19:45:32 2022 +0900

    fix : login, signup ts정리


$ git branch -v
* (no branch, rebasing dev) 7846dea css수정
  dev                       2b9386c fix : login, signup ts정리
  main                      694957f [behind 2] [SR]Docs:readme 수정

$ git switch dev
fatal: cannot switch branch while rebasing
Consider "git rebase --quit" or "git worktree add".
$ git status
interactive rebase in progress; onto 8ec52a7
Last command done (1 command done):
   pick 2b9386c fix : login, signup ts정리
No commands remaining.
You are currently editing a commit while rebasing branch 'dev' on '8ec52a7'.
  (use "git commit --amend" to amend the current commit)
  (use "git rebase --continue" once you are satisfied with your changes)

nothing to commit, working tree clean

$ git commit -m 'css수정'
interactive rebase in progress; onto 8ec52a7
Last command done (1 command done):
   pick 2b9386c fix : login, signup ts정리
No commands remaining.
You are currently editing a commit while rebasing branch 'dev' on '8ec52a7'.
  (use "git commit --amend" to amend the current commit)
  (use "git rebase --continue" once you are satisfied with your changes)

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   client/src/pages/Login.tsx
        modified:   client/src/pages/Signup.tsx

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        client/src/css/Login.css

no changes added to commit (use "git add" and/or "git commit -a")


$ git pull origin dev
From https://github.com/codestates/MuscleFormula
 * branch            dev        -> FETCH_HEAD
fatal: Not possible to fast-forward, aborting.
```

~~현재 나의 상황..분노한다..~~

- Issue Status : 기존 dev 브랜치가 내 repo의 dev 브랜치랑 연결되어있다보니 내레포로는 잘 push가 되는데 (근데 왜 반영이 안되지..?)
  팀플 branch로는 push 가 안됨
  그래서 걍 팀레포 브랜치로 연결해보기로 함.

### sol 1

```jsx
$ git pull origin dev
From https://github.com/codestates/MuscleFormula
 * branch            dev        -> FETCH_HEAD
fatal: Not possible to fast-forward, aborting.
 $ git pull origin dev -- force
fatal: couldn't find remote ref force
```

초반 | force로는 이동시킬수 없고 계속 fatal 관련 error 메시지 나옴

### sol 2

`$ git pull origin master --allow-unrelated-histories`

초반 | --allow를 인지를 못함

### sol 3

```
git rebase -i dev
Successfully rebased and updated refs/heads/dev.
```

```jsx
$ git pull origin dev --rebase
From https://github.com/codestates/MuscleFormula
 * branch            dev        -> FETCH_HEAD
Auto-merging client/src/pages/Login.tsx
CONFLICT (content): Merge conflict in client/src/pages/Login.tsx
error: could not apply 7846dea... css수정
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
Could not apply 7846dea... css수정
```

`초반| 솔직히 무슨 말인지.. `

- abort : conflict 일어났을때 삭제 하는 역할, 만약 rebase 자체를 취소하려면 --abort 옵션을 지정하면 됩니다.

- continue : rebase 의 경우 충돌 부분을 수정 한 후에는 commit 이 아니라 rebase 명령에 --continue 옵션을 지정하여 실행해야 합니다.

### sol 4

```jsx
$ git add .

$ git commit
[detached HEAD 2591cc4] css수정
 3 files changed, 383 insertions(+), 168 deletions(-)
 create mode 100644 client/src/css/Login.css
 rewrite client/src/pages/Signup.tsx (68%)
```

`중반 과정 | css 수정된 파일을 add 하는데 성공 `

### sol 5

```jsx
$ git push origin dev
To https://github.com/codestates/MuscleFormula.git
 ! [rejected]        dev -> dev (non-fast-forward)
error: failed to push some refs to 'https://github.com/codestates/MuscleFormula.git'
hint: Updates were rejected because a pushed branch tip is behind its remote
hint: counterpart. Check out this branch and integrate the remote changes
hint: (e.g. 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
$ git pull origin dev --rebase
From https://github.com/codestates/MuscleFormula
 * branch            dev        -> FETCH_HEAD
fatal: It seems that there is already a rebase-merge directory, and
I wonder if you are in the middle of another rebase.  If that is the
case, please try
        git rebase (--continue | --abort | --skip)
If that is not the case, please
        rm -fr ".git/rebase-merge"
and run me again.  I am stopping in case you still have something
valuable there.
```

`중반 | 리눅스에서 rebase 중간이라고 계속 알림이 옴 `

### sol 6

```jsx
$ git rebase --abort
 $ git rebase --continue
fatal: No rebase in progress?
 $ git pull origin dev --rebase
From https://github.com/codestates/MuscleFormula
 * branch            dev        -> FETCH_HEAD
Auto-merging client/src/pages/Login.tsx
CONFLICT (content): Merge conflict in client/src/pages/Login.tsx
error: could not apply 7846dea... css수정
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
Could not apply 7846dea... css수정
```

`중후반 | rebase 실패! 대신 에러 메시지가 바뀜! `

### sol 7

```jsx
$ git rebase origin dev
fatal: It seems that there is already a rebase-merge directory, and
I wonder if you are in the middle of another rebase.  If that is the
case, please try
        git rebase (--continue | --abort | --skip)
If that is not the case, please
        rm -fr ".git/rebase-merge"
and run me again.  I am stopping in case you still have something
valuable there.
```

`중후반 | 다른 git 명령어 시도 `

### sol_final!!

```jsx
$ git rebase --continue
client/src/pages/Login.tsx: needs merge
You must edit all merge conflicts and then
mark them as resolved using git add
$ git branch -v
* (no branch, rebasing dev) 5b1c976 Merge pull request #78 from ChooHongWook/feature
  dev                       7846dea css수정
 $ git rebase --continue
[detached HEAD b314aa4] css수정
 3 files changed, 383 insertions(+), 168 deletions(-)
 create mode 100644 client/src/css/Login.css
 rewrite client/src/pages/Signup.tsx (68%)
Successfully rebased and updated refs/heads/dev.
$ git pull origin dev --rebase
From https://github.com/codestates/MuscleFormula
 * branch            dev        -> FETCH_HEAD
Current branch dev is up to date.
                                      $ git push origin dev
Enumerating objects: 16, done.
Counting objects: 100% (16/16), done.
Delta compression using up to 8 threads
Compressing objects: 100% (9/9), done.
Writing objects: 100% (9/9), 3.96 KiB | 1.98 MiB/s, done.
Total 9 (delta 6), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (6/6), completed with 6 local objects.
To https://github.com/codestates/MuscleFormula.git
   5b1c976..b314aa4  dev -> dev
```

`해결책 | push할 repository는 1개여야 한다`

### 추가 확인

```
$ git push repo dev
To https://github.com/kim-kyoungyeon/GG.git
 ! [rejected]        dev -> dev (non-fast-forward)
error: failed to push some refs to 'https://github.com/kim-kyoungyeon/GG.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

- 하나의 branch에서 2개의 remote 는 불가한걸까..?`

---

### reference

[git rebase-> abort/continue 과정](https://velog.io/@finelinefe/GIT-abort-rebase)

[fatal-not-possible-to-fast-forward-aborting 2](https://velog.io/@rain98/%EA%B9%83%ED%97%88%EB%B8%8C-non-fast-forward-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0)

[fatal-not-possible-to-fast-forward-aborting 3](https://errorsfixing.com/fatal-not-possible-to-fast-forward-aborting/)

[git abort/rebase ](https://velog.io/@finelinefe/GIT-abort-rebase)

[backlog git rebase](https://backlog.com/git-tutorial/kr/stepup/stepup2_8.html)

[backlog git abort ](https://backlog.com/git-tutorial/kr/stepup/stepup7_6.html)
