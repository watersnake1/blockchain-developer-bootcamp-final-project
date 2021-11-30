# Design Pattern Decisions

## Reducing cost of gas via multiplier
* When increasing the balance of all users, there are two options: loop over the `_balances` array and increase each value in storage, or only track the earned balance by using a global multiplier, then apply the formula at the time of the frontend calling `stakedVirtualBalanceOf`. One of the issues I encountered was solidity's lack of support for decimals; thus I apply the calculation by rounding up at the time of unstaking.

## Inter-contract execution
* I make use of `_mint` and `_burn` methods of ERC20 to control the overall supply of the tokens in 'real space' as users stake and unstake



