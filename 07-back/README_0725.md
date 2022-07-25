
# 2022-07-25, 월


## 1. Node.js 소개

- 모듈
- 싱글 쓰레드
- 비동기


## 2. node 환경설정 – 16 버전

### [노드 다운로드](https://nodejs.org/en/download/)

```shell
$ node --version 
```


## 3. npm 명령어

```shell
$ npm version
$ npm help npm
$ npm init
$ npm i express # -g 
$ npm i nodemon -D # devDependencies
$ npm list
$ npm show express
$ npm outdated
$ npm update # wanted 까지 업데이트 됨
$ npm start  # run scripts.start in package.json 
$ npm run dev
```

### 패키지 버전 참고: [semver](https://docs.npmjs.com/about-semantic-versioning)


## 4. module 

### [Node.js built-in global objects](https://nodejs.org/api/globals.html#global-objects)

* [__dirname](https://nodejs.org/api/modules.html#__dirname): 현재 모듈의 디렉토리명
* [__filename](https://nodejs.org/api/modules.html#__filename): 현재 모듈의 파일명
* [module](https://nodejs.org/api/modules.html#module): 현재 모듈의 참조, module.exports
* [require()](https://nodejs.org/api/modules.html#requireid): exported 모듈의 컨텐츠, id는 모듈 이름이나 경로

> 주의: They exist only in the scope of modules

비교: [Javascript Standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

### 4.1 모듈을 export/import 해보기 

* primitives
* reference
* json file

### 4.2 global
  * [setTimeout](https://nodejs.org/api/timers.html#settimeoutcallback-delay-args)
  * [console.log](https://nodejs.org/api/console.html#consolelogdata-args)
  * [console.time](https://nodejs.org/api/console.html#consoletimelabel)
  * [console.timeEnd](https://nodejs.org/api/console.html#consoletimelabel)

> 참고: [Times in Node.js](https://nodejs.org/en/docs/guides/timers-in-node/)

## 5. built-in modules 

* [process](https://nodejs.org/api/process.html#process): 현재 Node.js 프로세스 관련 정보
* [path](https://nodejs.org/api/path.html#path) : 파일과 디렉토리 경로 작업을 위한 유틸리티
* [os](https://nodejs.org/api/os.html#os) : 운영체제 관련 정보
* [url](https://nodejs.org/api/url.html#url-strings-and-url-objects): URL 확인과 파싱을 위한 유틸리티 
> * URL 예시) https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash
> * [Node.js 의 URL 문자열 참고 그림](https://nodejs.org/api/url.html#url-strings-and-url-objects)
> * WHATWG API - 웹 브라우저가 사용하는 WHATWG URL 표준
* [fs](https://nodejs.org/api/fs.html#file-system) 파일 시스템과 상호작용 할 수 있음
> 추천: Node.js API 문서 읽어보기
> * [readFileSync](https://nodejs.org/api/fs.html#fsreadfilesyncpath-options) : Sync 버전의 파일읽기 함수
> * [readFile](https://nodejs.org/api/fs.html#fsreadfilepath-options-callback) : Async 버전의 파일읽기 함수
> * [fsPromises.readFile](https://nodejs.org/api/fs.html#fspromisesreadfilepath-options) : Promise 버전의 파일읽기 함수 

> 참고: [노드에서 에러는?](https://nodejs.org/api/errors.html#errors)


## 6. http 모듈을 이용한 static web server 구현

* event
* http

> [Clean Blog](https://startbootstrap.com/theme/clean-blog)

