FROM node:lts-slim AS builder
WORKDIR /app/
COPY . .
RUN npm i --force
RUN npm run build:aws

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html