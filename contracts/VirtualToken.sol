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
	// these are the deltas that impact the multiplier a
	uint stakingPenalty;
	uint transferReward;
	uint totalStaked;
	uint eventCount;
	
	// who owns the contract
	address public owner;

	// using these modifiers prevents minting tokens that a user does not have (attack vector 2)
	modifier sufficientUnstakedBalance(address _act, uint _amt) {
		require(balanceOf(_act) > _amt, "Insufficient Unstaked Balance");
		_;
	}

	modifier sufficientStakedBalance(address _act, uint _amt) {
		require(stakedBalanceOf(_act) > _amt, "Insufficient Staked Balance");
		_;
	}

	event StakeEvent(uint256 amt, address staker, uint newA);
	//	UnstakeEvent
	
	event UnstakeEvent(uint256 amt, address unstaker, uint newA);

	event NewMultiplierEvent(uint256 newA);

	// functions
	constructor(string memory name_,
		   string memory symbol_)
	ERC20(name_, symbol_) {
		//require(owner_ != address(0), "ZERO_OWNER");
		owner = msg.sender;
		//a = 1.01;
		a = 1010000000000000000;
		//stakingPenalty = 0.5;
		stakingPenalty = 500000000000000000;
		totalStaked = 0;
		//transferReward = 0.001;
		transferReward = 1000000000000000; 
		eventCount = 0;
		//proxyRegistryAddress = proxy_;
		//uint256 totalSupply = 100000000000000000000;
		uint256 totalSupply = 100;
		_mint(msg.sender,totalSupply); 
	}

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
		//return _stakedBalances[act] * a;
		return _stakedBalances[act].mul(a);
	}

	/**
	* Makes a change to the global multiplier
        * If _increase == true, then it is a positive change, if false then it is a decrease
	*/
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
		a = a**eventCount;
		return true;
	}

	/**
	* Move tokens from the _balances mapping to the staked balance mapping
	*/
	function stake(uint _amt) public sufficientUnstakedBalance(msg.sender, _amt) returns (bool) {
		//_balances[msg.sender] -= _amt;
		//_balances[msg.sender].sub(_amt);
		_burn(msg.sender, _amt);
		//_stakedBalances[msg.sender] += _amt;
		_stakedBalances[msg.sender] = _stakedBalances[msg.sender].add(_amt);
		// decrease the multiplier
		modifyMultiplier(false);
		//totalStaked += _amt;
		totalStaked = totalStaked.add(_amt);
		// increase the event count to increase a
		emit StakeEvent(_amt, msg.sender, getMultiplier());
		return true;
	}

	/**
	* Move tokens from the staked balance mapping to the regular _balances mapping
        * Accrue the virtual yield gains to the user's wallet
	*/
	function unstake(uint _amt) public sufficientStakedBalance(msg.sender, _amt) returns (bool) {
		_stakedBalances[msg.sender] = _stakedBalances[msg.sender].sub(_amt);
		modifyMultiplier(true);
		totalStaked = totalStaked.sub(_amt);
		_mint(msg.sender, _amt.mul(getMultiplier()));
		return true;	
	}

	/**
	* Need to override transfer to add the custom multiplier increase behavior
	*/
	function transfer(address recipient, uint256 amount) public override returns (bool) {
		//increase the multiplier
		modifyMultiplier(true);
		_transfer(_msgSender(), recipient, amount);
		emit NewMultiplierEvent(getMultiplier());
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
		return totalStaked.mul(a);
	}	

	/**
	* Get the multiplier a
	*/
	function getMultiplier() public view returns (uint) {
		return eventCount;
	}
	// to consider:
	// add ownability, and allow for the changing of parameters by the admin

	/**
	* Get the current owner of the contract
        */
        function getOwner() public view returns (address) {
		return owner;
	}
}

