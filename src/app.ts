import express, { Request, Response } from 'express';
import initialize from './initialize';
import userRoutes from './routes/userRoutes';
import roomsRoutes from './routes/roomsRoutes';
import questionaryRoutes from './routes/questionaryRoutes';
const cors = require('cors');


const app = express();
const port = 3001;
app.use(cors())

initialize();

app.use(express.json());

app.use('/api/users', userRoutes)
app.use("/api/rooms", roomsRoutes)
app.use("/api/questionaries", questionaryRoutes)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


// tabela questao - resposta - aluno, com indicador certo ou errado (0 ou 1)

//


