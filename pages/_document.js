import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <title>Doce Surpresa Cestaria</title>
        <meta name="description" content="Por Selma Fernanda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"></link>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
      <link rel="icon" href="/logo.png" />
      <body>
        <Main />
        <NextScript />

      </body>
    </Html>
  )
}