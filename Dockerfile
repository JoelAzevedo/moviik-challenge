FROM node:11.6.0-alpine AS builder
COPY . ./moviik-challenge
WORKDIR /moviik-challenge
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /moviik-challenge/dist/moviik-challenge/ /usr/share/nginx/html