// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const cestas = {
    Café_da_manhã:[
      {boxTitle: "Café P",
      itens: ["Suco integral","Drip Coffe","Iogurte grego","Frutas variadas(5)","Geléia ou doce de leite","Pão Francês","Pães de queijo","Pão de leite","Caixa mdf decorada"],
      imageSrc:'/cafe1.jpeg',
      preco:130},
      {boxTitle: "Café M",
      itens: ["Suco integral","Drip Coffe","Iogurte grego","Frutas","Frios","Geléia ou doce de leite","Cookies","Pão Francês","Pães de queijo","Pão de leite","Croissant de presunto e queijo","Caixa mdf decorada"],
      imageSrc:'/cafe2.jpeg',
      preco:145},
      {boxTitle: "Café G",
      itens: ["Suco integral(2uni)","Drip Coffe","Iogurte grego","Frutas","Frios","Geléia","doce de leite","Cookies","Pão Francês","Pães de queijo","Pão de leite","Croissant de presunto e queijo","Croissant de chocolate","Bolo caseirinho","Brigadeiros gourmet(6uni)","Caixa mdf decorada"],
      imageSrc:'/cafe3.jpeg',
      preco:190},
      {boxTitle: "Aniversário",
      itens: ["Suco integral","Drip coffe","Iogurte grego","Frutas","Frios","Geléia","Doce de leite","Pão francês","Cookies","Pão de leite","Pães de queijo","Croissant de presunto e queijo","Croissant de chocolate","Bolo de aniversário","Brigadeiro gourmet(6uni)","Caixa mdf decorada"],
      imageSrc:'/cafe4.jpeg',
      preco:230},
    ]
  }
  res.status(200).json({ cestas})
}
