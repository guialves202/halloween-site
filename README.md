To get started first go to api folder and run (you can use any other package manager):
```
npm install
```
After installed all dependencies, you can start the containers with the command:
```
docker-compose up -d
```
Feel free to change something in docker-compose file. After this, create a .env file follwing the .env.example and then run the command:
```
npx prisma migrate dev
```
Then run this command to transpile typescript to javascript and start the program:
```
npm run build
npm start
```
You have now the api running. Then go to web folder and run:
```
npm install
```
Or use any other package manager.
