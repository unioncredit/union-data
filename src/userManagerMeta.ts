import { request, gql } from "graphql-request";
import { GRAPH_URL } from "./constants";

interface UserManagerMeta {
  id: string;
  totalStaked: string;
  totalFrozen: string;
  timestamp: string;
}

enum OrderDirection {
  ASC,
  DESC,
}

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

  const pageSize = 100;
  let result: UserManagerMeta[] = [];

  while (true) {
    const resp = await request(GRAPH_URL, query(0, pageSize));
    const data = resp.userManagerMetas;
    result = [...result, ...data];

    if (data.length <= pageSize) {
      break;
    }
  }

  return result;
}
