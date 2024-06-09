import * as express from 'express';
import * as cors from 'cors';
import { connectToDatabase } from './database.service';
import { endeavorsRouter } from '../routes/server'
import * as dotenv from 'dotenv';


const app = express();
const allowedOrigins = ['http://localhost:3000', 'http://localhost:8000'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
})
);
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