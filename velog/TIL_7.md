![](https://images.velog.io/images/ww3ysq/post/e81e7845-287d-408c-bd29-71099caca63d/%EC%88%98%EB%AA%A9%EB%83%A5%EC%9D%B4.png)

블로깅 하는거 현타와서 한동안 안하다가 밀뤄져서
불안에 떨며 쓰는 07
실은 주말에 예비용으로 쓰긴 했는데
사진 붙여놓고 형식 따라하며 쓰는거
정말...정말 ~~귀찮다.~~

## Achievement Goals

상황에 따라 Github의 기능과 Git 명령어를 사용할 수 있다.

- Fork
- clone
- status
- restore
- add
- commit
- reset
- log
- pull
- push
- init
- remote add
- remote -v
- Git의 세 가지 영역 및 상태를 이해할 수 있다. (Committed, modified, staged)
- - Remote Repository를 페어와 공유하며 협업을 할 수 있다.
- 충돌이 발생했을 경우 해결할 수 있다.

### error

**_case 1 _**
push/commit할때 패스워드 아이디 매번 처넣기 싫다.. 자동저장 기능
해결책 :
과정 1
`https://franzpark.github.io/dev/git-permanent-authentication/ `
위 블로그에서 해결해보했으나 주소 github.com/사용자 id  
로는 인식을 못하고

<pre>fatal: https://github.com/kim-kyoung?tab=repositories/info/refs not valid: is this a git repository?
</pre>

라는 에러가 뜸

해결책 1: github에서 javascript 용 public 레파지토리를 따로 만들어서 설정
(일단 세팅함)

해결책 2: 그냥 안돼냐.. 공부하다보면 다른 레파지토리도 만들텐데
라는 생각에

mac 북용 ver.
[링크텍스트]
(https://medium.com/@chullino/github-password-username-%EA%B8%B0%EC%96%B5%ED%95%98%EA%B8%B0-801c67063077)

(나는 hp 컴퓨터 ubuntu 듀얼os 쓰고있어서 해당안됨)

해결책: [링크텍스트](https://velog.io/@lunaticholic/ubuntu-Git-%EC%95%84%EC%9D%B4%EB%94%94-%ED%8C%A8%EC%8A%A4%EC%9B%8C%EB%93%9C-%EB%A7%A4-%EB%B2%88-%EC%9E%85%EB%A0%A5-%EC%95%88%ED%95%98%EA%B8%B0)

**_case 2 _**
또! 스페이스바가 안먹혀요..
해결책 1:
`$ xmodmap -e 'keycode 65 = space'`
이전 블로그 기록을 뒤져서 코드를 입력함
키보드가 fctix>에서 ibus로 바뀔때 이부분이 키코드값이 다시 초기화가 되서 인식이 안되는 듯 함.
`$ xmodmap -pke >~/.Xmodmap`
해결책 : [링크텍스트](https://kernelofsoul.blogspot.com/2016/01/xmodmap.html?m=1)

해결책 2 : [링크텍스트](https://adioshun.gitbooks.io/system_setup/content/01initial-setup/koreaninput.html)

**_case 3 _**

<pre>"fatal: couldn't find remote ref master" </pre>

위 오류는 repository 랑 이름이 안맞아서 생기는 오류라고 한다.
origin 과 remote 사이에 이름을 잘 확인해야됨..

해결책
`$ git pull origin main`

출처 : [링크텍스트](https://hyunsitstory.tistory.com/entry/Git-git-pull-origin-master-git-push-origin-master-%EC%98%A4%EB%A5%98-fatal-couldnt-find-remote-ref-master-error-src-refspec-main-does-not-match-any-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95)

---

" 오늘 공부한 내용 "

$ git config --globla (전 계정 세팅)
$ git remote -v (remote 한 것의 목록 리스트)
$ git push 'repo'(repo에 넣는다)
$ git pull 'pair' 'main' (페어이름의 main 레포에서 가져온다)
$ git commit -m '메시지' (메시지를 commit할떄 넣는다)
$ git checkout -n 'name' (새 브랜치 name 을 만들면서 checkout 까지 한다)

출처 : [링크텍스트](https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%B8%8C%EB%9E%9C%EC%B9%98%EC%99%80-Merge-%EC%9D%98-%EA%B8%B0%EC%B4%88)

git을 연합 프로젝트 branch 생성 및 commit 공부

출처 : [링크텍스트](https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%B8%8C%EB%9E%9C%EC%B9%98%EC%99%80-Merge-%EC%9D%98-%EA%B8%B0%EC%B4%88)

[링크텍스트](https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-%EB%B8%8C%EB%9E%9C%EC%B9%98%EC%99%80-Merge-%EC%9D%98-%EA%B8%B0%EC%B4%88)

[링크텍스트](https://ifuwanna.tistory.com/283)
