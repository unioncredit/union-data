export enum OrderDirection {
  ASC,
  DESC,
}

export const GRAPH_URLS: { [key: number]: string } = {
  1: "https://api.studio.thegraph.com/query/78581/union-v1-mainnet/version/latest",
  10: "https://api.studio.thegraph.com/query/78581/union-finance/version/latest",
  8453: "https://api.studio.thegraph.com/query/78581/union-v2-base/version/latest",
  42161: "https://api.studio.thegraph.com/query/78581/union-v1-arbitrum/version/latest",
};
