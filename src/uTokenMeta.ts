import { gql } from "graphql-request";
import { OrderDirection } from "./constants";
import { fetchPages } from "./fetchPages";

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

  return fetchPages<UTokenMeta>(query, "utokenMetas");
}
