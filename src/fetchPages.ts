import { request } from "graphql-request";
import { GRAPH_URL } from "./constants";

export async function fetchPages<T>(
  query: (skip: number, first: number) => any,
  dataKey: string
): Promise<T[]> {
  const pageSize = 500;
  let page = 0;
  let result: T[] = [];

  while (true) {
    const resp = await request(GRAPH_URL, query(page, pageSize));
    const data = resp[dataKey];
    result = [...result, ...data];
    page++;

    if (data.length < pageSize) {
      break;
    }
  }

  return result;
}
