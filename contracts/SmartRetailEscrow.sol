// contracts/SmartRetailEscrow.sol
// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/payment/escrow/Escrow.sol";
import "./FDLTTokenManager.sol";

/** @author The SmartRetail Team
  * @title TokenManagerInterface
	* @dev Import asyncDeposit and claim functions from FDLTTokenManager.sol 
	*/
contract FDLTTokenManagerInterface {
	function asyncDeposit(address dest, uint256 amount) external{}
	function claim(address dest) external {}
}

/** @author The SmartRetail Team
  * @title SmartRetailEscrow
	*/
contract SmartRetailEscrow is Ownable, ReentrancyGuard { 
	Escrow private escrow;
	FDLTTokenManager public manager;
	FDLTTokenManagerInterface private tokenManagerContract;

	event FundSendToContract(string contractMessage, FDLTTokenManager FDLTTokenManagerContract,  uint orderId, address seller, address buyer, uint amount ,State state);
	event FundSendToSeller(string sellerMessage,  uint orderId, State currentState);

	mapping(uint => Order) public listOrders;
	struct Order {
		address payable seller;
		address buyer;
		uint amount;
		State state;
	} 

	enum State { AWAITING_PAYMENT, AWAITING_DELIVERY, PAID}

	constructor() ReentrancyGuard() public {
		/// @notice Create new escrow contract for current order and store it on escrow variable
    escrow = new Escrow();
		/// @notice Create a new instance of FDLTTokenManager contract and store it on manager variable
    manager = new FDLTTokenManager(); 
    /// @notice Fetch the right interface contract where FDLTTokenManager.sol is deployed
		tokenManagerContract = FDLTTokenManagerInterface(address(manager));
  }

	receive() external payable {}

	/**
		* @notice Receives payments from buyer address and keep it in an escrow
		* @dev The _value param's unit must be in wei
		* @param _seller The address of the product seller
		* @param _value The value of the product
		*/
	function sendPayment(address payable _seller, uint _value) external payable {
		require((_value) == msg.value, "You're not sending the correct value");

		Order memory newOrder;

		newOrder.seller = _seller;
		newOrder.buyer = msg.sender;
		newOrder.amount =_value;

		escrow.deposit{value: msg.value}(_seller);
		newOrder.state = State.AWAITING_DELIVERY;
		listOrders[block.timestamp] = newOrder;

		emit FundSendToContract(
			"Successfully deposit funds to contract",
			manager,
			block.timestamp,
			newOrder.seller,
			newOrder.buyer,
			newOrder.amount,
			newOrder.state
		);
	}

	/**
		* @notice Withdraw funds from escrow to seller address
		* @dev The _orderId param must be the block timestamp of the associated sendPayement fonction transaction
		* @param _orderId The order id
		*/
	function confirmDelivery(uint _orderId) external nonReentrant() {
		require(listOrders[_orderId].state != State.PAID, "order is already paid");
		require(listOrders[_orderId].state == State.AWAITING_DELIVERY, "You cannot confirm until deposit first");
		require(listOrders[_orderId].buyer == msg.sender, "caller is not the buyer");

		escrow.withdraw(listOrders[_orderId].seller);
		// todo function convert orderAmount to tokenAmount
		tokenManagerContract.asyncDeposit(msg.sender, listOrders[_orderId].amount );
		listOrders[_orderId].state = State.PAID;

		emit FundSendToSeller("Successfully transferred funds to seller", _orderId, listOrders[_orderId].state);
	}
	/**
		* @notice Call the claim function of FDLTTokenManager.sol contract
		*/
	function claimFDLTToken() external  {
		tokenManagerContract.claim(msg.sender);
	}

	/**
		* @notice Set a new FDLTTokenManager.sol contract address in case of updates
		* @param _address The new FDLTTokenManager.sol contract address
		*/
	function setTokenManagerContractAddress(address _address) external onlyOwner {
			tokenManagerContract = FDLTTokenManagerInterface(_address);
	}
	

	/**
		* @notice Get the deposit amount locked in escrow contract waiting to transfer to caller
		* @return uint the pending amount of caller
		*/
	function getDepositsOf() public view returns(uint){
			return escrow.depositsOf(msg.sender);
	}
}