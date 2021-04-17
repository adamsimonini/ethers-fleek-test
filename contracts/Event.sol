pragma solidity ^0.7.3;

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
