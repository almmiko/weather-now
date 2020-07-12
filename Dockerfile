FROM node:12-alpine as build-deps

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build-prod

FROM nginx:1.12-alpine

COPY --from=build-deps /usr/src/app/dist/weather-now /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
