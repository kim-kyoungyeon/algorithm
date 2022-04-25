# Plan

- 사전 지식 필요: graphQL, typescript, nestjs, react-hooks

- typescript는 final때 썼던 거라 쿨하게 스킵 ( 필요할때만 공부할것)
- Nestjs 무료강의는 언제듣지..
- GraphQL 1,2 무료강의 들어야 한다
- React Hooks 는 urclass sprint 이용

# Today I Learn

- 기존 프로젝트에서
  - NodeJS 진영에도 여러개의 프레임워크가 있다. 그 중 가장 대표적인 것이 Express 라고 볼 수 있다. Express 를 이용하여 개발을 하다보면 항상 아쉬웠던 부분은 프레임워크 안에서 지원해주는 것이 너무 적으며, 하다못해 Typescript를 사용하려고 해도 설정을 개발자가 직접 설정해줘야 한다는 점에서 많은 골치가 아팠다
- NestJS Feature

  - 프레임 워크이다.
    ( 프레임워크란 ? 툴, 기획
    유저는 툴 내의 library를 선택해서 코딩에 쓸 수 있다)
    ` A framework uses your code, you use the library.`
    <br/>
  - express, falsify 둘다 쓸 수 있는 프레임워크이다
    `By default, Nest makes use of the Express framework. As mentioned earlier, Nest also provides compatibility with other libraries such as, for example, Fastify. `
  - Decorators 사용
    (springboot의 어노테이션과 비슷한 역할, OpenAPI )
    `It's a function that adds functionality to classes or members of the class.`
  - Appmodule 사용
    `The AppModule is the module that imports all other modules.`

  - Controller 사용 - router 역할 (endpoint)
    `A controller takes a request to a URL and will execute a function.`

  ```
   헷갈리지 말자
  ❌ A controller is like a middleware in Express
  ```

  - service 사용 - DB 접근 , logic 구성
    `A service handles the business logic.`
    ` the service should access the DB`

  - servcie와 controller 내에 같은 명의 함수를 쓰면 conflict 생긴다. 다르게 이름 만들기
    `❌ Functions on the controllers and on the services have to have the same name.`

  [출처](https://docs.nestjs.com/techniques/performance)

- NestJS 장점
  - NestJS는 기본적으로 Typescript를 지원하며
  - Javascript로 애플리케이션을 작성하는 것도 가능하다.
  - OOP(Object Oriented Programming), FP(Functional Programming), FRP(Functional Reactive Programming) 등등 좋은 키워드는 모두 나온다.
  - OOP, 즉 객체 지향 프로그래밍이다.
  - NestJS는 NodeJS 프레임워크인 Express나 Fastify 등의 API를 직접 사용할 수도 있으며
  - NestJS 에서 제공하는 추상화된 인터페이스를 이용할 수도 있다
  - Frontend코드와 Backend코드를 하나의 언어로 작성할 수 있다는 점이 가장 큰 장점
  - Node js의 문제인 architecture를 극복
    `Architecture, NodeJS projects lack structure.`

# Abstract

Nan

# assignment 1

Complete

[nestJS 공식페이지 ](https://docs.nestjs.com/)
