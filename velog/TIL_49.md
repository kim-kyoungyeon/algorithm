 # 알고리즘 split

## 이해 하기 어려웠던 코드
```jsx
 const numOfGroup = ['zero','one','two','three','four','five','six','seven','eight','nine'];
   
s = s.replace(numOfGroup[i],i);
 
```
- 숫자를 나타내는 영단어와 숫자가 조항된 문자열을 만들고, 이 문자열을 숫자로 바꾸는 알고리즘.

- 매개변수인 문자열에 있는 영단어를 숫자로 바꾸고 출력하는 값은 숫자형이어야한다

- 동일한 영단어가 2개 이상 -> 하나만 숫자로 바뀌어야 함. 

> replace에 첫번재 매개변수를 정규표현식으로 두어야 함

[mdn- split](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_a_parameter)
```
var newStr = str.replace(regexp|substr, newSubstr|function)
```