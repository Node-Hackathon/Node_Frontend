# 1. Node 이미지 사용 (빌드 단계)
FROM node:18-alpine as build

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. 의존성 설치
COPY package*.json ./
RUN npm install

# 4. 소스 파일 복사
COPY . .

# 5. React 애플리케이션 빌드
RUN npm run build

# 6. Nginx 이미지 사용 (프로덕션 단계)
FROM nginx:stable-alpine

# 7. 빌드된 파일을 Nginx 기본 디렉토리로 복사
COPY --from=build /app/build /usr/share/nginx/html

# 8. 기본 Nginx 설정 파일 삭제
RUN rm /etc/nginx/conf.d/default.conf

# 9. 커스텀 Nginx 설정 파일 복사
COPY nginx/nginx.conf /etc/nginx/conf.d

# 10. 포트 노출
EXPOSE 80

# 11. Nginx 실행
CMD ["nginx", "-g", "daemon off;"]