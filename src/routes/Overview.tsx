import React from 'react';

function Overview() {
  return (
    <article className="text-gray-800 body-font">
    <div className="container px-5 py-5 mx-auto flex flex-col items-center">
      <div className="prose prose-lg">
        <h3>Overview</h3>
        <p>
          If we could list the best properties a liquidity pool <i>could</i> have, what would they be?
          Surely single sided collateral and no impermanent loss comes to mind.
        </p>
        <p>
          What about multipe collateral types (theoretically unlimited) in any amounts,  and private pools?
          Wouldn't that be the most powerful AMM in existence today?
        </p>
        <p>MultiSwap does all of these things, and much more.</p>
        <h4>Pools are Multi Collateral</h4>
        <p>
          MultiSwap pools are multi collateral. Liquidity providers can provide any collateral that is accepted by the pool in any amount.
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
        <h4>Collateral can be Repurposed</h4>
        <p>
          At the same time, underutilized collateral in the pool can be repurposed. Which means more fees for LP's.
        </p>
        <h4>Arbitrage Can be Captured</h4>
        <p>
          Arbitrage is always necessary to keep prices accurate. But why not keep the profits? MultiSwap pools have this option.
        </p>
        <h4>No Impermanent Loss Pools</h4>
        <p>
          Options on MultiSwap pools can eliminate impermanent loss.
          Obviously, this is huge for many applications.
        </p>
        <h4>Deposit Any Collateral</h4>
        <p>
          With MultiSwap, LP's can deposit any collateral (configured in the pool) in any amount. Incentives are provided when 
          particular collateral is needed.
        </p>
        <p>
          You are not exposed to any one collateral type, but to the entire pool as a whole.
        </p>
      </div>
    </div>
  </article>
);
}

export default Overview;
