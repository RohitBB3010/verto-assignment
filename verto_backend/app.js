import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();

app.listen(8000).then(() => {
    console.log(`App connected`);
}).catch((err) => {
    console.error(`Error : ${err.message}`);
}) 