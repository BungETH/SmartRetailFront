const { BN } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const SmartRetailEscrow = artifacts.require("SmartRetailEscrow");

contract('SmartRetailEscrow', function (accounts) {
    const admin = accounts[8];
    const account1 = accounts[1];
    // const voter2 = accounts[2];
    // const voter3 = accounts[3];
    let SmartRetailEscrowInstance;
    const amount = new BN(10);



    beforeEach(async function () {
        SmartRetailEscrowInstance = await SmartRetailEscrow.new({from: admin});
    });

    it("first", async () => {
        console.debug(account1,amount);


        let result = await SmartRetailEscrowInstance.sendPayment(account1, amount, {from: admin});

        console.debug(result);
        
    });

    // it("Adminstrator should start proposal registration session", async () => {

    //     let beforeStatus = await VotingInstance.currState();
    //     expect(status[beforeStatus]).to.equal('RegisteringVoters');

    //     await VotingInstance.startProposalsSession({from: admin});

    //     let afterStatus = await VotingInstance.currState();
    //     expect(status[afterStatus]).to.equal('ProposalsRegistrationStarted');
    // });
        
    // it("Voter should register a proposal", async () => {

    //     await VotingInstance.addVoter(voter1, {from: admin});
    //     await VotingInstance.addVoter(voter2, {from: admin});
    //     await VotingInstance.addVoter(voter3, {from: admin});

    //     await VotingInstance.startProposalsSession({from: admin});

    //     let afterStatus = await VotingInstance.currState();
    //     expect(status[afterStatus]).to.equal('ProposalsRegistrationStarted');

    //     nbProposals = await VotingInstance.proposalId();

    //     await VotingInstance.addProposal('aaa', {from: voter1});
    //     await VotingInstance.addProposal('bbb', {from: voter2});
    //     await VotingInstance.addProposal('ccc', {from: voter3});

    //     expect(new BN(await VotingInstance.proposalId())).to.be.bignumber.above(new BN(nbProposals));
    // });
    
});