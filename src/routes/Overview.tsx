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
        <h4>Capital Efficiency and Locked Liquidity</h4>
        <p>
          Perhaps the biggest drawback of AMM's is capital inefficiency. Uniswap requires large reserves in order to handle swaps without incurring
          excessive slippage. Most of the collateral is not used, but is still needed due to the mathematics of the AMM pricing formula. Capital efficiency
          can be improved to some extent (and in certain circumstances) by using different formulas for the pricing. But even the best case leaves much
          of the capital underutilized.
        </p>
        <p>
          To help solve this problem (and to prepare for future products), MultiSwap pools support locked liquidity. Any amount of liquidity can
          be locked (and unlocked) so it can be utilized for other purposes. For example, a good use of the capital would be to support derivatives based on 
          the collateral in the pool. (Note - you'll be hearing more from us in this area...)
        </p>
        <h4>IBCO, LGE, IDO, ...</h4>
        <p>
          You've probably seen the acronyms IBCO, LGE, IDO, etc. These refer to bootstrapping a token by setting up a liquidity pool so the 
          token can immediately start trading. For example, a popular setup is to have participants supply ETH, and to create a Uniswap pool with 
          ETH and the new token. This is a very effective and fast way to get a new token in circulation. 
        </p>
        <p>
          Locked liquidity is a powerful option for these cases. The liquidity provided by the participants can be locked for a period of time
          (for example), to ensure the stability of the token and to prevent dumping. Since MultiSwap locked liquidity is so flexible (you can 
          specify the amount to lock), it's very easy to design a pool that will be acceptable to both liquidity providers and the issuers of the
          token.
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
