
const connectToDB = require('./src/config/database');
const dotenv = require('dotenv');
dotenv.config();

const app = require('./src/app');



connectToDB();

app.listen(3000,()=>{
    console.log(`Server is running at port 3000`);
})