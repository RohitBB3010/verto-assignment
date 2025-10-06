import express from 'express';
import errorHandler from './middleware/errorHandler.js';
import routes from './routes.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({origin : '*'}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/employees', routes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});