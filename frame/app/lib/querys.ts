export const NFT_HOLDER = `
query Holdings ($addresses: [Identity!]!, $tokenAddress: [Address!]!) {
    Ethereum: TokenBalances(
      input: {filter: {
        owner: {_in: $addresses}, 
        tokenAddress: {_in: $tokenAddress}}, blockchain: ethereum, limit: 1}
    ) {
      TokenBalance {
        owner {
          addresses
        }
        tokenAddress
        tokenId
      }
      pageInfo {
        nextCursor
        prevCursor
      }
    }
    Polygon: TokenBalances(
      input: {filter: {
        owner: {_in: $addresses}, 
        tokenAddress: {_in: $tokenAddress}}, blockchain: polygon, limit: 1}
    ) {
      TokenBalance {
        owner {
          addresses
        }
        tokenAddress
        tokenId
      }
      pageInfo {
        nextCursor
        prevCursor
      }
    }
    Zora: TokenBalances(
        input: {filter: {
          owner: {_in: $addresses}, 
          tokenAddress: {_in: $tokenAddress}}, blockchain: zora, limit: 1}
      ) {
        TokenBalance {
          owner {
            addresses
          }
          tokenAddress
          tokenId
        }
        pageInfo {
          nextCursor
          prevCursor
        }
      }
  }
`

export const AAVE_DEPOSITS = `
{
  deposits(
    where: {account:$account}
  ){
    id
  }
}
`

export const UNISWAP_SWAPS = `
{
  swaps(
    where: {sender:$sender}
  ){
    id
  }
}
`

export const LAST_TX = `
{
  buys(
    orderBy: blockTimestamp
    orderDirection:desc
    first:1
  ){
    id
    buyer
    asset
    discount
    price
    frameId
    transactionHash
  }
}
`