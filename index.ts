import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000' // Frontend URL
  }));
  
app.use(express.json()); // parse JSON in request body

// Sample route
app.get('/api/content', (req: any, res: any) => {
  res.json({ message: 'Hello from Express backend!', timestamp: new Date() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
