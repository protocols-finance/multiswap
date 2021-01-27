import React from 'react';
import { DiscordLink } from '../components';

function LGE() {
  return (
    <article className="text-gray-800 body-font">
    <div className="container px-5 py-5 mx-auto flex flex-col items-center">
      <div className="prose prose-lg">
        <p>
          To bootstrap the MultiSwap token and community, MultiSwap will have a Liquidity Generation
          Event. This will create a liquidity pool for the MULTI token so that it can be used for governance,
          yield farming, and other purposes.
        </p>
        <h3>Liquidity Generation Event</h3>
        <p>
          The liqudity generation event has the following parameters:
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
                <td className="px-4 py-4 flex items-center">General Fund (% of liquidity that goes to General Fund)</td>
                <td className="px-4 py-4">10%</td>
              </tr>
              <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                <td className="px-4 py-4 flex items-center">MULTI Percentage (% of MULTI tokens minted for General Fund)</td>
                <td className="px-4 py-4">10%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Governance</h3>
        <p>
          After the LGE, future MULTI token minting will be determined
          by governenace<sup><a href='#farming'><i className="text-indigo-500">1</i></a></sup>. Details will be posted on 
          our <DiscordLink title="MultiSwap Discord" />.
        </p>
        <ol>
          <li>Except for the farming program. The specifics of the farming program will be determined by governance, but the program itself
          will always occur.</li>
        </ol>
        <h3>Token Specifics</h3>
        <p>
          The MULTI token is a standard, plain vanilla, ERC20 token with mint and burn capability. Minting and burning can only by done
          by the owner, which is a 2 day (48 hour) Timelock contract. The owner of the Timelock contract is a Gnosis Safe multisig.
        </p>
        <p>
          The General Fund is a Gnosis Safe multisig. We will add more signatories as MultiSwap is bootstrapped.
        </p>
      </div>
    </div>
  </article>
);
}

export default LGE;
