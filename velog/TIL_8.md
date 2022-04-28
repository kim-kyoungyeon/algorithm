날짜와 상관없이 쓰는 TIL

### Error 확인

(블로그 주인이 이해를 못해 뇌절상태인 것도 포함)

- #### case1 객체 key : value 를 역으로 찾기?

  value를 찾았는데 key값이 없어서 undefined
  value만으로는 key값에서 못찾는다
  obj 객체 키들중에서 arr 배열의 엘리먼트와 같은게 있으면
  그것만 빼서 새로운 객체로 만들어주기

- #### case 2 이중 반복문 ?

  전달인자로 들어오는 배열과 객체 둘다 반복해주어야 한다

- #### case 3 obj의 key값은 arr의 value값이다

```js
arr[obj.key] = arr[obj.value];
```

- #### case 4 while -break 왜 많이 쓰이고 continue는 언제 쓰나요?
  while은 정해지지 않은 반복
  for은 정해진 반복
  당연히 while 에 break 조건을 많이쓴다
  continue 특정 조건의 예외처리.
- #### case 5 왓더?

`delete obj[n];`

`delete obj. n //-> 이거 왜 안돼나영`

---

#### "아직 궁금한 점"

- java에서의 do~while 과 while continue 다른 문법이니 공부더하기
- java 할때 void 궁금해서 찾아봤다
  return 이 필요없으면 void 쓰고
  아니면 형 선언후 꼭 return 해야 함

```java
public String string [] =[a,b,c];
function fx{
return;}
```

---

#### "오늘 공부한 것 "

dot notation
bracket notation

객체에서는 인덱스 값 X - >속성 키를 조회한다
[] bracket
