import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient(); import multer from 'multer';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    let { box } = req.query;
    const { itens } = req.body;
    box = parseInt(box)

    if (!itens || !Array.isArray(itens) || itens.length === 0) {
      return res.status(400).json({ msg: 'Informe pelo menos um item!' });
    }


    try {
      for (const item_nome of itens) {
        await prisma.item.create({
          data: {
            item_nome,
            box_id: box,
          },

        });
      }
      res.status(201).json({ msg: 'Itens incluídos com sucesso!' });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  } else if (req.method === 'DELETE') {
    const { box } = req.query;
    let id = parseInt(box);


    try {
      await prisma.item.deleteMany({
        where: {
          box_id: id,
        },
      });

      res.status(200).json();
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
