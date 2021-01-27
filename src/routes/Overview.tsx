import React from 'react';

function Overview() {
  return (
    <article className="text-gray-800 body-font">
    <div className="container px-5 py-5 mx-auto flex flex-col items-center">
      <div className="prose prose-lg">
        <h4>Pools are Multi Collateral</h4>
        <p>
          MultiSwap pools are multi collateral. Liquidity providers provide the collateral accepted by the pool.
          LP's are exposed to all the collateral in the pool, optimally. As the value of the collateral in the pool goes up or down, 
          the LP value tracks it. Perfectly. 
        </p>
        <h4>All Collateral can be Swapped</h4>
        <p>
          At the same time, MultiSwap pools are giant liquidity pools for trading. All of the collateral in the pools 
          can be swapped just like in any AMM. Which means trading fees for liquidity providers.
        </p>
        <h4>Liquidity Providers are King</h4>
        <p>
          LP's are the kings in MultiSwap. It is our opinion that current defi protocols don't reward
          LP's appropriately for their risk. Especially for farming apps. LP's are the ones funding the farms, and if
          the LP's aren't nimble enough, they can (and do) get burned.
        </p>
        <p>
          MultiSwap pools, because they are multi collateral, greatly reduce the risks for LP's in all cases.
        </p>
        <p>
           MultiSwap is easily the most LP friendly AMM in existence.
        </p>
        <h4>Impermanent Loss Mitigation</h4>
        <p>
          Arbitrage is always necessary to keep prices accurate. But why not keep the profits? MultiSwap pools can capture most (or all)
          arbitrage profits, providing impermanent loss mitigation.
        </p>
        <h4>Collateral can be Repurposed</h4>
        <p>
          At the same time, underutilized collateral in the pool can be repurposed. Which means more fees for LP's.
        </p>
        <h4>Exposure is to All Collateral</h4>
        <p>
          You are not exposed to any one collateral type, but to the entire pool as a whole.
        </p>
        <h4>Private Pools - Mini DEX</h4>
        <p>
          One of the nice options on MultiSwap pools is the private pool option. You can restrict access to a pool to whitelisted accounts or contracts. This
          can be very useful for money management applications.
        </p>
        <p>
          You can create a large pool of collateral and let your clients trade against it. The trading fees could even
          be set to 0 for a competitive edge. Since you control the arbitrage on the pool, this can be a very cost effective and useful service.
        </p>
      </div>
    </div>
  </article>
);
}

export default Overview;
