FROM node
COPY . /app
WORKDIR /app
EXPOSE 443
RUN npm i
CMD ["node", "index.js"]