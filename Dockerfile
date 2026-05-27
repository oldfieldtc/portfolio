# Base
FROM node:lts-alpine AS base
WORKDIR /app
COPY package*.json ./

# Build
# This stage is used to compile the code into static files.
FROM base AS build
RUN npm install
COPY . .
RUN npm run build-no-ts

# Runtime
FROM node:lts-alpine AS runtime
WORKDIR /app

# Copy only the built output from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Install ONLY production dependencies
RUN npm install --omit=dev

ARG PORT=1234
ENV HOST=0.0.0.0
ENV PORT=$PORT
EXPOSE $PORT
CMD ["node", "./dist/server/entry.mjs"]
