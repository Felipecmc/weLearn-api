import express, { Request, Response } from 'express';
import initialize from './initialize';
import userRoutes from './routes/userRoutes';
import roomsRoutes from './routes/roomsRoutes';

const app = express();
const port = 3000;

initialize();

app.use(express.json());

app.use('/api/users',userRoutes)
app.use("/api/rooms", roomsRoutes)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
