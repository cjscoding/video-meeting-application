# Noom

Zoom Clone using NodeJS, WebRTC and Websockets

- Nodemon: 프로젝트를 살펴보고 변경 사항이 있을 시 서버를 재시작해주는 프로그램
- babel: 작성한 코드를 일반 NodeJS 코드로 컴파일 해줌(src/server.js에서)
- Nodemon 설정하기 위해 nodemon.json 생성
- 이 때 서버를 재시작하는 대신에 babel-node를 실행
- babel-node 실행 -> babel.config.json 찾음 -> 여기서 코드에 적용되어야 하는 preset을 실행
- server.js -> Back-end
- app.js -> Front-end

## HTTP vs WebSocket

### HTTP
- stateless하다: backend가 user를 기억하지 못한다. = user와 backend 사이에 아무런 연결이 없다. = not real-time

### WebSocket
- protocol이다.
- 어떤 프로그래밍 언어에 국한되어 있지 않다.
- 브라우저에 내장된 webSocket API이 있어 사용이 가능하다.
- WSS: Serve Web Socket
- browser와 server가 연결되어 있는 상태(Bi-directional:양방향의)
- 서버와 서버끼리의 통신에서도 가능하다. (이건 http도 그럼)