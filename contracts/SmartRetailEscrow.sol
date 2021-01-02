// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/contracts/math/SafeMath.sol";


contract SmartRetailEscrow is Ownable{
    
    using SafeMath for uint;
    
    enum State { AWAITING_PAYMENT, AWAITING_DELIVERY }
    State public currState = State.AWAITING_PAYMENT;
    address payable seller;
    uint public value;
    
    constructor(address payable _seller, uint _value) public {
        seller = _seller;
        value = (_value);
    }
    
    
     receive() external payable {}
    
    
    /**
     * @notice deposit value send to deployed smartcontract
     */
   function deposit() external payable onlyOwner{
        // require(msg.sender != address(0), "You cannot deposit for the address zero");
        require(currState == State.AWAITING_PAYMENT, "Already paid");
        require(value == msg.value, "You're not sending the correct value");
        require (msg.sender.balance >= msg.value, "Not enough balance");
        address(this).transfer(msg.value);
        currState = State.AWAITING_DELIVERY;
    }
    
    /**
     * @notice confirmDelivery call by the buyer in order to trigger paiement to the seller 
     */
    function confirmDelivery() external onlyOwner {
        require(currState == State.AWAITING_DELIVERY, "You cannot confirm until deposit first");
        seller.transfer(address(this).balance);
        currState = State.AWAITING_PAYMENT;
    }
}