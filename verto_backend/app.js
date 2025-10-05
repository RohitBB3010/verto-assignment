import express from 'express';
import errorHandler from './middleware/errorHandler.js';
import routes from './routes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/employees', routes);
app.use(errorHandler);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});