export enum OrderDirection {
  ASC,
  DESC,
}

export const GRAPH_URLS: { [key: number]: string } = {
  1: "https://api.thegraph.com/subgraphs/name/geraldhost/union",
  42: "https://api.thegraph.com/subgraphs/name/geraldhost/union-kovan",
  42161: "https://api.thegraph.com/subgraphs/name/geraldhost/union-arbitrum",
};
