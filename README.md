## 실행 환경
- Node.js v18.17.1

## 설치 방법
### 1. 프로젝트 클론
```sh
git clone https://github.com/siyuhu59/llm-chat-front.git
cd llm-chat-front
```

### 2. 패키지 설치
```sh
npm install
```

### 3. 환경변수 설정

.env.production 파일 내부, 실행한 서버의 주소를 입력
예시)
```
REACT_APP_API_URL=http://localhost:8000
```

### 4. 프로젝트 빌드
```sh
npm run build
```

### 5. node를 이용한 서버 실행
```sh
npx serve -s build
```


