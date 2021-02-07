import React from 'react';
import { DiscordLink } from '../components';

function Tokenomics() {
  return (
    <article className="text-gray-800 body-font">
      <div className="container px-5 py-5 mx-auto flex flex-col items-center">
        <div className="prose prose-lg">
          <h2>Token</h2>
          <p>
            The total supply of MULTI tokens is capped at 100M. This does <b>not</b> mean that this cap will ever be
            reached. It will be up to governance to decide if the distribution should end before this cap is reached.
          </p>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse w-full">
              <tbody className="text-sm font-normal text-gray-700">
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                  <td className="px-4 py-4 flex items-center">Total Supply</td>
                  <td className="px-4 py-4">100M</td>
                </tr>
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                  <td className="px-4 py-4 flex items-center">Founders Fund</td>
                  <td className="px-4 py-4">15M (15%)</td>
                </tr>
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                  <td className="px-4 py-4 flex items-center">Fundraising Fund</td>
                  <td className="px-4 py-4">5M (5%)</td>
                </tr>
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                  <td className="px-4 py-4 flex items-center">General Fund</td>
                  <td className="px-4 py-4">5M (5%)</td>
                </tr>
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                  <td className="px-4 py-4 flex items-center">Community Fund</td>
                  <td className="px-4 py-4">70M (70%)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li>
              The <b>Founders Fund</b> is under a vesting schedule.
            </li>
            <li>
              The <b>Fundraising Fund</b> is used to bootstrap the MULTI token and for fundraising rounds.
            </li>
            <li>
              The <b>General Fund</b> is used to attract and incentivize strategic partners to help grow MultiSwap.
            </li>
            <li>
              The <b>Community Fund</b> is mainly for liquidiy providers and other protocol incentives.
            </li>
          </ul>
        </div>
        <div className="prose prose-lg mt-6">
          <h2>Protocol Fees</h2>
          <p>
            There is a system wide protocol fee on swaps in all MultiSwap pools. The fee is determined by governance and
            is currently set at .040%. The fee will be disbursed through the Governance Staking Pool, where MULTI tokens
            can be staked to receive proportional fees.
          </p>
          <p>
            Note that these fees can be substantial, current Uniswap trading volume is 1B a day which is 146M a year in
            fees.
          </p>
        </div>
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
                  <td className="px-4 py-4">TBD</td>
                </tr>
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                  <td className="px-4 py-4">Max Cap</td>
                  <td className="px-4 py-4">TBD ETH</td>
                </tr>
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                  <td className="px-4 py-4 flex items-center">Min Deposit (per deposit)</td>
                  <td className="px-4 py-4">TBD ETH</td>
                </tr>
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                  <td className="px-4 py-4 flex items-center">Max Deposit (per account)</td>
                  <td className="px-4 py-4">TBD ETH</td>
                </tr>
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                  <td className="px-4 py-4 flex items-center">
                    Development Fund (% of ETH that goes to Development Fund)
                  </td>
                  <td className="px-4 py-4">10%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Tokenomics;
