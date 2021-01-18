import React from 'react';
import { DiscordUrl } from '../constants';

function Tech() {
  return (
    <article className="text-gray-800 body-font">
      <div className="container px-5 py-5 mx-auto flex flex-col items-center">
        <div className="prose prose-lg">
          <p>
            The invention of MultiSwap requires a few key insights into the way AMM's work, how they can be used more effectively, and using
            them in novel ways.
          </p>
          <p>
            However, once the key insights are understood, the implementation is fairly straightforward. Because of this, we don't want to 
            tip our hand by revealing the entire invention at this point. We are a small team, and the token and community need to be 
            bootstrapped so we can hit the ground running when MultiSwap is released.
          </p>
          <p>
            That said, we believe MultiSwap is a giant leap forward for AMM's, and will quickly become one of the standard defi legos.
          </p>
          <h4>References</h4>
          <p>Thanks to the amazing Ethereum and defi ecosystem for building the future of world finance.</p>
          <p>
            Special thanks to Andre Cronje for his groundbreaking work, perseverance, and willingness to 'test in prod'.
            Please note that Andre is not associated with MultiSwap at this time. Andre, if you are interested in MultiSwap,
            we'd love to hear from you. 
          </p>
          <h4>Team</h4>
          <p>We are a small team looking for significant partners, devs, and others, to share in the success of MultiSwap.</p>
          <p>DM @MultiSwap on <a href={DiscordUrl}><span className="text-indigo-500">Discord</span></a>, or email hello at multiswap dot finance.</p> 
        </div>
      </div>
    </article>
  );
}

export default Tech;
