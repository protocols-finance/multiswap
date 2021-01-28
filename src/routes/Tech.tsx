import React from 'react';
import { Link } from '../components';

const Arb = () => <i>arbitrage complete</i>

function Tech() {
  return (
    <article className="text-gray-800 body-font">
      <div className="container px-5 py-5 mx-auto flex flex-col items-center">
        <div className="prose prose-lg">
          <p>
            MultiSwap uses concepts and techniques from some existing defi protocols in a novel way to create an
            elegant and deceptively simple multi collateral AMM with many interesting properties.
          </p>
          <p>
            MultiSwap uses the well known concept of pairs of collateral, like a Uniswap pair, but with an important twist - each
            MultiSwap pair has a common token on one side of the pair. We will call this common token <b>Unit</b>. If every pair has 
            the common token on one side, then swapping between any collateral is possible by using two pairs. 
          </p>
          <p>
            <i>Unit is only used to mediate between the pairs in the pool</i>. It is not used outside of the pool, and hence does not have
            to be an ERC20 token. Since Unit is not used outside of the pool, it can be represented very efficiently in a MultiSwap pool.
          </p>
          <p>
            The concept of arbitrage is very important in the operation of MultiSwap. Arbitrage ensures that the collateral in 
            the MultiSwap pool has the correct prices as seen from an outside observer. If there is no profitable arbitrage with 
            a MultiSwap pool, then the Unit values are correct in relation to each collateral type in the pool. We will refer 
            to the condition of no profitable arbitrage using the MultiSwap pool collateral as <Arb />.
          </p>
          <h4>
            Properties of Unit
          </h4>
          <ol>
            <li>
              The amount of Unit on each side of the pairs is not relevant, and does not relate to any objective external price. As
              long as the relative values between pairs is correct, the pricing will be correct (as seen from outside the pool).
            </li>
            <li>
              The amount of Unit in each pair is changed during swaps, but the total amount of Unit is conserved during swaps. Each swap moves
              some Unit from one pair to another.
            </li>
            <li>
              <i>Arbitrage will keep the relative values of Unit on each pair correct.</i>
            </li>
            <li>
              If the MultiSwap pool is <Arb />, Unit can be used to represent the correct share of any collateral in the pool. For example, if 
              we wanted to find what share of the pool 10 ETH represented, we could use the reserves to calculate the Unit amount for 10 ETH, 
              and divide by the total Unit to get the exact share of the pool 10 ETH represents.
            </li>
            <li>
              Since Unit is not used outside of any MultiSwap pool, it can be represented as an unsigned integer total. We don't need another token. 
              Pairs in MultiSwap are very simple lightweight structs.
            </li>
          </ol>
          <h3>Deposits</h3>
          <p>
            As stated above, if the pool is <Arb />, Unit could be used to represent the share of the pool when any collateral is provided by an LP. 
            The problem is that it may not be possible to ensure this condition when collateral is deposited. (We say <b>may</b> because we are still
            researching this possibility, see the <span className="text-indigo-500">Future</span> section below.) 
          </p>
          <p>
            So here is how deposits are handled. There are two cases.
          </p>
          <h4>Initial Deposit</h4>
          <p>
            The initial deposit adds all the collateral types to the pool. The collateral and amount of Unit for each collateral type are passed 
            on the request. Note that the amount of Unit does not have to relate to the actual price, but only has to be correct in relation to the 
            other collateral types being added. However, since using an oracle price to calculate the Unit amounts for each collateral type is sufficient, 
            that is a good way to proceed. (Note that some kind of slippage parameter(s) will also be used, but we'll ignore that for now.)
          </p>
          <p>
            The reserves for each pair in the pool are initialized with the deposit information. The LP share (which we will call <b>lpUnit</b>) is calculated 
            by summing the Unit values for each collateral type.
          </p>
          <h4>Subsequent Deposits</h4>
          <p>
            For subsequent deposits, the LP requests a percentage of the current pool. (With a slippage parameter, ignored for now...) Then for each pair
            in the pool it's trivial to calculate the correct value of Unit to add to the reserves (just take the percentage). Then use the Unit amount and the reserves
            to calculate the amount of collateral to deposit for each pair.
          </p>
          <ol>
            <li>Calculate the percentage of Unit for each pair using the reserves.</li>
            <li>Using the reserves and Unit, calculate the amount of collateral to deposit for each pair.</li>
            <li>Adjust the reserve values for each pair.</li>
            <li>Transfer the collateral to the contract from the LP.</li>
            <li>Calculate the number of lpUnit tokens to mint. Just use the percentage and current lpUnit total.</li>
            <li>Mint the lpUnit tokens and transfer to LP.</li>
          </ol>
          <p>
            Note that because a deposit leaves the prices of collateral unchanged, this is economically sound. It's just like adding liquidity to
            a Uniswap pair using the current reserves in the pair.
          </p>

          <h3>Swaps</h3>
          <p>
            Swaps between any collateral types are trivial. Swap input tokens to Unit tokens using one pair, then swap the Unit tokens for the output token.
            MultiSwap uses the same constant product formula as UniSwap (for now, other options will be provided in future versions).
          </p>
          <h3>Withdrawals</h3>
          <p>
            Withdrawals use lpUnit tokens to remove liquidity. The percentage of the total liquidity in the pool is trivial to calculate given an amount of
            lpUnit tokens. Then, similar to the deposit case:
          </p>
          <ol>
            <li>Calculate the percentage of Unit for each pair using the reserves.</li>
            <li>Using the reserves and Unit, calculate the amount of collateral to withdraw for each pair.</li>
            <li>Adjust the reserve values for each pair.</li>
            <li>Transfer the collateral to the LP.</li>
            <li>Burn the lpUnit tokens.</li>
          </ol>
          <h3>Impermanent Loss Mitigation and Arbitrage</h3>
          <p>
            Since all the pairs in the pool are in the same contract, MultiSwap has some control over arbitrage. If only EOA accounts are allowed, for
            example, then if we were to supply our own arbitrage method, we could capture most of the profits and keep them in the pool. This can mitigate
            some or all impermanent loss.
          </p>
          <h3>Key Insights</h3>
          <ol>
            <li>
              Unit is only used internally to mediate the exchanges between the pairs. The amount of Unit on each pair is not relevant, only
              the relative values between the pairs has to be correct to reflect real world prices.
            </li>
            <li>
              Unit let's us use lightweight AMM pairs internally to do the swaps.
            </li>
            <li>
              Arbitrage will ensure the Unit values are correct. Hence the prices of the collateral in the pool are correct to an outside observer.
            </li>
            <li>
              If the pool is <Arb /> (meaning there is no profitable arbitrage using the pool collateral), Unit can be used to provide a relative share
              value of any of the collateral types in the pool (and as the lpUnit value).
            </li>
          </ol>
          <h3>Implementation</h3>
          <p>The implementation is extremely simple, concise, and fast. We don't use Uniswap, since our pairs can be represented as lightweight structs. The 
            current test version is only 175 lines of Solidity. Granted, it does not have all the options, but the full version is not going to be much 
            more code.
          </p>
          <p>As an example of the economy of MultiSwap, here is the <b>swap</b> method.</p>
          <div className="prose-sm">
          <pre className="whitespace-pre-wrap">{`
function swap(address tokenIn, address tokenOut, uint256 amountIn, uint256 amountOutMin) external {
  require(_isCollateralAllowed(tokenIn) && _isCollateralAllowed(tokenOut), '!allowed');
  require(_activePair(tokenIn) && _activePair(tokenOut), '!active');
  require(amountIn > 0 && amountOutMin > 0, '!amount');
  uint256 unit = _swapToUnit(pairs[tokenIn], tokenIn, amountIn);
  uint256 out = _swapFromUnit(pairs[tokenOut], unit);
  require(out >= amountOutMin, '!out');
  IERC20(tokenOut).transfer(msg.sender, out);
}

function _swapToUnit(Pair storage pair, address token, uint256 amount) internal returns(uint256 unit) {
  IERC20(token).safeTransferFrom(msg.sender, address(this), amount);
  unit = amount.mul(pair.unit).div(pair.collateral.add(amount));
  pair.unit = pair.unit.sub(unit, '!unit');
  pair.collateral = pair.collateral.add(amount);
}

function _swapFromUnit(Pair storage pair, uint256 unit) internal returns(uint256 out) {
  out = unit.mul(pair.collateral).div(pair.unit.add(unit));
  pair.unit = pair.unit.add(unit);
  pair.collateral = pair.collateral.sub(out, '!collateral');
}`}
          </pre>
          </div>
          <h3>References</h3>
          <ol>
            <li>
              <Link title="Uniswap" url="https://uniswap.org/" />
            </li>
            <li>
              <Link title="yswap.exchange" url="https://medium.com/iearn/yswap-exchange-99bf906311db" />
            </li>
            <li>
              <Link title="StableCredit" url="https://medium.com/iearn/introducing-stablecredit-a-new-protocol-for-decentralized-lending-stablecoins-and-amms-7252a43ee56" />
            </li>
            <li>
              <Link title="MultiSwap.sol" url="https://github.com/protocols-finance/multiswap-contracts/blob/master/contracts/multiswap/MultiSwap.sol" />
            </li>
          </ol>
          <p>
            Some of the ideas for Unit were hinted at in the above references from Andre Cronje. Thanks Andre, for your persistence and for 'testing in prod'.
            If you are interested in MultiSwap, contact us through Discord, Twitter, or use protocols dot finance at protonmail dot com.
          </p>
          <h3>Future</h3>
          <p>
            Areas of active research are:
          </p>
          <ol>
            <li>
              <p>
              Performing arbitrage on the pool during deposits. If we could ensure that the pool was <Arb /> at the time of deposit,
              then:
              </p>
              <ol>
                <li>Single collateral deposits would be allowed.</li>
                <li>Unit could be used as the lpUnit amount.</li>
              </ol>
            </li>
            <li>
              Using different formula for the internal AMM pairs. An obvious option would be to use the Curve formula for pools with
              tokens of similar value.
            </li>
          </ol>
        </div>
      </div>
    </article>
  );
}

export default Tech;
