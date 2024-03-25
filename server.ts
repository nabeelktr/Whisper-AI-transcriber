import express from 'express';
import cors from 'cors';
import { trans } from './whisperNode';

const app = express();
const port = 3000;

app.use(express.json());
// Enable CORS middleware
app.use(cors({
    origin: "*",
    credentials: true,
    methods: "*",
    allowedHeaders: ["*"],
}));

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
  trans();
});
