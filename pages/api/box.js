import { PrismaClient } from "@prisma/client";
import multer from "multer";
import path from "path";

const prisma = new PrismaClient();

const storage = multer.diskStorage({
  destination: "./public",
  filename: function (req, file, cb) {
    const extensaoArquivo = file.originalname.split(".")[1];
    const novoNomeArquivo = require("crypto")
      .randomBytes(64)
      .toString("hex");

    const fileName = `${novoNomeArquivo}.${extensaoArquivo}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

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
    upload.single("foto")(req, res, async function () {
      try {
        let { cesta_nome, preco, catalogo_id } = req.body;
        catalogo_id = parseInt(catalogo_id)
        preco = parseFloat(preco)

        let image_src = req.file ? req.file.path : "";
        image_src = req.file.path.replace("public/", "");


        const novaCesta = await prisma.box.create({
          data: {
            cesta_nome,
            preco,
            image_src,
            catalogo_id,
          },
        });

        res.status(201).json({ id: novaCesta.id });
      } catch (error) {
        res.status(400).json({ msg: error.message });
      }
    });


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
  } else if (req.method === "PUT") {
    upload.single("foto")(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({ msg: "Error uploading file." });
      } else if (err) {
        return res.status(400).json({ msg: err.message });
      }

      const { box } = req.query;
      const { cesta_nome = "", preco = "" } = req.body || {};
      const id = parseInt(box);

      const updatedBox = {};

      if (req.file) {
        updatedBox.image_src = req.file.path.replace("public/", "");


      }

      if (cesta_nome) {
        updatedBox.cesta_nome = cesta_nome;
      }

      if (preco) {
        updatedBox.preco = parseFloat(preco);
      }

      try {
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
    });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
