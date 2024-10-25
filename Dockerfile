FROM nginx:stable-apline

COPY package.json package-lock.json ./

RUN npm cache clean --force

RUN npm install ajv@6 ajv-keywords@3 schema-utils@2 --save
RUN npm install --force

COPY . .

RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]