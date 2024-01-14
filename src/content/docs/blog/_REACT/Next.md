## create frontend

`$ npx create-next-app frontend`

## 1.- change the `_app.js` to layout

```js
import '../styles/globals.css'
import Head from 'next/head'
const MyApp = ({ Component, pageProps }) => {
  return <>
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </Head>
    <Component {...pageProps} />
  </>

}

export default MyApp

```