const virtualToken = artifacts.require("virtualToken");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("virtualToken", function (accounts) {
  it("should assert true", async function () {
    await virtualToken.deployed();
    return assert.isTrue(true);
  });
  //check the initial setup parameters of the contract
  it("should have an initial multiplier of 0", async () => {
    const vtInstance = await virtualToken.deployed();
    const initialMultiplier = await vtInstance.getMultiplier.call();
    return assert.equal(initialMultiplier, 0);
  });
  it("should be owned be the deployer", async () => {
    const vtInstance = await virtualToken.deployed();
    const owner = await vtInstance.getOwner.call();
    return assert.equal(owner, accounts[0]);
  });
  it("should have an initial unstaked balance at msg.sender", async () => {
    const vtInstance = await virtualToken.deployed();
    //const initialBalanceOfOwner = 100000000000000000000;
		const initialBalanceOfOwner = 100;
    const actualInitialBalance = await vtInstance.balanceOf(accounts[0]);
    return assert.equal(initialBalanceOfOwner, actualInitialBalance);
  });
  it("should stake succesfully", async () => {
    const vtInstance = await virtualToken.deployed();
		const amountToStake = 10;
    const stakingResult = await vtInstance.stake(10, {from: accounts[0]});
    const expectedUnstakedBalance = 90;
    const balanceAfterStaking = await vtInstance.balanceOf(accounts[0]);
		assert.equal(balanceAfterStaking, expectedUnstakedBalance, `unstaked balance is ${balanceAfterStaking}, expected ${expectedUnstakedBalance}`);
		const stakedBalance = await vtInstance.stakedBalanceOf(accounts[0]);
		assert.equal(stakedBalance, amountToStake, `staked balance is ${stakedBalance}, expected ${amountToStake}`);
		return;
	});
	//test the multiplier increase
	it("should increase multiplier on transfer", async () => {
		const vtInstance = await virtualToken.deployed();
		const transferAmount = 10;
		await vtInstance.transfer(accounts[1], transferAmount); 
		const newBalance = await vtInstance.balanceOf(accounts[1]);
		assert.equal(newBalance, transferAmount, `transfer was not successful`);
		const ec = await vtInstance.getMultiplier.call();
		assert.equal(ec, 1, `multiplier did not increase`);
		return;
	});
  it("should unstake succesfully", async () => {
    const vtInstance = await virtualToken.deployed();
		const amountToUnstake = 1;

    const unstakingResult = await vtInstance.unstake(amountToUnstake, {from: accounts[0]});
    const expectedUnstakedBalance = 81;
    const balanceAfterStaking = await vtInstance.balanceOf(accounts[0]);
		const stakedBalanceAfter = await vtInstance.stakedBalanceOf(accounts[0]);
		assert.equal(stakedBalanceAfter, 9, `balance did not unstake`);
		const stakedBalance = await vtInstance.stakedBalanceOf(accounts[0]);
		assert.equal(stakedBalance, 9, `staked balance is ${stakedBalance}`);
		return;
	});
});
