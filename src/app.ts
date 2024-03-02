import express, { Request, Response } from 'express';
import initialize from './initialize';
import userRoutes from './routes/userRoutes';

const app = express();
const port = 3000;

initialize();

app.use(express.json());

app.use('/api/users',userRoutes)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
