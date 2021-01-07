const SmartRetailEscrow = artifacts.require("SmartRetailEscrow");
const  FDLTToken  =  artefacts . require ( "FDLTToken" ) ;



module.exports = function(deployer) {
  // deployer.deploy(FidelityToken);
  deployer.deploy(SmartRetailEscrow);
};
