FROM node:12 AS build-env

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install app dependencies
COPY package.json /usr/src/app
RUN npm install

# build app
COPY . /usr/src/app
RUN $(npm bin)/ng build --prod

# final stage
FROM nginx:alpine
COPY --from=build-env /usr/src/app/dist/angular-grpc-client /usr/share/nginx/html
COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
