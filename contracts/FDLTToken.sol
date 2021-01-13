// contrats / FDLTToken.sol
// SPDX-License-Identifier: MIT

pragma solidity 0.7.5;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FDLTToken is ERC20 {

	event Minted(address dest, uint amount, address tokenAddress);
	constructor() public ERC20("SmartRetail Fidelity Token", "FDLT") {}

	function mintTokenTo(address _dest, uint _amount) public {
		_mint(_dest, _amount);
		emit Minted(_dest, _amount, address(this));
	}
}