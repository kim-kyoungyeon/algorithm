# 입력값이 줄마다 들어온다 - map 없이도 사용가능

'''
sep 사용법
print(*OBJECT, sep ="구분자", end ="출력자")
문자열 객체사이 구분
무조건 문자열 
기본값 '' // 공백 
'''
'''
* 파이썬 사용
포인터는 변수가 아닌 값의 주소로 값에 접근하는 개념입니다. 
파이썬에도 주소는 존재하기 때문에 
이론적으로는 포인터와 같은 개념을 사용할 수 있습니다.
주소값을 접근해서 값변경 가능 === mutable 한 객체 한정!
immutable object ( int,str..) 은 값 변경 불가
# 참조 
https://eprj453.github.io/2021/01/21/Python-%ED%95%A8%EC%88%98%EC%97%90%EC%84%9C-%EB%8B%A4%EB%A5%B8-%ED%95%A8%EC%88%98-%EB%B3%80%EC%88%98-%EC%A0%91%EA%B7%BC%ED%95%98%EA%B8%B0(c-%ED%8F%AC%EC%9D%B8%ED%84%B0%EC%B2%98%EB%9F%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EB%B3%B4%EA%B8%B0)/
'''

num = int(input())
word = list(input())

for _ in range(num-1):
    word_2 = input()
    for n in range(len(word)):
        if word[n] == word_2[n]:
            continue
        else:
            word[n] = "?"
print(*word, sep = "")