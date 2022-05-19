import { gql } from "graphql-request";
import { OrderDirection } from "./constants";
import { fetchPages } from "./fetchPages";
import { objectToWhere } from "./utils";

interface Borrow {
  id: string;
  account: string;
  amount: string;
  fee: string;
  timestamp: string;
}

/**
 * Get All members borrows historical data
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @param {object} where - Where object e.g { account: "0x00" }
 * @returns {Promise} Promise of `{ id, account, amount, fee, timestamp }[]`
 */
export async function fetchBorrows(
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC,
  where?: { [key: string]: string }
): Promise<Borrow[]> {
  const orderDirectionStr =
    orderDirection === OrderDirection.ASC ? "asc" : "desc";

  const whereStr = objectToWhere(where);

  const query = (skip: number, first: number) => gql`
    {
      borrows(
        skip: ${skip}, 
        first: ${first}, 
        orderBy: ${orderBy}, 
        orderDirection: ${orderDirectionStr}, 
        ${whereStr}
      ) {
        id
        account
        amount
        fee
        timestamp
      }
    }
  `;

  return fetchPages<Borrow>(query, "borrows");
}

/**
 * Get a single members borrow historical data
 * @param {string} account - Account to get borrow historical data for 
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @returns {Promise} Promise of `{ id, account, amount, fee, timestamp }[]`
 */
export async function fetchAccountBorrows(
  account: string,
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<Borrow[]> {
  return fetchBorrows(orderBy, orderDirection, { account });
}
