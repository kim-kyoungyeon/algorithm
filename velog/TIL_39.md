# 개념공부

# 프로젝트

- 데이터 어떻게 API 썼니?
  파이널 프로젝트 때에는
  파이널 프로젝트때 쓴 데이터는 더미가 맞음 이 더미데이터 서버에 저장하고
  클라이언트에서는 서버로 api요청해서 작업했다.

- typeorm ?
  타입스크립트와 호환됨
  데이터베이스도 뭘사용할까 안정해져서 그냥 마이 나 몽고 다 호환할수있다고함
- 장점

  - 테이블 스키마가 바뀐만큼 migration 파일로 만들 수 있다.
  - 서버 실행 없이 cli만으로 테이블 스키마의 변화를 synchronize할 수 있다.

- sequelize 왜 안쓰셨나요?
  [typeorm쓴계기](https://blog.naver.com/PostView.naver?blogId=biud436&logNo=222475532484&parentCategoryNo=&categoryNo=199&viewDate=&isShowPopularPosts=true&from=search)

  시퀄라이즈의 경우, @InjectModel로 @Table 데코레이터가 선언된 파일에서 모델을 가져와서 DI를 할 수 있다.
  이때, DI는 자동으로 되는 것이 아니라 모듈 파일에서 직접 임포트를 해줘야 한다.

### 비교 (sequelize vs typeOrm)

- 시퀄라이즈@BelongTo의 경우, 타입orm 에선 @ManyToOne으로 대체할 수 있다. @ForeignKey는 @JoinColumn이 되고, 이런 패턴 자체는 거의 비슷해서 익히기 쉽다.
  [typeorm공식](https://orkhan.gitbook.io/typeorm/docs/many-to-one-one-to-many-relations)

      -  시퀄라이즈의 경우, @InjectModel로 @Table 데코레이터가 선언된 파일에서 모델을 가져와서 DI를 할 수 있다. 이때, DI는 자동으로 되는 것이 아니라 모듈 파일에서 직접 임포트를 해줘야 한다. ​시퀄라이즈의 경우, @InjectModel을 쓰면 끝이다. 그 이유는 모델 생성 당시에 Model로 부터 필요한 메서드들이 상속되기 때문문이다.

      - TypeORM의 경우에는 @Entity 데코레이터로 엔티티 파일을 만든 후 여기에 접근하는 레포지토리 객체를 따로 만들어야 한다. 이를 서비스 파일에서    @InjectRepository를 통해 DI를 한다.TypeORM은 데이터 그 자체를 표현하는 객체와 데이터 접근 용 객체가 분리된 형태이다. 즉, 데이터 모델은 리포지토리를 통해 찾을 수 있다. 따라서 DI 대상은 리포지토리이다. 따라서 모듈의 forFeature를 통해 해당 레포지토리를 등록을 해줘야 DI가 된다
      - sequelize에서 제공하는 migration은 아쉽게도 typeorm에서 제공하는 entities의 변화를 자동감지해서 migration하는 기능은 가지고 있지 않습니다. (마이그레이션에서 entities는 자동 migration 하지 못함- 프로젝트 때 테이블명 일일이 수정필요했음.)
      -  sequelize의 migration:generate 커맨드는 typeorm의 migration:create와 같다.
      - typeorm에서는 entities의 변경사항을 서버를 실행하지 않고 cli로만 synchronize시키는 schema:sync도 제공합니다.
      - 반대로 typeorm에서는 되지 않는 migration:revert:all을 sequelize에서는 db:migrate:undo:all을 사용해서 모든 migration 파일들의 down 메서드를 실행할 수 있습니다.

`typeorm seeding 예시 `

```jsx
export default async function seedPeople(numFake = 10) {
  const entities = await Promise.all([Array(numFake).fill(0).map(fakeUser)]);

  await People.insert(entities);
}
```

        ​

## sequelize 란?

Node.js의 ORM 기술인 sequelize를 사용해보도록 하겠다.
시퀄라이즈는 자바스크립트 객체와 데이터베이스의 릴레이션을 매핑해주는 도구이다.
시퀄라이즈는 자바스크립트 구문을 알아서 SQL로 변환해주어서 좀 더 의존성이 낮은 프로그래밍을 할 수 있도록 도와준다.
또한 어느 정도 문법이 호환되므로 MySQL 뿐만 아니라, MariaDB, PostgreSQL, SQLite 등 다른 데이터베이스로 전환이 비교적 자유롭다.
migration 또한 자동으로 연결해줌.
id는 sequelize가 자동으로 연결.
sequelizequery를 이용해 데이터 가져오기
시퀄라이즈 쿼리는 프로미스를 반환하기 때문에 then을 붙여 결괏괎을 받을 수 있다.
프로미스 형태이기 때문에 async / await 문법 역시 함께 사용할 수 있다.

### 장점 ?

    migration:undo:all을 실행할 수 있어 migration을 모두 되돌릴 때 편하다.
    seeding을 cli에서 지원해서 간편하게 up, down할 수 있다

### 단점?

    synchronize는 최초에 데이터와 테이블 스키마를 동기화할 때는 좋은 옵션이지만 프로덕션에는 안전하지 않습니다.
    ssociation이 엮이는 경우에는  synchronize를 해서 오는 사이드이펙트를 가늠하지 못할 것입니다.
    라이브 환경에서라면 데이터베이스를 안정적으로 관리하기 위한 도구인 migration을 적극 사용하는 것을 ORM 공식문서에서 하나같이 권장합니다.

## RDB ?

프로젝트에서 N:M 관계 설정함
has to Many 를 이용해 테이블 간에 다대다 연결 시도..
belongsToMany? 왜 못썼는가.. (바로 연결이 안되고 에러가 생겼던것으로 기억함)

# 알고리즘

프로그래머스 lv1 정말..

# 개인 프젝

NExt js 꼭 성공하자

[TypeORM으로 보는 마이그레이션과 N+1 문제](https://yangeok.github.io/orm/2020/11/23/typeorm-theoritical.html)
