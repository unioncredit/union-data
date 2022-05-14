import { gql } from "graphql-request";
import { OrderDirection } from "./constants";
import { fetchPages } from "./fetchPages";

interface Staker {
  id: string;
}

export async function fetchStakers(
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<Staker[]> {
  const query = (skip: number, first: number) => gql`
    {
      stakers(skip: ${skip}, first: ${first}, orderBy: ${orderBy}, orderDirection: ${
    orderDirection === OrderDirection.ASC ? "asc" : "desc"
  }) {
      id
      account
      totalLockedStake
      totalFrozen
      creditLimit
      stakedAmount
      timestamp
    }
  }
  `;

  return fetchPages<Staker>(query, "stakers");
}
