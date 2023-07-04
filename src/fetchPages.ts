import { request } from "graphql-request";
import { GRAPH_URLS } from "./constants";
import { config } from "./config";

export async function fetchPages<T>(
  query: (skip: number, first: number) => any,
  dataKey: string
): Promise<T[]> {
  const chainId = config.get("chainId");
  const graphUrl = GRAPH_URLS[chainId];

  if (!graphUrl) {
    throw Error("unsupported chain @unioncredit/data");
  }

  const pageSize = 500;
  let page = 0;
  let result: T[] = [];

  while (true) {
    const resp = await request(graphUrl, query(page * pageSize, pageSize));
    const data = resp[dataKey];
    result = [...result, ...data];
    page++;

    if (data.length < pageSize) {
      break;
    }
  }

  return result;
}
