import { gql } from "graphql-request";
import { OrderDirection } from "./constants";
import { fetchPages } from "./fetchPages";
import { objectToWhere } from "./utils";

interface Borrower {
  id: string;
  account: string;
  totalLockedStake: string;
  totalFrozen: string;
  creditLimit: string;
  stakedAmount: string;
  timestamp: string;
}

/**
 * Get all borrowers data
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @param {object} where - Where object e.g { account: "0x00" }
 * @returns {Promise} Promise of `{}[]`
 */
export async function fetchBorrowers(
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC,
  where?: { [key: string]: string }
): Promise<Borrower[]> {
  const orderDirectionStr =
    orderDirection === OrderDirection.ASC ? "asc" : "desc";

  const whereStr = objectToWhere(where);

  const query = (skip: number, first: number) => gql`
    {
      borrowers(
        skip: ${skip}, 
        first: ${first}, 
        orderBy: ${orderBy}, 
        orderDirection: ${orderDirectionStr}, 
        ${whereStr}
      )
    {         
      id
      account
      totalBorrowed
      totalOwed
      lastRepay
      timestamp
    }
  }
  `;

  return fetchPages<Borrower>(query, "borrowers");
}

/**
 * Get borrower data for single account
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @returns {Promise} Promise of `{}[]`
 */
export async function fetchBorrower(
  account: string,
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<Borrower[]> {
  return fetchBorrowers(orderBy, orderDirection, { account });
}
