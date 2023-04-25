import { fetchUserManagerMeta, fetchUTokenMeta } from "../index";
import { fetchAccountBorrows, fetchBorrows } from "../borrows";
import { fetchDeposits } from "../deposit";
import { fetchAccountStakes, fetchStakers } from "../stakers";
import {
  fetchAccountTrusted,
  fetchAccountTrusting,
  fetchAccountTrustRelationship,
  fetchTrustlines,
  fetchCancelTrusted,
} from "../trustline";
import { fetchRepays } from "../repay";
import { fetchMemberApplications } from "../memberApplication";
import { fetchBorrowers } from "../borrowers";
import { fetchDebtWriteOffs } from "../debtWriteoffs";

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

test("@method fetchRepays", async () => {
  const results = await fetchRepays();
  for (const row of results) {
    for (const key of ["id", "account", "amount", "timestamp"]) {
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

test("@method fetchTrustlines", async () => {
  const results = await fetchTrustlines();
  for (const row of results) {
    for (const key of ["id", "staker", "borrower", "amount", "timestamp"]) {
      expect(Object.keys(row).includes(key)).toBe(true);
    }
  }
});

test("@method fetchCancelTrusted", async () => {
  const results = await fetchCancelTrusted();
  for (const row of results) {
    for (const key of ["id", "staker", "borrower", "timestamp"]) {
      expect(Object.keys(row).includes(key)).toBe(true);
    }
  }
});

test("@method fetchAccountTrusted", async () => {
  const account = "0x1c92efdb6c924cb2acf7dceec29b7abb69ab58bc";
  const results = await fetchAccountTrusted(account);
  for (const row of results) {
    for (const key of ["id", "staker", "borrower", "amount", "timestamp"]) {
      expect(Object.keys(row).includes(key)).toBe(true);
      expect(row.borrower).toEqual(account);
    }
  }
});

test("@method fetchAccountTrusted", async () => {
  const account = "0x230d31eec85f4063a405b0f95bde509c0d0a8b5d";
  const results = await fetchAccountTrusting(account);
  for (const row of results) {
    for (const key of ["id", "staker", "borrower", "amount", "timestamp"]) {
      expect(Object.keys(row).includes(key)).toBe(true);
      expect(row.staker).toEqual(account);
    }
  }
});

test("@method fetchAccountTrustRelationship", async () => {
  const staker = "0x230d31eec85f4063a405b0f95bde509c0d0a8b5d";
  const borrower = "0x1c92efdb6c924cb2acf7dceec29b7abb69ab58bc";
  const results = await fetchAccountTrustRelationship(borrower, staker);
  for (const row of results) {
    for (const key of ["id", "staker", "borrower", "amount", "timestamp"]) {
      expect(Object.keys(row).includes(key)).toBe(true);
      expect(row.staker).toEqual(staker);
      expect(row.borrower).toEqual(borrower);
    }
  }
});

test("@method fetchMemberApplications", async () => {
  const results = await fetchMemberApplications();
  for (const row of results) {
    for (const key of ["id", "staker", "timestamp"]) {
      expect(Object.keys(row).includes(key)).toBe(true);
    }
  }
});

test("@method fetchBorrowers", async () => {
  const results = await fetchBorrowers();
  for (const row of results) {
    for (const key of [
      "id",
      "account",
      "totalBorrowed",
      "lastRepay",
      "timestamp",
    ]) {
      expect(Object.keys(row).includes(key)).toBe(true);
    }
  }
});

test("@method fetchDebtWriteOffs", async () => {
  const results = await fetchDebtWriteOffs();
  for (const row of results) {
    for (const key of [
      "id",
      "staker",
      "borrower",
      "amount",
      "timestamp",
    ]) {
      expect(Object.keys(row).includes(key)).toBe(true);
    }
  }
});