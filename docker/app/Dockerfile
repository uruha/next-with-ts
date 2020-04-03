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
FROM node:12.14.1-alpine AS builder

WORKDIR /app

COPY --from=development ./app .

RUN npm run build

#=================
FROM node:12.14.1-alpine AS production

WORKDIR /app

COPY --from=builder ./app/package.json .
COPY --from=builder ./app/package-lock.json  .
COPY --from=builder ./app/next.config.js .
COPY --from=builder ./app/.next ./.next
COPY --from=builder ./app/dist ./dist

RUN npm install -g npm && \
    npm install --production

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "run", "start"]