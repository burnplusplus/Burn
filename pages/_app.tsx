import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import { Binance } from "@thirdweb-dev/chains";
import Head from 'next/head';
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
  // Read-only mode
  const readOnlySdk = new ThirdwebSDK("binance", {
    clientId: "8bad553ad3efae2716cc50c90cb94fca", // Use client id if using on the client side, get it from dashboard settings
  });


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Binance}>
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Burn ++</title>
          <meta property="og:title" content="Burn ++" />
          <meta property="og:description" content="The most meme-destroying memecoin ever. The others have had their day, it's time for token Burn Plus Plus to take over this market." />
          <meta property="og:image" content="https://burnplusplus.com/logo.png" />
          <meta property="og:image:width" content="374" />
          <meta property="og:image:height" content="486" />
          <meta property="og:url" content="https://www.burnplusplus" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-TH0JWBQDVQ"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-TH0JWBQDVQ');
              `,
            }}
          />
        </Head>

        {/* Progress bar when navigating between pages */}
        <NextNProgress
          color="var(--color-tertiary)"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />

        {/* Render the navigation menu above each component */}
        <Navbar />

        {/* Render the actual component (page) */}
        <Component {...pageProps} />
      </>
    </ThirdwebProvider>
  );
}

export default MyApp;
