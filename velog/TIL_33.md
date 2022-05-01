# Today I Learned

- RDBMS 관계형 데이터 베이스
- NoSQL 차이 정리
- await & async

# 오늘 들은 Tips

- 프론트엔드도 풀스택처럼 회사에서 개인 프젝할수 있음
- 금융업 종사자 개발자들은 금융관련자격증을 더 따서 한 우물만 판다 (한번고려해보기)
- 이직할때 크게 직렬은 다양한곳으로 가도 상관없는듯.
- 프론트엔드는 상태관리 라이브러리 잘써야 한다 redux, react 외에 recoil
- 상태정리 "라이브러리" 공부해보기

### Reference

    * [Recoil 관련 velog](https://velog.io/@juno7803/Recoil-Recoil-200-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0)

    * Frontend 개발자 참고 velog
    [추천1](https://velog.io/@danmin20/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98-%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8)

    *[2022 팬텀 올해의색](https://www.pantone.com/hk/en/color-of-the-year-2022-palette-exploration)

## 정의

Databse란 일반적으로 컴퓨터 시스템에 전자 방식으로 저장된 구조화된 정보 또는 데이터의 체계적인 집합을 의미합니다.
DBMS란(DataBase Management System) 사용자와 데이터베이스 사이에서 사용자의 요구에 따라 정보를 생성해 주고 데이터베이스를 관리해 주는 소프트웨어입니다.

## 정의

SQL이란(Strucured Query Language) 관계형 데이터베이스 관리 시스템의 데이터를 관리하기 위해 설계된 특수 목적의 프로그래밍 언어이며 관계형 데이터베이스 관리 시스템에서 자료의 검색과 관리, 데이터베이스 스키마 생성과 수정, 데이터베이스 객체 접근 조정 관리를 위해 고안되었습니다.

## RDBMS

RDBMS
위에서 DBMS는 사용자와 데이터베이스 사이에서 사용자의 요구에 따라 정보를 생성해주고 데이터베이스를 관리해 주는 소프트웨어라고 설명을 했습니다. 또한 기존의 RDBMS에서의 저장 방식은 SQL에 의해 저장되고 있으며 정해진 스키마에 따라 데이터를 저장하여야 합니다. RDBMS에는 DBMS앞에 R이 붙어 있습니다. 이 R은(Relational)의 약자로 RDBMS는 관계형 데이터베이스 관리 시스템을 의미합니다. 이름과 같이 RDBMS는 RDB를 관리하는 시스템이며 RDB는 관계형 데이터 모델을 기초로 두고 모든 데이터를 2차원 테이블 형태로 표현하는 데이터베이스입니다.

## NOSQL

NoSQL
NoSQL이란(Not Only SQL)의 약자로 말 그대도 위에서 설명한 RDB 형태의 관계형 데이터베이스가 아닌 다른 형태의 데이터 저장 기술을 의미하고 있습니다. 또한 NoSQL에서는 RDBMS와는 달리 테이블 간 관계를 정의하지 않습니다. 데이터 테이블은 그냥 하나의 테이블이며 테이블 간의 관계를 정의하지 않아 일반적으로 테이블 간 Join도 불가능합니다.

NoSQL은 점점 빅데이터의 등장으로 인해 데이터와 트래픽이 기하급수적으로 증가함에 따라 RDBMS에 단점인 성능을 향상시키기 위해서는 장비가 좋아야 하는 Scale-Up의 특징이 비용을 기하급수적으로 증가시키기 때문에 데이터 일관성은 포기하되 비용을 고려하여 여러 대의 데이터에 분산하여 저장하는 Scale-Out을 목표로 등장하였습니다.

## 사용법

-> RDBMS는 데이터 구조가 명확하며 변경 될 여지가 없으며 명확한 스키마가 중요한 경우 사용하는 것이 좋습니다. 또한 중복된 데이터가 없어(데이터 무결성) 변경이 용이하기 때문에 관계를 맺고 있는 데이터가 자주 변경이 이루어지는 시스템에 적합합니다.

-> NoSQL은 정확한 데이터 구조를 알 수 없고 데이터가 변경/확장이 될 수 있는 경우에 사용하는 것이 좋습니다. 또한 단점에서도 명확하듯이 데이터 중복이 발생할 수 있으며 중복된 데이터가 변경될 시에는 모든 컬렉션에서 수정을 해야 합니다. 이러한 특징들을 기반으로 Update가 많이 이루어지지 않는 시스템이 좋으며 또한 Scale-out이 가능하다는 장점을 활용해 막대한 데이터를 저장해야 해서 Database를 Scale-Out를 해야 되는 시스템에 적합합니다

# 의문점

우리 파이널 프로젝트때에는 프론트 엔드에서 api를 받는데 데이터명 인식에 어려움이 있었다. 때문에 계속해서 백엔드가 테이블명과 typeorm을 계속 수정했다. RDBMS 특징과 다르게 기존 스키가마 명확하지 않았던 것일까?

# 의문점 2

데이터가 제대로 넘겨지지 않고 createAt 이 이전 날짜를 가르키는등의 문제가 있었음 이건 어떻게 해결했나?