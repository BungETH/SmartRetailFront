const { BN,expectEvent } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const SmartRetailEscrow = artifacts.require("SmartRetailEscrow");

contract('SmartRetailEscrow', function (accounts) {
    const admin = accounts[8];
    const seller = accounts[1];
    const buyer = accounts[2];

    let SmartRetailEscrowInstance;
    const amount = new BN(5000);

    beforeEach(async function () {
        SmartRetailEscrowInstance = await SmartRetailEscrow.new({from: admin});
    });

    it("Deposit in escrow and create Order", async () => {

        resultPayment = await SmartRetailEscrowInstance.sendPayment(seller, amount, {from: buyer, value: amount });
        let amountDepositOfSeller = await SmartRetailEscrowInstance.getDepositsOf({from:seller});
        let orderId = resultPayment.logs[0].args.orderId

        expect(amountDepositOfSeller).to.be.bignumber.equal(amount);
        expectEvent(resultPayment, 'FundSendToContract');

    });

    it("Confirm Order and allow tokens for buyers", async () => {

        resultDelivery = await SmartRetailEscrowInstance.confirmDelivery(orderId,{from:buyer});
        order = await SmartRetailEscrowInstance.listOrders(orderId);

        expect(order.state).to.be.bignumber.equal(new BN(2));
        expectEvent(resultDelivery, 'FundSendToSeller');
    }
});