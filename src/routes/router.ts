import { Router, Request, Response } from 'express';

const router = Router();

router.get('/example', (req: Request, res: Response) => {
    res.json({
        ok: true,
        message: 'Todo en Orden!'
    });
});

router.get('/example/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    res.json({
    ok: true,
    message: 'Todo en Orden!',
    id: id
  });
});

export default router;