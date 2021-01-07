// contracts/FDLTTokenManager.sol
// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;

import "./FDLTToken.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FDLTTokenInterface {
    function mintTokenTo(address dest, uint amount) external {}
}

contract FDLTTokenManager is Ownable
{
    using SafeMath for uint256;
    FDLTToken public token; // L’instance ERC20Token à déployer
    FDLTTokenInterface private FDLTTokenInterfaceContract;
    mapping (address => uint256) public tokenPayments;

    event Deposit(address dest, uint allowance);
    event Claimed(address dest);

    constructor() public {
        token = new FDLTToken(); // crée une nouvelle instance du smart contract FDLTToken ! L’instance ERC20Token déployée sera stockée dans la variable “token”
        FDLTTokenInterfaceContract = FDLTTokenInterface(address(token));
    }

    function asyncDeposit(address _dest, uint256 _amount) public {
        tokenPayments[_dest] = tokenPayments[_dest].add(_amount);
        emit Deposit(_dest, tokenPayments[_dest]);
    }

    function claim() external {
        require(tokenPayments[msg.sender] !=0, "not enought tokens");
<<<<<<< HEAD
        token.mintTokenTo(msg.sender, tokenPayments[msg.sender]);
=======
        FDLTTokenInterfaceContract.mintTokenTo(msg.sender,tokenPayments[msg.sender]);
>>>>>>> update TokenManager for Event child
        tokenPayments[msg.sender] = 0;
        emit Claimed(msg.sender);
    }

    function setFDLTTokenContractAddress(address _address) external onlyOwner {
        FDLTTokenInterfaceContract = FDLTTokenInterface(_address);
    }
}