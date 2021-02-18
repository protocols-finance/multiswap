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
        <h4>Collateral Price Isolation</h4>
        <p>
          In a typical AMM like Uniswap, the collapse of the price of one of the tokens causes the entire pool to be worthless. This is <b>not</b> the
          case with MultiSwap. Since each collateral type is paired with a <i>Unit</i> token, the prices between collateral tokens are not
          correlated. If the price of a token were to collapse in a MultiSwap pool, it would only effect that token and the rest of the pool
          would operate normally.
        </p>
        <p>
          There is even a way to remove a token from a pool. This option was added specifically for this case.
        </p>
        <h4>Impermanent Loss Isolation</h4>
        <p>
          In the same way that prices are isolated, impermanent loss is isolated also. If one token drops in price (for example), then 
          you will see impermanent loss on that token in relation to the Unit token, but it won't effect any of the other collateral 
          in the pool. 
        </p>
        <p>
          A good way to think about it is to picture each collateral token paired with USDC or some stable coin. As the price of the collateral 
          fluctuates, you get the impermanent loss of the collateral/USDC pair <b>only</b>.
        </p>
        <p>
          But the impermanent loss is <b>completely isolated</b> to just that pair, it does not effect any other collateral in the pool.
          This is as close to eliminating impermanent loss as you can get.
        </p>
        <h4>Impermanent Loss Mitigation</h4>
        <p>
          Another way to mitigate impermanent loss is to capture arbitrage profits. Arbitrage is always necessary to keep prices accurate. But why not keep the profits? MultiSwap pools can capture most (or all)
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
        <h4>Rug Pull Protection</h4>
        <p>
          MultiSwap is the only AMM with <b>Rug Pull Protection</b>. Due to the internal architecture of MultiSwap, it's easy to 
          provide protection against rug pulls. Rug pulls come in two varieties:
        </p>
        <ol>
          <li>
            Minting large amounts of a token suddenly, and swapping it for other collateral in the pool.
          </li>
          <li>
            Removing a large amount of liquidity suddenly.
          </li>
        </ol>
        <p>
          MultiSwap can eliminate both of these possibilities. 
        </p>
        <ol>
          <li>
            MultiSwap can monitor some aspects of the collateral in the pool (such as the totalSupply), and prevent swapping the collateral in the case of
            a large change. 
          </li>
          <li>
            MultiSwap has advanced permissions controlling access and other characteristics of the pools. If used properly, these permissions 
            can eliminate rug pulls.
          </li>
          <li>
            MultiSwap can lock liquidity in the pool as a whole, or the liquidity from a particular account. This eliminates sudden withdrawals.
          </li>
        </ol>
        <p>
          Obviously this has vast implications for liqidity mining (or yield farming) applications. If MultiSwap pools are used, 
          the worry over rug pulls can be eliminated, making it easy for new projects to gain traction and liquidity. 
        </p>
        <h4>Configurable Bonding Curves</h4>
          <p>
            Multiple Bonding Curves (or AMM formulas) will be supported to better utilize collateral.
          </p>
        <h4>Exposure is to All Collateral</h4>
        <p>
          You are not exposed to any one collateral type, but to the entire pool as a whole.
        </p>
        <h4>Private Pools - Mini DEX</h4>
        <p>
          A very large unmet need in defi is private collateral pools. Private refers to the ability to restrict access to known participants. Private pools
          have many uses. Perhaps the top use is a money management firm that requires large pools of collateral. MultiSwap pools let you easily manage
          the collateral, and make it tradeable for your customers.
        </p>
      </div>
    </div>
  </article>
);
}

export default Overview;
