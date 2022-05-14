import { gql } from "graphql-request";
import { OrderDirection } from "./constants";
import { fetchPages } from "./fetchPages";
import { objectToWhere } from "./utils";

interface Staker {
  id: string;
  account: string;
  totalLockedStake: string;
  totalFrozen: string;
  creditLimit: string;
  stakedAmount: string;
  timestamp: string;
}

export async function fetchStakers(
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC,
  where?: { [key: string]: string }
): Promise<Staker[]> {
  const orderDirectionStr =
    orderDirection === OrderDirection.ASC ? "asc" : "desc";

  const whereStr = objectToWhere(where);

  const query = (skip: number, first: number) => gql`
    {
      stakers(
        skip: ${skip}, 
        first: ${first}, 
        orderBy: ${orderBy}, 
        orderDirection: ${orderDirectionStr}, 
        ${whereStr}
      )
    {         
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

export async function fetchAccountStakes(
  account: string,
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<Staker[]> {
  return fetchStakers(orderBy, orderDirection, { account });
}
