FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY ./ ./
RUN npm i
EXPOSE 3003
CMD ["npm", "run", "start"]