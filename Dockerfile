FROM node:alpine
WORKDIR /app
EXPOSE 3000
COPY ./package.json /app
RUN npm install
COPY . /app
CMD [ "npm","start" ]    