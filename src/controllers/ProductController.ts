import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const ProductController = {
  // lista todos (GET)
  index: async (req: Request, res: Response) => {
    // Busca no banco e ordena pelos mais novos
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' } 
    });
    return res.json(products);
  },

  // cria (POST)
  create: async (req: Request, res: Response) => {
    const { name, price, description, image } = req.body;

    // validação 
    if (!name || !price) {
      return res.status(400).json({ error: 'Nome e preço são obrigatórios!' });
    }

    try {
      // salva no bd
      const product = await prisma.product.create({
        data: {
          name,
          price,
          description: description || '',
          image: image || ''
        }
      });
      return res.status(201).json(product);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar produto' });
    }
  },

  // atualizar (PUT),  para o requisito "Editar"
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, price, description, image } = req.body;

    try {
      const product = await prisma.product.update({
        where: { id },
        data: {
          name,
          price,
          description,
          image
        }
      });
      return res.json(product);
    } catch (error) {
      return res.status(400).json({ error: 'Erro ao atualizar. Produto não existe?' });
    }
  },

  // delete
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      await prisma.product.delete({
        where: { id }
      });
      return res.status(204).send(); // Sucesso sem conteúdo
    } catch (error) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
  }
};