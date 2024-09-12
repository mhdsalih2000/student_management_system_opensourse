import { Router, Request, Response } from 'express';

const router = Router();


router.get('/users', (req: Request, res: Response) => {
    
    res.json({ message: 'List of users' });
  });
  
