import { fetchUserManagerMeta, fetchUTokenMeta } from "../data";

test("@method fetchUserManagerMeta", async () => {
  const results = await fetchUserManagerMeta();
  for (const row of results) {
    for (const key of ["id", "totalStaked", "totalFrozen", "timestamp"]) {
      expect(Object.keys(row).includes(key)).toBe(true);
    }
  }
});

test("@method fetchUTokenMeta", async () => {
  const results = await fetchUTokenMeta();
  for (const row of results) {
    for (const key of [
      "id",
      "totalBorrows",
      "totalSupply",
      "totalReserves",
      "totalRedeemable",
      "borrowRate",
      "supplyRate",
      "exchangeRate",
      "timestamp",
    ]) {
      expect(Object.keys(row).includes(key)).toBe(true);
    }
  }
});
