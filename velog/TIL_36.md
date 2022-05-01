# Error

- git error :

```
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in Final_Project/dev_log4.md.
```

- 원인:이는 맥 또는 리눅스를 쓰는 개발자와 윈도우 쓰는 개발자가 Git으로 협업할 때 발생하는 Whitespace 에러다
  유닉스 시스템에서는 한 줄의 끝이 LF(Line Feed)로 이루어지는 반면, 윈도우에서는 줄 하나가 CR(Carriage Return)와 LF(Line Feed), 즉 CRLF로 이루어지기 때문이다. 따라서 어느 한 쪽을 선택할지 Git에게 혼란이 온 것이다.

- 레퍼런스 : [CRLF will be replaced by LF (혹은 반대) 핸들링하는 방법](https://blog.jaeyoon.io/2018/01/git-crlf.html)

- 해결 : core.autocrlf 를 켜는 것!

  - 윈도우 경우 : 시스템 전체가 아닌 해당 프로젝트에만 적용하고 싶다면 —global 을 빼주면 된다.

```
git config --global core.autocrlf true
```

    - 리눅스나 맥을 사용하고 있는 경우, 조회할 때 LF를 CRLF를 변환하는 것은 원하지 않을 것이다. 따라서 뒤에 input이라는 명령어를 추가해줌으로써 단방향으로만 변환이 이루어지도록 설정한다.

```
git config --global core.autocrlf true input
```

- 추가 해결 : 변환 기능을 원하지 않고, 그냥 에러 메시지 끄고 알아서 작업하고 싶은 경우에는 아래 명령어로 경고메시지 기능인 core.safecrlf를 꺼주면 된다.

```
git config --global core.safecrlf false
```

# Error 2

```
$ git config --global core.autocrlf true

warning: core.autocrlf has multiple values
error: cannot overwrite multiple values with a single value
       Use a regexp, --add or --replace-all to change core.autocrlf.
```

- 원인 : git config를 애시당초 설정하지 않고 사용해서 생긴 오류인 듯.
- 해결 : 전부 해당값으로 바꿔준다. user.name을 바꾸는 경우에도 동일한 형식으로 사용하면 된다.

```
//예시
git config --global --replace-all user.email "new@mail.com"

```

```
//내 경우
 git config --global --replace-all core.autocrlf true
```

- 출처 : [Git cannot overwrite multiple values with a single value 해결 방안
  ](https://pjs21s.github.io/cannot-overwrite-multiple-values/)
