const SmartRetailEscrow = artifacts.require("SmartRetailEscrow");
const FDLTTokenManager = artifacts.require("FDLTTokenManager");

module.exports = async function(deployer) {
  deployer.deploy(SmartRetailEscrow);
};
