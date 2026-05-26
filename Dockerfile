# --- STAGE 0: Base (Common setup for both Dev and Prod) ---
FROM node:lts-alpine AS base
WORKDIR /app
COPY package*.json ./

# --- STAGE 1: Development (The "Dev" environment) ---
# This stage is used for local coding. It includes all devDependencies.
FROM base AS development
RUN npm install
COPY . .
# In dev, we use the Astro dev server.
ENV HOST=0.0.0.0
ENV PORT=5301
EXPOSE 5301
CMD ["npm", "run", "dev"]

# --- STAGE 2: Build (The "Builder" stage) ---
# This stage is used to compile the code into static files.
FROM base AS build
RUN npm install
COPY . .
RUN npm run build-no-ts

# --- STAGE 3: Production (The "Runtime" stage) ---
# This is the tiny, secure image we use on your VPS.
FROM node:lts-alpine AS production
WORKDIR /app

# Copy only the built output from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Install ONLY production dependencies
RUN npm install --omit=dev

ENV HOST=0.0.0.0
ENV PORT=1234
EXPOSE 1234
CMD ["node", "./dist/server/entry.mjs"]
