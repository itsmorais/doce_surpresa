import fsPromises from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'json/userData.json');

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);
    console.log(objectData)
    res.status(200).json(objectData);



  }
  else if (req.method === 'POST') {
    try {
      const jsonData = await fsPromises.readFile(dataFilePath);
      const data = JSON.parse(jsonData);


      const { nome_catalogo } = req.body

      const new_catalogo = {
        "nome_catalogo": nome_catalogo
      }

      data.catalogos.push(new_catalogo);

      const newData = JSON.stringify(data);

      await fsPromises.writeFile(dataFilePath, newData);

      res.status(200).json({ message: "Catalogo adiiconado!" })
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error })
    }
  }

}