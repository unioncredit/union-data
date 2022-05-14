import {
  fetchUserManagerMeta,
  fetchUTokenMeta,
  fetchStakers,
  fetchBorrows,
} from "../data";
import { fetchDeposits } from "../deposit";

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

test("@method fetchStakers", async () => {
  const results = await fetchStakers();
  for (const row of results) {
    for (const key of [
      "id",
      "account",
      "totalLockedStake",
      "totalFrozen",
      "creditLimit",
      "stakedAmount",
      "timestamp",
    ]) {
      expect(Object.keys(row).includes(key)).toBe(true);
    }
  }
});

test("@method fetchBorrows", async () => {
  const results = await fetchBorrows();
  for (const row of results) {
    for (const key of ["id", "account", "amount", "fee", "timestamp"]) {
      expect(Object.keys(row).includes(key)).toBe(true);
    }
  }
});

test("@method fetchDeposits", async () => {
  const results = await fetchDeposits();
  for (const row of results) {
    for (const key of [
      "id",
      "token",
      "amount",
      "account",
      "marketsTotalSupply",
    ]) {
      expect(Object.keys(row).includes(key)).toBe(true);
    }
  }
});
