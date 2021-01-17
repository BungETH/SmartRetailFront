## tests_explication.md 


**Befor Each** : 
- Déploie le smart contract sur la blockain et récupère l'instance

**Deposit in escrow and create Order** :

1. sendPayment :  La fonction stock la valeur envoyé par le buyer dans un escrow et crée une nouvelle structure Order avec **block.timestamp** comme reference est 
2. getDepositsOf : Nous vérifions que la valeur envoyé par le buyer est bien celle présente dans l'escrow
3. orderId : la référence de la struc Order donnée par la fonction **sendPayment**
4. Nous testons si l'event **FundSendToContract** est bien levé dans la fonction **sendPayment**

**Confirm Order and allow tokens for buyers** :

1. confirmDelivery :  Vire les fonds stockés dans l'escrow du seller vers son addresse.
4. Nous testons si l'event **FundSendToSeller** est bien levé dans la fonction **confirmDelivery**
