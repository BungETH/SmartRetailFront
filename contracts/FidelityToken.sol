// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/math/SafeMath.sol"

contract FidelityToken is ERC20, Ownable{
    constructor () public ERC20("Fidelity", "FDLT") {
  
    }
<<<<<<< HEAD
    
    function claim(uint _amount) public onlyOwner {
=======

    function claim(uint128 _amount) public onlyOwner {
>>>>>>> a7bb1db378f4e18fa3f29ad4df1e6e817346687b
        _mint(msg.sender, _amount);
    }
}