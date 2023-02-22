import { gql } from "graphql-request";
import { OrderDirection } from "./constants";
import { fetchPages } from "./fetchPages";
import { objectToWhere } from "./utils";

interface DebtWriteOff {
  id: string;
  staker: string;
  borrower: string;
  amount: string;
  timestamp: string;
}

/**
 * Get all debt write-off data
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @param {object} where - Where object e.g { account: "0x00" }
 * @returns {Promise} Promise of `{ id, staker, borrower, amount, timestamp }[]`
 */
export async function fetchDebtWriteOffs(
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC,
  where?: { [key: string]: string }
): Promise<DebtWriteOff[]> {
  const orderDirectionStr =
    orderDirection === OrderDirection.ASC ? "asc" : "desc";

  const whereStr = objectToWhere(where);

  const query = (skip: number, first: number) => gql`
    {
      debtWriteOffs(
        skip: ${skip}, 
        first: ${first}, 
        orderBy: ${orderBy}, 
        orderDirection: ${orderDirectionStr}, 
        ${whereStr}
      )
    {         
      id
      staker
      borrower
      amount
      timestamp
    }
  }
  `;

  return fetchPages<DebtWriteOff>(query, "debtWriteOffs");
}

/**
 * Get historical account debt write-off data
 * @param {string} account - Account to get historical debt write-off data for
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @returns {Promise} Promise of `{ id, account, amount, fee, timestamp }[]`
 */
export async function fetchAccountDebtWriteOffs(
    account: string,
    orderBy: string = "timestamp",
    orderDirection: OrderDirection = OrderDirection.DESC
): Promise<DebtWriteOff[]> {
  return fetchDebtWriteOffs(orderBy, orderDirection, { account });
}
