//Certificate Smart Contract

// Smart Contract ABI - Application Binary Interfaces
var cert_abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Cert_Token_Id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Holder_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Dept",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Inst",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Cls",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Iss_date",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "ui_Holder_addr",
				"type": "address"
			}
		],
		"name": "issueCert",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Cert_Token_Id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Holder_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Dept",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Inst",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Cls",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Iss_date",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "ui_Holder_addr",
				"type": "address"
			}
		],
		"name": "updateCert",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Cert_Token_Id",
				"type": "uint256"
			}
		],
		"name": "retrieveCert",
		"outputs": [
			{
				"internalType": "string",
				"name": "Holder_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Dept",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Inst",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Cls",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Iss_date",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "Holder_addr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "msg",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
] 

//Smart Contract Address
	var cert_contractaddress = '0xbF6a222b7B71f4C0B107EC19058b5e99Ec9FC48a';
//Land Smart Contract

// Smart Contract ABI - Application Binary Interfaces
var land_abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "ui_Land_Type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Loc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Loc_Type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Bound_Det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Lat_Det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Long_Det",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Patta_No",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Doc_No",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "ui_Land_Owner_Adr",
				"type": "address"
			}
		],
		"name": "issueLand",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Land_Token",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Loc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Loc_Type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Bound_Det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Lat_Det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Land_Long_Det",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Patta_No",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ui_Land_Doc_No",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "ui_Land_Owner_Adr",
				"type": "address"
			}
		],
		"name": "updateLand",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "Land_Id",
				"type": "uint256"
			}
		],
		"name": "retrieveLand",
		"outputs": [
			{
				"internalType": "string",
				"name": "Land_Type",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Land_Loc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Land_Loc_Type",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Land_Size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Land_Bound_Det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Land_Lat_Det",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Land_Long_Det",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Land_Patta_No",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "Land_Doc_No",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "Land_Owner_Adr",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
//Smart Contract Address
	var land_contractaddress = '0x975fC912e7cDE4838ab229a2a44AF853652A94990';
//Collectible Smart Contract

// Smart Contract ABI - Application Binary Interfaces
var col_abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Art_Token_ID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Year",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Medium",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Art_Size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Color",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Sign",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Art_Price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Desc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Cond",
				"type": "string"
			}
		],
		"name": "registerCol",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Art_Token_ID",
				"type": "uint256"
			}
		],
		"name": "retrieveCol",
		"outputs": [
			{
				"internalType": "string",
				"name": "Art_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Art_Year",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Art_Medium",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Art_Size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Color",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Art_Sign",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "Art_Price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "Art_Desc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Art_Cond",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "ui_Art_Token_ID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Year",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Medium",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Art_Size",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Color",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Sign",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "ui_Art_Price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Desc",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ui_Art_Cond",
				"type": "string"
			}
		],
		"name": "updateCol",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
//Smart Contract Address
	var col_contractaddress = '0xe2B049611BB052f6095f215DE607f2A94FC0D14a';	
