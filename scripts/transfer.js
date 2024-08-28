const { ethers } = require("hardhat");

async function main() {
    console.log('Getting the DecentralisedNFT contract...\n');
    const contractAddress = '0xdc64a140aa3e981100a9beca4e685f962f0cf6c9';
    const decentralisedNFT = await ethers.getContractAt('DecentralisedNFT', contractAddress);
    const signers = await ethers.getSigners();
    const contractOwner = signers[0].address;

    // Transfer tokenId 1 to another account
    console.log(`Transferring NFT...`)
    const recipient = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";
    const tokenId = "1";
    let tx = await decentralisedNFT["safeTransferFrom(address,address,uint256)"](contractOwner, recipient, tokenId);
    await tx.wait();
    console.log(`NFT ${tokenId} transferred from ${contractOwner} to ${recipient}`);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });