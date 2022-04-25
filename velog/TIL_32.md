# TOday I Errored

## error1

```jsx
fatal: ambiguous argument 'HEAD': unknown revision or path not in the working tree. Use '--' to separate paths from revisions, like this: 'git <command> [<revision>...] -- [<file>...]' Working tree has modifications. Cannot add.

```

`solution`

```jsx

git commit --allow-empty -n -m "Initial commit."

```

원인 : 레파지포리레 파일이 아무것도 없는 빈 레포여서 생겼다. dummy data를 만들거나 , 위와 같이 emptycommit 을 허용

[git repository 옮기는데 참조한 블로그](https://yeonyeon.tistory.com/169)
[git error ](https://stackoverflow.com/questions/12267912/git-error-fatal-ambiguous-argument-head-unknown-revision-or-path-not-in-the)

## error2

`Addition`
git reset HEAD 명령을 쳐서 git add 기록을 unstaged 상태로 되돌리려는 상황에서 다음과 같은 에러가 발생할 경우

`fatal: ambiguous argument 'HEAD': unknown revision or path not in the working tree.`

`solution`

```jsx
git update-ref -d HEAD

```

[git add 에러일 경우](https://velog.io/@b4failrise/fatal-ambiguous-argument-HEAD-unknown-revision-or-path-not-in-the-working-tree)

## 오늘 한 일

- 코드스테이츠 산하 코드쉽 platform 모든 기업에 이력서 넣음

- wanted에 notion pdf 이력서 올림

- git-blog 총정리 완료

- 우버 nomad challenge 진행중 day1

## 오늘 목표 했으나 못한 일

```
> 4/22~ 기술면접 정리, 암기, 녹화

> 4/22 코드스테이츠 코플릿 : 객체 풀이 12/21

> 4/23 코드스테이츠 코플릿 : 객체 나머지 50% 풀기

> 4/23 코드스테이츠 코플릿 : 고차함수 50% 풀기

> 4/23 코드스테이츠 코플릿 : 재귀 50% 풀기
```

## 해야할 일 (우선순위로 나열)

- nomad vanilla.js 수료한 것 정리할 것

- 파이썬 빅데이터 국비 공부 코드 올리기

- 파이썬 프로젝트 코드 git upload

- codestates 모든 공부한 기록 정리해서 주제별 upload

- java - 국비 공부한 내용 정리할것

- 로컬 fork한 파일 카테고리별로 분류할 것

> 청소 할 것 많네.특히 기록은 로컬에 다 저장되어있는데 거의 받아적느라 정리가 하나도 안되어있음 에휴🤣
