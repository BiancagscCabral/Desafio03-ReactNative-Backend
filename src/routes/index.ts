import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const routes = Router();

// rota de produtos
routes.get('/products', ProductController.index);   // listar
routes.post('/products', ProductController.create); // criar
routes.put('/products/:id', ProductController.update); // atualizar
routes.delete('/products/:id', ProductController.delete); // deletar

export { routes };