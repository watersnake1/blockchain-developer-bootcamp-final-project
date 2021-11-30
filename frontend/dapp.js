// the abi
  var abi =  [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name_",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol_",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newA",
          "type": "uint256"
        }
      ],
      "name": "NewMultiplierEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amt",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "staker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newA",
          "type": "uint256"
        }
      ],
      "name": "StakeEvent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amt",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "unstaker",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newA",
          "type": "uint256"
        }
      ],
      "name": "UnstakeEvent",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "act",
          "type": "address"
        }
      ],
      "name": "stakedBalanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "act",
          "type": "address"
        }
      ],
      "name": "stakedVirtualBalanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amt",
          "type": "uint256"
        }
      ],
      "name": "stake",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amt",
          "type": "uint256"
        }
      ],
      "name": "unstake",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTotalStakedBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getTotalVirtualStakeBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getMultiplier",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "getTokens",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ];
//
// event listener for the connect wallet button
window.addEventListener('load', function() {
	if (typeof(window.ethereum) !== 'undefined') {
		console.log('found window.ethereum')
		if (window.ethereum.isMetaMask == true) {
			console.log('found metamask')
			let mm = document.getElementById('metamask')
			mm.innerHTML += 'Metamask Detected'
			var web3 = new Web3(window.ethereum)
		}
		else {
			console.log('metamask not found')
			let mm= document.getElementById('metamask')
			mm.innerHTML += 'Metamask Not Detected'
		}
	} else {
		console.log('window.ethereum is not found')
		let mm= document.getElementById('metamask')
		mm.innerHTML += 'No window.ethereum'
	}
})

var web3 = new Web3(window.ethereum)
const vtAddress = "0x6c9950296d362a00fd66CC099fb537aC196743b7";
let vtContract;
let accounts;

const currentMultiplier = document.getElementById('current-multiplier');

// staked balance raw
const stakedBalance = document.getElementById('staked-balance');
// staked balance virtual
const stakedBalanceVirtual = document.getElementById('staked-balance-virtual');
// unstaked balance
const unstakedBalance = document.getElementById('unstaked-balance');


//connect wallet button
const connectWallet = document.getElementById('connect');
connectWallet.onclick = async () => {
	await ethereum.request({ method: 'eth_requestAccounts'})
	// set the text field to display the current account
	currentAccount = document.getElementById('current-account')
	currentAccount.innerHTML = ethereum.selectedAddress
	// load the smart contract
	vtContract = new web3.eth.Contract(abi, vtAddress);
	// debugging
	var initiala = await vtContract.methods.getMultiplier().call();
	accounts = await web3.eth.getAccounts();
	// show the user's current balances
	var unstakedInitial = await vtContract.methods.balanceOf(accounts[0]).call({from:accounts[0]});
	var stakedInitial = await vtContract.methods.stakedBalanceOf(accounts[0]).call({from:accounts[0]});
	var stakedInitialVirtual = await vtContract.methods.stakedVirtualBalanceOf(accounts[0]).call({from:accounts[0]});
	stakedBalance.innerHTML = 'Staked Balance Raw' + stakedInitial; 
	stakedBalanceVirtual.innerHTML = 'Staked Balance Virtual' + stakedInitialVirtual; 
	unstakedBalance.innerHTML = 'Unstaked Balance' + unstakedInitial;
	//update the multiplier variable
	cm = await vtContract.methods.getMultiplier().call();
	currentMultiplier.innerHTML = "Current Multiplier Level " + cm;
	console.log(initiala);
}
// disconnect wallet
const disconnectWallet = document.getElementById('disconnect');
disconnectWallet.onclick = async () => {
	currentAccount = document.getElementById('current-account')
	currentAccount.innerHTML = "Disconnected"
	alert("use metamask to disconnect from the site")
}


// input fields
const stakeButton = document.getElementById('stake');
const unstakeButton = document.getElementById('unstake');
const tokenButton = document.getElementById('get-test-tokens');

// event listeners for inputs
stakeButton.onclick = async () => {
	const stakeInput = document.getElementById('stake-tokens').value;
	console.log(stakeInput)
	// implement smart contract call here
	//result = await getVt.methods.stake(stakeInput).send();
	result = await vtContract.methods.stake(stakeInput).send({from: accounts[0]});
	newUnstakedBalanceValue = await vtContract.methods.balanceOf(accounts[0]).call({from: accounts[0]});
	unstakedBalance.innerHTML = "Unstaked Balance " + newUnstakedBalanceValue;

	newStakedBalance = await vtContract.methods.stakedBalanceOf(accounts[0]).call({from: accounts[0]});
	stakedBalance.innerHTML = "Staked Balance Raw " + newStakedBalance;

	newVirtualStakedBalance = await vtContract.methods.stakedVirtualBalanceOf(accounts[0]).call({from: accounts[0]});
	stakedBalanceVirtual.innerHTML = "Staked Balance Virtual " + newVirtualStakedBalance;
	cm = await vtContract.methods.getMultiplier().call();
	currentMultiplier.innerHTML = "Current Multiplier Level " + cm;

}
unstakeButton.onclick = async () => {
	const unstakeInput = document.getElementById('unstake-tokens').value;
	console.log(unstakeInput);	

	result = await vtContract.methods.unstake(unstakeInput).send({from: accounts[0]});
	newUnstakedBalanceValue = await vtContract.methods.balanceOf(accounts[0]).call({from: accounts[0]});
	unstakedBalance.innerHTML = "Unstaked Balance " + newUnstakedBalanceValue;

	newStakedBalance = await vtContract.methods.stakedBalanceOf(accounts[0]).call({from: accounts[0]});
	stakedBalance.innerHTML = "Staked Balance Raw " + newStakedBalance;

	newVirtualStakedBalance = await vtContract.methods.stakedVirtualBalanceOf(accounts[0]).call({from: accounts[0]});
	stakedBalanceVirtual.innerHTML = "Staked Balance Virtual " + newVirtualStakedBalance;

	cm = await vtContract.methods.getMultiplier().call();
	currentMultiplier.innerHTML = "Current Multiplier Level " + cm;
	
}

tokenButton.onclick = async () => {
	// make the contract mint you tokens
	vtContract.methods.getTokens().send({from: accounts[0]});
	// update the values in the text fields
	newUnstakedBalanceValue = await vtContract.methods.balanceOf(accounts[0]).call({from: accounts[0]});
	unstakedBalance.innerHTML = "Unstaked Balance " + newUnstakedBalanceValue;
	cm = await vtContract.methods.getMultiplier().call();
	currentMultiplier.innerHTML = "Current Multiplier Level " + cm;
}
// global values
//const globalStakedRaw = document.getElementById('global-staked-raw');
//const globalStakedVirtual = document.getElementById('global-staked-virtual');
// implement updating these values here
