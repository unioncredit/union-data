import { gql } from "graphql-request";
import { OrderDirection } from "./constants";
import { fetchPages } from "./fetchPages";

interface Deposit {
  id: string;
  token: string;
  amount: string;
  account: string;
  marketsTotalSupply: string[];
}

/**
 * Get AssetManager deposits historical data 
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @returns {Promise} Promise of `{ id, token, amount, account, marketsTotalSupply }[]`
 *          marketsTotalSupply is an array of strings representing the totalSupply of each money market
 */
export async function fetchDeposits(
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<Deposit[]> {
  const query = (skip: number, first: number) => gql`
    {
      deposits(skip: ${skip}, first: ${first}, orderBy: ${orderBy}, orderDirection: ${
    orderDirection === OrderDirection.ASC ? "asc" : "desc"
  }) {
        id
        token
        amount
        account
        timestamp
        marketsTotalSupply
      }
    }
  `;

  return fetchPages<Deposit>(query, "deposits");
}
