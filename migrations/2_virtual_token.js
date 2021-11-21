// migrations file for deploying the virtual token contract

const VirtualToken = artifacts.require("VirtualToken");
module.exports = function(deployer) {
	deployer.deploy(VirtualToken, "VirtualToken", "VTT");
}
