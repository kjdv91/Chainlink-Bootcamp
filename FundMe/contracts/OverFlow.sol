//SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract Overflow {

    function overflow () public pure returns(uint256){
        uint8 big = 255 + uint8(1);
        return big;
    }
}