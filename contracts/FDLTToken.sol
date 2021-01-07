// contrats / FDLTToken.sol
// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FDLTToken is ERC20 {

<<<<<<< HEAD
	event Minted(address dest, uint amount, address contractAddress);
	constructor() public ERC20("SmartRetail Fidelity Token", "FDLT") {
	}

	function mintTokenTo(address _dest, uint _amount) public {
		_mint(_dest, _amount);
		emit Minted(_dest, _amount, address(this));
=======
	event Minted(address dest, uint amount);
	constructor() public ERC20("SmartRetail Fidelity Token", "FDLT") {}

	function mintTokenTo(address dest, uint amount) public {
		_mint(dest, amount);
		emit Minted(_dest, _amount);
>>>>>>> update TokenManager for Event child
	}
}