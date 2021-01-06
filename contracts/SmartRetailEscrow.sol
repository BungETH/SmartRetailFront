// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.5;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";


contract SmartRetailEscrow is Ownable{
    
    using SafeMath for uint;
    
    event FundSendToContract(string _contractMessage);
    event FundSendToSeller(string _SellerMessage);
    enum State { AWAITING_PAYMENT, AWAITING_DELIVERY }
    State public currState = State.AWAITING_PAYMENT;
    address payable seller;
    uint public value;
    
    // constructor(address payable _seller, uint _value) public {
    //     seller = _seller;
    //     value = _value;
    // }
    
    
     receive() external payable {}

     /**
     * @notice deposit value send to deployed smartcontract
     */
    function sendPayement(address payable _seller, uint _value) external payable onlyOwner {
        seller = _seller;
        value = _value;
        require(currState == State.AWAITING_PAYMENT, "Already paid");
        require(value == msg.value, "You're not sending the correct value");
        require (msg.sender.balance >= msg.value, "Not enough balance");
        address(this).transfer(msg.value);
        emit FundSendToContract("Successfully deposit funds to contract");
        currState = State.AWAITING_DELIVERY;
    }

    /**
     * @notice confirmDelivery call by the buyer in order to trigger paiement to the seller 
     */
    function confirmDelivery() external payable onlyOwner {
        require(currState == State.AWAITING_DELIVERY, "You cannot confirm until deposit first");
        seller.transfer(address(this).balance);
        emit FundSendToSeller("Successfully transferred funds to seller");
        currState = State.AWAITING_PAYMENT;
    }
}