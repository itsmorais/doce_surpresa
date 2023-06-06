// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const cestas = {
    Especial_Dia_Dos_Namorados:[
      {boxTitle: "Meu riso é tão feliz contigo - Café",
      itens: ["Suco villa piva","Café drip","Chá","Iorgute grego","Frutas","Geléia","Doce de leite","Frios","Pão de leite","Torradas","Pães de queijo","Pão frânces","Croissant simples","Croissant recheado","Bolo de coração red velvet com ninho","Caixa personalizada com nome da pessoa amada"],
      imageSrc:'/namo1.jpeg',
      preco:160},
      {boxTitle: "Meu coração é teu - Café",
      itens: ["Suco villa piva","Café drip","Chá","Frutas","Geléia","Frios","Pão de leite","Pães de queijo","Pão frânces","Croissant simples","Croissant recheado","Caixa cartonada em formato de coração"],
      imageSrc:'/namo6.jpeg',
      preco:130},
      {boxTitle: "Por onde for, quero ser seu par - Frios",
      itens: ["Suco villa ou vinho","Frutas frescas","Geléia","Pastinha de azeitonas","Queijo Gouda e provolone","Charcutaria Salame e lombo","Torradas","Frutas secas","Espetinho tomate cereja com azeitonas","Chocolates","Caixa personalizada com nome da pessoa amada"],
      imageSrc:'/namo2.jpeg',
      preco:150},
      {boxTitle: "Você me faz tão bem - Fondue",
      itens: ["Brigadeiro gourmet ou ganache de chocolate nobre ao leite(150g)","Uvas sem sementes","Morangos","Brownie","Marshmallow","Amandita","Caixa personalizada com nome da pessoa amada"],
      imageSrc:'/namo3.jpeg',
      preco:110},
      {boxTitle: "Para nós todo amor do mundo - Chocolates",
      itens: ["Chocolate ferrero rocher","Trufas ao leite","Trufas de cereja","Balão Personalizado","Caixa personalizada com nome da pessoa amada","Mensagem impressa"],
      imageSrc:'/namo4.jpeg',
      preco:120},
      {boxTitle: "Mimos!",
      itens: ["Balão de coração personalizado R$18,00","Balão bobo ball R$25,00","Foto polaroid com o código da músca do casal para acesso pelo Spotify R$20.00"],
      imageSrc:'/namo5.jpeg',
      preco:null}
    ],
    Especial_Dia_Das_Mães:[
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
    ],
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
