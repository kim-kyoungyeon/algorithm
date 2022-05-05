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

- 해결 :
  `git pull --no-ff `-> make fast-forwarding to be off by --no-ff

해결 완료 되어라 젭알.

[출처](https://stackoverflow.com/questions/13106179/fatal-not-possible-to-fast-forward-aborting)
