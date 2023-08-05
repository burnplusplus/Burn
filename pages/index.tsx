import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faDiscord, faTelegram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import { faCoins, faCopy } from '@fortawesome/free-solid-svg-icons';
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
  // Read-only mode
  const readOnlySdk = new ThirdwebSDK("binance", {
    clientId: "8bad553ad3efae2716cc50c90cb94fca", // Use client id if using on the client side, get it from dashboard settings
  });

const Home: NextPage = () => {
    const [isCopied, setIsCopied] = useState(false);
    const address = '0xe6282d11442d33865907C8029ad362B6B203C3a2';

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(address);
            setIsCopied(true);

            // Reset the button state after 2 seconds
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.hero}>
                    <div className={styles.heroBackground}></div>

                    <div className={styles.heroAssetFrame}>
                        <div className={styles.imageContainer}>
                            <p className={styles.text}>
                                The most meme-destroying memecoin ever. The others have had their day, it&apos;s time for token Burn Plus Plus to take over this market.
                            </p>

                            <div>
                                <Image
                                    src="/logo.png"
                                    width={270}
                                    height={350}
                                    alt="Burn Plus Plus"
                                    quality={100}
                                    className={styles.heroAsset}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.social}>
                        <a href="https://bscscan.com/address/0xe6282d11442d33865907C8029ad362B6B203C3a2" target="_blank">
                            <Image
                                src="/bscscan.png"
                                width={80}
                                height={80}
                                alt="bscScan"
                                quality={100}
                                className={styles.socialImg}
                            /></a>
                        <a href="https://twitter.com/burnplusplus" target="_blank">
                            <Image
                                src="/twitter.png"
                                width={80}
                                height={80}
                                alt="Twitter"
                                quality={100}
                                className={styles.socialImg}
                            /></a>
                        <a href="https://www.dextools.io/app/en/bnb/pair-explorer/0x2ab4265dae4a05db474229a92157c1827569a52f" target="_blank">
                            <Image
                                src="/dextrol.png"
                                width={80}
                                height={80}
                                alt="Burn Plus Plus"
                                quality={100}
                                className={styles.socialImg}
                            /></a>
                        <a href="https://t.me/burn_plusplus" target="_blank">
                            <Image
                                src="/TEelegram.png"
                                width={80}
                                height={80}
                                alt="Burn Plus Plus"
                                quality={100}
                                className={styles.socialImg}
                            /></a>
                        <a href="https://pancakeswap.finance/swap?outputCurrency=0xe6282d11442d33865907C8029ad362B6B203C3a2">
                            <Image
                                src="/pancake.png"
                                width={80}
                                height={80}
                                alt="Burn Plus Plus"
                                quality={100}
                                className={styles.socialImg}
                            /></a>
                    </div>

                    <div className={styles.copy}>
                        <Image
                            src="/contract.png"
                            width={190}
                            height={249}
                            alt="Contract"
                            quality={100}
                            className={styles.contract}
                        />
                        <div className={styles.quadro}> {address}
                            <div onClick={handleCopyClick} >
                                <FontAwesomeIcon icon={faCopy} className={styles.icon} />
                            </div>

                            {isCopied && <div>Copied!</div>}
                        </div>
                    </div>

                    <div className={styles.imgesq}>

                        <div className={styles.texto}>
                            <div className={styles.horizontalLine}></div>
                            <h1>
                                Introducing Burn Plus Plus - the ultimate revolution
                            </h1>
                            <p>
                                Are you tired of watching other coins play the same old game? Burn Plus Plus is here to shake things up and become the true leader of the market. It&apos;s time to continue the era of memecoins.
                            </p>
                            <p>
                                Powered by the pure force of memetics, Burn Plus Plus will show you the way to success. We believe in constant evolution and high performance, allowing you to build a stable passive income and profit from market fluctuations.
                            </p>
                            <p>
                                But Burn Plus Plus is more than just a coin. It&apos;s a passionate community united by a common vision. Join us and be part of the revolution that will reshape the world of memecoins. Together, we will make history!
                            </p>


                        </div>

                        <div>
                            <Image
                                src="/logo.png"
                                width={270}
                                height={350}
                                alt="Logo Burn Plus Plus"
                                quality={100}
                                className={styles.logo}
                            />
                        </div>
                        <div className={styles.horizontalLine}></div>
                    </div>

                    <div className={styles.heroBody}>
                        <h1 className={styles.heroTitle}>
                            <span className={styles.heroTitleGradient}>
                                How to buy Burn++
                            </span>
                        </h1>
                        <div className={styles.textcontainer}>
                            <Image
                                src="/walletts.png"
                                width={209}
                                height={164}
                                alt="Wallets"
                                quality={100}
                                className={styles.buy}
                            />
                            <div>
                                <h1>Create a Wallet</h1>
                                <p className={styles.textWallet}>
                                    Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.
                                </p>
                            </div>
                        </div>
                        <div className={styles.textcontainer}>
                            <Image
                                src="/bnbb.png"
                                width={112}
                                height={115}
                                alt="Burn Plus Plus"
                                quality={100}
                                className={styles.buy}
                            />
                            <div>
                                <h1>Get Some BNB</h1>
                                <p className={styles.textWallet}>
                                    To acquire Burn++, you need to have BNB (Binance Coin) in your wallet. If you don't have any BNB, you have a few options to obtain it. You can buy BNB directly on Binance, transfer it from another wallet, or purchase it on another exchange and send it to your wallet. Once you have BNB in your wallet, you'll be ready to dive into the world of Burn++!
                                </p>
                            </div>
                        </div>

                        <div className={styles.textcontainer}>
                            <Image
                                src="/pancake.png"
                                width={110}
                                height={110}
                                alt="Burn Plus Plus"
                                quality={100}
                                className={styles.buy}
                            />
                            <div>
                                <h1>Go to Pancake</h1>
                                <p className={styles.textWallet}>
                                    Connect to Pancake. Go to pancakeswap.finance in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the Burn Plus Plus token address into Pancake, select Burn , and confirm. When Metamask prompts you for a wallet signature, sign.
                                </p>
                            </div>
                        </div>
                        <div className={styles.textcontainer}>
                            <Image
                                src="/logo.png"
                                width={100}
                                height={127}
                                alt="Logo, Burn++, Meme"
                                quality={100}
                                className={styles.buy}
                            />
                            <div>
                                <h1>Switch BNB for $Burn++</h1>
                                <p className={styles.textWallet}>
                                    Switch BNB to $Burn. We have 5% de taxes 3% volta em tokenomics em USDT e outros 2% vai para carteira de Marketing, you may need to use slippage 5.
                                </p>
                            </div>
                        </div>



                        <h1 className={styles.h1Contact}>
                            Where to find
                        </h1>
                        {/*** *************************************************************************************************/}
                        <div className={styles.heroCtaContainer}>
                            <Link href="/" target="_blank">
                                <Image
                                    src="/pancakee.png"
                                    width={350}
                                    height={100}
                                    alt="Meme"
                                    quality={100}
                                    className={styles.secondaryCta}
                                />
                            </Link>
                            <Link href="https://www.dextools.io/app/en/bnb/pair-explorer/0x2ab4265dae4a05db474229a92157c1827569a52f" target="_blank">
                                <Image
                                    src="/dextt.png"
                                    width={350}
                                    height={100}
                                    alt="Find"
                                    quality={100}
                                    className={styles.secondaryCta}
                                />
                            </Link>
                            <Link href="https://bscscan.com/address/0xe6282d11442d33865907C8029ad362B6B203C3a2" target="_blank">
                                <Image
                                    src="/bscsc.png"
                                    width={350}
                                    height={100}
                                    alt="Meme"
                                    quality={100}
                                    className={styles.secondaryCta}
                                />
                            </Link>
                        </div>
                        {/**<div className={styles.heroCtaContainer}>
                            <Link href="/" target="_blank" className={styles.secondaryCta}>
                                Soon
                            </Link>
                            <Link href="/" target="_blank" className={styles.secondaryCta}>
                                Soon
                            </Link>
                            <Link href="/" target="_blank" className={styles.secondaryCta}>
                                Soon
                            </Link>
    </div>*/}
                        {/**
                        <div className={styles.heroCtaContainer}>
                            <Link href="/" target="_blank" className={styles.secondaryCta}>
                                Soon
                            </Link>
                            <Link href="/" target="_blank" className={styles.secondaryCta}>
                                Soon
                            </Link>
                            <Link href="/" target="_blank" className={styles.secondaryCta}>
                                Soon
                            </Link>
                        </div>*/}

                        {/*** *************************************************************************************************/}

                    </div>
                </div>
                <div className={styles.horizontalLine}></div>
                <h1>Burn Plus Plus</h1>
                <div className={styles.fire}>
                    <div className={styles.textfire}>
                        <p>Burn Plus Plus is committed to driving growth and constantly improving our project. That's why we are implementing an innovative token burning strategy.</p>
                        <p>From now on, every week we will burn 10 billion tokens from our supply of 100 billion, until we reach a threshold of 50 billion tokens. This progressive burn will have a significant impact on our ecosystem and will bring a number of benefits to our token holders.</p>
                        <p>This token burning strategy has several advantages. First, it creates shortages in the supply of Burn Plus Plus, which can increase the token's intrinsic value over time. With a reduced supply, demand for the remaining tokens could increase, potentially boosting their market value.</p>
                    </div>
                    <div className={styles.img}>
                        <Image
                            src="/Burn++.gif"
                            width={360}
                            height={294}
                            alt="Fogo Burn"
                            quality={100}
                            className={styles.fogo}
                        />
                    </div>
                    <div className={styles.textfire}>
                        <p>As we burn excess tokens, we are improving the supply-demand ratio, which can contribute to greater price stability.</p>
                        <p>Another important aspect is the impact on project governance. With a reduced supply of tokens, the remaining holders will have a greater participation in the ecosystem, increasing their power to influence important decisions related to the development and direction of the project.</p>
                        <p>We are excited about this token burning strategy and believe it will bring substantial benefits to the Burn Plus Plus project and our community. We will continue to work hard to improve and enhance our project, always listening carefully to feedback from our token holders.</p>
                    </div>

                </div>
                <div className={styles.horizontalLine}></div>

            </div>
            <h1 className={styles.h1Contact}>Process Phases</h1>
            <div className={styles.parent}>

                <div className={styles.textdois} >
                    <h3 className={styles.h3}>Phase 1</h3>
                    <p>Launch</p>
                    <p>Liquidez Pancake</p>
                    <p>Listing Cex</p>
                    <p>CoinGecko Listings</p>
                    <p>Coinmarketcap Listings</p>
                    <p>Coinpaprika Listings</p>
                    <p>1,000+ Holders</p>

                </div>

                <div className={styles.textdois}>
                    <h3 className={styles.h3}>Phase 2</h3>
                    <p>Community Partnerships </p>
                    <p>Burn++ Times digital newsletter</p>
                    <p>First burns</p>
                    <p>Community Consolidation</p>
                    <p>Partnerships with influencers</p>
                    <p>CEX Listings </p>


                </div>

                <div className={styles.textdois}>
                    <h3 className={styles.h3}>Phase 3</h3>
                    <p>Burn++ merchandising</p>
                    <p>10,000+holders</p>
                    <p>CEX Listings </p>
                    <p>Meme Consolidation</p>
                    <p>Spread Burn Plus Plus on social media</p>
                </div>
            </div>



            <div className={styles.fire}>

                <div className={styles.textfire}>
                    <h4>Introduction and Holder Rewards</h4>
                    <p>Welcome to the world of Burn++ or Burn Plus Plus, our exciting meme coin! We are committed to rewarding our holders and ensuring the continuous growth of the project.</p>
                    <p>To start, we have implemented a rewards mechanism for Burn++ holders. With every trade, a 5% tax is applied, which is distributed as USDT to wallets that hold a significant amount of the token. This strategy aims to incentivize holders to keep their tokens, as they will receive regular rewards in the form of USDT. This approach increases holder engagement and retention.</p>
                    <p>Additionally, we allocate a 2% fee for marketing purposes. These resources will be used to boost the exposure of Burn++, ensuring its growth and recognition in the market. Through partnerships with influencers, social media campaigns, and other marketing initiatives, we aim to enhance visibility and adoption of our meme coin.</p>
                </div>
                <div className={styles.img}>
                    <Image
                        src="/bandeira.png"
                        width={387}
                        height={298}
                        alt="Fogo Burn, meme"
                        quality={100}
                        className={styles.fogo}
                    />
                </div>
                <div className={styles.textfire}>
                    <h4>Token Burning and Strategic Allocation</h4>
                    <p>Our strategy also involves token burning and strategic resource allocation. We believe that scarcity and gradual reduction of supply can drive the value of Burn++ tokens.</p>
                    <p>For this purpose, we allocate 50% of the tokens for burning, contributing to scarcity and potentially increasing demand and value for the circulating tokens.</p>
                    <p>Instituímos uma queima de token semanal de 10% até atingirmos 50% do suprimento total, promovendo a escassez e possivelmente aumentando o valor do token restante. </p>
                    <p>We also reserve 10% of the supply for future use in centralized exchange listings, bridges, and liquidity pools. </p>
                    <p>We are excited about the potential of Burn++ and committed to providing a healthy and rewarding jornada for our holders. </p>
                </div>

            </div>

            <div>
                <div>
                    <h1 className={styles.h1Contact}>Contact</h1>
                    <div>
                        <Link className="" href="/">
                            <Image src="/logoLetras.png"
                                width={250}
                                height={50}
                                alt="Logo Meme" />
                        </Link>
                    </div>

                    <div className={styles.listInline}>

                        <a className={styles.listInline} href="https://twitter.com/burnplusplus" target="_blank">
                            <Image
                                src="/twitter.png"
                                width={80}
                                height={80}
                                alt="Burn Plus Plus"
                                quality={100}
                                className={styles.socialImgfooter}
                            />
                        </a>
                        <a className={styles.listInline} href="https://discord.gg/YsZB5Tww"
                            target="_blank">
                            <Image
                                src="/discord.png"
                                width={80}
                                height={80}
                                alt="Burn Plus Plus"
                                quality={100}
                                className={styles.socialImgfooter}
                            />
                        </a>
                        <a className={styles.listInline} href="https://t.me/burn_plusplus" target="_blank">
                            <Image
                                src="/TEelegram.png"
                                width={80}
                                height={80}
                                alt="Burn Plus Plus"
                                quality={100}
                                className={styles.socialImgfooter}
                            />
                        </a>

                    </div>


                </div>
                <div className={styles.fundo}>
                    <div>
                        <p>$Burn Plus Plus has no association with any other meme or brand. This token is simply a tribute to the meme culture that we all love and embrace. Our logo, represented by a flame, symbolizes the passion and excitement surrounding our meme coin.</p>

                        <p>At $Burn Plus Plus, we aim to create an enjoyable and engaging experience for our community. We appreciate and respect the original creators and sources of inspiration, but it's important to note that our token is an independent entity paying homage to the spirit of memes.</p>

                        <p>Join us in celebrating the world of memes with $Burn Plus Plus! Embrace the fun, the laughter, and the shared appreciation for internet culture. We're excited to have you as part of our community.</p>
                    </div>
                    <div>
                        <p>There is no formal team or roadmap associated with $Burn Plus Plus.</p>
                        <p>
                            It's essential to understand that $Burn Plus Plus is a token created for the enjoyment and amusement of meme enthusiasts. The coin does not serve any practical or functional purpose beyond being a lighthearted tribute to the world of memes.</p>

                        <p>Please be aware that engaging with $Burn Plus Plus should be solely for entertainment purposes. Always exercise caution and conduct your own research before participating in any cryptocurrency-related activities.</p>

                        <p>Join us in embracing the fun and playful nature of $Burn Plus Plus. Let's enjoy the meme culture together!</p>
                    </div>
                </div>
                <Image
                    src="/burn.gif"
                    width={1350}
                    height={450}
                    alt="Burn Meme"
                    quality={100}
                    className={styles.final}
                />
            </div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.footer}>
                <div className={styles.textFotter}>contact@burnplusplus.com</div>
                <div className={styles.textFotter}>2023 Burn++, All Rights Reserved</div>
            </div>


        </div>


    );
};

export default Home;
