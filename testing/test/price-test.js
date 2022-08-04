const { expect } = require("chai");//testear 
const { ethers } = require("hardhat");//interactuar 

describe("Price Testing Test ", function () {
    let priceConsumerV3; 

    beforeEach(async()=> {
    const PriceConsumer = await ethers.getContractFactory("PriceConsumerV3");
    priceConsumerV3 = await PriceConsumer.deploy();
    await priceConsumerV3.deployed();
  })

  it.skip("Testing Prices", async function (){
    //console.log(priceConsumerV3.address);
    //console.log("El precio de bitcoin hoy es", await priceConsumerV3.getLatestPrice);


    expect(await priceConsumerV3.getLatestPrice()).not.be.null
  });

  it("Prueba segunda", async function (){
    console.log (await priceConsumerV3.getLatestPriceBootcamp());
  })

});
