### undefined , null

> undefinden : 변수 안에 떼이터를 입력하지 않은 상태 (데이터가 없는 것)
> null : 개발자가 임의로 변수 안에 빈 데이터를 삽입한 상태

### unshift

> 배열 앞에 데이터 삽입

### 자바스크립트로 값 입력받기

자바스크립트에서 콘솔을 통해 값을 입력 받기 위해서는 `readline` 모듈을 이용할 수 있습니다.

모듈은 아래와 같은 코드로 가져옵니다.

```js
const readline = require("readline");
```

그리고 `readline` 모듈을 이용해 입출력을 위한 인터페이스 객체를 만듭니다.

```js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

생성한 `rl` 변수는 아래와 같이 이용합니다.

```js
rl.on("line", (line) => {
  // 한 줄씩 입력받은 후 실행할 코드
  // 입력된 값은 line에 저장된다.
  rl.close(); // close가 없으면 입력을 무한히 받는다.
});
rl.on("close", () => {
  // 입력이 끝난 후 실행할 코드
  process.exit();
});
```
