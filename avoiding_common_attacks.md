# Common Attacks

## tx.origin
* (SWC-115) Using tx.origin to verify the validity of the sender is not advised as it is a deprecated method
* (SWC-131) Making sure to not leave any unused variables that could cause unexpected behavior in the contract
* In addition to these, I also make use of a specific solidity pragma, and use modifiers only for validation purposes within the contract
