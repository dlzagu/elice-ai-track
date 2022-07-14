# [자료구조 공부] 해시, 힙

---

[참고](https://overcome-the-limits.tistory.com/9#%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%EC%97%90%EC%84%9C%EC%9D%98-%ED%95%B4%EC%8B%9C-%ED%85%8C%EC%9D%B4%EB%B8%94)

## 해시

---

### 해시 테이블을 배워야 하는 이유!

유저가 회원가입을 한다고 생각해봅시다. 만약 유저의 아이디와 비밀번호를 DB에 저장하게 될 텐데, 그렇다면 입력받은 데이터를 내부 DB에 그대로 저장해야 할까요? 물론 데이터를 저장해야 합니다. 하지만 입력값 그대로를 저장한다면, 내부 DB가 해커에 의해 뚫리게 되는 순간 개인정보 유출로 인한 피해를 입을 수 있습니다. 그래서 개발자는 비밀번호를 저장할 때, 비밀번호를 암호화해서 저장합니다. 이때 해시 함수를 활용해서 비밀번호를 임의의 값으로 변환합니다. 그렇다면 해시는 무엇이며, 해시 함수는 무엇인지 알아보겠습니다.

> 해시란 단방향 암호화 기법으로 해시함수를 이용하여 고정된 길이의 암호화된 문자열로 바꿔버리는 것을 의미합니다. 그리고 해시함수는 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수입니다. 이때 매핑 전 원래 데이터의 값을 키, 매핑 후 데이터의 값을 해시값, 매핑하는 과정을 해싱이라고 합니다.

### 해시 테이블이란?

`해시 테이블은 해시 함수를 활용해서 키 값에 인덱스를 배정하고, 인덱스의 값에 데이터를 넣는 자료 구조`를 말합니다. 그리고 해시란, 키와 값이 한 쌍으로 구성된 데이터를 말합니다.

#### 직접주소 테이블

해시 테이블의 아이디어는 직접 주소 테이블이라는 자료구조에서 출발합니다. 직접 주소 테이블은 입력받은 `value가 곧 key가 되는 데이터 매핑 방식`입니다. 아래의 코드로 직접 주소 테이블을 이해해봅시다.

```js
class DirectAddressTable {
  constructor() {
    this.table = [];
  }

  setValue(value = -1) {
    this.table[value] = value;
  }

  getValue(value = -1) {
    return this.table[value];
  }

  getTable() {
    return this.table;
  }
}

const myTable = new DirectAddressTable();
myTable.setValue(7);
myTable.setValue(20);
myTable.setValue(50);
console.log(myTable.getTable());
```

만약 이 코드를 복사 붙여 넣기 한 후 브라우저 콘솔이나 Node.JS로 실행해본다면, 콘솔에 아래와 같은 테이블이 출력될 것입니다.

![직접주소테이블](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtCSMs%2FbtqUeWQkOY2%2FucPvJd5Moli53yV2gyR9sK%2Fimg.png)

예를 들어 우리가 7을 테이블에 넣으면 이 값은 배열의 7번 인덱스의 요소가 되고 50을 넣으면 50번 인덱스의 요소가 됩니다. 직접 주소 테이블을 사용할 때는 들어오는 값을 알면 저장된 인덱스도 함께 알 수 있습니다. 즉 시간 복잡도는 O(1)입니다. 또한 테이블에 있는 값을 삽입, 수정, 삭제할 때도 값이 어디 있는지 알고 있기 때문에  O(1)의 시간 복잡도로 해결할 수 있습니다.

하지만 직접 주소 테이블도 당연히 단점이 있습니다. 바로 공간의 효율성이 좋지 못하다는 것입니다.

위의 예처럼, 저장된 데이터를 제외하고 0으로 채워진 나머지 공간은 값은 없지만 메모리 공간은 할당되어 있는 상태입니다. 만약 1000과 같이 큰 값이 하나만 테이블에 더 들어온다면, 테이블의 크기는 1001이 되면서 적재율은 훨씬 떨어지게 됩니다. 즉, 저장해야 할 값의 범위가 크지 않은 데이터를 저장할 때 직접 주소 테이블을 사용하면 좋을 것 같습니다. 하지만 저장해야 할 값의 범위가 크다면, 직접 주소 테이블은 큰 비효율성을 보일 수 있습니다. 직접 주소 테이블의 단점을 해시 함수로 보완할 수 있음.

#### 직접 주소 테이블의 단점을 해시 함수로 보완!

직접 주소 테이블과 같이 값을 바로 테이블의 인덱스로 사용하는 것이 아니라 밑에 예시와 같이 해시 함수라는 것에 한번 통과시켜 사용합니다.

```js
function hashFunction(key) {
  return key % 10;
}

console.log(hashFunction(102948)); // 8
console.log(hashFunction(19191919191)); // 1
```

위의 직접 주소 테이블에서는 1000이라는 값이 하나만 들어와도 1000번 인덱스에 값을 저장하기 위해 1000의 크기를 가진 테이블을 생성해야 했고, 999개의 버리는 공간이 발생했습니다. `하지만 해시 함수를 활용하면 1001이 들어오면 1을 반환`하기 때문에, 고정된 테이블의 길이를 정해둘 수 있고, 그 안에만 데이터를 저장할 수 있습니다. 이로써 '직접 주소 테이블'의 단점이었던 낭비되는 공간을 줄일 수 있습니다.

### 해시의 충돌

해시 테이블은 충돌 문제가 발생할 수 있습니다. 예를 들어 위의 그림에서 보면, John Smith와 Sam Doe는 해쉬 함수를 통해 152라는 인덱스를 배정받았습니다. 만약 같은 인덱스를 배정받는다면, 이 데이터를 어떻게 처리해줘야 할까요? 이런 문제를 충돌이라고 합니다.

### 개방주소법 (Open Address)

개방 주소법은 해시 충돌이 발생하면 테이블 내의 `새로운 주소를 탐사(Probe) 한 후, 비어있는 곳에 충돌된 데이터를 입력하는 방식`입니다.

#### 1. 선형 탐사법(Linear Probing)

먼저 선형 탐사법에 대해 소개합니다. 선형 탐사법은 선형으로 순차적으로 탐사하는 방법입니다. 아래에 1001과 11의 상황을 통해 충돌 상황을 만들어보겠습니다.

function hashFunction (key) {
return key % 10;
}

console.log(hashFunction(1001)); // 1
console.log(hashFunction(11)); // 1

처음 콘솔 값을 확인해보면, 해시의 인덱스로 1이 나올 것입니다. 그 이후 11을 해시 함수에 통과시켰더니 또 1이 나왔습니다. 하지만 이미 1번 인덱스에는 1001가 있기 때문에 11은 해시 테이블에 들어갈 자리가 없게 됩니다. 이럴 경우에 충돌이 발생합니다. 선형 탐사법은 이렇게 충돌이 났을 때 정해진 칸만큼의 옆 방을 주는 방법입니다.

0 1 2 3 4
` 1001 11`

만약 해시 함수에 key값을 넣었을 때, 또 1이 나온다면, 충돌이 발생하게 되고, 그렇다면 이번에는 값을 3번 인덱스에 저장할 것입니다. 이런 방식으로 빈 공간이 나타날 때까지 순차적으로 탐사를 진행합니다.

`선형 탐사법의 단점`은 특정 해시 값의 주변이 모두 채워져 있는 `일차 군집화(Primary Clustering) 문제에 취약`하다는 것입니다.

0 1 2 3 4
` 1001 11 21 31`

같은 해시가 여러 번 나오는 상황이라면, 선형 탐사법을 사용하면 데이터가 연속되게 저장될 가능성이 높아집니다. 이런 경우 해시의 값이 1이 나왔을 때뿐만 아니라 2나 3이 나왔을 때도 충돌이 발생합니다. 이미 해시 값으로 2, 3에 해당하는 곳에 데이터가 저장되어있기 때문에, 계속해서 해시 값으로 1이 나왔고, 새롭게 2, 3이 나오더라도, 저장하려고 하는 공간에 데이터가 있기 때문에 충돌이 나게 됩니다.

이런 식으로 충돌이 계속될수록 데이터가 연속되게 저장되기 때문에 데이터 덩어리가 더 커집니다. 이것이 바로 Primary Clustering입니다. 그렇다면 이 문제를 어떻게 해결할 수 있을지 다른 방법을 알아보겠습니다.

### 2. 제곱 탐사법(Quadratic Probing)

제곱 탐사법은 탐사하는 폭이 고정폭이 아닌 제곱으로 늘어나는 부분에서 선형 탐사법과 차이점을 가집니다.

첫 번째 충돌이 발생했을 때는 충돌 난 지점으로부터 1의 제곱만큼, 두 번째 충돌이 발생했을 때는 2의 제곱만큼, 세 번째는 3의 제곱만큼 탐사하는 스텝이 빠르게 커집니다.

![제곱탐사법](https://velog.velcdn.com/images/ijaesin/post/fd90c8bd-0a76-410c-b608-e799747ce0c6/image.png)

그래도 결국 해시로 1이 여러 번 나오면 계속 충돌이 나는 것은 피할 수 없습니다. 결국 데이터의 군집은 피할 수 없는 숙명이므로 이 현상을 이차 군집화(Secondary Clustering)이라고 부릅니다.

### 3. 이중 해싱(Double Hashing)

이중 해싱은 해시 함수를 이중으로 사용하는 것을 뜻합니다.

하나는 최초 해시를 얻을 때 사용하고, 다른 하나는 충돌이 났을 경우 탐사 이동폭을 얻기 위해 사용합니다. 이렇게 하면, 최초 해시로 같은 값이 나오더라도 다른 해시 함수를 거치면서 다른 탐사 이동폭을 제공하기 때문에 다른 공간에 값이 골고루 저장될 확률도 높아집니다.

```js
const myTableSize = 23; // 테이블 사이즈가 소수여야 효과가 좋다
const myHashTable = [];

const getSaveHash = (value) => value % myTableSize;

// 스텝 해시에 사용되는 수는 테이블 사이즈보다 약간 작은 소수를 사용한다.
const getStepHash = (value) => 17 - (value % 17);

const setValue = (value) => {
  let index = getSaveHash(value);
  let targetValue = myHashTable[index];
  while (true) {
    if (!targetValue) {
      myHashTable[index] = value;
      console.log(`${index}번 인덱스에 ${value} 저장! `);
      return;
    } else if (myHashTable.length >= myTableSize) {
      console.log("풀방입니다");
      return;
    } else {
      console.log(`${index}번 인덱스에 ${value} 저장하려다 충돌 발생!ㅜㅜ`);
      index += getStepHash(value);
      index = index > myTableSize ? index - myTableSize : index;
      targetValue = myHashTable[index];
    }
  }
};
```

> 1.  저장할 인덱스를 getSaveHash 해시 함수로 얻습니다.2. myHashTable에 index를 키로 받는 값을 targetValue 변수에 저장합니다.3. 반복문을 시작합니다.4. 만약 targetValue가 없으면, 배열에 값이 비었다는 뜻이므로, 인덱스에 맞는 키값을 저장합니다. 5. 만약 배열의 길이가 myTableSize의 길이보다 크거나 같다면 배열이 모두 꽉 찼다는 뜻입니다.6. 만약 인덱스에 맞는 키값이 있고, 배열이 가득 차 있지도 않다면 인덱스에 맞는 키값을 저장하려다가 충돌이 발생합니다.그렇다면 다음 인덱스를 받아서, 그 인덱스에 맞는 값으로 키값을 저장합니다.

## 힙

---

힙 (Heap) 은 트리와 비슷한 자료 구조의 일종으로, 최대 힙의 경우 부모가 자식보다 크고 최소 힙의 경우 보모가 자식보다 작아요. 이러한 힙의 특성은 자료를 정렬하는데 유용하답니다. 힙은 자식에 대한 포인터를 갖는 대신에 배열 을 사용해 자료를 저장합니다. 힙을 사용하면 부모와 자식 간의 관계를 쉽게 정의 할 수 있기에, 배열에서 힙 노드의 자식 위치(인덱스)를 쉽게 계산할 수 있죠.

힙 에는 다양한 수의 자식을 갖는 다양한 종류가 있습니다. 힙은 배열을 사용해 자료를 저장하기 때문에 배열의 인덱스는 각 항목의 차수/높이를 정의합니다. 첫번 째 배열 항목을 루트로 설정한 다음 각 왼쪽 항목과 오른쪽 항목을 순서대로 채움으로써 이진 힙 을 만들 수 있습니다.

![최대힙](https://velog.velcdn.com/images/ijaesin/post/791fa06a-b631-4994-9a73-5c9203919aa3/image.png)
`최대 힙` 은 부모가 모든 자식보다 항상 큰 힙입니다.. 그림과 같은 이진 힙이 존재할 때, 최대 힙의 배열은 `[100, 19, 36, 17, 3, 25, 1, 2, 7]`

![최소힙](https://velog.velcdn.com/images/ijaesin/post/dedd49e3-3641-4cf7-b2f7-8070fa36e5b6/image.png)
`최소 힙` 은 부모가 모든 자식보다 항상 작은 힙입니다.. 그림과 같은 이진 힙이 존재할 때, 최소 힙의 배열은 `[1, 2, 3, 17, 19, 36, 7, 25, 100]`

### 이진 힙 (Binary Heap)

이진 힙 (Binary Heap) 의 경우 힙을 나타내기 위해 배열이 사용되는데 다음과 같이 인덱스를 사용합니다. 이 때, N은 노드의 인덱스입니다.

> 자신 노드 : N
> 부모 노드 : (N - 1) / 2
> 왼쪽 자식 노드 : 2 n + 1
> 오른쪽 자식 노드 : 2 n + 2

```js
// Binary Heap
function Heap() {
  this.items = [];

  this.swap = (index1, index2) => {
    [this.items[index1], this.items[index2]] = [
      this.items[index2],
      this.items[index1],
    ];
  };

  this.parentIndex = (index) => {
    return Math.floor((index - 1) / 2);
  };

  this.leftChildIndex = (index) => {
    return index * 2 + 1;
  };

  this.rightChildIndex = (index) => {
    return index * 2 + 2;
  };

  this.parent = (index) => {
    return this.items[this.parentIndex(index)];
  };

  this.leftChild = (index) => {
    return this.items[this.leftChildIndex(index)];
  };

  this.rightChild = (index) => {
    return this.items[this.rightChildIndex(index)];
  };

  this.peek = (item) => {
    return this.items[0];
  };

  this.size = () => {
    return this.items.length;
  };
}
```

### 삼투 과정

항목을 추가하거나 삭제할 때는 `힙의 구조가 유지` 되어야 합니다. 이를 위해 항목 간에 교환이 일어나서 마치 비누 거품이 위로 올라가듯이 힙의 꼭대기로 점차 올라가야 합니다. 마찬가지로 일부 항목들은 힙의 구조를 유지하기 위해 올바른 위치로 마치 비누 거품이 땅으로 내려가듯이 내려가야 합니다. 이러한 노드 간 전파의 시간 복잡도는 O(log2(n))입니다.

12, 2, 23, 4, 13 순으로 값을 최소 힙에 삽입해 봅시다.

![최소삼투](https://velog.velcdn.com/images/ijaesin/post/b481dd4e-e443-4688-9236-e9af6f233dcb/image.png)
![최소삼투2](https://velog.velcdn.com/images/ijaesin/post/2444a5ba-090f-46c7-b69a-29618e21df56/image.png)

>

1. 첫 번째 노드 12를 삽입한다.
2. 새로운 노드 2를 삽입한다.
3. 최소 힙 구조를 유지하기 위해 노드 2가 최상위로 올라간다.
4. 새로운 노드 23을 삽입한다.
5. 새로운 노드 4를 삽입한다.
6. 최소 힙 구조를 유지하기 위해 노드 12와 노드 4의 위치를 교환한다.
7. 새로운 노드 12를 삽입한다.

삼투의 위 아래 이동을 구현하기 위해서는 취소 힙 구조의 제일 위에 최솟값 항목이 위치할 때까지 항목들을 교환해야 합니다.

```js
function MinHeap() {
  this.items = [];

  this.bubbleDown = () => {
    let index = 0;

    while (this.leftChild(index) && this.leftChild(index) < this.items[index]) {
      let smallerIndex = this.leftChildIndex(index);

      if (
        this.rightChile(index) &&
        this.rightChild(index) < this.items[smallerIndex]
      ) {
        smallerIndex = this.rightChildIndex(index);
      }

      this.swap(smallerIndex, index);
      index = smallerIndex;
    }
  };

  this.bubbleUp = () => {
    let index = this.items.length - 1;

    while (this.parent(index) && this.parent(index) > this.items[index]) {
      this.swap(this.parentIndex(index), index);
      index = this.parentIndex(index);
    }
  };
}
```

`최대 힙` 구현은 최소 힙 구현과 비교자 부분만 달라요. 아래로 이동하기 위해서 최대 힙 노드는 자식이 자신보다 큰 경우에 교환합니다. 마찬가지로 위로 이동하기 위해서 가장 최근에 삽입된 노드는 부모 노드가 자신보다 작은 경우에 부모 노드와 교환됩니다.

### 힙 정렬

힙 클래스를 생성한 뒤엔 힙을 사용해 정렬 하는 것이 꽤 간단합니다. 힙이 빈 상태가 될 때까지 힙 배열을 pop() 하여 꺼낸 객체를 저장하면 정렬된 배열을 얻을 수 있죠. 이를 힙 정렬이라 한답니다. 힙 정렬의 시간 복잡도는 빠른 정렬이나 병합 정렬과 같은 O(log2(n))입니다.

#### 오름차순 정렬 (최소 힙)

![오름차순정렬!](https://velog.velcdn.com/images/ijaesin/post/7a42bfba-424d-47be-af1c-219a291b6927/image.png)

```js
const myMinHeap = new MinHeap();
myMinHeap.add(12);
myMinHeap.add(2);
myMinHeap.add(23);
myMinHeap.add(4);
myMinHeap.add(13);
myMinHeap.items; // [2, 4, 23, 12, 13]
```

위는 최소 힙 클래스를 통해 만들어진 배열입니다. 이제 이 최소 힙 배열을 pop() 을 통해 항목들을 꺼내어 힙을 재구성할거에요. 최종적으로 힙이 빈 상태가 되면 정렬 이 완료된 것입니다.

```js
![오름차순정렬2](https://velog.velcdn.com/images/ijaesin/post/03cba583-74e3-4a48-b939-2a47a93b05d5/image.png)
```

```js
console.log(myMinHeap.poll()); // 2
console.log(myMinHeap.poll()); // 4
console.log(myMinHeap.poll()); // 12
console.log(myMinHeap.poll()); // 13
console.log(myMinHeap.poll()); // 23
위에서 보듯이 항목을 꺼내는 과정에서 삼투도 같이 일어나고 마침내 정렬이 끝납니다.
```

내림차순 정렬 (최대 힙)도 마찬가지로 하면 됩니다.

```js
const myMaxHeap = new MaxHeap();
myMaxHeap.add(12);
myMaxHeap.add(2);
myMaxHeap.add(23);
myMaxHeap.add(4);
myMaxHeap.add(13);
myMaxHeap.items; // [23, 13, 12, 2, 4]
```

최소 힙과 마찬가지로 위는 최대 힙 클래스를 통해 만들어진 배열입니다. 이 최대 힙 배열도 항목들을 꺼냄에 따라 최대 힙이 재구성돼요. 그리고 최종적으로 최대 힙이 빈 경우 정렬 이 완료됩니다.

![내림차순정렬](https://velog.velcdn.com/images/ijaesin/post/18bc1f1c-555d-4039-af41-638212f711f9/image.png)

```js
console.log(myMaxHeap.poll()); // 23
console.log(myMaxHeap.poll()); // 13
console.log(myMaxHeap.poll()); // 12
console.log(myMaxHeap.poll()); // 2
console.log(myMaxHeap.poll()); // 4
```

출처: https://overcome-the-limits.tistory.com/9#알고리즘에서의-해시-테이블
출처 : https://velog.io/@ijaesin/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-3
