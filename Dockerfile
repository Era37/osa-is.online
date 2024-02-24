FROM node:21.6.2
WORKDIR /app
COPY . /app 
RUN npm i
RUN npx turbo build
RUN npx prisma db push
RUN npx prisma generate
CMD ["npx", "turbo", "start"]