FROM node:18-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 3000

CMD ["npm", "run", "preview"]
