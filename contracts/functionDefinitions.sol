/*
 * These are the function definitions for the chapter 3 exercises
 * Final project idea: virtual yield. Please see README.md for background on this project idea.
 */

// 1. The staked balance of the user is in a different mapping and cannot be transfered
// 	it earns rewards based on the current multiplier value a, which is calculated 
//	when checking balance by calling this funciton
function stakedBalanceOf(address _addr) public view returns (uint) {
	// return the staked balance of the given address
}

// 2. Users will need to stake their tokens into the staking 'pool'
function stake(uint _amt) sufficientBalance(msg.sender) returns (bool) {
	// check that the caller has enough tokens in their unstaked balance before proceeding
	// move tokens from the erc20 mapping to the staked token mapping
	// tokes are now eligible to earn rewards via multiplier increases
	// reduce the global multiplier
}

// 3. Users will also need to unstake out of the same 'pool', but could be subject to penalties
function unstake(uint _amt) sufficientStakedBalance(msg.sender) returns (bool) {
	// check that the caller has enough tokens staked to unstake
	// move tokens from the staking mapping to the normal erc20 balances mapping
	// take the unstaking penalty and increase the multiplier to reflect this penalty
	// tokens are now free to be transfered, as gains are realized
	// increase the global multiplier
}

// 4. Return the total staked (raw) balance in the contract. This will be tracked using a variable
function getTotalStakedBalance() public view returns (uint) {
	// return the total staked balance of the protocol in raw (real) token terms
}

// 5. Return the total virtual balance, by returning above * a
function getTotalVirtualStakedBalance() public view returns (uint) {
	// return the above value * multiplier a
}

// 6. Need to override the transfer method with custom behavior in order to increase the multiplier a on each transfer
function transfer(address recipient, uint256 amount) external returns (bool) {
	// increase the global multiplier
	// repeat all other behaviors of openzeppelin transfer
}
