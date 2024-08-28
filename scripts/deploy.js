const { ethers } = require("hardhat");

async function main() {
  // Get the contract owner
  const contractOwner = await ethers.getSigners();
  console.log(`Deploying contract from: ${contractOwner[0].address}`);

  // Hardhat helper to get the ethers contractFactory object
  const DecentralisedNFT = await ethers.getContractFactory("DecentralisedNFT");

  // Deploy the contract with 2 ETH
  console.log("Deploying DecentralisedNFT with 2 ETH...");
  const decentralisedNFT = await DecentralisedNFT.deploy({
    value: ethers.utils.parseEther("2.0"),
  });
  await decentralisedNFT.deployed();
  console.log(`DecentralisedNFT deployed to: ${decentralisedNFT.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
