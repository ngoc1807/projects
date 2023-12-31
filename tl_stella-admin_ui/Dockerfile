FROM node:17.9.0-alpine3.14 AS dependencies

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

ENV NODE_ENV production

ARG FILE

WORKDIR /app

COPY .yarn ./.yarn
COPY .pnp.cjs ./
COPY .pnp.loader.mjs ./
COPY .yarnrc.yml ./
COPY .yarnrc ./
COPY package.json ./
COPY yarn.lock ./

COPY .env ./.env
COPY $FILE ./.env.production

COPY src ./src
COPY public ./public
COPY next-env.d.ts ./
COPY next.config.js ./
COPY tsconfig.json ./

RUN yarn install --immutable
RUN yarn build

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]
