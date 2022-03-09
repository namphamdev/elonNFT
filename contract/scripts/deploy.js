const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const ElonNFT = await hre.ethers.getContractFactory("ElonNFT");
  const elon = await ElonNFT.deploy();

  await elon.deployed();

  console.log("ElonNFT deployed to:", elon.address);

  let txn = await elon.mintNFT("https://jsonkeeper.com/b/80K1");
  await txn.wait();
  console.log("Mint Hash", txn.hash);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
