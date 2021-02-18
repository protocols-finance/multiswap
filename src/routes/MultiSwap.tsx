import React from 'react';
import { useWallet } from 'use-wallet'
import ethers, { Contract, BigNumber } from 'ethers'
import { Web3Provider, JsonRpcSigner } from '@ethersproject/providers'
import web3 from 'web3'
import BN from 'bn.js'
import cogoToast from 'cogo-toast'
import addresses from '../addresses'

import MultiSwapLGE from '../contracts/MultiSwapLGE.json'
import MultiSwapToken from '../contracts/MultiSwapToken.json'
import MultiSwapVesting from '../contracts/MultiSwapVesting.json'

const MultiSwap = () => {

  return (
    <article className="text-gray-800 body-font">
      <div className="container px-5 py-5 mx-auto flex flex-col items-center">
        <div className="prose prose-lg">
          <h3>
            Coming Soon...
          </h3>
        </div>
      </div>
    </article>
  );
}

export default MultiSwap;
