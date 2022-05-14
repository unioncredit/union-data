import { fetchAccountBorrows } from "../borrows";
import {
  fetchUserManagerMeta,
  fetchUTokenMeta,
  fetchStakers,
  fetchBorrows,
} from "../data";
import { fetchDeposits } from "../deposit";
import { fetchAccountStakes } from "../stakers";

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

test("@method fetchAccountStakes", async () => {
  const account = "0x000f4432a40560bbff1b581a8b7aded8dab80026";
  const results = await fetchAccountStakes(account);
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

test("@method fetchAccountBorrows", async () => {
  const account = "0xfc32e7c7c55391ebb4f91187c91418bf96860ca9";
  const results = await fetchAccountBorrows(account);
  for (const row of results) {
    for (const key of ["id", "account", "amount", "fee", "timestamp"]) {
      expect(Object.keys(row).includes(key)).toBe(true);
      expect(row.account).toEqual(account);
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
