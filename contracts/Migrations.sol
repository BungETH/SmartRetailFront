// contracts/Migrations.sol
// SPDX-License-Identifier: MIT

<<<<<<< HEAD
pragma solidity >=0.4.21 <0.7.5;

=======
pragma solidity 0.6.12;
>>>>>>> 8221720eef4d71e7e4f45364b3ebe791b92b5517

contract Migrations {
    address public owner;
    uint public last_completed_migration;

    constructor() public {
        owner = msg.sender;
    }

    modifier restricted() {
        if (msg.sender == owner) _;
    }

    function setCompleted(uint completed) public restricted {
        last_completed_migration = completed;
    }
}
