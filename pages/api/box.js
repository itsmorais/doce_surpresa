import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { catalogo } = req.query;

  if (req.method === "GET") {
    try {
      const boxes = await prisma.box.findMany({
        where: {
          catalogo_id: parseInt(catalogo),
        },
        include: {
          item: true,
        },
      });

      res.status(200).json(boxes);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  } else if (req.method === "POST") {
    try {
      let { cesta_nome, preco, catalogo_id, image_src } = req.body;
      image_src = image_src.replace("/view?usp=drive_link", "");
      image_src = image_src.replace("file/d/", "uc?export=view&id=");


      const novaCesta = await prisma.box.create({
        data: {
          cesta_nome,
          preco: parseFloat(preco),
          image_src,
          catalogo_id: parseInt(catalogo_id),
        },
      });

      res.status(201).json({ id: novaCesta.id });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }

  } else if (req.method === "PUT") {
    try {
      const { box } = req.query;
      let { cesta_nome = "", preco = "", image_src = "" } = req.body || {};

      if (!image_src) {
        try {
          const id = parseInt(box);
          await prisma.box.update({
            where: {
              id,
            },
            data: {
              cesta_nome,
              preco: parseFloat(preco),
            },
          });
          return res.status(200).json();
        } catch (error) {
          return res.status(400).json({ msg: error.message });
        }
      }

      try {
        image_src = image_src.replace("/view?usp=drive_link", "");
        image_src = image_src.replace("file/d/", "uc?export=view&id=");
        const id = parseInt(box);
        console.log(image_src, cesta_nome, id);

        await prisma.box.update({
          where: {
            id,
          },
          data: {
            cesta_nome,
            preco: parseFloat(preco),
            image_src,
          },
        });

        return res.status(200).json();

      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }



  } else if (req.method === "DELETE") {
    const { box } = req.query;

    try {
      await prisma.box.delete({
        where: {
          id: parseInt(box),
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
