import { gql } from "graphql-request";
import { OrderDirection } from "./constants";
import { fetchPages } from "./fetchPages";

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
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<MemberApplication[]> {
  const query = (skip: number, first: number) => gql`
    {
      memberApplications(skip: ${skip}, first: ${first}, orderBy: ${orderBy}, orderDirection: ${
    orderDirection === OrderDirection.ASC ? "asc" : "desc"
  }) {
        id
        staker
        applicant
        timestamp
      }
    }
  `;

  return fetchPages<MemberApplication>(query, "memberApplications");
}
