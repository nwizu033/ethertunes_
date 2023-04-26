import 'ethertunes_/styles/globals.css'
import Layout from 'ethertunes_/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  ) 
}
