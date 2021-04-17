// "MIT-License-Identifier: <MIT-License>"//
pragma solidity ^0.8.3;

contract Event {
    string public name = "Toronto JS Event";
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function printName() public view returns (string memory) {
        return name;
    }
}
