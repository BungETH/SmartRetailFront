// contracts/FDLTTokenManager.sol
// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "./FDLTToken.sol";
import "@openzeppelin/contracts/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/contracts/access/Ownable.sol";

contract FDLTVendorTokens is ERC1155 {

    uint256 public vendorCount;

    constructor() public ERC1155("") {}
    
    function addNewVendorToken(uint256 initialSupply, string _description) external {
        vendorCount++;
        uint256 vendorTokenId = vendorCount;
    
        _mint(msg.sender, vendorTokenId, initialSupply, _description);        
    }

}