import { fetchUserManagerMeta } from "../data";

test("@method fetchUserManagerMeta", async () => {
  const results = await fetchUserManagerMeta();
  for (const row of results) {
    for (const key of ["id", "totalStaked", "totalFrozen", "timestamp"]) {
      expect(Object.keys(row).includes(key)).toBe(true);
    }
  }
});
