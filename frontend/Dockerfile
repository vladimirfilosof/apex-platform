<<<<<<< HEAD
FROM node:14-alpine as build
WORKDIR /frontend
COPY package.json /frontend/package.json
RUN yarn install --only=prod
COPY . /frontend
RUN yarn run build


FROM nginx:1.19.0-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.prod.conf /etc/nginx/conf.d
COPY --from=build /frontend/build /usr/share/nginx/html
=======
FROM node:14-alpine as build
WORKDIR /frontend
COPY package.json /frontend/package.json
RUN yarn install --only=prod
COPY . /frontend
RUN yarn build


FROM nginx:1.19.0-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.prod.conf /etc/nginx/conf.d
COPY --from=build /frontend/build /usr/share/nginx/html
>>>>>>> ee7b8a6beeefd252528adb6072e82819dea01b68
