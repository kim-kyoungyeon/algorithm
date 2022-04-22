![](https://velog.velcdn.com/images/ww3ysq/post/00a71322-3720-4833-8107-b01d22a9cf19/image.png)

## 📖 오늘 배운 것

✍ 객체

- 객체 메소드 정리
- - Object.keys - 키를 배열에 넣음
- - delte - 객체만 삭제가능!
- - Object.entries 사용법 for.. in 과 비슷하다고 함

```jsx
const object1 = {
  a: "somestring",
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}
```

✍ for ... in

obj에 있으나, key를 제대로 할당 하고 싶을 때/ 혹은 확인할 필요가 있을때 쓰면 된다.

_mdn 설명 추가 _

`for (variable in object) { ... }`

- variable
  매번 반복마다 다른 속성이름(Value name)이 변수(variable)로 지정됩니다.
- object
  반복작업을 수행할 객체로 열거형 속성을 가지고 있는 객체.

</br>

```jsx
for( key in obj){
  if(조건문..)
}
```

```jsx
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
```

## 📖 내일 할 공부

```
> 4/22~ 기술면접 정리, 암기, 녹화

> 4/22 코드스테이츠 코플릿 : 객체 풀이 12/21

> 4/23 코드스테이츠 코플릿 : 객체 나머지 50% 풀기

> 4/23 코드스테이츠 코플릿 : 고차함수 50% 풀기

> 4/23 코드스테이츠 코플릿 : 재귀 50% 풀기

```

## 🏆 목표

- 아침 운동 - 매일 해보자
- 매일 스케쥴 스스로 몸에 익히기
  - 7 -11 몸에 익히기
  - 늦어도 9 -6
- 이력서 마무리 - 피드백 요청 & 원티드 & 코드십 올리기
- 사이드 프로젝트/ 기존 프로젝트 리팩토링 내 레포에서 하기.
- 깃 블로그 사용법 익히기 (노션보다 우선순위)
  - velog에 글을 쓰고 옮기는 것이 아닌 바로 글을 쓰고싶은데 git clone 해서 이미지나 마크다운 쓰는게 아직 미숙. 이모지는 어떻게 넣지..?
