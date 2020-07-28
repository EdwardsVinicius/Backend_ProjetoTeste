import { Router } from 'express';

const routes = new Router();

routes.get('/home', (req, res) => {
    return res.send('hello world');
});

export default routes;