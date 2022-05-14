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

export async function fetchAccountTrusted(
  account: string,
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<Trustline[]> {
  return fetchTrustlines(orderBy, orderDirection, { borrower: account });
}

export async function fetchAccountTrusting(
  account: string,
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<Trustline[]> {
  return fetchTrustlines(orderBy, orderDirection, { staker: account });
}

export async function fetchAccountTrustRelationship(
  borrower: string,
  staker: string,
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<Trustline[]> {
  return fetchTrustlines(orderBy, orderDirection, { staker,borrower });
}
