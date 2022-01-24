FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY ./ ./
RUN npm i
EXPOSE 3002
CMD ["npm", "run", "start"]