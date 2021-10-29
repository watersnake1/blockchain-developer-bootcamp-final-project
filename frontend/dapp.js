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

//connect wallet button
const connectWallet = document.getElementById('connect');
connectWallet.onclick = async () => {
	await ethereum.request({ method: 'eth_requestAccounts'})
	currentAccount = document.getElementById('current-account')
	currentAccount.innerHTML = ethereum.selectedAddress
}
// disconnect wallet
const disconnectWallet = document.getElementById('disconnect');
disconnectWallet.onclick = async () => {
	currentAccount = document.getElementById('current-account')
	currentAccount.innerHTML = "Disconnected"
}

// staked balance raw
const stakedBalance = document.getElementById('staked-balance');
// staked balance virtual
const stakedBalanceVirtual = document.getElementById('staked-balance-virtual');
// unstaked balance
const unstakedBalance = document.getElementById('unstaked-balance');

// input fields
const stakeButton = document.getElementById('stake');
const unstakeButton = document.getElementById('unstake');

// event listeners for inputs
stakeButton.onclick = async () => {
	const stakeInput = document.getElementById('stake-tokens').value;
	console.log(stakeInput)
	// implement smart contract call here
}
unstakeButton.onclick = async () => {
	const unstakeInput = document.getElementById('unstake-tokens').value;
	console.log(unstakeInput)
}

// global values
const globalStakedRaw = document.getElementById('global-staked-raw');
const globalStakedVirtual = document.getElementById('global-staked-virtual');
// implement updating these values here
