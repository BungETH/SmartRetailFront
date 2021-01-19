## tests_explication.md 


**Befor Each** : 
- Deploys the smart contract on the blockain and retrieves the instance

**Deposit in escrow and create Order** :

1. sendPayment : The function stores the value sent by the buyer in an escrow and creates a new Order structure with **block.timestamp** as the reference identifier.  

2. getDepositsOf : We check that the value sent by the buyer is the one present in the escrow.  

3. orderId : the reference of the Order struct given by the **sendPayment** function.  

4. We test if the **FundSendToContract** event is raised in the **sendPayment** function.  

**Confirm Order and allow tokens for buyers** :

1. confirmDelivery : Transfer the funds stored in the escrow of the seller to his address.  

4. We test if the **FundSendToSeller** event is raised in the **confirmDelivery** function.  

