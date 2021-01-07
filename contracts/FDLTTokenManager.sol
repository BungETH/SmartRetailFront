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

    event Deposit(address dest, uint allowance);
    event Claimed(address dest);

    constructor() public {
        token = new FDLTToken(); // crée une nouvelle instance du smart contract FDLTToken ! L’instance ERC20Token déployée sera stockée dans la variable “token”
    }

    function asyncDeposit(address _dest, uint256 _amount) public {
        tokenPayments[_dest] = tokenPayments[_dest].add(_amount);
        emit Deposit(_dest, tokenPayments[_dest]);
    }

    function claim() external {
        require(tokenPayments[msg.sender] !=0, "not enought tokens");
        token.mintTokenTo(msg.sender, tokenPayments[msg.sender]);
        tokenPayments[msg.sender] = 0;
        emit Claimed(msg.sender);
    }
}