import React from 'react';
import './App.css';

import {
  HashRouter as Router,
  //BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { DiscordUrl, TwitterUrl, GithubUrl } from './constants';

import LGE from './routes/LGE';
import TechComingSoon from './routes/TechComingSoon';
import Overview from './routes/Overview';

function App() {
  return (
    <Router>
      <div>
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link className="text-indigo-500 inline-flex items-center" to="/">
              <img src="/protocols-32.png" alt="MultiSwap"/>
              <span className="ml-3 text-xl">MultiSwap</span>
            </Link>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link className="mr-5 hover:text-gray-900" to="/">
                Home
              </Link>
              <Link className="mr-5 hover:text-gray-900" to="/overview">
                Overview
              </Link>
              <Link className="mr-5 hover:text-gray-900" to="/lge">
                Token
              </Link>
              <Link className="mr-5 hover:text-gray-900" to="/tech">
                Tech
              </Link>
            </nav>
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              App
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 items-center justify-center flex-col">
            <div
              className="object-cover object-center rounded"
              style={{ width: "100%", height: "100%", backgroundImage: "url('banner.jpg')" }}
            >
              <div className="text-center w-full p-5">
                <h1 className="title-font sm:text-5xl text-6xl mb-4 font-medium text-white">MultiSwap</h1>
                <h2 className="mb-8 leading-relaxed text-3xl text-white">
                  Multi Collateral Liquidity, No Impermanent Loss, ..
                </h2>
              </div>
            </div>
          </div>
        </section>
        <Switch>
          <Route path="/tech">
            <TechComingSoon />
          </Route>
          <Route path="/lge">
            <LGE />
          </Route>
          <Route path="/overview">
            <Overview />
          </Route>
          <Route path="/">
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
                    Surely single sided collateral and no impermanent loss top the list. But what if we could also add
                    multiple collateral types in any combination or amount, private pools, and more ...
                  </p>
                  <p className="prose prose-lg mt-2">
                    MultiSwap is a huge breakthrough for AMM's, clearing the way for massive liquidity and multi collateral trading.
                  </p>
                  <div className="flex md:mt-4 mt-6">
                    <Link className="text-indigo-500 inline-flex items-center" to="/overview">
                      <span>Learn More</span>
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
                    To bootstrap the MultiSwap token and community, MultiSwap will have a Liquidity Generation
                    Event. This will create a liquidity pool for the MULTI token so that it can be used for governance,
                    yield farming, and other purposes.
                  </p>
                  <p className="prose prose-lg mt-2">
                    Make no mistake, MultiSwap is a powerful defi lego. It's potential impact should not be underestimated.
                  </p>
                  <div className="flex md:mt-4 mt-6">
                    <Link className="text-indigo-500 inline-flex items-center" to="/lge">
                      Details
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
                    Please join us on <a href={DiscordUrl}><span className="text-indigo-500">Discord</span></a> and help run MultiSwap. MultiSwap is controlled by the
                    community. Get involved and be a part of one of the most innovative and exciting defi projects
                    around today.
                  </p>
                  <p className="prose prose-lg mt-2">
                    <a href={DiscordUrl}><span className="text-indigo-500">Discord</span></a> is the source of truth for all things MultiSwap.
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
          </Route>
        </Switch>
        <footer className="text-gray-600 body-font">
          <div className="bg-indigo-100">
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center">
              <img className="p-1" src="/protocols-32.png" alt="MultiSwap" />
              <p className="text-gray-500 text-md text-center sm:text-left">© 2021 MultiSwap</p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center items-center sm:justify-start">
                <a className="ml-3 text-indigo-500" href={DiscordUrl}>
                  <svg
                    enable-background="new 0 0 24 24"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="currentColor">
                      <path d="m3.58 21.196h14.259l-.681-2.205c.101.088 5.842 5.009 5.842 5.009v-21.525c-.068-1.338-1.22-2.475-2.648-2.475l-16.767.003c-1.427 0-2.585 1.139-2.585 2.477v16.24c0 1.411 1.156 2.476 2.58 2.476zm10.548-15.513-.033.012.012-.012zm-7.631 1.269c1.833-1.334 3.532-1.27 3.532-1.27l.137.135c-2.243.535-3.26 1.537-3.26 1.537.104-.022 4.633-2.635 10.121.066 0 0-1.019-.937-3.124-1.537l.186-.183c.291.001 1.831.055 3.479 1.26 0 0 1.844 3.15 1.844 7.02-.061-.074-1.144 1.666-3.931 1.726 0 0-.472-.534-.808-1 1.63-.468 2.24-1.404 2.24-1.404-3.173 1.998-5.954 1.686-9.281.336-.031 0-.045-.014-.061-.03v-.006c-.016-.015-.03-.03-.061-.03h-.06c-.204-.134-.34-.2-.34-.2s.609.936 2.174 1.404c-.411.469-.818 1.002-.818 1.002-2.786-.066-3.802-1.806-3.802-1.806 0-3.876 1.833-7.02 1.833-7.02z" />
                      <path d="m14.308 12.771c.711 0 1.29-.6 1.29-1.34 0-.735-.576-1.335-1.29-1.335v.003c-.708 0-1.288.598-1.29 1.338 0 .734.579 1.334 1.29 1.334z" />
                      <path d="m9.69 12.771c.711 0 1.29-.6 1.29-1.34 0-.735-.575-1.335-1.286-1.335l-.004.003c-.711 0-1.29.598-1.29 1.338 0 .734.579 1.334 1.29 1.334z" />
                    </g>
                  </svg>{" "}
                </a>
                <a className="ml-3 text-indigo-500" href={GithubUrl}>
                  <svg
                    fill="currentColor"
                    enable-background="new 0 0 24 24"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z" />
                  </svg>
                </a>
                <a className="ml-3 text-indigo-500" href={TwitterUrl}>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
