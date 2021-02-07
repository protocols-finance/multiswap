import React from "react";
import { Link } from "react-router-dom";

const TechLink = ({ title }: { title: string }) => (
  <Link className="text-indigo-500 inline-flex items-center" to="/tech">
    {title}
  </Link>
);

const OverviewLink = ({ title }: { title: string }) => (
  <Link className="text-indigo-500 inline-flex items-center" to="/overview">
    {title}
  </Link>
);

function Roadmap() {
  return (
    <article className="text-gray-800 body-font">
      <div className="container px-5 py-5 mx-auto flex flex-col items-center">
        <div className="prose prose-lg">
          <h3>Roadmap</h3>
          <p>
            MultiSwap V1 is expected to be released end of <b>Q1 2021</b> with the following features:
          </p>
          <h4>MULTI Farming</h4>
          <p>
            Public pools will include MULTI farming to incentivize LP's.
          </p>
          <h4>Protocol Level Fee</h4>
          <p>
            A protocol level swap fee will ensure MULTI stakers can derive significant income from the MultiSwap protocol.
          </p>
          <h4>Configurable AMM Formula (or Bonding Curves)</h4>
          <p>
            Multiple AMM formulas will be supported to better utilize collateral.
          </p>
          <h4>Impermanent Loss Mitigation</h4>
          <p>
            See <TechLink title="Impermanent Loss Mitigation" />.
          </p>
          <h4>Collateral Price Protection</h4>
          <p>
            See <OverviewLink title="Collateral Prices" />.
          </p>
          <h4>Rug Pull Protection for Farms, IBCO, LGE, IDO, ...</h4>
          <p>
            The bane of AMM's for yield farming and most other applications is the dreaded rug pull. <i>MultiSwap pools can eliminate Rug Pulls.</i> 
          </p>
          <p>
            See <OverviewLink title="Rug Pull Protection" /> for more information.
          </p>
          <h4>Locked Liquidity for Token Launches</h4>
          <p>
            See <OverviewLink title="Locked Liquidity" /> for more information.
          </p>
          <h4>Full Permissions on Pools</h4>
          <p>
            Not all pools are created equal. Every interaction with MultiSwap pools can be permission only. Pools can be
            highly customized for the specific usage.
          </p>
          <h4>Private Pools</h4>
          <p>
            A very large unmet need in defi is private collateral pools. Private refers to the ability to restrict
            access to known participants.
          </p>
        </div>
      </div>
    </article>
  );
}

export default Roadmap;
