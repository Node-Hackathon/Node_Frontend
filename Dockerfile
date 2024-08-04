# 베이스 이미지로 Node.js를 사용합니다.
FROM --platform=linux/amd64 node:14

# 작업 디렉토리를 설정합니다.
WORKDIR /app

# 패키지 파일을 복사합니다.
COPY package.json package-lock.json ./

# .env 파일 복사
COPY .env.production .env.development ./

# 의존성을 설치합니다.
RUN npm install

# 애플리케이션 소스 코드를 복사합니다.
COPY . .

# 애플리케이션을 빌드합니다.
RUN npm run build

# 애플리케이션을 시작합니다.
CMD ["npm", "start"]

# 애플리케이션이 3000 포트를 사용합니다.
EXPOSE 3000