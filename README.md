# Smart Retail

Smart Retail is an open source decentralized marketplace running on ropsten ethereum testnet.
Each purchase give right to token rewards, FDLTTokens that you can then add to your metamask portfolio.
The aim of Smart Retail is to allow all users of the platform to be rewarded for their actions with a token that can be used on the application
This this the very early stage of the project so only essential features are availlable
 

## Installation

Clone this repository.
In the client root folder, run the application on [localhost:3000](http://localhost:3000) using :

```bash
yarn start
```

## Usage

In order to interact with the Dapp, you have to connect your metamask [metamask](https://metamask.io/) account with some eth balance
[Get eth on ropsten](https://faucet.metamask.io/).

Choose an article and buy it, an order is then created visible from the account page.
An escrow contract keep the paid order amount until you click on "confirm delivery" button.
After confirm the seller address receive the full payment for corresponding order.
You have surely noticed that your token balance has increased following your purchase, you can now claim them using the claim button.
This will reveal the token address contract to [use](https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-View-See-Your-Tokens-and-Custom-Tokens-in-Metamask) in metamask to recover your FDLTToken.

## Available Scripts
```bash
yarn test
```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
```bash
yarn build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
```bash
yarn eject
```

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

##Testing

On the project folder's root, run :

```bash
truffle test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
