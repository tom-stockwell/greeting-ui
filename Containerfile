FROM registry.access.redhat.com/ubi8/nodejs-14 as build

# Install dependencies - caching can speed up development
COPY package.json package-lock.json ./
RUN npm ci

# Build application
COPY . .
RUN npm run build

# Runtime image
FROM registry.access.redhat.com/ubi8/nginx-118
COPY --from=build /opt/app-root/src/build .
CMD $STI_SCRIPTS_PATH/run
