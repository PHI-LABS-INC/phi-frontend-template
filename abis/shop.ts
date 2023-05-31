const shopAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_freeObjectAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_premiumObjectAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wallPaperAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_basePlateAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mapAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "NotPhilandOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiverAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "buyCount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "buyValue",
        type: "uint256",
      },
    ],
    name: "LogShopBuyObject",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
    ],
    name: "ShopDepositSuccess",
    type: "event",
  },
  {
    inputs: [],
    name: "basePlateAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "freeObjectAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mapAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "premiumObjectAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256[]",
        name: "ftokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "ptokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "wtokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "btokenIds",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "depositContractAddresses",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "depositTokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "depositAmounts",
        type: "uint256[]",
      },
    ],
    name: "shopBuyAndDepositObject",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiverAddress",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ftokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "ptokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "wtokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "btokenIds",
        type: "uint256[]",
      },
    ],
    name: "shopBuyObject",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "wallPaperAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export default shopAbi;
