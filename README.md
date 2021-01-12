# NGX FRONTEND APP ANGULAR 11

## Installation steps

### 1. CREATE APP CONFIG FILES

```
cp docker/nginx/nginx.conf.dist docker/nginx/nginx.conf
cp docker-compose.override.yml.dist docker-compose.override.yml
```

### 2. BUILD APPLICATION

- in dev mode

```
docker-compose up -d --build
docker exec -ti ngx-frontend npm install
docker exec -ti ngx-frontend_nodejs bash -c 'npm start'
```

- in demo mode

```
docker-compose up -d --build
docker exec -ti ngx-frontend_nodejs npm install
docker exec -ti ngx-frontend_nodejs bash -c 'npm run build:demo'
```

- in stage mode

```
docker-compose up -d --build
docker exec -ti ngx-frontend_nodejs npm install
docker exec -ti ngx-frontend_nodejs bash -c 'npm run build:stage'
```

- in prod mode

```
docker-compose up -d --build
docker exec -ti ngx-frontend_nodejs npm install
docker exec -ti ngx-frontend_nodejs bash -c 'npm run build:prod'
```
