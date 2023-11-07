To get started first go to api folder and run (you can use any other package manager):
```
npm install
```
After installed all dependencies, you can start the containers with the command:
```
docker-compose up -d
```
Feel free to change something in docker-compose file. After this, create a .env file follwing the .env.example and then run the command to generate database and seed it:
```
npx prisma migrate dev
npx prisma db sedd
```
Then run this command to start the program:
```
npm run dev
```
You have now the api running. Then go to web folder and run:
```
npm install
npm run dev
```
Or use any other package manager.
