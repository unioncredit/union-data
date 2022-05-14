import { request, gql } from "graphql-request";
import { GRAPH_URL, OrderDirection } from "./constants";

interface UTokenMeta {
  id: string;
  totalBorrows: string;
  totalSupply: string;
  totalReserves: string;
  totalRedeemable: string;
  borrowRate: string;
  supplyRate: string;
  exchangeRate: string;
  timestamp: string;
}

export async function fetchUTokenMeta(
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<UTokenMeta[]> {
  const query = (skip: number, first: number) => gql`
    {
      utokenMetas(skip: ${skip}, first: ${first}, orderBy: ${orderBy}, orderDirection: ${
    orderDirection === OrderDirection.ASC ? "asc" : "desc"
  }) {
        id
        totalBorrows
        totalSupply
        totalReserves
        totalRedeemable
        borrowRate
        supplyRate
        exchangeRate
        timestamp
      }
    }
  `;

  const pageSize = 100;
  let result: UTokenMeta[] = [];

  while (true) {
    const resp = await request(GRAPH_URL, query(0, pageSize));
    const data = resp.utokenMetas;
    result = [...result, ...data];

    if (data.length <= pageSize) {
      break;
    }
  }

  return result;
}
