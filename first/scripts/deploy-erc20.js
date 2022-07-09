const hre = require("hardhat");
async function main() {
 
    const [deployer] = await ethers.getSigners();
 
    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
 
    console.log("Account balance en ethers:", (await deployer.getBalance()).toString());
    const erc20 = await ethers.getContractFactory("ERC20Basic");
    const erc20deployedContract = await erc20.deploy(10000000000000);
    console.log("Deployed ERCC20 contract address:", erc20deployedContract.address);
 
  }
 
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
