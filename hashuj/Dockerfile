FROM gatsbyjs/gatsby-dev-builds
WORKDIR /app
COPY package.json ./
COPY ./ ./
RUN npm i
EXPOSE 8000
CMD ["gatsby", "develop", "-H", "0.0.0.0"]