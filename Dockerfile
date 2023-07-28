# Building step
FROM node:18-alpine as build

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

# Now we're gonna serve the app in a nginx instance
FROM nginx:stable-alpine AS nginx

COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;" ]