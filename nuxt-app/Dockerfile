FROM node:18.12.0
WORKDIR /app
COPY . /app
RUN npm i
RUN npm run build
CMD ["node", "./.output/server/index.mjs"]