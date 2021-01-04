const SimpleStorage = artifacts.require("SimpleStorage");
const ComplexStorage = artifacts.require("ComplexStorage");
const FidelityToken = artifacts.require("FidelityToken");
const SmartRetailEscrow = artifacts.require("SmartRetailEscrow");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(ComplexStorage);
  deployer.deploy(FidelityToken);
  deployer.deploy(SmartRetailEscrow);
};
