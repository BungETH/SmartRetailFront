// contracts/FDLTTokenManager.sol
// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;

import "./FDLTToken.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/** @author The SmartRetail Team
  * @title FDLTTokenInterface
	* @dev Import mintTokenTo function from FDLTToken.sol 
	*/
contract FDLTTokenInterface {
  function mintTokenTo(address dest, uint amount) external {}
}


/** @author The SmartRetail Team
  * @title FDLTTokenManager 
	* @notice Token creation logic 
	*/
contract FDLTTokenManager is Ownable {

	using SafeMath for uint256;
	FDLTToken public token; // The ERC20 instance to deploy
	FDLTTokenInterface private FDLTTokenInterfaceContract;
	mapping (address => uint256) public tokenPayments;

	event Deposit(address dest, uint allowance);
	event Claimed(address dest, address tokenAddress);

	constructor() public {
		/// Create a new token instance and store it in token variable
		token = new FDLTToken(); 
		/// Fetch the right interface contract where FDLTToken.sol is deployed and store it in FDLTTokenInterfaceContract variable
		FDLTTokenInterfaceContract = FDLTTokenInterface(address(token));
	}
	/**
		* @notice Manage users token balance
		* @param _dest The buyer address
		* @param _amount The value of the purchase in wei
		*/
	function asyncDeposit(address _dest, uint256 _amount) public {
		tokenPayments[_dest] = tokenPayments[_dest].add(_amount);
		emit Deposit(_dest, tokenPayments[_dest]);
	}

	/**
		* @notice Mint token depending on the user's balance
		* @param _dest The address to send minted tokens
		*/
	function claim(address _dest) external {
		require(tokenPayments[_dest] !=0, "not enought tokens");
		FDLTTokenInterfaceContract.mintTokenTo(_dest,tokenPayments[_dest]);
		tokenPayments[_dest] = 0;
		emit Claimed(_dest, address(token));
	}

	/**
		* @notice Set a new FDLTToken.sol contract address in case of updates
		* @param _address The new FDLTToken.sol contract address
		*/
	function setFDLTTokenContractAddress(address _address) external onlyOwner {
		FDLTTokenInterfaceContract = FDLTTokenInterface(_address);
	}
}