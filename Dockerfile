FROM node:20 AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM httpd:latest

WORKDIR /usr/local/apache2/htdocs

RUN rm -rf ./*

COPY --from=build app/dist .

COPY frontend.httpd.conf /usr/local/apache2/conf/httpd.conf

COPY frontend.htaccess .htaccess

EXPOSE 80

ENTRYPOINT [ "httpd-foreground" ]