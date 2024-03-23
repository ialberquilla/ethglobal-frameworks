import { ethers } from "hardhat";

async function main() {
  const USDC_ADDRESS = '0x036CbD53842c5426634e7929541eC2318f3dCF7e'
  const nftAsset = await ethers.deployContract("NFTAsset");
  await nftAsset.waitForDeployment();

  console.log(
    `Nft asset Deployed to ${nftAsset.target}`
  );

  const marketplace = await ethers.deployContract("Marketplace", [nftAsset.target, USDC_ADDRESS]);
  await marketplace.waitForDeployment();

  console.log(
    `Marketplace asset Deployed to ${marketplace.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
