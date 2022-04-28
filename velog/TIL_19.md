"이전편 참조.."

여전히 nodejs -v 과 node -v 이 다름

```jsx
$ node -v
v16.13.2
$ nodejs -v
v10.19.0

```

충돌문제라 생각해서 완전삭제하겠다는 마음으로
다시구글링

## error 3

[링크텍스트](https://gompro.postype.com/post/1737968)
[링크텍스트](https://jjeongil.tistory.com/1275)

- 해결
  에러의 원인-->

sudo apt으로 깔았다가 curl을 이용해 nvm으로 깔았다하며
충돌이 일어났음

nvm 으로 현재 다운받은 상태

```jsx
npm -v
8.3.1
$ node -v
v16.13.2
 nodejs -v

Command 'nodejs' not found, but can be installed with:

sudo apt install nodejs

```

현재 nodejs는 따로 install 하지 않았음.

## error 4

![](https://images.velog.io/images/ww3ysq/post/8e7ad540-72da-4e45-a7fc-9571d12ff80a/image.png)

와 새로운문제발생!

- 해결

```jsx

sudo apt-get --purge remove nodejs
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs

//You need to manually create a symlink /usr/bin/node. Shortcut for bash compatible shells:

sudo ln -s `which nodejs` /usr/bin/node

//Or if you use non-standard shells, just hardcode the path you find with which nodejs:

sudo ln -s /usr/bin/nodejs /usr/bin/node
```

그렇다고 한다
참조는 stack overflow
[링크텍스트](https://stackoverflow.com/questions/26320901/cannot-install-nodejs-usr-bin-env-node-no-such-file-or-directory)

[링크텍스트](https://stackoverflow.com/questions/18130164/nodejs-vs-node-on-ubuntu-12-04)

버전은 여전히 10.19.0 이다?
도대체 업데이트 어떻게 하냐.
synlink를 하라고 하는데 나같은경우

```jsx
$ sudo ln -s /usr/bin/nodejs /usr/bin/node
ln: failed to create symbolic link '/usr/bin/node': File exists
```

라고 나온다
게다가 nodejs 다운받을때마다
oracle JDK 11이 없다네?
이건또 무슨에러//
해결은 내일 블로그!
