import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Retorna todos os catalogos
    try {
      const catalogo = await prisma.catalogo.findMany();
      res.status(200).json(catalogo);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  } else if (req.method === 'POST') {
    console.log(req.body);
    const { titulo } = req.body;
    if (!titulo) {
      res.status(400).json({ msg: 'Enviar titulo do catalogo' });
      return;
    }
    try {
      const novoCatalogo = await prisma.catalogo.create({ data: { titulo } });
      res.status(201).json({ id: novoCatalogo.id });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  } else if (req.method === 'DELETE') {
    const { catalogo } = req.query;

    try {
      // Delete feito com cascade! Deleta o catalogo + cestas + itens
      await prisma.$transaction(async (trx) => {
        await trx.item.deleteMany({
          where: {
            box: {
              catalogo_id: catalogo,
            },
          },
        });

        await trx.box.deleteMany({
          where: {
            catalogo_id: catalogo,
          },
        });

        await trx.catalogo.delete({
          where: {
            id: catalogo,
          },
        });
      });

      res.status(200).json({ message: 'Catalogo and associated items deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else if (req.method === 'PUT') {
    const { catalogo } = req.query;
    const id = catalogo;
    const { titulo } = req.body;

    try {
      await prisma.catalogo.update({
        where: { id },
        data: { titulo },
      });
      res.status(200).json();
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
