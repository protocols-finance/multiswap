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
        <h4>Impermanent Loss Protection</h4>
        <p>
          Arbitrage is always necessary to keep prices accurate. But why not keep the profits? MultiSwap pools can capture most (or all)
          arbitrage profits, providing impermanent loss protection.
        </p>
        <h4>Collateral can be Repurposed</h4>
        <p>
          At the same time, underutilized collateral in the pool can be repurposed. Which means more fees for LP's.
        </p>
        <h4>Exposure is to All Collateral</h4>
        <p>
          You are not exposed to any one collateral type, but to the entire pool as a whole.
        </p>
      </div>
    </div>
  </article>
);
}

export default Overview;
