## avoiding_common_attacks.md


The different smart contracts present in this DAPP use the libraries provided by OpenZeppelin in order to guard against the most common attacks:  


Escrow - Allows to guard against a DOS (Deny-of-Service) attack due to the eth send function and also to counter certain reentrancy attacks.  


SafeMath - Prevent for integers overflow in math operations.  


Access Restriction - With the Ownable library we are ensured that the function calls are made only by the address which deployed the contract  


Reentrancy Protection - The update of the ethereum blockchain on the Istanbul version allows a reentrance attack. We made sure we could avoid this.
