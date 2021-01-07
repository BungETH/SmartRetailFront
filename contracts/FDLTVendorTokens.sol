// contracts/FDLTTokenManager.sol
// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;

import "./FDLTToken.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FDLTVendorTokens is ERC1155 {

    uint256 public vendorCount;

    constructor() public ERC1155("") {}
    
    function addNewVendorToken(uint256 initialSupply) external {
        vendorCount++;
        uint256 vendorTokenId = vendorCount;
<<<<<<< HEAD
        _mint(msg.sender, vendorTokenId, initialSupply, "");        
=======
<<<<<<< HEAD
    
        _mint(msg.sender, vendorTokenId, initialSupply, _description);        
=======
        _mint(msg.sender, vendorTokenId, initialSupply, "");
>>>>>>> update EscrowSmartRetail COntract
>>>>>>> update EscrowSmartRetail COntract
    }
}