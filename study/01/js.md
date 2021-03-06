# 자바스크립트 심화

---

## 자바스크립트 함수가 실행되는 과정

>

1. 자바스크립트 엔진은 코드가 없어도 실행환경을 초기화 한다.
2. 스코프는 코드가 현재 실행되는 환경 맥락을 의미함.
3. this 포인터, 스코프에 저장된 변수들, 스코프 체인 등이 환경에 포함된다.
4. this 포인터의 경우, 글로벌 스코프에서는 window를 가리킨다.
5. 함수가 실행되면, 함수 스코프에 따라 환경이 만들어진다.
6. this, 함수 스코프의 변수들, 그리고 스코프 체인이 형성된다.
7. 스코프 체인을 따라 글로벌 환경에 도달한다.
8. 객체의 메서드의 경우, 메서드 환경의 this는 해당 객체를 가르키게 된다.
9. 하지만 this가 가리키는 것은 환경에 따라 `변할 수 있다.`

## 실행 컨텍스트

>

1. 실행 컨텍스트 혹은 실행 맥락은, 자바스크립트 코드가 실행되는 환경
2. 코드에서 참조하는 변수, 객체, this등에 대한 레퍼런스가 있다.
3. 실행 컨텍스트는 전역에서 시작해, 함수가 호출될 때 스택에 쌓이게 된다.

### 전역 실행 컨텍스트, 함수 실행 컨텍스트

- 자바스크립트가 실행될 때 전역 실행 컨텍스트가 만들어진다.
- 함수가 실행될 때 함수 실행 컨텍스트가 만들어진다.

## this가 가르키는 것

### dynamic binding

- 함수가 호출 되는 상황은 4가지가 있다.

- 함수 호출 - 함수를 직접 호출한다.

- 메서드 호출 - 객체의 메서드를 호출한다.

- 생성자 호출 - 생성자 함수를 호출한다.

- 간접 호출 - call, apply 등으로 함수를 간접 호출한다.

* 함수의 호출 환경에 따라 this는 동적으로 세팅된다.

* 이렇게 this가 환경에 따라 바뀌는 것을 동적 바인딩이라 한다.

* bind, apply, call 등으로 this가 가리키는 것을 조작할 수 있다.


## 화살표 함수와 일반 함수의 this

*  화살표 함수의 this는 정해지면 바꿀 수 없다.

* call, bind, apply를 사용해도 바뀌지 않는다. 

* setTimeout 등 this가 바뀌는 상횡에서 유용하다.