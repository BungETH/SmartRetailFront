// SPDX-License-Identifier: MIT
<<<<<<< HEAD
pragma solidity >=0.4.21 <0.7.5;
=======
pragma solidity 0.6.12;
>>>>>>> 41fe833db711b4a69b1a10b2a62f998ffaaf35a4

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract FidelityToken is ERC20, Ownable {
    constructor () ERC20("Fidelity", "FDLT") {
  
    }

    function claim(uint128 _amount) public onlyOwner {
        _mint(msg.sender, _amount);
    }
}