// contracts/FDLTTokenManager.sol
// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;

import "./FDLTToken.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/** @author The SmartRetail Team
  * @title FDLTVendorTokens 
	*/
contract FDLTVendorTokens is ERC1155 {

    uint256 public vendorCount;

    constructor() public ERC1155("") {}

    /** @notice Create a new vendor Token
			* @dev Each token had a unique id
			* @param _initialSupply The initial token supply
			*/
    function addNewVendorToken(uint256 _initialSupply) external {
        vendorCount++;
        uint256 vendorTokenId = vendorCount;

        _mint(msg.sender, vendorTokenId, _initialSupply, "");
    }
}