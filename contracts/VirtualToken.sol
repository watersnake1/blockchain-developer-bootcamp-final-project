pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


// @title: Virtual Token - Final Project
// @author: Christian Murray
contract VirtualToken is ERC20 {
	// SafeMath prevents attackers from manipulating integer overflows in math operations to exploit the contract
	// (attack vector one)
	using SafeMath for uint;
	// data structures
	// mirroring the structure of ERC20 from OZ where the balance map is private
	mapping (address => uint256) private _stakedBalances;
	uint private a;
	uint private baseA;
	// these are the deltas that impact the multiplier a
	uint totalStaked;
	uint eventCount;
	
	// who owns the contract
	address public owner;

	// using these modifiers prevents minting tokens that a user does not have (attack vector 2)
	modifier sufficientUnstakedBalance(address _act, uint _amt) {
		require(balanceOf(_act) >= _amt, "Insufficient Unstaked Balance");
		_;
	}

	// this should do math to check the virtual balance not the raw balance
	modifier sufficientStakedBalance(address _act, uint _amt) {
		require(stakedBalanceOf(_act) >= _amt, "Insufficient Staked Balance");
		_;
	}

	event StakeEvent(uint256 amt, address staker, uint newA);
	//	UnstakeEvent

	//TODO: add frontend integration for tracking events and updating the page	
	event UnstakeEvent(uint256 amt, address unstaker, uint newA);

	event NewMultiplierEvent(uint256 newA);

	// functions
	constructor(string memory name_,
		   string memory symbol_)
	ERC20(name_, symbol_) {
		owner = msg.sender;
		a = 1010000000000000000;
		baseA = 1010000000000000000;
		totalStaked = 0;
		eventCount = 0;
		uint256 totalSupply = 100;
		_mint(msg.sender,totalSupply); 
	}

        //@notice Returns the balance of the user that is in staking mapping
	//@param account address
	//@return staked balance raw
	function stakedBalanceOf(address act) public view returns (uint256) {
		return _stakedBalances[act];
	}

        //@notice Returns the virtual staked balance that is in the staking mapping, or above x a
	//@param account address
	//@return virtual staked balance
	function stakedVirtualBalanceOf(address act) public view returns (uint256) {
		uint aTruncated = a.div(10**18);
		return _stakedBalances[act].mul(aTruncated);
	}

	
	//@notice Makes a change to the global multiplier
        //@dev If _increase == true, then it is a positive change, if false then it is a decrease
	//@param increase or decrease, expressed as bool
	//@return true
	function modifyMultiplier(bool _increase) private returns (bool) {
		// code to change the multiplier value
		if (_increase) {
			eventCount = eventCount.add(1);
		} else {
			if (eventCount > 0) {	
				eventCount = eventCount.sub(1);	
			} else {
				return false;
			}
		}
		// we are going to assume that a is represented as an 18 digit decimal
		// to iterate we do the function y = 1.01 + 0.0011x + 0.00011x^2 + 0.0000001x^3
		uint t1 = 11000000000000000;
		uint t2 = 110000000000;
		t1 = t1.mul(eventCount**2);
		t2 = t2.mul(eventCount**3);
		a = baseA.add(t1).add(t2);
		return true;
	}

	//@notice Move tokens from the _balances mapping to the staked balance mapping
	//@param amount to stake
	//@return true
	function stake(uint _amt) public sufficientUnstakedBalance(msg.sender, _amt) returns (bool) {
		_burn(msg.sender, _amt);
		_stakedBalances[msg.sender] = _stakedBalances[msg.sender].add(_amt);
		// decrease the multiplier
		modifyMultiplier(false);
		totalStaked = totalStaked.add(_amt);
		// increase the event count to increase a
		emit StakeEvent(_amt, msg.sender, getMultiplier());
		return true;
	}

	//@notice Move tokens from the staked balance mapping to the regular _balances mapping
        //@dev Accrue the virtual yield gains to the user's wallet
	//@param amount to unstake
	//@return true
	function unstake(uint _amt) public sufficientStakedBalance(msg.sender, _amt) returns (bool) {
		_stakedBalances[msg.sender] = _stakedBalances[msg.sender].sub(_amt);
		modifyMultiplier(true);
		totalStaked = totalStaked.sub(_amt);
		_mint(msg.sender, _amt.mul(getMultiplier()));
		return true;	
	}

	//@notice Need to override transfer to add the custom multiplier increase behavior
	//@param address of the recipient and amount to transfer
	//@return true
	function transfer(address recipient, uint256 amount) public override returns (bool) {
		//increase the multiplier
		modifyMultiplier(true);
		_transfer(_msgSender(), recipient, amount);
		emit NewMultiplierEvent(getMultiplier());
		return true;
	}

	//@notice Get the global staked balance within the protocol
	//@return the total amount staked
	function getTotalStakedBalance() public view returns (uint) {
		return totalStaked;
	}

	//@notice Get the total staked balance within the protocol in virtual terms
	//@return a user's virtual balance
	function getTotalVirtualStakeBalance() public view returns (uint) {
		return totalStaked.mul(a);
	}	

	//@notice Get the multiplier a
	//@return the current number of interactions this smart contract has had, for calculating a
	function getMultiplier() public view returns (uint) {
		return eventCount;
	}

	//@notice Mint tokens for testing purposes
	//@return true if successful
        function getTokens() public returns (bool) {
		_mint(msg.sender, 100);
		modifyMultiplier(true);
		return true;
	}

	// to consider:
	// add ownability, and allow for the changing of parameters by the admin

	//@notice Get the current owner of the contract
	//@return the deployer of the contract
        function getOwner() public view returns (address) {
		return owner;
	}
}

