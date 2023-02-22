export enum OrderDirection {
  ASC,
  DESC,
}

export const GRAPH_URLS: { [key: number]: string } = {
  1: "https://api.thegraph.com/subgraphs/name/geraldhost/union",
  5: "https://api.thegraph.com/subgraphs/name/geraldhost/union-goerli",
  42: "https://api.thegraph.com/subgraphs/name/geraldhost/union-kovan",
  420: "https://api.thegraph.com/subgraphs/name/geraldhost/union-v2-goerli",
  42161: "https://api.thegraph.com/subgraphs/name/geraldhost/union-arbitrum",
};
