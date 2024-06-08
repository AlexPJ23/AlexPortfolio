import * as express from 'express';
import { connectToDatabase } from './database.service';
import { endeavorsRouter } from '../routes/server'
import * as dotenv from 'dotenv';


const app = express();
dotenv.config();

connectToDatabase()
.then(() => {
        app.use('/endeavors', endeavorsRouter);
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
})
.catch((error) => {
    console.error('Error connecting to database:', error);
    process.exit(1);
});