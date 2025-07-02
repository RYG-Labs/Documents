/**
 * @file index.js
 * @description Demonstrates wallet connection, smart contract interaction, and transaction handling using Thirdweb.
 * @author Kan
 * @version 1.0
 * @date 2025-07-02
 */

import { NextResponse } from "next/server";
import { getContract, prepareTransaction, sendAndConfirmTransaction, toWei } from "thirdweb";
import { useConnectModal } from "thirdweb/react";

// Header for wallet connection
// Connect wallet through Thirdweb and create a smart wallet
const { connect } = useConnectModal();
const wallet = await connect({
  client: clientThirdweb,
  accountAbstraction: accountAbstraction,
  chain: seiMainnet,
});

// Header for gas transfer
// Prepare and send transaction to transfer gas to smart account
const transaction = prepareTransaction({
  to: toAccount.address,
  chain: seiMainnet,
  client: clientThirdweb,
  value: toWei(requiredAmount.toString()),
});
const txResult = await sendAndConfirmTransaction({
  transaction,
  account: fromAccount,
});

// Header for session key creation
// Create and add session key to smart contract
const smartContract = getContract({
  client: clientThirdweb,
  chain: seiMainnet,
  address: account.address as string,
});
const tx = addSessionKey({
  contract: smartContract,
  account: account,
  sessionKeyAddress: process.env.NEXT_PUBLIC_SEI_SESSION_BE || "",
  permissions: {
    approvedTargets: config.approvedTargets,
    nativeTokenLimitPerTransaction: 0.1,
    permissionStartTimestamp: new Date(),
    permissionEndTimestamp: new Date(Date.now() + 24 * 60 * 60 * 1000),
  },
});
const txResult = await sendAndConfirmTransaction({
  account: account,
  transaction: tx,
});

// Header for transaction result handling
// Check and handle transaction status
if (txResult) {
  const status = txResult.status;
  if (status === "success") {
    // toast.success("Create Session Key Success");
  } else {
    throw new Error("Create Session Key Failed");
  }
} else {
  throw new Error("Can't get transaction result");
}

// Header for API call to write contract
// Call API to write to smart contract
const resp = await fetch(
  `${NEXT_PUBLIC_ENGINE_URL}/contract/${CHAIN_ID}/${NFT_CONTRACT_ADDRESS}/write`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${NEXT_PUBLIC_THIRDWEB_ENGINE_ACCESS_TOKEN}`,
      "x-backend-wallet-address": process.env.NEXT_PUBLIC_SEI_SESSION_BE || "",
      "x-account-address": body.address,
    },
    body: JSON.stringify({
      functionName: "function plantCrop(uint256 plotId, uint256 itemId)",
      args: [
        BigInt(body.plotId).toString(),
        BigInt(body.itemId).toString(),
      ],
    }),
  }
);
if (!resp.ok) {
  const errorData = await resp.json();
  return NextResponse.json(
    {
      message: "Failed to execute transaction",
      success: false,
      error: errorData,
    },
    { status: resp.status }
  );
}
const data = await resp.json();
return NextResponse.json({
  message: "Execute successfully!",
  success: true,
  data: data,
  queueId: data.result.queueId,
});

// Header for transaction status check
// Check transaction status through API
const result = await fetch(
  `${ENGINE_URL}/transaction/status/${queueId}`,
  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${THIRDWEB_ENGINE_ACCESS_TOKEN}`,
    },
  }
);

// Header for status validation
// Validate and return transaction status
return (
  !result?.result?.status ||
  ["errored", "cancelled"].includes(result?.result?.status ?? "") ||
  ["reverted"].includes(result?.result?.onchainStatus ?? "")
);