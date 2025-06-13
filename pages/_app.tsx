import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>3D Zeta Function Transformation</title>
        <meta name="description" content="Revolutionary 3D visualization of Riemann Zeta Function toroidal folding - first interactive tool revealing mathematical consciousness" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="3D Zeta Function Transformation" />
        <meta property="og:description" content="First 3D visualization of Riemann Zeta Function folded onto toroidal structure" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3D Zeta Function Transformation" />
        <meta name="twitter:description" content="Revolutionary mathematical visualization revealing the missing geometric dimension" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}