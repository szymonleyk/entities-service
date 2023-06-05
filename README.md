# entities-service
Backend service for entities manager.

## Local development

Clone code
```
git clone https://github.com/szymonleyk/entities-service
```

Run database
```
docker-compose up
```

Fetch all dependencies
```
npm install
```

Create database structure
```
node ace migration:run
```

Run project
```
node ace serve --watch
```
