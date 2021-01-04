// contrats / FDLTToken.sol
// Identificateur de licence SPDX: MIT

pragma solidity >=0.4.21 <0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FDLTToken is ERC20 {

	constructor() public ERC20("SmartRetail Fidelity Token", "FDLT") {
	}

	function mintTokenTo(address dest, uint amount) public {
		_mint(dest, amount);
	}
}