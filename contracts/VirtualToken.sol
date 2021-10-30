pragma solidity ^0.8.0;

// step one: create a wireframe of the functions that will be needed

contract VirtualToken is ERC20 {
	// data structures
	// mirroring the structure of ERC20 from OZ where the balance map is private
	mapping (address => uint256) private _stakedBalance;
	uint a;

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

	// events
	// needed events
	//	StakeEvent
	//	UnstakeEvent
	//	TransferEvent

	// functions
	function stakedBalanceOf(address act) public view returns (uint256) {
		return _stakedBalance[act];
	}
}
