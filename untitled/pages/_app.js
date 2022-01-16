import {
  ChakraProvider,
} from "@chakra-ui/react";
import Head from 'next/head'
import parse from 'html-react-parser';
import 'focus-visible/dist/focus-visible'
import 'react-notion-x/src/styles.css';
import './../app.css'

function App({ Component, pageProps }) {
  return <ChakraProvider resetCSS>
  <Head>
    <title>{`Untitled`}</title>
    <meta name="description" content={`null`} />
    <meta name="twitter:title" content={`Untitled`} />
    <meta property="og:description" content={`null`} />
    <meta property="twitter:description" content={`null`} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:image" content="https://s3-alpha-sig.figma.com/thumbnails/c462920b-581a-4760-90a6-ce63ca8c68dd?Expires=1642982400&Signature=FuCT43-6E5bs7UFS29lvCONv-l9NJuf~-sd~GYu3YlCJwijiz3kv1gfU0Yf~EWg7ryNWArD0LqypHEeMbgH6txguYczSZXXRt37VnIWsN1MhKP6S-dOthkSXdMn7ic0oYDskZzxrEqrzG-jHJS7rZNPML5-OAwpCZckagAkrKmQjhNvbXwQUYYxXMHJBizJWCpVbA58AXIvZ00ZZLYkm3L-1vQN8R8HIv40PrOwBgE~NJQ9KldMaFKZdH-SqaHEspSB91XBi3u6lL-uZnrf-0eYRtrXVbJ5bOnKlgrqPb8l~Uhc8WuiffR6-kGXqsTXnf8QBUVN6EnPwY2Z42774zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
    <meta name="twitter:image" content="https://s3-alpha-sig.figma.com/thumbnails/c462920b-581a-4760-90a6-ce63ca8c68dd?Expires=1642982400&Signature=FuCT43-6E5bs7UFS29lvCONv-l9NJuf~-sd~GYu3YlCJwijiz3kv1gfU0Yf~EWg7ryNWArD0LqypHEeMbgH6txguYczSZXXRt37VnIWsN1MhKP6S-dOthkSXdMn7ic0oYDskZzxrEqrzG-jHJS7rZNPML5-OAwpCZckagAkrKmQjhNvbXwQUYYxXMHJBizJWCpVbA58AXIvZ00ZZLYkm3L-1vQN8R8HIv40PrOwBgE~NJQ9KldMaFKZdH-SqaHEspSB91XBi3u6lL-uZnrf-0eYRtrXVbJ5bOnKlgrqPb8l~Uhc8WuiffR6-kGXqsTXnf8QBUVN6EnPwY2Z42774zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
    <link href={`https://fonts.googleapis.com/css?family=Roboto:300,600&display=swap`} rel='stylesheet'/><link href={`https://fonts.googleapis.com/css?family=Nunito:300&display=swap`} rel='stylesheet'/>
    
  </Head>
  <Component {...pageProps} />
</ChakraProvider>;
}

export default App;
