const SmartRetailEscrow = artifacts.require("SmartRetailEscrow");
const FDLTTokenManager = artifacts.require("FDLTTokenManager");

module.exports = async function(deployer) {
 
  await deployer.deploy(FDLTTokenManager).then(function(instance) {
    return deployer.deploy(SmartRetailEscrow, instance.address);
  });
};
