import React, { useEffect, useState } from 'react';
import { useWallet } from 'use-wallet'
import { ethers, Contract, BigNumber } from 'ethers'
import { Web3Provider, JsonRpcSigner } from '@ethersproject/providers'
import web3 from 'web3'
import BN from 'bn.js'
import cogoToast from 'cogo-toast'
import addresses from '../addresses'

import MultiSwapLGE from '../contracts/LGE.json'
import MultiSwapToken from '../contracts/MultiSwapToken.json'
import MultiSwapVesting from '../contracts/MultiSwapVesting.json'

const MultiSwap = () => {
  const wallet = useWallet()
  const [amount, setAmount] = useState('');
  const [account, setAccount] = useState('');
  const [signer, setSigner] = useState<JsonRpcSigner | undefined>(undefined)
  const [provider, setProvider] = useState<Web3Provider | undefined>(undefined)
  const [lge, setLGE] = useState<Contract | undefined>(undefined)

  const fromWei = (wei: any) => web3.utils.fromWei(wei.toString())
  const fromWeiString = (v: any) => fromWei(v).toString()
  const toWei = (val: BN | string) => ethers.utils.parseUnits(val.toString(), 18) // web3.utils.toWei(val)

  useEffect(() => {
    const connected = wallet.status === 'connected'
    if (!connected || !wallet.account) { return }
    setAccount(wallet.account)
    const library = wallet.ethereum as any
    const provider = new ethers.providers.Web3Provider(library)
    setProvider(provider)
    const signer = provider.getSigner()
    setSigner(signer)
  }, [wallet.status])

  useEffect(() => {
    if (!signer) { return }
    const contract = new Contract(addresses.LGE, MultiSwapLGE.abi, signer)
    setLGE(contract)
  }, [signer])

  const fetchAmount = async () => {
    if (!lge) { return }
    try {
      const amount = await lge.registeredAirdrop(account);
      const str = fromWeiString(amount)
      setAmount(str);
    } catch (e) {
      console.log(`fetchAmount failed`, e)
    }
  }

  useEffect(() => {
    if (!lge) { return }
    fetchAmount();
  }, [lge])

  const MIN_AMOUNT = .5;
  const MAX_AMOUNT = 100;
  const checkAmount = () => {
    try {
      const n = Number(amount);
      return n < MIN_AMOUNT || n > MAX_AMOUNT;  
    } catch {
      return true;
    }
  }

  const bumpGas20 = (gas: BigNumber) => gas.mul('120').div('100')

  const getErrorMessage = (e: any) => {
    return e.data && e.data.message ? e.data.message : (e.message || '')
  }

  const toastOptions: any = { position: 'bottom-center' }
  
  const submit = async () => {
    if (!lge) return;
    if (checkAmount()) {
      cogoToast.error(`amount must be bewteen ${MIN_AMOUNT} and ${MAX_AMOUNT}`, { hideAfter: 10, position: 'bottom-center' })
    } else {
      try {
        await cogoToast.loading('Preparing airdrop whitelist add tx ...', toastOptions)
        const wei = toWei(amount)
        const gas = await lge.estimateGas.registerAirdrop(wei)
        const gasLimit = bumpGas20(gas)
        await cogoToast.loading(`Estimated gas is ${gas.toString()}, bumping to ${gasLimit.toString()}`, { hideAfter: 7, position: 'bottom-center' })
        const tx = await lge.registerAirdrop(wei, {gasLimit})
        cogoToast.loading('tx sent', toastOptions)
        await tx.wait()
        cogoToast.success('tx successful', toastOptions)
      } catch (e) {
        const msg = getErrorMessage(e)
        cogoToast.error(`tx failed: ${msg}`, { hideAfter: 10, position: 'bottom-center' })
      }
    }
  }

  return (
    <article className="text-gray-800 body-font">
      <div className="container px-5 py-5 mx-auto flex flex-col items-center">
      <div className="prose prose-lg mt-6">
          <h2>Liquidity Generation Event</h2>
          <p>
            To bootstrap the MultiSwap token and community, MultiSwap will have a Liquidity Generation Event. This will
            create a liquidity pool for the MULTI token so that it can be used for governance and trading.
          </p>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
                  <th className="px-4 py-2 bg-gray-200 ">Parameter</th>
                  <th className="px-4 py-2 ">Value</th>
                </tr>
              </thead>
              <tbody className="text-sm font-normal text-gray-700">
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                  <td className="px-4 py-4 flex items-center">Start Time</td>
                  <td className="px-4 py-4">TBD</td>
                </tr>
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                  <td className="px-4 py-4 flex items-center">End Time</td>
                  <td className="px-4 py-4">Start Time + TBD days</td>
                </tr>
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                  <td className="px-4 py-4">MULTI per ETH</td>
                  <td className="px-4 py-4">Adjusted before start to .90 USD (.60 with airdrop) per MULTI </td>
                </tr>
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                  <td className="px-4 py-4">Max Cap</td>
                  <td className="px-4 py-4">3M MULTI</td>
                </tr>
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                  <td className="px-4 py-4 flex items-center">Min Deposit (per deposit)</td>
                  <td className="px-4 py-4">.5 ETH</td>
                </tr>
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                  <td className="px-4 py-4 flex items-center">Max Deposit (per account)</td>
                  <td className="px-4 py-4">100 ETH</td>
                </tr>
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                  <td className="px-4 py-4 flex items-center">
                    General Fund (% of ETH that goes to General Fund)
                  </td>
                  <td className="px-4 py-4">20%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>
            Whitelist for the Airdrop
          </h3>
          <p>
            Add your ETH account to the airdrop whitelist to qualify for a 50% airdrop. The airdrop is to
            reward early adopters and those that participate in the MultiSwap protocol.
            To qualify, you need to:
          </p>
          <ol>
            <li>Add the amount you will contribute to the LGE.</li>
            <li>For now, 1 is all you need to do. These other steps will come once the LGE starts.</li>
            <li>When the LGE starts, contribute the specified amount of ETH (or greater).</li>
            <li>When the LGE ends, claim and stake your liquidity in the MultiSwap Staking Pool. You earn more MULTI when staking.</li>
            <li>Stake for 30 consecutive days.</li>
            <li>Claim 50% additional MULTI!</li>
          </ol>
          <h3>Join Airdrop Whitelist</h3>
          <label className="block mb-4">
            <span className="text-gray-800">{`ETH Amount (${MIN_AMOUNT} Min - ${MAX_AMOUNT} Max)`}</span>
            <input value={amount} onChange={(e) => setAmount(e.target.value) } className="form-input mt-1 block w-full border border-gray-400 rounded" placeholder="ETH Amount" />
          </label>
          <button disabled={!account} onClick={() => submit() } className="p-2 my-2 bg-blue-500 text-white rounded-md focus:outline-none focus:ring-2 ring-blue-300 ring-offset-2">Join Airdrop</button>
        </div>
      </div>
    </article>
  );
}

export default MultiSwap;
