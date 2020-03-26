#=================
# development image
#=================
FROM node:12.14.1-alpine AS development

WORKDIR /app

COPY package*.json ./
RUN npm install -g npm && \
    npm install

ARG BUILD_ENV=production
ENV NODE_ENV=${BUILD_ENV}

COPY . ./

EXPOSE 3000

#=================
# production image
# CI building test image
#=================
FROM node:12.14.1-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install -g npm && \
    npm install --production

ENV NODE_ENV=production

COPY . ./
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]