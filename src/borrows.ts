import { gql } from "graphql-request";
import { OrderDirection } from "./constants";
import { fetchPages } from "./fetchPages";

interface Borrow {
  id: string;
  account: string;
  amount: string;
  fee: string;
  timestamp: string;
}

export async function fetchBorrows(
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<Borrow[]> {
  const query = (skip: number, first: number) => gql`
    {
      borrows(skip: ${skip}, first: ${first}, orderBy: ${orderBy}, orderDirection: ${
    orderDirection === OrderDirection.ASC ? "asc" : "desc"
  }) {
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
