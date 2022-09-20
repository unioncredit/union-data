# Union Data

[![npm version](https://badge.fury.io/js/@unioncredit%2Fdata.svg)](https://badge.fury.io/js/@unioncredit%2Fdata)

A javascript library for fetching data about Union from the graphQL enpoints hosting on [The Graph](https://thegraph.com/hosted-service)

## Usage

```
yarn add @unioncredit/data
```

## Test

```
yarn test
```

## Build

```
yarn build
```

## Documentation

## Functions

<dl>
<dt><a href="#fetchBorrows">fetchBorrows(orderBy, orderDirection, where)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get Accounts borrows historical data</p>
</dd>
<dt><a href="#fetchAccountBorrows">fetchAccountBorrows(account, orderBy, orderDirection)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get Account borrows historical data</p>
</dd>
<dt><a href="#fetchDeposits">fetchDeposits(orderBy, orderDirection)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get AssetManager deposits historical data</p>
</dd>
<dt><a href="#fetchMemberApplications">fetchMemberApplications(orderBy, orderDirection)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get MemberApplications historical data</p>
</dd>
<dt><a href="#fetchRepays">fetchRepays(orderBy, orderDirection, where)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get Accounts repays historical data</p>
</dd>
<dt><a href="#fetchAccountRepays">fetchAccountRepays(account, orderBy, orderDirection)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get Account repays historical data</p>
</dd>
<dt><a href="#fetchStakers">fetchStakers(orderBy, orderDirection, where)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get stakers historical data</p>
</dd>
<dt><a href="#fetchAccountStakes">fetchAccountStakes(orderBy, orderDirection)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get staker historical data for single account</p>
</dd>
<dt><a href="#fetchTrustlines">fetchTrustlines(orderBy, orderDirection, where)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get trustline historical data. when updateTrust is called on the UserManager
this trustline data is recorded</p>
</dd>
<dt><a href="#fetchCancelTrusted">fetchCancelTrusted(orderBy, orderDirection, where)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get cancel trustline historical data. when cancelVouch is called on the UserManager
this cancel trustline data is recorded</p>
</dd>
<dt><a href="#fetchAccountTrusted">fetchAccountTrusted(account, orderBy, orderDirection)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get data about accounts that are vouching for <code>account</code></p>
</dd>
<dt><a href="#fetchAccountTrusting">fetchAccountTrusting(account, orderBy, orderDirection)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get data about accounts that are being trusted by <code>account</code></p>
</dd>
<dt><a href="#fetchAccountTrustRelationship">fetchAccountTrustRelationship(borrower, staker, orderBy, orderDirection)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get data about related account <code>borrower</code> -&gt; <code>staker</code></p>
</dd>
<dt><a href="#fetchUTokenMeta">fetchUTokenMeta(orderBy, orderDirection)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get UserManager historical state</p>
</dd>
<dt><a href="#fetchUserManagerMeta">fetchUserManagerMeta(orderBy, orderDirection)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get UserManager historical data</p>
</dd>
</dl>

<a name="fetchBorrows"></a>

## fetchBorrows(orderBy, orderDirection, where) ⇒ <code>Promise</code>

Get Accounts borrows historical data

**Kind**: global function  
**Returns**: <code>Promise</code> - `{ id, account, amount, fee, timestamp }[]`

| Param          | Type                        | Description                          |
| -------------- | --------------------------- | ------------------------------------ |
| orderBy        | <code>string</code>         | Property to orderBy                  |
| orderDirection | <code>OrderDirection</code> | Order in asc or desc                 |
| where          | <code>object</code>         | Where object e.g { account: "0x00" } |

<a name="fetchAccountBorrows"></a>

## fetchAccountBorrows(account, orderBy, orderDirection) ⇒ <code>Promise</code>

Get Account borrows historical data

**Kind**: global function  
**Returns**: <code>Promise</code> - `{ id, account, amount, fee, timestamp }[]`

| Param          | Type                        | Description                               |
| -------------- | --------------------------- | ----------------------------------------- |
| account        | <code>string</code>         | Account to get borrow historical data for |
| orderBy        | <code>string</code>         | Property to orderBy                       |
| orderDirection | <code>OrderDirection</code> | Order in asc or desc                      |

<a name="fetchDeposits"></a>

## fetchDeposits(orderBy, orderDirection) ⇒ <code>Promise</code>

Get AssetManager deposits historical data

**Kind**: global function  
**Returns**: <code>Promise</code> - `{ id, token, amount, account, marketsTotalSupply }[]`

| Param          | Type                        | Description          |
| -------------- | --------------------------- | -------------------- |
| orderBy        | <code>string</code>         | Property to orderBy  |
| orderDirection | <code>OrderDirection</code> | Order in asc or desc |

<a name="fetchMemberApplications"></a>

## fetchMemberApplications(orderBy, orderDirection) ⇒ <code>Promise</code>

Get MemberApplications historical data

**Kind**: global function  
**Returns**: <code>Promise</code> - `{ id, staker, applicant, timestamp }[]`

| Param          | Type                        | Description          |
| -------------- | --------------------------- | -------------------- |
| orderBy        | <code>string</code>         | Property to orderBy  |
| orderDirection | <code>OrderDirection</code> | Order in asc or desc |

<a name="fetchRepays"></a>

## fetchRepays(orderBy, orderDirection, where) ⇒ <code>Promise</code>

Get Accounts repays historical data

**Kind**: global function  
**Returns**: <code>Promise</code> - `{ id, account, amount, fee, timestamp }[]`

| Param          | Type                        | Description                          |
| -------------- | --------------------------- | ------------------------------------ |
| orderBy        | <code>string</code>         | Property to orderBy                  |
| orderDirection | <code>OrderDirection</code> | Order in asc or desc                 |
| where          | <code>object</code>         | Where object e.g { account: "0x00" } |

<a name="fetchAccountRepays"></a>

## fetchAccountRepays(account, orderBy, orderDirection) ⇒ <code>Promise</code>

Get Account repays historical data

**Kind**: global function  
**Returns**: <code>Promise</code> - `{ id, account, amount, fee, timestamp }[]`

| Param          | Type                        | Description                              |
| -------------- | --------------------------- | ---------------------------------------- |
| account        | <code>string</code>         | Account to get repay historical data for |
| orderBy        | <code>string</code>         | Property to orderBy                      |
| orderDirection | <code>OrderDirection</code> | Order in asc or desc                     |

<a name="fetchStakers"></a>

## fetchStakers(orderBy, orderDirection, where) ⇒ <code>Promise</code>

Get stakers historical data

**Kind**: global function  
**Returns**: <code>Promise</code> - `{ id, account, totalLockedStake, totalFrozen, creditLimit, stakedAmount, timestamp }[]`

| Param          | Type                        | Description                          |
| -------------- | --------------------------- | ------------------------------------ |
| orderBy        | <code>string</code>         | Property to orderBy                  |
| orderDirection | <code>OrderDirection</code> | Order in asc or desc                 |
| where          | <code>object</code>         | Where object e.g { account: "0x00" } |

<a name="fetchAccountStakes"></a>

## fetchAccountStakes(orderBy, orderDirection) ⇒ <code>Promise</code>

Get staker historical data for single account

**Kind**: global function  
**Returns**: <code>Promise</code> - `{ id, account, totalLockedStake, totalFrozen, creditLimit, stakedAmount, timestamp }[]`

| Param          | Type                        | Description          |
| -------------- | --------------------------- | -------------------- |
| orderBy        | <code>string</code>         | Property to orderBy  |
| orderDirection | <code>OrderDirection</code> | Order in asc or desc |

<a name="fetchTrustlines"></a>

## fetchTrustlines(orderBy, orderDirection, where) ⇒ <code>Promise</code>

Get trustline historical data. when updateTrust is called on the UserManager
this trustline data is recorded

**Kind**: global function  
**Returns**: <code>Promise</code> - `{ id, staker, borrower, amount, timestamp }[]`

| Param          | Type                        | Description                           |
| -------------- | --------------------------- | ------------------------------------- |
| orderBy        | <code>string</code>         | Property to orderBy                   |
| orderDirection | <code>OrderDirection</code> | Order in asc or desc                  |
| where          | <code>object</code>         | Where object e.g `{ staker: "0x00" }` |

<a name="fetchCancelTrusted"></a>

## fetchCancelTrusted(orderBy, orderDirection, where) ⇒ <code>Promise</code>

Get cancel trustline historical data. when cancelVouch is called on the UserManager
this cancel trustline data is recorded

**Kind**: global function  
**Returns**: <code>Promise</code> - `{ id, staker, borrower, timestamp }[]`

| Param          | Type                        | Description                           |
| -------------- | --------------------------- | ------------------------------------- |
| orderBy        | <code>string</code>         | Property to orderBy                   |
| orderDirection | <code>OrderDirection</code> | Order in asc or desc                  |
| where          | <code>object</code>         | Where object e.g `{ staker: "0x00" }` |

<a name="fetchAccountTrusted"></a>

## fetchAccountTrusted(account, orderBy, orderDirection) ⇒ <code>Promise</code>

Get data about accounts that are vouching for `account`

**Kind**: global function  
**Returns**: <code>Promise</code> - `{ id, staker, borrower, amount, timestamp }[]`

| Param          | Type                        | Description          |
| -------------- | --------------------------- | -------------------- |
| account        | <code>string</code>         | Account to lookup    |
| orderBy        | <code>string</code>         | Property to orderBy  |
| orderDirection | <code>OrderDirection</code> | Order in asc or desc |

<a name="fetchAccountTrusting"></a>

## fetchAccountTrusting(account, orderBy, orderDirection) ⇒ <code>Promise</code>

Get data about accounts that are being trusted by `account`

**Kind**: global function  
**Returns**: <code>Promise</code> - `{ id, staker, borrower, amount, timestamp }[]`

| Param          | Type                        | Description          |
| -------------- | --------------------------- | -------------------- |
| account        | <code>string</code>         | Account to lookup    |
| orderBy        | <code>string</code>         | Property to orderBy  |
| orderDirection | <code>OrderDirection</code> | Order in asc or desc |

<a name="fetchAccountTrustRelationship"></a>

## fetchAccountTrustRelationship(borrower, staker, orderBy, orderDirection) ⇒ <code>Promise</code>

Get data about related account `borrower` -> `staker`

**Kind**: global function  
**Returns**: <code>Promise</code> - `{ id, staker, borrower, amount, timestamp }[]`

| Param          | Type                        | Description          |
| -------------- | --------------------------- | -------------------- |
| borrower       | <code>string</code>         | Account to lookup    |
| staker         | <code>string</code>         | Account to lookup    |
| orderBy        | <code>string</code>         | Property to orderBy  |
| orderDirection | <code>OrderDirection</code> | Order in asc or desc |

<a name="fetchUTokenMeta"></a>

## fetchUTokenMeta(orderBy, orderDirection) ⇒ <code>Promise</code>

Get UserManager historical state

**Kind**: global function  
**Returns**: <code>Promise</code> - `{ id, totalBorrows, totalSupply, totalReserves, totalRedeemable, borrowRate, supplyRate, exchangeRate, timestamp }`

| Param          | Type                        | Description          |
| -------------- | --------------------------- | -------------------- |
| orderBy        | <code>string</code>         | Property to orderBy  |
| orderDirection | <code>OrderDirection</code> | Order in asc or desc |

<a name="fetchUserManagerMeta"></a>

## fetchUserManagerMeta(orderBy, orderDirection) ⇒ <code>Promise</code>

Get UserManager historical data

**Kind**: global function  
**Returns**: <code>Promise</code> - `{ id, totalStaked, totalFrozen, timestamp }[]`

| Param          | Type                        | Description          |
| -------------- | --------------------------- | -------------------- |
| orderBy        | <code>string</code>         | Property to orderBy  |
| orderDirection | <code>OrderDirection</code> | Order in asc or desc |
