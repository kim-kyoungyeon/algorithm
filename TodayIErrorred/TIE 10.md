#### ❓error

     The above error occurred in the <Login> component:
    in Login
    in Router (created by MemoryRouter)
    in MemoryRouter (created by WrapperComponent)
    in WrapperComponent

#### ❗solution

    import의 문제 무엇을 사용하고 있고, 어떤 react-router-dom을
    받고있는지 확인할 것

#### ❓error2

     history.push(/) 하면 어떻게 들어가는건지, 문법이 뭔지 모르겠다.

#### ❗solution 2

    history.push(/)

1.      부모자식관계 compnent가 아닌 routing 으로 특정페이지에서 다른 페이지로 이동할때 props로 넘겨준다
2.      	props로 넘겨주지 않으면 redux나 HOC? 훅?오타인가..? 별도 컴포넌트 만들고 조건부 렌더링한다
3.       push(path, [state]) - (function) Pushes a new entry onto the history stack

#### ❓error3

    	sequelize 문법 모르겠다

#### ❗solution 2

    user.findOne({
    //첫번째로 찾은 표제어를 를 가지고옴 (that fulfills the optional query options, if provided).

<br>
