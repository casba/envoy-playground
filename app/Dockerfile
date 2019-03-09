FROM node:10-alpine

RUN mkdir /code;
COPY package*.json /code/
WORKDIR /code
RUN npm ci;
COPY index.js /code
CMD node index.js