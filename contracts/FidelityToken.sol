// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract FidelityToken is ERC20, Ownable {
    constructor () public ERC20("Fidelity", "FDLT") {
  
    }
<<<<<<< HEAD

    function claim(uint128 _amount) public onlyOwner {
        _mint(msg.sender, _amount);
    }
=======
>>>>>>> 4a8bf8caff1ba96fe6faf3840122f9c9490457e6
}