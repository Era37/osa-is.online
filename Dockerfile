FROM node
COPY . /app
WORKDIR /app
EXPOSE 443
CMD ["node", "index.js"]