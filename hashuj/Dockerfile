FROM node:alpine
RUN npm install --global gatsby-cli
WORKDIR /app
COPY package.json ./
COPY ./ ./
RUN npm i
EXPOSE 8000
CMD ["gatsby", "develop", "-H", "0.0.0.0"]