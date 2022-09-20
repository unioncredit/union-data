import { gql } from "graphql-request";
import { OrderDirection } from "./constants";
import { fetchPages } from "./fetchPages";
import { objectToWhere } from "./utils";

interface Trustline {
  id: string;
  staker: string;
  borrower: string;
  amount: string;
  timestamp: string;
}

interface CancelTrustline {
  id: string;
  staker: string;
  borrower: string;
  timestamp: string;
}

/**
 * Get trustline historical data. when updateTrust is called on the UserManager
 * this trustline data is recorded
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @param {object} where - Where object e.g `{ staker: "0x00" }`
 * @returns {Promise} Promise of `{ id, staker, borrower, amount, timestamp }[]`
 */
export async function fetchTrustlines(
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC,
  where?: { [key: string]: string }
): Promise<Trustline[]> {
  const orderDirectionStr =
    orderDirection === OrderDirection.ASC ? "asc" : "desc";

  const whereStr = objectToWhere(where);

  const query = (skip: number, first: number) => gql`
    {
      trustLines(
        skip: ${skip}, 
        first: ${first}, 
        orderBy: ${orderBy}, 
        orderDirection: ${orderDirectionStr}, 
        ${whereStr}
      ) {
        id
        staker
        borrower
        amount
        timestamp
      }
    }
  `;

  return fetchPages<Trustline>(query, "trustLines");
}

/**
 * Get cancel trustline historical data. when cancelVouch is called on the UserManager
 * this CancelTrusted data is recorded
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @param {object} where - Where object e.g `{ staker: "0x00" }`
 * @returns {Promise} Promise of `{ id, staker, borrower, amount, timestamp }[]`
 */
export async function fetchCancelTrusted(
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC,
  where?: { [key: string]: string }
): Promise<CancelTrustline[]> {
  const orderDirectionStr =
    orderDirection === OrderDirection.ASC ? "asc" : "desc";

  const whereStr = objectToWhere(where);

  const query = (skip: number, first: number) => gql`
    {
      vouchCancellations(
        skip: ${skip}, 
        first: ${first}, 
        orderBy: ${orderBy}, 
        orderDirection: ${orderDirectionStr}, 
        ${whereStr}
      ) {
        id
        staker
        borrower
        timestamp
      }
    }
  `;

  return fetchPages<CancelTrustline>(query, "vouchCancellations");
}

/**
 * Get data about accounts that are vouching for `account`
 * @param {string} account - Account to lookup
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @returns {Promise} Promise of `{ id, staker, borrower, amount, timestamp }[]`
 */
export async function fetchAccountTrusted(
  account: string,
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<Trustline[]> {
  return fetchTrustlines(orderBy, orderDirection, { borrower: account });
}

/**
 * Get data about accounts that are being trusted by `account`
 * @param {string} account - Account to lookup
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @returns {Promise} Promise of `{ id, staker, borrower, amount, timestamp }[]`
 */
export async function fetchAccountTrusting(
  account: string,
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<Trustline[]> {
  return fetchTrustlines(orderBy, orderDirection, { staker: account });
}

/**
 * Get data about related account `borrower` -> `staker`
 * @param {string} borrower - Account to lookup
 * @param {string} staker - Account to lookup
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @returns {Promise} Promise of `{ id, staker, borrower, amount, timestamp }[]`
 */
export async function fetchAccountTrustRelationship(
  borrower: string,
  staker: string,
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<Trustline[]> {
  return fetchTrustlines(orderBy, orderDirection, { staker, borrower });
}
