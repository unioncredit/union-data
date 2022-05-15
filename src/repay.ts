import { gql } from "graphql-request";
import { OrderDirection } from "./constants";
import { fetchPages } from "./fetchPages";
import { objectToWhere } from "./utils";

interface Repay {
  id: string;
  account: string;
  amount: string;
  fee: string;
  timestamp: string;
}

/**
 * Get Accounts repays historical data
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @param {object} where - Where object e.g { account: "0x00" }
 * @returns {Promise} `{ id, account, amount, fee, timestamp }[]`
 */
export async function fetchRepays(
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC,
  where?: { [key: string]: string }
): Promise<Repay[]> {
  const orderDirectionStr =
    orderDirection === OrderDirection.ASC ? "asc" : "desc";

  const whereStr = objectToWhere(where);

  const query = (skip: number, first: number) => gql`
    {
      repays(
        skip: ${skip}, 
        first: ${first}, 
        orderBy: ${orderBy}, 
        orderDirection: ${orderDirectionStr}, 
        ${whereStr}
      ) {
        id
        account
        amount
        timestamp
      }
    }
  `;

  return fetchPages<Repay>(query, "repays");
}

/**
 * Get Account repays historical data
 * @param {string} account - Account to get repay historical data for
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @returns {Promise} `{ id, account, amount, fee, timestamp }[]`
 */
export async function fetchAccountRepays(
  account: string,
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<Repay[]> {
  return fetchRepays(orderBy, orderDirection, { account });
}
