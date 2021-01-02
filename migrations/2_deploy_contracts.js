const FidelityToken = artifacts.require("FidelityToken");
const SmartRetailEscrow = artifacts.require("SmartRetailEscrow");



module.exports = function(deployer) {
  deployer.deploy(FidelityToken);
  deployer.deploy(SmartRetailEscrow);
};
