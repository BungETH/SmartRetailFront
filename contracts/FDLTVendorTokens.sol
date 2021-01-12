// contracts/FDLTVendorTokens.sol
// SPDX-License-Identifier: MIT 
// Contract Natspec documentation here https://ipfs.io/ipfs/QmYei16UHwofbxbs6dPKknPiQBAriiXkpQ6Ef8kCrCN5vv

pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

/** @author The SmartRetail Team
  * @title FDLTVendorTokens
  */
contract FDLTVendorTokens is ERC1155 {

    uint256 private vendorCount;

    /// @dev Standart ERC1155 constructor from oppenzeppelin smartcontract library
    constructor() public ERC1155("") {}
    
    /**
	  * @dev Mint a new fongible reward token with a unique id for each company 
	  * @param _initialSupply The initial token supply to mint
	  */
    function addNewVendorToken(uint256 _initialSupply) external {
        vendorCount++;
        uint256 vendorTokenId = vendorCount;

        _mint(msg.sender, vendorTokenId, _initialSupply, "");
    }
}