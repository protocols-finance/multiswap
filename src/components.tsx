import React from 'react';
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
