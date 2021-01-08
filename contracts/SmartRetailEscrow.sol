// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/payment/escrow/Escrow.sol";
import "./FDLTTokenManager.sol";

<<<<<<< HEAD
contract FDLTTokenManagerInterface {
=======
/** @author The SmartRetail Team
  * @title TokenManagerInterface
 	* @dev Import asyncDeposit and claim from FDLTTokenManager.sol
	*/
contract TokenManagerInterface {
>>>>>>> specs on escrowcontract done
    function asyncDeposit(address dest, uint256 amount) external{}
    function claim(address dest) external {}
}

<<<<<<< HEAD
contract SmartRetailEscrow is Ownable, ReentrancyGuard {
    Escrow private escrow;
    FDLTTokenManager public manager;
    FDLTTokenManagerInterface private tokenManagerContract;

    event FundSendToContract(string contractMessage,  uint orderId, address seller, address buyer, uint amount ,State state);
    event FundSendToSeller(string sellerMessage,  uint orderId);

    mapping(uint => Order) public listOrder;
    struct Order {
        address payable seller;
        address buyer;
        uint amount;
        State state;
    } 

    enum State { AWAITING_PAYMENT, AWAITING_DELIVERY, PAID}

    constructor() ReentrancyGuard() public {
        escrow = new Escrow();
        manager = new FDLTTokenManager(); // crée une nouvelle instance du smart contract FDLTTokenManager ! L’instance FDLTTokenManager déployée sera stockée dans la variable “manager”
        tokenManagerContract = FDLTTokenManagerInterface(address(manager));
    }

    receive() external payable {}

    /**
     * Receives payments from customers in contract
     */
    function sendPayment(address payable _seller, uint _value) external payable {
        require((_value) == msg.value, "You're not sending the correct value");

        Order memory newOrder;
        newOrder.seller = _seller;
        newOrder.buyer = msg.sender;
        newOrder.amount = msg.value;

        escrow.deposit{value: msg.value}(_seller);
        newOrder.state = State.AWAITING_DELIVERY;
        listOrder[block.timestamp] = newOrder;
        emit FundSendToContract("Successfully deposit funds to contract", block.timestamp, newOrder.seller, newOrder.buyer,  newOrder.amount, newOrder.state);
    }

    /**
     * Withdraw funds to seller
     */
    function confirmDelivery(uint _orderId) external nonReentrant() {
        require(listOrder[_orderId].state != State.PAID, "order is already paid");
        require(listOrder[_orderId].state == State.AWAITING_DELIVERY, "You cannot confirm until deposit first");
        require(listOrder[_orderId].amount == escrow.depositsOf(listOrder[_orderId].seller), "incorrect order value");
        require(listOrder[_orderId].buyer == msg.sender, "caller is not the buyer");
        escrow.withdraw(listOrder[_orderId].seller);
        // todo function convert orderAmount to tokenAmount
        tokenManagerContract.asyncDeposit(msg.sender, listOrder[_orderId].amount );
        listOrder[_orderId].state = State.PAID;
        emit FundSendToSeller("Successfully transferred funds to seller", _orderId);
    }

    function setTokenManagerContractAddress(address _address) external onlyOwner {
        tokenManagerContract = FDLTTokenManagerInterface(_address);
    }
    
    function getDepositsOf() public view returns(uint){
        return escrow.depositsOf(msg.sender);
    }
=======
/** @author The SmartRetail Team
  * @title SmartRetailEscrow
	*/
contract SmartRetailEscrow is Ownable, ReentrancyGuard { 
	Escrow private escrow;
	TokenManagerInterface tokenManagerContract;

	event FundSendToContract(string contractMessage,  uint orderId, address seller, address buyer, uint amount ,State state);
	event FundSendToSeller(string sellerMessage,  uint orderId);

	mapping(uint => Order) public listOrders;
	struct Order {
			address payable seller;
			address buyer;
			uint amount;
			State state;
	} 

	enum State { AWAITING_PAYMENT, AWAITING_DELIVERY, PAID}

	constructor(address _tokenManagerContractAddress) ReentrancyGuard() public {
		/// @notice Create new escrow contract for current order
			escrow = new Escrow();
		/// @notice Fetch the right interface contract where FDLTTokenManager.sol is deployed
			tokenManagerContract = TokenManagerInterface(_tokenManagerContractAddress);
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
			newOrder.amount = msg.value;

			escrow.deposit{value: msg.value}(_seller);
			newOrder.state = State.AWAITING_DELIVERY;
			listOrders[block.timestamp] = newOrder;

			emit FundSendToContract("Successfully deposit funds to contract", block.timestamp, newOrder.seller, newOrder.buyer,  newOrder.amount, newOrder.state);
	}

		/**
		* @notice Withdraw funds from escrow to seller address
		* @dev The _orderId param must be the block timestamp of the associated sendPayement fonction transaction
		* @param _orderId The order id
		*/
	function confirmDelivery(uint _orderId) external nonReentrant() {
			require(listOrders[_orderId].state != State.PAID, "order is already paid");
			require(listOrders[_orderId].state == State.AWAITING_DELIVERY, "You cannot confirm until deposit first");
			require(listOrders[_orderId].amount == escrow.depositsOf(listOrders[_orderId].seller), "incorrect order value");
			require(listOrders[_orderId].buyer == msg.sender, "caller is not the buyer");

			escrow.withdraw(listOrders[_orderId].seller);
			// todo function convert orderAmount to tokenAmount
			tokenManagerContract.asyncDeposit(msg.sender, listOrders[_orderId].amount );
			listOrders[_orderId].state = State.PAID;

			emit FundSendToSeller("Successfully transferred funds to seller", _orderId);
	}

	/**
		* @notice Set a new FDLTTokenManager.sol contract address in case of updates
		* @param _address The FDLTTokenManager.sol contract address
		*/
	function setTokenManagerContractAddress(address _address) external onlyOwner {
			tokenManagerContract = TokenManagerInterface(_address);
	}
	

	/**
		* @notice Get the deposit amount locked in escrow contract waiting to transfer to caller
		* @return uint the pending amount of caller
		*/
	function getDepositsOf() public view returns(uint){
			return escrow.depositsOf(msg.sender);
	}
>>>>>>> specs on escrowcontract done
}