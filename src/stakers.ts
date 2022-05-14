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

/**
 * Get stakers historical data
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @param {object} where - Where object e.g { account: "0x00" }
 * @returns {Promise} `{ id, account, totalLockedStake, totalFrozen, creditLimit, stakedAmount, timestamp }[]`
 */
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

/**
 * Get staker historical data for single account
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @returns {Promise} `{ id, account, totalLockedStake, totalFrozen, creditLimit, stakedAmount, timestamp }[]`
 */
export async function fetchAccountStakes(
  account: string,
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<Staker[]> {
  return fetchStakers(orderBy, orderDirection, { account });
}
