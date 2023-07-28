import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Header from "../Header/header";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
 
  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={70}
              height={96}
              alt="Burn Plus Plus"
            />
             <Image
              src="/LogoLetras.png"
              width={120}
              height={40}
              alt="Burn Plus Plus"
            />
          </Link>
         
        </div>
               
        <div className={styles.navRight}>
          <Header />
          <div className={styles.navConnectNFT}>
            <Link href="/mintBNB" className={styles.nft}>
                  BUY NFT
            </Link>
          </div> 
          <div className={styles.navConnect}>
            <Link href="https://pancakeswap.finance/swap?outputCurrency=0xe6282d11442d33865907C8029ad362B6B203C3a2" target="_blank" className={styles.heroCta}>
                  BUY BURN++
            </Link>
          </div> 
          <div className={styles.navConnect}>
            <ConnectWallet className={styles.btn}/>
          </div>              
        </div>

        
      </nav>
    </div>
  );
}
