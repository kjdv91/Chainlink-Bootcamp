
const hre = require("hardhat");

async function main() {

  const Register = await hre.ethers.getContractFactory("Register");
  const register = await Register.deploy();

  await register.deployed();

  console.log("Register deployed to:", register.address);

  await register.setWord("Hola Bootcamp Chainlink")

    let result = await register.getWord()
    console.log('Stored value in contract is: ', result)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
