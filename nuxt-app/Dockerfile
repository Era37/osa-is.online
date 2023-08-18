FROM node:20.5.1
WORKDIR /app
COPY . /app
RUN npm i
RUN npm run build
CMD ["node", "./.output/server/index.mjs"]
