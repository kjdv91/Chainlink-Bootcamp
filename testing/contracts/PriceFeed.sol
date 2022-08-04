// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {

    AggregatorV3Interface internal priceFeed;

    /**
     * Network: Kovan
     * Aggregator: ETH/USD
     * Address: 0x9326BFA02ADD2366b30bacB125260Af641031331
     */
    constructor() {
        priceFeed = AggregatorV3Interface(0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c);
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int) {
        (
            /*uint80 roundID*/,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeed.latestRoundData();
        return price;
    }

    function getLatestPriceBootcamp() public view returns (uint80, int, uint, uint, uint80) {
        (
            uint80 roundID,
            int price,
            uint startedAt,//inicia ronda
            uint timeStamp,//termina ronda con precio actualizado
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        require(timeStamp > 0, "La ronda debio haber termiando");
        return (roundID, price, startedAt, timeStamp, answeredInRound );
    }
}
