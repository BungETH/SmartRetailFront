// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/payment/escrow/Escrow.sol";
import "./FDLTTokenManager.sol";

contract TokenManagerInterface {
    function asyncDeposit(address dest, uint256 amount) public{}
    function claim() public {}
}


contract SmartRetailEscrow is Ownable, ReentrancyGuard {
    Escrow escrow;
    TokenManagerInterface tokenManagerContract;
    
    event FundSendToContract(string _contractMessage);
    event FundSendToSeller(string _SellerMessage);
    enum State { AWAITING_PAYMENT, AWAITING_DELIVERY }
    State public currState = State.AWAITING_PAYMENT;
    address payable seller;
    address buyer;
    
    constructor(address _tokenManagerContractAddress) ReentrancyGuard() public {
        escrow = new Escrow();
        tokenManagerContract = TokenManagerInterface(_tokenManagerContractAddress);
        buyer = msg.sender;
    }
    
    receive() external payable {}
    
    /**
     * Receives payments from customers in contract
     */
    function sendPayment(address payable _seller, uint _value) external payable onlyOwner{
        seller = _seller;
        require(currState == State.AWAITING_PAYMENT, "Already paid");
        require((_value) == msg.value, "You're not sending the correct value");
        escrow.deposit{value: msg.value}(seller);
        emit FundSendToContract("Successfully deposit funds to contract");
        currState = State.AWAITING_DELIVERY;
    }
        
    /**
     * Withdraw funds to seller
     */
    function confirmDelivery(uint _amount) external onlyOwner nonReentrant() {
        require(currState == State.AWAITING_DELIVERY, "You cannot confirm until deposit first");
        escrow.withdraw(seller);
        tokenManagerContract.asyncDeposit(msg.sender, _amount);
        emit FundSendToSeller("Successfully transferred funds to seller");
        currState = State.AWAITING_PAYMENT;
    }
    
    function setTokenManagerContractAddress(address _address) external onlyOwner {
        tokenManagerContract = TokenManagerInterface(_address);
    }

}