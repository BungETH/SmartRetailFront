// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/payment/escrow/Escrow.sol";
import "./FDLTTokenManager.sol";

contract FDLTTokenManagerInterface {
    function asyncDeposit(address dest, uint256 amount) external{}
    function claim(address dest) external {}
}

contract SmartRetailEscrow is Ownable, ReentrancyGuard {
    Escrow private escrow;
    FDLTTokenManager public manager;
    FDLTTokenManagerInterface private tokenManagerContract;

    event FundSendToContract(string _contractMessage, uint OrderId);
    event FundSendToSeller(string _SellerMessage,  uint OrderId);

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
        emit FundSendToContract("Successfully deposit funds to contract",block.timestamp);
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
}