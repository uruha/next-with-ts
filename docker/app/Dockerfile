FROM node:12.13-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install -g npm && \
    npm install

ARG BUILD_ENV=production
ENV NODE_ENV=${BUILD_ENV}

COPY . ./

EXPOSE 3000

CMD ["npm", "run", "dev"]
