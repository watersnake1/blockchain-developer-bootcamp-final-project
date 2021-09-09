# blockchain-developer-bootcamp-final-project
Consensys Developer Bootcamp Final Project
## Badge - NFT managed email accounts
### Overview
At a high level, badge allows users to create logins using an email address, then generating an NFT based off the hash of the input email and password. Credentials for the user are stored in a smart contract and can be queried by a webapp to allow a user to login. This way, dApps can replicate the web2 login flow without integrating with google or storing user credentials, users don't have to worry about security regarding their email, and users can easily delegate login priviliges to others by transferring or fractionalizing the NFT. 

### Example Flow
User navigates to the frontend, either intentionally or on redirect from another dapp. Then, the user enters an email and password to the frontend, which are hashed and stored. The contract generates an NFT and issues it to the user's wallet. When the user signs up for new accounts they must give spending permission to the login smart contract.
