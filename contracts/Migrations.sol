// SPDX-License-Identifier: MIT
<<<<<<< HEAD
pragma solidity >=0.4.21 <0.7.5;
=======
pragma solidity 0.6.12;
>>>>>>> 41fe833db711b4a69b1a10b2a62f998ffaaf35a4

contract Migrations {
    address public owner;
    uint public last_completed_migration;

    constructor() {
        owner = msg.sender;
    }

    modifier restricted() {
        if (msg.sender == owner) _;
    }

    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed;
    }
}
