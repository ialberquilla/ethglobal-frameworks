export const NFT_HOLDER = `
query Holdings ($addresses: [String!]!, $tokenAddress: [String!]!) {
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
        tokenAddress: {_in: tokenAddress}}, blockchain: polygon, limit: 1}
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
          tokenAddress: {_in: tokenAddress}}, blockchain: zora, limit: 1}
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