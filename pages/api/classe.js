import fs from 'fs'
export default async function handler(req, res) {


    class Catalogo {
        nomeCatalogo;
        cestas = []

        constructor(nomeCatalogo) {
            this.nomeCatalogo = nomeCatalogo;

        }

        addCesta(cesta) {
            this.cestas.push(cesta);
        }
        saveCatalogo(){
            fs.writeFile("./produtos.json",this.nomeCatalogo);
        }
    }


    class Cesta {
        nomeCesta;
        preco;
        image_src;
        itens = []

        constructor(nomeCesta, preco, image_src, ...itens) {
            this.nomeCesta = nomeCesta
            this.preco = preco
            this.image_src = image_src;
            itens.forEach((item) => this.itens.push(item));
        }

    }

    const catalogo = new Catalogo("Dia dos pais");
    const itens = ["pamonha", "cookie", "banana"];
    const cesta = new Cesta("Minha cesta", 140.44, "url da imagem", itens);
    catalogo.addCesta(cesta)
    catalogo.saveCatalogo();
    res.json(catalogo);

}