FROM node:12-alpine as build
WORKDIR /frontend
COPY package.json /frontend/package.json
RUN npm install --only=prod
COPY . /frontend
RUN npm run build


FROM nginx:1.19.0-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.prod.conf /etc/nginx/conf.d
COPY --from=build /frontend/build /usr/share/nginx/html
