FROM node:18-alpine AS build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

ENV VITE_API_URL=http://localhost:3000/api

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/build ./build

RUN npm i -g serve

EXPOSE 3002

CMD ["serve", "-s", "build", "-l", "3002"]