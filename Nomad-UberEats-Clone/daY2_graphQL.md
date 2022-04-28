실제 GraphQL로 비지니스 로직 작성하기

## 비지니스 로직 레이어

![](https://velog.velcdn.com/images/ww3ysq/post/4fc0a2fa-8080-4f38-a941-7de92d71fbf8/image.png)

[grphqlGIT](https://graphql.github.io/learn/thinking-in-graphs/)

```ts
@Resolver
    requestPaymentSession: async (parent, {
      pgId, name, sex, birthDay, phoneNumber, amount, productName, ref
    }, context, info) => {
      const ret = await requestPaymentSession({ pgId, name, birthDay, phoneNumber, sex, amount, productName, ref })

      return removeSymbol(ret)
    },
    requestPaymentApprove: async (parent, {
      sessionKey, authNumber
    }, context, info) => {
      const ret = await requestApprovePayment({ sessionKey, authNumber })

      return removeSymbol(ret)
    }
```

## GraphQL vs Rest API

![](https://velog.velcdn.com/images/ww3ysq/post/78379237-5a4d-42ff-9dda-a76ce1768c8c/image.png)

## 사용법

- 1 타입정의

```ts
type Book {
  id: ID
  title: String
  author: Author
}
type Author {
  id: ID
  firstName: String
  lastName: String
  books: [Book]
}
```

- 2 GraphQL에서는 리소스의 유형과 리소스를 가져오는 방식이 완전하게 분리되어 있습니다. 우리는 지금 Book과 Author의 형태만을 정의했지, client에서 데이터를 어떻게 요청할 수 있는 지에 대해서는 아무런 정보가 없습니다.
  Book과 Author에 접근할 수 있도록, 우리는 Query라는 타입이 필요합니다. 다음과 같이 작성될 수 있습니다.

```ts
type Query {
  book(id: ID!): Book
  author(id: ID!): Author
}
```

- 3
  `/graphql?query={ book(id: "1") { title, author { firstName } } }`

- 4

```ts
{
  "title": "Black Hole Blues",
  "author": {
    "firstName": "Janna"
  }
}
```

## 차이점

- /books등과 같이 각 Resource에 대한 엔드포인트가 따로 존재하지 않고,
  하나의 엔드포인트만 존재합니다.
- 또한 해당 엔드포인트로 요청 시, 원하는 리소스와 해당 리소스에서 원하는 필드를 특정하는 GraphQL query를 함께 보냅니다.
- 위의 gql을 통해, id = 1 인 book의 title과 author의 firstName 만 가져올 수 있었습니다.

(정리중)

[GraphQL비교](https://hwasurr.io/api/rest-graphql-differences/)
