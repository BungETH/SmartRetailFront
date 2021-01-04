//const FidelityToken = artifacts.require("FidelityToken");
const SmartRetailEscrow = artifacts.require("SmartRetailEscrow");
// const FDLTToken = artifacts.require("FDLTToken");
//const FDLTTokenManager = artifacts.require("FDLTTokenManager");


module.exports = function(deployer) {
  // deployer.deploy(FidelityToken);
  deployer.deploy(SmartRetailEscrow);
};
