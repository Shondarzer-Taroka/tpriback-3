import express from 'express';
import cors from 'cors';
import routes from './routes/user.route';

const app = express()
app.use(express.json())
app.use(cors())

// // routes
app.use('/api/users',routes)

export default app