pragma solidity ^0.8.0;

// step one: create a wireframe of the functions that will be needed

contract VirtualToken is ERC20 {
	// data structures
	// mirroring the structure of ERC20 from OZ where the balance map is private
	mapping (address => uint256) private _stakedBalances;
	uint private a;
	// these are the deltas that impact the multiplier a
	uint stakingPenalty;
	uint transferReward;
	uint totalStaked;
	
	// who owns the contract
	address public owner;

	// refresh on this syntax at somepoint
	// need to also call the ERC20 constructor here
	constructor() {
		a = 1;
		stakingPenalty = 0.5;
		totalStaked = 0;
		transferReward = 0.001;
		owner = msg.sender;
	}

	// needed modifiers: 
	//	sufficientUnstakedBalance
	//	sufficientStakedBalance
	modifier sufficientUnstakedBalance(address _act, _amt) {
		require(balanceOf[_act] > _amt, "Insufficient Unstaked Balance");
		_;
	}

	modifier sufficientStakedBalance(address _act, _amt) {
		require(stakedBalanceOf[_act] > _amt, "Insufficient Staked Balance");
		_;
	}

	event StakeEvent(uint256 amt, address staker, uint newA);
	//	UnstakeEvent
	
	event UnstakeEvent(uint256 amt, address unstaker, uint newA);
	//	TransferEvent

	event TransferEvent(uint256 newA);

	// functions

	/**
	* Returns the balance of the user that is in staking mapping
	*/
	function stakedBalanceOf(address act) public view returns (uint256) {
		return _stakedBalances[act];
	}

	/**
	* Returns the virtual staked balance that is in the staking mapping, or above x a
	*/
	function stakedVirtualBalanceOf(address act) public view returns (uint256) {
		return _stakedBalances[act] * a;
	}

	/**
	* Makes a change to the global multiplier
        * If _increase == true, then it is a positive change, if false then it is a decrease
	*/
	function modifyMultiplier(uint _delta, bool _increase) private returns (bool) {
		// code to change the multiplier value
	}

	/**
	* Move tokens from the _balances mapping to the staked balance mapping
	*/
	function stake(uint _amt) sufficientUnstakedBalance(msg.sender, _amt) returns (bool) {
		_balances[msg.sender] -= _amt;
		_stakedBalances[msg.sender] += _amt;
		// decrease the multiplier
		modifyMultiplier(stakingPenalty, false);
		totalStaked += _amt;
		return true;
	}

	/**
	* Move tokens from the staked balance mapping to the regular _balances mapping
	*/
	function unstake(uint _amt) sufficientStakedBalance(msg.sender, _amt) returns (bool) {
		_balances[msg.sender] += _amt;
		_stakedBalances[msg.sender] -= _amt;
		modifyMultiplier(transferReward, true);
		totalStaked -= _amt;
		return true;	
	}

	/**
	* Need to override transfer to add the custom multiplier increase behavior
	*/
	function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
		//increase the multiplier
		modifyMultiplier(transferReward, true);
		_transfer(_msgSender(), recipient, amount);
		return true;
	}

	/**
	* Get the global staked balance within the protocol
	*/
	function getTotalStakedBalance() public view returns (uint) {
		return totalStaked;
	}

	/**
	* Get the total staked balance within the protocol in virtual terms
	*/
	function getTotalVirtualStakeBalance() public view returns (uint) {
		return totalStaked * a;
	}	

	/**
	* Get the multiplier a
	*/
	function getMultiplier() public view returns (uint) {
		return a;
	}
	// to consider:
	// add ownability, and allow for the changing of parameters by the admin
}

