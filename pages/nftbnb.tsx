import {
    ThirdwebNftMedia,
    useAddress,
    useContract,
    useOwnedNFTs,
  } from "@thirdweb-dev/react";
  import React, { useState } from "react";
  import Container from "../components/Container/Container";
  import NFTGrid from "./../components/NFT/NFTGrid";
  import styles from "../styles/Token.module.css";
  import { NFT as NFTType } from "@thirdweb-dev/sdk";
  //import SaleInfo from "../components/SaleInfo/SaleInfo";
  import { ThirdwebSDK } from "@thirdweb-dev/sdk";
  // Read-only mode
  const readOnlySdk = new ThirdwebSDK("binance", {
    clientId: "8bad553ad3efae2716cc50c90cb94fca", // Use client id if using on the client side, get it from dashboard settings
  });

  const NFT_COLLECTION_ADDRESS = "0x15f8f1b58f9A46BbE4F403781A64759f990a81A1";

  
  
  export default function Sell() {
    // Load all of the NFTs from the NFT Collection
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const address = useAddress();
    const { data, isLoading } = useOwnedNFTs(contract, address);
  
    const [selectedNft, setSelectedNft] = useState<NFTType>();
  
    return (
      <Container maxWidth="lg">
        <h1 className={styles.token}>NFTs</h1>
        {!selectedNft ? (
          <>
            <NFTGrid
              data={data}
              isLoading={isLoading}
              overrideOnclickBehavior={(nft) => {
                setSelectedNft(nft);
              }}
              emptyText={
                "Looks like you don't own any NFTs in this collection."
              }
            />
          </>
        ) : (
          <div className={styles.container} style={{ marginTop: 0 }}>
            <div className={styles.metadataContainer}>
              <div className={styles.imageContainer}>
                <ThirdwebNftMedia
                  metadata={selectedNft.metadata}
                  className={styles.image}
                />
                <button
                  onClick={() => {
                    setSelectedNft(undefined);
                  }}
                  className={styles.crossButton}
                >
                  X
                </button>
              </div>
            </div>
  
            <div className={styles.listingContainer}>            
              <h1 className={styles.title}>
                {selectedNft.metadata.name}
              </h1>
              <p className={styles.collectionName}>
                Token ID #{selectedNft.metadata.id}
              </p>            
            </div>
          </div>
        )}
      </Container>
    );
  }