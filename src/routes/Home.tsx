import React from 'react';
import { DiscordLink, TwitterLink } from '../components';
import { Link } from 'react-router-dom';
import { DiscordUrl, TwitterUrl } from '../constants';

function Home() {
  return (
    <>
      <section className="text-gray-800 body-font">
        <div className="container px-5 py-5 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            Multi Collateral Liquidity Pools
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="prose prose-lg">
              If we could list the best properties a liquidity pool <i>could</i> have, what would they be?
            </p>
            <p className="prose prose-lg mt-2">
              Surely multiple collateral types and impermanent loss mitigation top the list. But what if we could also
              add private pools, and more ...
            </p>
            <p className="prose prose-lg mt-2">
              MultiSwap is a breakthrough for AMM's, clearing the way for massive liquidity and multi collateral
              trading.
            </p>
            <div className="flex md:mt-4 mt-6">
              <Link className="text-indigo-500 inline-flex items-center" to="/overview">
                <span>Overview</span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-800 body-font">
        <div className="container px-5 py-5 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">Technical Details</h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="prose prose-lg mt-2">
              MultiSwap uses concepts and techniques from some existing protocols in a novel way to create an elegant
              and deceptively simple multi collateral AMM with many interesting properties.
            </p>
            <div className="flex md:mt-4 mt-6">
              <Link className="text-indigo-500 inline-flex items-center" to="/tech">
                <span>Technical Details</span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-800 body-font">
        <div className="container px-5 py-5 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            The Liquidity Generation Event
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="prose prose-lg">
              To bootstrap the MultiSwap token and community, MultiSwap will have a Liquidity Generation Event. This
              will create a liquidity pool for the MULTI token so that it can be used for governance, yield farming, and
              other purposes.
            </p>
            <p className="prose prose-lg mt-2">
              Make no mistake, MultiSwap is a powerful defi lego. It's potential impact should not be underestimated.
            </p>
            <div className="flex md:mt-4 mt-6">
              <Link className="text-indigo-500 inline-flex items-center" to="/lge">
                Token
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-800 body-font">
        <div className="container px-5 py-5 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            Join us on Discord
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="prose prose-lg">
              Please join us on <DiscordLink title="Discord" /> and help run MultiSwap. MultiSwap is controlled by the
              community. Get involved and be a part of one of the most innovative and exciting defi projects around
              today.
            </p>
            <p className="prose prose-lg mt-2">
              <DiscordLink title="Discord" /> is the source of truth for all things MultiSwap.
            </p>
            <div className="flex md:mt-4 mt-6">
              <a className="text-indigo-500 inline-flex items-center" href={DiscordUrl}>
                Join Discord
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-800 body-font">
        <div className="container px-5 py-5 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            Join us on Twitter
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="prose prose-lg">
              Please join us on <TwitterLink title="Twitter" /> to get the latest on MultiSwap.
            </p>
            <p className="prose prose-lg mt-2">
              <TwitterLink title="Twitter" /> has up to date news for all things MultiSwap.
            </p>
            <div className="flex md:mt-4 mt-6">
              <a className="text-indigo-500 inline-flex items-center" href={TwitterUrl}>
                Twitter
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
