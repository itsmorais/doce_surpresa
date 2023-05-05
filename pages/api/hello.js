// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const cestas = {
    maes:[
      {boxTitle: "Você não é todo mundo",
      itens: ["Suco villa 300 ml","Café drip","Chá","Iorgute grego","Geléia","Doce de leite","mini torradas","Croissant","Mini pão frânces","Pães de queijo","Frios","Frutas","Bolo de coração red velvet com ninho","Caixa Personalizada com nome"],
      imageSrc:'/mae1.jpeg',
      preco:150},
      {boxTitle: "Eu disse que não precisava de nada",
      itens: ["Suco villa 300 ml","Café drip","Chá","Iorgute grego","Geléia","Doce de leite","mini torradas","Croissant","Mini pão frânces","Pães de queijo","Frios","Frutas","Biscoitos folhado","Madeleine","Bolo bentô cake red velvet com recheio de ninho com morangos","Caixa Personalizada com nome"],
      imageSrc:'/mae2.jpeg',
      preco:180},
      {boxTitle: "Coração de mãe, sempre cabe mais um",
      itens: ["Suco int.300 ml(2uni)","Café drip","Chá","Iorgute grego","Geléia","Doce de leite","mini torradas","Croissant recheado(presunto e queijo/chocolate)","Mini pão frânces","Pães de queijo","Frutas","Frutas","Bolo caseirinho red velvet","Caixa Personalizada com nome"],
      imageSrc:'/mae3.jpeg',
      preco:230},
      {boxTitle: "Leva o casaco que vai esfriar!",
      itens: ["Chocolate ferrero rocher","Trufas ao leite","Trufas de cereja","Balão Personalizado","Caixa personalizada","Mensagem impressa"],
      imageSrc:'/mae4.jpeg',
      preco:120},
      {boxTitle: "Mimos!",
      itens: ["Balão de coração R$18,00","Balão bobo ball R$25,00","Caneca personalizada R$30,00","Flor kalanchoe no cachepô R$20,00","Porta Retreato R$18,00"],
      imageSrc:'/mae5.jpeg',
      preco:null}
    ]
  }
  res.status(200).json({ cestas})
}
