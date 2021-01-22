# Tezos-blockchain-viewer

MEAN Stack app to show transaction history from tzstats api with infinite scroll.

### Usage
```bash
# Run the client & server with concurrently
yarn dev
# Run the Express server only
yarn server
# Run the client(Angular) only
ng serve --open
# Server runs on http://localhost:4000 and client on http://localhost:4200

# To deploy required is connection with tzstats api, then you can create build folder(dist) from root folder with:
yarn build
```