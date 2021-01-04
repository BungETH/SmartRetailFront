// contracts/FDLTTokenManager.sol
// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;

import "./FDLTToken.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract FDLTTokenManager
{
    using SafeMath for uint256;
    FDLTToken public token; // L’instance ERC20Token à déployer
    mapping (address => uint256) public tokenPayments;
    uint256 public totalPayments;

    event Deposit(address dest, uint allowance);
    constructor() public {
        token = new FDLTToken(); // crée une nouvelle instance du smart contract FDLTToken ! L’instance ERC20Token déployée sera stockée dans la variable “token”
    }

    function asyncDeposit(address dest, uint256 amount) public returns(uint){
        tokenPayments[dest] = tokenPayments[dest].add(amount);
        totalPayments = totalPayments.add(amount);
        emit Deposit(dest, tokenPayments[dest]);
        
    }

    function claim() public {
        require(tokenPayments[msg.sender] !=0, "not enought tokens");
        totalPayments = totalPayments.sub(tokenPayments[msg.sender]);
        token.mintTokenTo(msg.sender,tokenPayments[msg.sender]);
        tokenPayments[msg.sender] = 0;
    }

    function getBalanceOf(address $dest) public view returns(uint) {
        return token.balanceOf($dest);
    }

}