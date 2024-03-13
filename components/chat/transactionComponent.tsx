"use client"

//import React, { useState } from 'react';
import React from 'react';
import {
  RepositoryFactoryHttp,
  Account,
  Address,
  TransferTransaction,
  Deadline,
  PlainMessage,
  UInt64,
} from "symbol-sdk";
import { firstValueFrom } from 'rxjs';

const alicePrivateKey = process.env.NEXT_PUBLIC_ALICE_PRIVATE_KEY; 
const bobAddress = "TDEPNA5TIUEGP5NWIFO4KKCOGNYZLYOHTS7AZ5I";

const transactionComponent = () => {
  //export default function transactionComponent () {
  //const [transactionResult, setTransactionResult] = useState({ hash: '', payload: '', response: '' });

  const handleTransaction = async () => {
    try {
    const nodeUrl = "http://sym-test-01.opening-line.jp:3000";
    const repositoryFactory = new RepositoryFactoryHttp(nodeUrl);
    const epochAdjustment = await firstValueFrom(repositoryFactory.getEpochAdjustment());
    const networkType = await firstValueFrom(repositoryFactory.getNetworkType());
    const networkGenerationHash = await firstValueFrom(repositoryFactory.getGenerationHash());
    const recipientAddress = Address.createFromRawAddress(bobAddress);

    const transferTransaction = TransferTransaction.create(
      Deadline.create(epochAdjustment),
      recipientAddress,
      [],
      PlainMessage.create("This is a test message"),
      networkType,
      UInt64.fromUint(2000000)
    );
    
    if (!alicePrivateKey) {
    throw new Error('Private key (ALICE_PRIVATE_KEY) is not defined in environment variables.');
    }

    const account = Account.createFromPrivateKey(alicePrivateKey, networkType);
    const signedTransaction = account.sign(
      transferTransaction,
      networkGenerationHash
    );

    console.log(signedTransaction.hash, "hash");
    console.log("--------------------------------")
    console.log(signedTransaction.payload, "payload");
    const transactionRepository = repositoryFactory.createTransactionRepository(); // ---- ⑩
    const response = await firstValueFrom (transactionRepository.announce(signedTransaction))
    // トランザクションの結果をコンソールに出力
    console.log("Transaction response:", response);

    // 成功メッセージをフロントエンドに表示する
    alert("Transaction successful!");
    
  } catch (error) {
    // トランザクション実行中にエラーが発生した場合の処理
    console.error("Transaction error:", error);
    // エラーをフロントエンドに表示する
    alert("Transaction error: " );
  }
  };

  return (
    <div>
      <button onClick={handleTransaction}>sendToken</button>
    </div>
  );
};

export default transactionComponent;
