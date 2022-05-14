import { gql } from "graphql-request";
import { OrderDirection } from "./constants";
import { fetchPages } from "./fetchPages";

interface UserManagerMeta {
  id: string;
  totalStaked: string;
  totalFrozen: string;
  timestamp: string;
}

/**
 * Get UserManager historical data 
 * @param {string} orderBy - Property to orderBy
 * @param {OrderDirection} orderDirection - Order in asc or desc
 * @returns {Promise} `{ id, totalStaked, totalFrozen, timestamp }[]`
 */
export async function fetchUserManagerMeta(
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<UserManagerMeta[]> {
  const query = (skip: number, first: number) => gql`
    {
      userManagerMetas(skip: ${skip}, first: ${first}, orderBy: ${orderBy}, orderDirection: ${
    orderDirection === OrderDirection.ASC ? "asc" : "desc"
  }) {
        id
        totalStaked
        totalFrozen
        timestamp
      }
    }
  `;

  return fetchPages<UserManagerMeta>(query, "userManagerMetas");
}
