import { gql } from "graphql-request";
import { OrderDirection } from "./constants";
import { fetchPages } from "./fetchPages";
import { objectToWhere } from "./utils";

interface StakerAddress {
  account: string;
}

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
 * Get all stakers historical data
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @param {object} where - Where object e.g { account: "0x00" }
 * @returns {Promise} Promise of `{ id, account, totalLockedStake, totalFrozen, creditLimit, stakedAmount, timestamp }[]`
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
 * Get all staker addresses
 * @returns {Promise} Promise of string[]`
 */
export async function fetchStakerAddresses(): Promise<string[]> {
  const query = (skip: number, first: number) => gql`
      {
          stakers(
              skip: ${skip},
              first: ${first}
          )
          {
              account
          }
      }
  `;

  const stakers = await fetchPages<StakerAddress>(query, "stakers");
  return stakers.map(s => s.account);
}

/**
 * Get staker historical data for single account
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @returns {Promise} Promise of `{ id, account, totalLockedStake, totalFrozen, creditLimit, stakedAmount, timestamp }[]`
 */
export async function fetchAccountStakes(
  account: string,
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<Staker[]> {
  return fetchStakers(orderBy, orderDirection, { account });
}
