# STAGE 1: Build
FROM node:11.15.0-alpine as build

RUN mkdir -p /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN npm install --silent
COPY . /app
RUN npm run build

# STAGE 2: Host
FROM nginx:1.17.1-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]