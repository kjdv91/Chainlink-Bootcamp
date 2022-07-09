//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract Register{
    string public word;

    function getWord() public view returns(string memory){
        return word;
    }

    function setWord(string memory _word) public{
        word = _word;
    } 

}
