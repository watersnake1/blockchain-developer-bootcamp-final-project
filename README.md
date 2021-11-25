# Consensys Final Project - Exploring Virtual Yield

## Overview

### The Problem
The gas costs associated with actions such as large-scale mathematical operations across a data structure pose a limitation to how the developer can affect the behavior of a token during the development process. Additionally, looping over the keys of a mapping, which can be done easily (and its cost is not frequently considered) in other languages is not easily possible in solidity. It is in fact optimal to avoid the use of loops wherever possible. This project demonstrates the use of a more efficient solution to implement global behavior in the context of an ERC20-style token by using exponents and integers as opposed to loops.

### Virtual Yield
This ERC20 token has a special property. When any user of the system undertakes a certain action with respect to the smart contract, in this case simple transfers and unstaking, the entire set of token holders accrue an award of new issuance tokens. The limitation is to achieve this system without the need for loops at any point, optimizing the gas comsumption for all users. To achieve this, I introduce the multiplier *a*, which allows for the actual balances of all users to be tracked *without needing to be calculated at every transaction*. Instead, all the information about *current* balances are contained within *a*, and the required calculation is only applied when necesary. 

### Applying the formula
**This concept was inspired by Jake Brukhman and the algorithm we developed to express a solution to this problem**
**This concept was also partially inspired by the idea of reflector tokens**

- Each user will have a *base balance* and a *virtual balance*. At certain events, the tokens expressed in the *virtual balance* will accrue to the *base balance*, at which point they become "real" and can be used for any activities within web3. 
- Simple transfers will cause the multiplier a to be increased by 1%. Unstakes will do the same. Deposits to the staking lockup (where users can accrue more virtual tokens) will reduce the global multiplier by 0.05%. The contract shall track the total number of these events (transfers, unstakes and stakes) in `txCount`.
- A user may elect to accrue their virtual tokens to their base balance (realizing gains) without unstaking. At the time of realization their base balance is credited by `(stakedBaseBalance * a^(txCount)) - stakedBaseBalance)` and `stakedBaseBalance` is reduced by the amount accrued in "real" tokens.
- A user may also elect to withdraw their "real" tokens directly from the staking lockup, with the penalty of losing whatever percentage of their base balance their accrued virtual yield represents. If this exceeds 100% they must realize gains before unstaking. If this equals 0% then there is no penalty.
- When checking the base balance no customized behavior is applied
- When checking the *staked balance* the contract shall return `stakedBaseBalance* a^(txCount)
- The staking lockup is represented by a mapping `(address => uint)` that is used in tandem with the ERC20 standard `balances` mapping

### Directory Structure
The project is structured as a standard solidity smart contract project. There are 5 directories within this project. They are:

* Build - contains build artefacts 
* Contracts - contains the solidity smart contracts used
* Frontend - contains the html and js files for the frontend ui
* Migrations - contains scripts for deploying the contracts
* Test - contains unit tests, written in javascript

### Accessing this project
The project frontend for testnet can be found at [github pages] and the smart contract is deployed on Ropsten at [address]

### ETH Address
My ETH address is 0xB4ff581298a6D68B386a9a983F3463fBE4Fc32aA

