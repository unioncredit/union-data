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

export async function fetchAccountBorrows(
  account: string,
  orderBy: string = "timestamp",
  orderDirection: OrderDirection = OrderDirection.DESC
): Promise<Borrow[]> {
  return fetchBorrows(orderBy, orderDirection, { account });
}
