# 아나바다 중고 쇼핑몰 프로젝트

> PWA 앱으로 제작한 react(프론트엔드) + node.js(웹서버) 프로젝트 중고 쇼핑몰 입니다.<br>
> 프론트는 리액트를 사용하여 제작, 백엔드는 nodejs의 express를 활용하여 구현한 프로젝트입니다.

## 🔗 배포URL

[프론트엔드(페이지)][https://anbd.vercel.app/]<br>
[백엔드(서버)][https://port-0-anbd-db-sever-6g2llfcbue07.sel3.cloudtype.app/]

## 깃허브 레파지토리

[https://github.com/orgs/2ANBD/repositories]

[![NPM Version][npm-image]][npm-url]
[![NODE Version][node-image]][node-url]

<!-- [![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url] -->

<!-- 한 두 문단으로 프로젝트 소개 글을 작성합니다.

![](https://user-images.githubusercontent.com/120350411/228405190-8f0985dd-098a-42e8-878b-0a9509710038.png) -->

## 설치 방법

리액트 앱 설치:

<!-- sh, js  -->

```sh

npx create-react-app my app
cd my-app


```

## 사용 예제

프론트:

```sh
npm start
```

백엔드:

```sh
node index.js
```

<!-- 스크린 샷과 <a href="http://naver.com" target="black">코드 예제를 통해 사용 방법을 자세히 설명합니다.

_더 많은 예제와 사용법은 [표시되는글자][http://naver.com]를 참고하세요._ -->

## 개발 환경 설정

```sh
 npm i antd ^5.3.1
 npm i antd-button-color ^1.0.4
 npm i axios ^1.3.4
 npm i framer-motion ^10.9.1
 npm i node-sass ^7.0.3
 npm i pagination ^0.4.6
 npm i qs ^6.11.1
 npm i react ^18.2.0
 npm i react-daum-postcode ^3.1.1
 npm i react-dom ^18.2.0
 npm i react-router-dom ^6.3.0
 npm i react-scripts ^5.0.1
 npm i swiper ^9.1.0
 npm i web-vitals ^2.1.4

```

## 구현 목록

- MainPage

  - Banner
  - section1
  - section2

- SubPage

  - 구매페이지
  - 업로드페이지
  - 로그인페이지
  - 카테고리페이지
  - 상품상세페이지
  - 위치찾기페이지

- SERVER

  - sqlite db (create)
  - [post] "/products" 상품 DB (read)
  - [post] "/image" 이미지업로드 (read)
  - [post] "/purchase/:id" 상품구매 (update)

  - [get] "/products"
  - [get] "/products/:id"

✔ 업로드 정보 서버 DB저장 후 프론트 페이지 파싱<br>
✔ 업로드시 카테고리별 메인페이지에 상품 분할 출력 <br>
✔ 배너 자동 슬라이드<br>
✔ 상품구매시 솔드아웃 처리<br>
✔ 카카오, 네이버 로그인API, 카카오오픈채팅API 다음지도 API 가져오기<br>
✔ 전체보기 검색 필터 구현<br>

## 구현중 어려웠던 점

- 팀 프로젝트시 시작시 공동 작업화 ->
  해결) 스타일 가이드 작성 및 SASS작업<br>
  [스타일가이드][https://docs.google.com/document/d/1c1fspfmk869sq6rewsgcjt_bwontdh4pxxflxpyi3yy/edit]

- NodeJs 웹 서버 파싱 작업

- 지도api javascript코드 react코드로 변경작업.

- 깃허브 공동작업 -> 해결) 각자 branch 만들어서 push 및 에러없으면 main branch에 merge

## 정보 및 담당

김형섭 – was7894@naver.com / backend<br>
정선문 – seonmunjeong95@gmail.com / backend<br>
김준호 – dydgnscc6845@gmail.com / frontend<br>
김종건 – pouneun@naver.com / frontend<br>

<!-- XYZ 라이센스를 준수하며 `LICENSE`에서 자세한 정보를 확인할 수 있습니다.

[https://github.com/yourname/github-link](https://github.com/dbader/) -->

<!-- ## 기여 방법

1. (<https://github.com/yourname/yourproject/fork>)을 포크합니다.
2. (`git checkout -b feature/fooBar`) 명령어로 새 브랜치를 만드세요.
3. (`git commit -am 'Add some fooBar'`) 명령어로 커밋하세요.
4. (`git push origin feature/fooBar`) 명령어로 브랜치에 푸시하세요.
5. 풀리퀘스트를 보내주세요. -->

<!-- Markdown link & img dfn's -->

[npm-image]: https://img.shields.io/badge/npm-v8.19.3-important
[node-image]: https://img.shields.io/badge/node-v16.19.0-blue
[npm-url]: https://www.npmjs.com/package/npm/v/8.19.3
[node-url]: https://nodejs.dev/en/download/
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
