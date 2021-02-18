import React from 'react';
import { useWallet } from 'use-wallet'
import { DiscordUrl, TwitterUrl, PitchDeckUrl } from './constants';

interface LinkProps {
  title: string
  url?: string
}

export const PitchDeckLink = ({ title }: LinkProps) => 
  <a href={PitchDeckUrl} target="_blank" rel="noreferrer"><span className="text-indigo-500">{title}</span></a>

export const TwitterLink = ({ title }: LinkProps) => 
  <a href={TwitterUrl} target="_blank" rel="noreferrer"><span className="text-indigo-500">{title}</span></a>

export const DiscordLink = ({ title }: LinkProps) => 
  <a href={DiscordUrl} target="_blank" rel="noreferrer"><span className="text-indigo-500">{title}</span></a>

export const Link = ({ title, url }: LinkProps) => 
  <a href={url} target="_blank" rel="noreferrer"><span className="text-indigo-500">{title}</span></a>

interface MetamaskProps {
  text?: string
  width?: number
  height?: number
}

export const MetamaskButton = ({text, width, height}: MetamaskProps) => {
  const wallet = useWallet()
  const connected = wallet.status === 'connected'
  const buttonPress = () => {
    if (!connected) {
      (wallet as any).connect()
    } else {
      wallet.reset()
    }
  }
  const className = connected ? undefined : 'blur'

  const onReset = () => {
    wallet.reset()
  }

  return (
      <button onClick={() => buttonPress()}>
        <div className={`flex flex-row items-center ${className}`}>
          <div
            className="bg-center"
            onClick={() => buttonPress()}
            style={{
              color: 'white',
              width: width || 40,
              height: height || 40,
              backgroundSize: 'contain',
              backgroundImage: 'url("metamask.png")',
            }}
          >
        </div>
        {text && <div className="f4 h-color pa1 truncate w-100">{text}</div>}
      </div>
    </button>
  )
}
