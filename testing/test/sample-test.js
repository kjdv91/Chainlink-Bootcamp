const { expect } = require("chai");//testear 
const { ethers } = require("hardhat");//interactuar 

describe("Greeter Testing ", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, Test con Kevin!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, Test con Kevin!");

    const setGreetingTx2 = await greeter.setGreeting("Saludo dos");
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Saludo dos");
  });


  it("Segundo test", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    expect(await greeter.greet()).to.equal("Hello, world!");

    const setGreetingTx = await greeter.setGreeting("Hola, Test con Kevin!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, Test con Kevin!");

    const setGreetingTx2 = await greeter.setGreeting("Saludo dos");
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Saludo dos");
  });


});
