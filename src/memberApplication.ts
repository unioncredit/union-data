import { gql } from "graphql-request";
import { OrderDirection } from "./constants";
import { fetchPages } from "./fetchPages";
import { objectToWhere } from "./utils";

interface MemberApplication {
  id: string;
  staker: string;
  applicant: string;
  timestamp: string;
}

/**
 * Get MemberApplications historical data
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @returns {Promise} Promise of `{ id, staker, applicant, timestamp }[]`
 */
export async function fetchMemberApplications(
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC,
  where?: { [key: string]: string }
): Promise<MemberApplication[]> {
  const whereStr = objectToWhere(where);

  const query = (skip: number, first: number) => gql`
    {
      memberApplications(
        skip: ${skip},
        first: ${first},
        orderBy: ${orderBy},
        orderDirection: ${orderDirection === OrderDirection.ASC ? "asc" : "desc"}
        ${whereStr}
      ) {
        id
        staker
        applicant
        timestamp
      }
    }
  `;

  return fetchPages<MemberApplication>(query, "memberApplications");
}

/**
 * Get a single members borrow historical data
 * @param {string} account - Account to get borrow historical data for
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @returns {Promise} Promise of `{ id, account, amount, fee, timestamp }[]`
 */
export async function fetchAccountMembershipApplication(
  account: string,
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<MemberApplication[]> {
  return fetchMemberApplications(orderBy, orderDirection, { applicant: account });
}
