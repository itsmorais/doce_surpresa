import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';

const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      const extensaoArquivo = file.originalname.split('.')[1];
      const novoNomeArquivo = uuidv4();

      cb(null, `${novoNomeArquivo}.${extensaoArquivo}`);
    },
  }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { catalogo } = req.query;

    try {
      const boxes = await prisma.box.findMany({
        where: {
          catalogo_id: catalogo,
        },
        include: {
          item: true,
        },
      });

      res.status(200).json(boxes);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  } else if (req.method === 'POST') {
    const { catalogo } = req.query;
    const { cesta_nome, preco, image_src } = req.body;

    if (!cesta_nome || !preco || !image_src) {
      res.status(400).json({ msg: 'Informe o nome da cesta, preço e imagem!' });
      return;
    }

    try {
      const novaCesta = await prisma.box.create({
        data: {
          cesta_nome,
          preco,
          image_src,
          catalogo: {
            connect: {
              id: catalogo,
            },
          },
        },
      });

      res.status(201).json({ id: novaCesta.id });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  } else if (req.method === 'DELETE') {
    const { box } = req.query;

    try {
      await prisma.box.delete({
        where: {
          id: box,
        },
      });

      res.status(200).json();
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  } else if (req.method === 'PUT') {
    const { box } = req.query;
    const { cesta_nome, preco } = req.body;
    const id = box;

    try {
      const updatedBox = {};

      if (req.file) {
        updatedBox.image_src = req.file.path;
      }

      if (cesta_nome) {
        updatedBox.cesta_nome = cesta_nome;
      }

      if (preco) {
        updatedBox.preco = preco;
      }

      await prisma.box.update({
        where: {
          id,
        },
        data: updatedBox,
      });

      res.status(200).json();
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
