// contrats / FDLTToken.sol
// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/** @author The SmartRetail Team
  * @title FDLTToken 
	* @notice Token creator and distributor 
	*/
contract FDLTToken is ERC20 {

	event Minted(address dest, uint amount, address tokenAddress);
	constructor() public ERC20("SmartRetail Fidelity Token", "FDLT") {}

	/**
		* @notice Mint and send tokens
		* @param _dest The buyer address
		* @param _amount The value of the purchase in wei
		*/
	function mintTokenTo(address _dest, uint _amount) public {
		_mint(_dest, _amount);
		emit Minted(_dest, _amount, address(this));
	}
}