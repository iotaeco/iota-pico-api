[@iota-pico/api](../README.md) > [INeighbor](../interfaces/ineighbor.md)

# Interface: INeighbor

Represents the a neighbor.

*__interface__*: 

## Hierarchy

**INeighbor**

## Index

### Properties

* [address](ineighbor.md#address)
* [numberOfAllTransactions](ineighbor.md#numberofalltransactions)
* [numberOfInvalidTransactions](ineighbor.md#numberofinvalidtransactions)
* [numberOfNewTransactions](ineighbor.md#numberofnewtransactions)

---

## Properties

<a id="address"></a>

###  address

**● address**: *`string`*

*Defined in [models/INeighbor.ts:9](https://github.com/iota-pico/api/tree/master/src/models/INeighbor.ts#L9*

The address of your peer.

___
<a id="numberofalltransactions"></a>

###  numberOfAllTransactions

**● numberOfAllTransactions**: *`number`*

*Defined in [models/INeighbor.ts:13](https://github.com/iota-pico/api/tree/master/src/models/INeighbor.ts#L13*

Number of all transactions sent (invalid, valid, already-seen).

___
<a id="numberofinvalidtransactions"></a>

###  numberOfInvalidTransactions

**● numberOfInvalidTransactions**: *`number`*

*Defined in [models/INeighbor.ts:18](https://github.com/iota-pico/api/tree/master/src/models/INeighbor.ts#L18*

Invalid transactions your peer has sent you. These are transactions with invalid signatures or overall schema.

___
<a id="numberofnewtransactions"></a>

###  numberOfNewTransactions

**● numberOfNewTransactions**: *`number`*

*Defined in [models/INeighbor.ts:22](https://github.com/iota-pico/api/tree/master/src/models/INeighbor.ts#L22*

New transactions which were transmitted.

___

